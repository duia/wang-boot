package com.wpc.generator;


import com.wpc.generator.provider.db.sql.model.Sql;
import com.wpc.generator.provider.db.table.TableFactory;
import com.wpc.generator.provider.db.table.model.Table;
import com.wpc.generator.provider.java.model.JavaClass;
import com.wpc.generator.util.BeanHelper;
import com.wpc.generator.util.GLogger;
import com.wpc.generator.util.GeneratorException;
import com.wpc.generator.util.typemapping.DatabaseTypeUtils;

import java.io.*;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 
 * @author badqiu
 *
 */
public class GeneratorFacade {
	public Generator g = new Generator();
	public GeneratorFacade(){
		g.setOutRootDir(GeneratorProperties.getProperty("outRoot"));
	}
	
	public static void printAllTableNames() throws Exception {
		PrintUtils.printAllTableNames(TableFactory.getInstance().getAllTables());
	}
	
	public void deleteOutRootDir() throws IOException {
		g.deleteOutRootDir();
	}
	
	public void generateByMap(Map map,String templateRootDir) throws Exception {
		new ProcessUtils().processByMap(map, templateRootDir,false);
	}

	public void deleteByMap(Map map,String templateRootDir) throws Exception {
		new ProcessUtils().processByMap(map, templateRootDir,true);
	}
	
	public void generateByAllTable(String templateRootDir) throws Exception {
		new ProcessUtils().processByAllTable(templateRootDir,false);
	}

    public void generateByAllTable(String templateRootDir, String wildcard) throws Exception {
        new ProcessUtils().processByAllTable(templateRootDir,false, wildcard);
    }
	
	public void deleteByAllTable(String templateRootDir) throws Exception {
		new ProcessUtils().processByAllTable(templateRootDir,true);		
	}
	
    public void generateByTable(String tableName,String templateRootDir) throws Exception {
    	new ProcessUtils().processByTable(tableName,templateRootDir,false);
	}

    public void deleteByTable(String tableName,String templateRootDir) throws Exception {
    	new ProcessUtils().processByTable(tableName,templateRootDir,true);
	}
    
	public void generateByClass(Class clazz,String templateRootDir) throws Exception {
		new ProcessUtils().processByClass(clazz, templateRootDir,false);
	}

	public void deleteByClass(Class clazz,String templateRootDir) throws Exception {
		new ProcessUtils().processByClass(clazz, templateRootDir,true);
	}
	
	public void generateBySql(Sql sql, String templateRootDir) throws Exception {
		new ProcessUtils().processBySql(sql,templateRootDir,false);
	}

	public void deleteBySql(Sql sql, String templateRootDir) throws Exception {
		new ProcessUtils().processBySql(sql,templateRootDir,true);
	}
	
    private Generator getGenerator(String templateRootDir) {
        g.setTemplateRootDir(new File(templateRootDir).getAbsoluteFile());
        return g;
    }
    
    /** 生成器的上下文，存放的变量将可以在模板中引用 */
    public static class GeneratorContext {
        static ThreadLocal<Map> context = new ThreadLocal<Map>();
        public static void clear() {
            Map m = context.get();
            if(m != null) m.clear();
        }
        public static Map getContext() {
            Map map = context.get();
            if(map == null) {
                setContext(new HashMap());
            }
            return context.get();
        }
        public static void setContext(Map map) {
            context.set(map);
        }
        public static void put(String key,Object value) {
            getContext().put(key, value);
        }
    }
    
    public class ProcessUtils {
    	public void processByMap(Map params, String templateRootDir,boolean isDelete) throws Exception, FileNotFoundException {
			Generator g = getGenerator(templateRootDir);
			Generator.GeneratorModel m = GeneratorModelUtils.newFromMap(params);
			try {
				if(isDelete)
					g.deleteBy(m.templateModel, m.filePathModel);
				else
					g.generateBy(m.templateModel, m.filePathModel);
			}catch(GeneratorException ge) {
				PrintUtils.printExceptionsSumary(ge.getMessage(),getGenerator(templateRootDir).getOutRootDir(),ge.getExceptions());
			}
    	}
    	
    	public void processBySql(Sql sql, String templateRootDir, boolean isDelete) throws Exception {
    		Generator g = getGenerator(templateRootDir);
    		Generator.GeneratorModel m = GeneratorModelUtils.newFromSql(sql);
    		PrintUtils.printBeginProcess("sql:"+sql.getSourceSql(),isDelete);
    		try {
    			if(isDelete) {
    				g.deleteBy(m.templateModel, m.filePathModel);
    			}else {
    				g.generateBy(m.templateModel, m.filePathModel);
    			}
    		}catch(GeneratorException ge) {
    			PrintUtils.printExceptionsSumary(ge.getMessage(),getGenerator(templateRootDir).getOutRootDir(),ge.getExceptions());
    		}
    	}   
    	
    	public void processByClass(Class clazz, String templateRootDir,boolean isDelete) throws Exception, FileNotFoundException {
			Generator g = getGenerator(templateRootDir);
			Generator.GeneratorModel m = GeneratorModelUtils.newFromClass(clazz);
			PrintUtils.printBeginProcess("JavaClass:"+clazz.getSimpleName(),isDelete);
			try {
				if(isDelete)
					g.deleteBy(m.templateModel, m.filePathModel);
				else
					g.generateBy(m.templateModel, m.filePathModel);
			}catch(GeneratorException ge) {
				PrintUtils.printExceptionsSumary(ge.getMessage(),getGenerator(templateRootDir).getOutRootDir(),ge.getExceptions());
			}
    	}
    	
        public void processByTable(String tableName,String templateRootDir,boolean isDelete) throws Exception {
        	if("*".equals(tableName)) {
        		generateByAllTable(templateRootDir);
        		return;
        	} else if(null != tableName && tableName.contains("*")) {
                generateByAllTable(templateRootDir, tableName);
                return;
            }
    		Generator g = getGenerator(templateRootDir);
    		Table table = TableFactory.getInstance().getTable(tableName);
    		try {
    			processByTable(g,table,isDelete);
    		}catch(GeneratorException ge) {
    			PrintUtils.printExceptionsSumary(ge.getMessage(),getGenerator(templateRootDir).getOutRootDir(),ge.getExceptions());
    		}
    	}    
        
		public void processByAllTable(String templateRootDir,boolean isDelete) throws Exception {
			List<Table> tables = TableFactory.getInstance().getAllTables();
			List exceptions = new ArrayList();
			for(int i = 0; i < tables.size(); i++ ) {
				try {
					processByTable(getGenerator(templateRootDir),tables.get(i),isDelete);
				}catch(GeneratorException ge) {
					exceptions.addAll(ge.getExceptions());
				}
			}
			PrintUtils.printExceptionsSumary("",getGenerator(templateRootDir).getOutRootDir(),exceptions);
		}
        //
        public void processByAllTable(String templateRootDir,boolean isDelete, String wildcard) throws Exception {
            List<Table> tables = TableFactory.getInstance().getAllTables();
            List exceptions = new ArrayList();
            for(int i = 0; i < tables.size(); i++ ) {
                try {
                    Table table = tables.get(i);
                    String sqlName = table.getSqlName();
                    if(null != sqlName && matchWildCard(sqlName, wildcard)){
                        processByTable(getGenerator(templateRootDir),table,isDelete);
                    } else {
                        GLogger.println("wildcard[" + wildcard + "] Not match: " + sqlName);
                    }
                }catch(GeneratorException ge) {
                    exceptions.addAll(ge.getExceptions());
                }
            }
            PrintUtils.printExceptionsSumary("",getGenerator(templateRootDir).getOutRootDir(),exceptions);
        }
        // 是否匹配通配符
        private boolean matchWildCard(String sqlName, String wildcard){
            Pattern regex = Pattern.compile("[^*]+|(\\*)");
            Matcher m = regex.matcher(wildcard);
            StringBuffer b= new StringBuffer();
            while (m.find()) {
                if(m.group(1) != null) m.appendReplacement(b, ".*");
                else m.appendReplacement(b, "\\\\Q" + m.group(0) + "\\\\E");
            }
            m.appendTail(b);
            String targetRegexStr = b.toString();
            // 使用 replaced
            return sqlName.matches(targetRegexStr);
        }
		
		public void processByTable(Generator g, Table table,boolean isDelete) throws Exception {
            // renfufei
            // 屏蔽符合某些规则的表名
            // 不在底层进行拦截
            //
            String sqlName = table.getSqlName();
            String prefixs = GeneratorProperties.getProperty("skipTablePrefixes", "");
            for(String prefix : prefixs.split(",")) {
                if(null != prefix && !prefix.trim().isEmpty() && sqlName.startsWith(prefix)) {
                    GLogger.println("[skip]		matches prefix: " + prefix + "; skipTable: " + sqlName);
                    return ;
                }
            }
            //
	        Generator.GeneratorModel m = GeneratorModelUtils.newFromTable(table);
	        PrintUtils.printBeginProcess(table.getSqlName()+" => "+table.getClassName(),isDelete);
	        if(isDelete)
	        	g.deleteBy(m.templateModel,m.filePathModel);
	        else 
	        	g.generateBy(m.templateModel,m.filePathModel);
	    }        
    }
	
    @SuppressWarnings("all")
	public static class GeneratorModelUtils {
		
		public static Generator.GeneratorModel newFromTable(Table table) {
			Map templateModel = new HashMap();
			templateModel.put("table", table);
			setShareVars(templateModel);
			
			Map filePathModel = new HashMap();
			setShareVars(filePathModel);
			filePathModel.putAll(BeanHelper.describe(table));
			return new Generator.GeneratorModel(templateModel,filePathModel);
		}

		public static Generator.GeneratorModel newFromSql(Sql sql) throws Exception {
			Map templateModel = new HashMap();
			templateModel.put("sql", sql);
			setShareVars(templateModel);
			
			Map filePathModel = new HashMap();
			setShareVars(filePathModel);
			filePathModel.putAll(BeanHelper.describe(sql));
			return new Generator.GeneratorModel(templateModel,filePathModel);
		}

		public static Generator.GeneratorModel newFromClass(Class clazz) {
			Map templateModel = new HashMap();
			templateModel.put("clazz", new JavaClass(clazz));
			setShareVars(templateModel);
			
			Map filePathModel = new HashMap();
			setShareVars(filePathModel);
			filePathModel.putAll(BeanHelper.describe(new JavaClass(clazz)));
			return new Generator.GeneratorModel(templateModel,filePathModel);
		}
		
		public static Generator.GeneratorModel newFromMap(Map params) {
			Map templateModel = new HashMap();
			templateModel.putAll(params);
			setShareVars(templateModel);
			
			Map filePathModel = new HashMap();
			setShareVars(filePathModel);
			filePathModel.putAll(params);
			return new Generator.GeneratorModel(templateModel,filePathModel);
		}
		
		public static void setShareVars(Map templateModel) {
			templateModel.putAll(GeneratorProperties.getProperties());
			templateModel.putAll(System.getProperties());
			templateModel.put("env", System.getenv());
			templateModel.put("now", new Date());
			templateModel.put("databaseType", getDatabaseType("databaseType"));
			templateModel.putAll(GeneratorContext.getContext());
		}

		private static String getDatabaseType(String key) {
			return GeneratorProperties.getProperty(key, DatabaseTypeUtils.getDatabaseTypeByJdbcDriver(GeneratorProperties.getProperty("jdbc.driver")));
		}

	}
	
	private static class PrintUtils {
		
		private static void printExceptionsSumary(String msg,String outRoot,List<Exception> exceptions) throws FileNotFoundException {
			File errorFile = new File(outRoot,"generator_error.log");
			if(exceptions != null && exceptions.size() > 0) {
				System.err.println("[Generate Error Summary] : "+msg);
				PrintStream output = new PrintStream(new FileOutputStream(errorFile));
				for(int i = 0; i < exceptions.size(); i++) {
					Exception e = exceptions.get(i);
                    System.err.println("[GENERATE ERROR]:"+e);
					if(i == 0) e.printStackTrace();
					e.printStackTrace(output);
				}
				output.close();
				System.err.println("***************************************************************");
				System.err.println("* "+"* 输出目录已经生成generator_error.log用于查看错误 ");
				System.err.println("***************************************************************");
			}
		}
		
		private static void printBeginProcess(String displayText,boolean isDatele) {
			GLogger.println("***************************************************************");
			GLogger.println("* BEGIN " + (isDatele ? " delete by " : " generate by ")+ displayText);
			GLogger.println("***************************************************************");
		}
		
		public static void printAllTableNames(List<Table> tables) throws Exception {
			GLogger.println("\n----All TableNames BEGIN----");
			for(int i = 0; i < tables.size(); i++ ) {
				String sqlName = ((Table)tables.get(i)).getSqlName();
				GLogger.println("g.generateTable(\""+sqlName+"\");");
			}
			GLogger.println("----All TableNames END----");
		}
	}

}

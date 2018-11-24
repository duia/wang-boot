package ${basepackage}.common.base.service.impl;

import java.util.List;

import ${basepackage}.common.base.dao.BaseDao;
import ${basepackage}.common.base.entity.BaseEntity;
import ${basepackage}.common.base.service.BaseService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import ${basepackage}.common.datatables.DataTablesRequest;
import ${basepackage}.common.datatables.DataTablesResponse;

/**
 * 功能描述: service层接口实现类的基础类，封装了一些基本的方法的实现
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public abstract class BaseServiceImpl<T extends BaseEntity<T>> implements BaseService<T>{

    /**
     * 日志对象
     */
    protected Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    protected BaseDao<T> baseDao;

    @Override
    public void save(T t) {
        t.preInsert();
        this.baseDao.save(t);
    }

    @Override
    public void delete(Long id) {
    	this.baseDao.delete(id);
    }
    
    @Override
    public void deleteByIds(Long[] ids) {
    	this.baseDao.deleteByIds(ids);
    }

    @Override
    public void update(T t) {
        t.preUpdate();
        this.baseDao.update(t);
    }

    @Override
    public T findById(Long id) {
        return baseDao.findById(id);
    }

    @Override
    public List<T> queryAll() {
        return this.baseDao.search(null);
    }
    
    @Override
    public List<T> search(T query) {
        return this.baseDao.search(query);
    }
    
    @Override
    public List<T> query(T query) {
        return this.baseDao.query(query);
    }
    
    @Override
	public DataTablesResponse<T> searchPage(DataTablesRequest query) {
		// TODO Auto-generated method stub
		query.setOrder();
		DataTablesResponse<T> dtr = new DataTablesResponse<T>();
		dtr.setDraw(query.getDraw());
		dtr.setData(this.baseDao.searchPage(query));
		dtr.setRecordsFiltered(this.baseDao.countPage(query));
		query.setCondition(null);
		dtr.setRecordsTotal(this.baseDao.countPage(query));
		return dtr;
	}

    @Override
    public Integer count() {
        return this.baseDao.count();
    }

    @Override
    public Integer count(T t) {
        return this.baseDao.count(t);
    }

}

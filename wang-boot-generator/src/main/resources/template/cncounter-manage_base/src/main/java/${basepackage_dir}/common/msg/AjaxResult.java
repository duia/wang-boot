package ${basepackage}.common.msg;

import java.io.Serializable;

/**
 * 功能描述: 前台返回为Json时使用的模型类
 * @Author: 王鹏程
 * @E-mail: wpcfree@qq.com @QQ: 376205421
 * @Blog: http://www.wpcfree.com
 * @Date:
 */
public class AjaxResult implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1792459185422808619L;
	
	public static final Integer AJAX_STATUS_CODE_SUCCESS = 200;
	public static final Integer AJAX_STATUS_CODE_WARN = 300;
	public static final Integer AJAX_STATUS_CODE_ERROR = 500;
	
    private Integer code;//默认返回消息码
    private String msg;//默认返回消息
    private Object result; //返回的集合数据
    
    public AjaxResult() {
		super();
	}

	public static AjaxResult success(){
		AjaxResult ajaxResult = new AjaxResult();
		ajaxResult.setCode(AjaxResult.AJAX_STATUS_CODE_SUCCESS);
		ajaxResult.setMsg("操作成功");
		ajaxResult.setResult(null);
		return ajaxResult;
    }
	
	public static AjaxResult warn(){
		AjaxResult ajaxResult = new AjaxResult();
		ajaxResult.setCode(AjaxResult.AJAX_STATUS_CODE_WARN);
		ajaxResult.setMsg("操作警告");
		ajaxResult.setResult(null);
		return ajaxResult;
    }
	
	public static AjaxResult error(){
		AjaxResult ajaxResult = new AjaxResult();
		ajaxResult.setCode(AjaxResult.AJAX_STATUS_CODE_ERROR);
		ajaxResult.setMsg("操作失败");
		ajaxResult.setResult(null);
		return ajaxResult;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public Object getResult() {
        return result;
    }

    public void setResult(Object result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return "ResponseJsonModel{" +
                "msg='" + msg + '\'' +
                ", code='" + code + '\'' +
                ", result=" + result +
                '}';
    }
}

package com.wpc.common.bean;

import java.io.Serializable;
import java.util.HashMap;
import java.util.Map;

/**
 * 前台返回为Json时使用的模型类
 */
public class ResponseResult implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -1792459185422808619L;
	
	public static final Integer AJAX_STATUS_CODE_SUCCESS = 200;
    public static final Integer AJAX_STATUS_CODE_ERROR = 500;
    public static final Integer AJAX_STATUS_CODE_WARN = 300;

    public static final Integer SIGN_WARN = 301;
    public static final Integer PARAME_WARN = 302;
    public static final Integer NOEXIST_WARN = 303;
    public static final Integer RESOURCE_WARN = 304;
    public static final Integer RESUBMIT_WARN = 305;

    public static final Integer TITLE_WARN = 310;

    public static final Integer PARAME_WRONG = 501;

    public static final Integer NOUSER_WARN = 510;

    private Integer code;//默认返回消息码
    private String msg;//默认返回消息
    private Object result; //返回的集合数据

    private static Map<Integer, String> msgMap = new HashMap<>();

    {
        msgMap.put(SIGN_WARN, "签名参数错误");
        msgMap.put(PARAME_WARN, "参数缺失或异常");
        msgMap.put(NOEXIST_WARN, "记录不存在");
        msgMap.put(RESOURCE_WARN, "资源不存在或不可用");
        msgMap.put(RESUBMIT_WARN, "不可重复提交");

        msgMap.put(TITLE_WARN, "试题参数异常");

        msgMap.put(PARAME_WRONG, "参数类型不存在");

        msgMap.put(NOUSER_WARN, "未找到用户");
    }
    
    public ResponseResult() {
		super();
	}

	public static ResponseResult success(){
		ResponseResult ajaxResult = new ResponseResult();
		ajaxResult.setCode(ResponseResult.AJAX_STATUS_CODE_SUCCESS);
		ajaxResult.setMsg("请求成功");
		ajaxResult.setResult(null);
		return ajaxResult;
    }

    public static ResponseResult success(Object object){
        ResponseResult ajaxResult = new ResponseResult();
        ajaxResult.setCode(ResponseResult.AJAX_STATUS_CODE_SUCCESS);
        ajaxResult.setMsg("请求成功");
        ajaxResult.setResult(object);
        return ajaxResult;
    }
	
	public static ResponseResult warn(){
		ResponseResult ajaxResult = new ResponseResult();
		ajaxResult.setCode(ResponseResult.AJAX_STATUS_CODE_WARN);
		ajaxResult.setMsg("请求警告");
		ajaxResult.setResult(null);
		return ajaxResult;
    }

    public static ResponseResult code(Integer code){
        ResponseResult ajaxResult = new ResponseResult();
        ajaxResult.setCode(code);
        ajaxResult.setMsg(msgMap.get(code));
        ajaxResult.setResult(null);
        return ajaxResult;
    }

    public static ResponseResult warn(String errorMsg){
        ResponseResult ajaxResult = new ResponseResult();
        ajaxResult.setCode(ResponseResult.AJAX_STATUS_CODE_WARN);
        ajaxResult.setMsg(errorMsg);
        ajaxResult.setResult(null);
        return ajaxResult;
    }
	
	public static ResponseResult error(){
		ResponseResult ajaxResult = new ResponseResult();
		ajaxResult.setCode(ResponseResult.AJAX_STATUS_CODE_ERROR);
		ajaxResult.setMsg("请求失败");
		ajaxResult.setResult(null);
		return ajaxResult;
    }

    public static ResponseResult errorByMsg(String msg){
        ResponseResult ajaxResult = new ResponseResult();
        ajaxResult.setCode(ResponseResult.AJAX_STATUS_CODE_ERROR);
        ajaxResult.setMsg(msg);
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

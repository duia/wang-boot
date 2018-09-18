var infoVerify = (function(window, $, bd){

	var SUCCESS = 200,
		ERROR = 500;
	
	window.verIfy = function(data){
		if(typeof(data.code) != "undefined" && data.code == ERROR){
			bd.show({
	            title: '异常信息',
	            message: data.msg
	        });
			return false;
		}else{
			return true;
		}
	};
	
})(window, jQuery, BootstrapDialog);
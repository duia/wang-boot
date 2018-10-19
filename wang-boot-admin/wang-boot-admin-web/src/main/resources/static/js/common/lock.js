(function ($, window) {
    var isAlert = true;
    var locksUrl = '/locks/';
	var create = function (key, fun) {
	    if (!key) return;
		$.ajax({
            url: locksUrl + key,
            type: 'POST',
            dataType: 'json',
            async: false,
            success: function (result) {
				if (result.status === 'OK') {
                    isAlert && alert("页面锁定成功");
                    isAlert = false;
                } else {
                    alert("页面已被锁定");
                    if (fun) {
                        setTimeout(function () {
                            fun();
                        }, 3000)
                    } else {
                        throw new Error('页面已被锁定，请退出页面');
                    }
                }
            }
        });
    }
    var release = function (key) {
        if (!key) return;
        $.ajax({
            url: locksUrl + key,
            type: 'DELETE',
            dataType: 'json',
            success: function (result) {
                if (result.status === 'OK') {
                    alert("页面解锁成功");
                } else {
                    alert("页面锁已失效");
                }
            }
        });
    }
    var refresh = function (key, fun) {
        if (!key) return;
        $.ajax({
            url: locksUrl + key,
            type: 'PUT',
            dataType: 'json',
            async: false,
            success: function (result) {
                if (result.status !== 'OK') {//锁失效重新加锁
                    create(key, fun);
                } else {
                    // console.log(result.lock)
                }
            }
        });
    }

    var alert = function(msg) {
        layer ? layer.msg(msg, {closeBtn: 1}) : window.alert(msg);
    }

    $.lock = {
        init: function(key, fun) {
            refresh(key, fun)
        },
        destroy: function(key) {
            release(key)
        }
    }
})(jQuery, window);
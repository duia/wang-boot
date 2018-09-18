<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="../common/include/head.jsp"/>
<link rel="stylesheet" href="/static/plugins/jquery-file-upload/css/jquery.fileupload.css" />
<link rel="stylesheet" href="/static/plugins/plupload-2.3.1/js/jquery.plupload.queue/css/jquery.plupload.queue.css" />
<style type="text/css">
    .bar {
        height: 18px;
        background: green;
    }
</style>
<body>

    <form name="serForm" action="/upload/fileUpload" method="post"  enctype="multipart/form-data">
        <h3>上传文件</h3>
        <input type="file" name="file1">
        <input type="file" name="file2">
        <input type="submit" value="upload"/>
    </form>
    <br>
    <h3>jquery-file-upload</h3>
    <input id="fileupload" type="file" name="files[]" data-url="/upload/fileUpload" multiple>
    <div id="progress">
        <div class="bar" style="width: 0%;"></div>
    </div>

    <br>
    <h3>plupload</h3>
    <div id="uploader">
        <p>Your browser doesn't have Flash, Silverlight or HTML5 support.</p>
    </div>
    <button id="toStop">暂停一下</button>
    <button id="toStart">再次开始</button>

    <br>
    <h3>plupload</h3>
    <div id="filelist">

    </div>
    <button id="uploader2">选择文件</button>
    <div id="progress2"></div>
    <div id="result"></div>
<jsp:include page="../common/include/foot.jsp"/>
<script src="/static/plugins/jquery-file-upload/js/vendor/jquery.ui.widget.js"></script>
<script src="/static/plugins/jquery-file-upload/js/jquery.iframe-transport.js"></script>
<script src="/static/plugins/jquery-file-upload/js/jquery.fileupload.js"></script>
<script src="/static/plugins/plupload-2.3.1/js/plupload.full.min.js"></script>
<script src="/static/plugins/plupload-2.3.1/js/jquery.plupload.queue/jquery.plupload.queue.js"></script>
<script src="/static/plugins/plupload-2.3.1/js/i18n/zh_CN.js"></script>
<script>
    $(function () {
        $('#fileupload').fileupload({
            dataType: 'json',
            singleFileUploads: false,
            maxChunkSize: 1000000,
            add: function (e, data) {
                data.submit();
            },
            progressall: function (e, data) {
                var progress = parseInt(data.loaded / data.total * 100, 10);
                $('#progress .bar').css(
                    'width',
                    progress + '%'
                );
            },
            done: function (e, data) {
                console.log(data)
                $.each(data.files, function (index, file) {
                    $('<p/>').text(file.name).appendTo('#content');
                });
            }
        });

        // Initialize the widget when the DOM is ready
        var uploader1 = $("#uploader").pluploadQueue({
            // General settings
            runtimes: 'html5,flash,silverlight,html4',
            url: "/upload/fileUpload2",

            // Maximum file size
            max_file_size: '10000mb',

            chunk_size: '1mb',

            // Resize images on clientside if we can
            resize: {
                width: 200,
                height: 200,
                quality: 90,
                crop: true // crop to exact dimensions
            },

            // Specify what files to browse for
            filters: [
                {title: "Image files", extensions: "jpg,gif,png"},
                {title: "Vedio files", extensions: "mp4,mkv"},
                {title: "音乐", extensions: "mp3,ogg"},
                {title: "Zip files", extensions: "zip,avi"}
            ],

            // Rename files by clicking on their titles
            rename: true,

            // Sort files
            sortable: true,

            // Enable ability to drag'n'drop files onto the widget (currently only HTML5 supports that)
            dragdrop: true,

            // Views to activate
            views: {
                list: true,
                thumbs: true, // Show thumbs
                active: 'thumbs'
            },

            // Flash settings
            flash_swf_url: '/static/plugins/plupload-2.3.1/js/Moxie.swf',

            // Silverlight settings
            silverlight_xap_url: '/static/plugins/plupload-2.3.1/js/Moxie.xap'
        });

        $("#toStop").on('click', function () {
            uploader1.stop();
        });

        $("#toStart").on('click', function () {
            uploader1.start();
        });

        var uploader2 = new plupload.Uploader({
            runtimes : 'html5,flash,silverlight',//设置运行环境，会按设置的顺序，可以选择的值有html5,gears,flash,silverlight,browserplus,html
            flash_swf_url : '/static/plugins/plupload-2.3.1/js/Moxie.swf',
            silverlight_xap_url : '/static/plugins/plupload-2.3.1/js/Moxie.xap',
            url : '/upload/fileUpload2',//上传文件路径
            max_file_size : '3gb',//100b, 10kb, 10mb, 1gb
            chunk_size : '1mb',//分块大小，小于这个大小的不分块
            unique_names : true,//生成唯一文件名
            browse_button : 'uploader2',
            filters : [ {
                title : 'Image files',
                extensions : 'jpg,gif,png'
            }, {
                title : 'Zip files',
                extensions : 'zip,7z,rar'
            }, {
                title : 'Mp3',
                extensions : 'mp3,ogg'
            } ],

            init : {
                FilesAdded: function(up, files) {
                    uploader2.start();
                    return false;
                },
                FileUploaded : function(up, file, info) {//文件上传完毕触发
                    console.log("单独文件上传完毕");
                    var response = $.parseJSON(info.response);
                    if (response.status) {
                        $('#result2').append( $('<div> "文件路径是："' + response.fileUrl + '"随机的文件名字为："' + file.name + '</div>') );
                    }
                },
                UploadComplete : function( uploader,files ) {
                    console.log("所有文件上传完毕");
                },
                UploadProgress : function( uploader,file ) {
                    $("#progress2").html("上传进度为：" + file.percent + "%");
                    console.log( file.percent );
                }
            }
        });

        uploader2.init();
    });
</script>
</body>
</html>	
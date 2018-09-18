/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';

	config.image_previewText = ''; //清空预览区域显示内容

    config.filebrowserImageUploadUrl = "/upload/springUpload";//设置提交上传图片按钮处
    config.toolbar = [[ 'Bold', 'Italic', 'Underline','Image', 'Table', 'ckeditor_wiris_formulaEditor', 'ckeditor_wiris_formulaEditorChemistry', 'jme' ]];

    config.extraPlugins += (config.extraPlugins.length == 0 ? '' : ',') + 'ckeditor_wiris,jme';

    // config.toolbar_Full.push({name:'wiris', items:['ckeditor_wiris_formulaEditor', 'ckeditor_wiris_formulaEditorChemistry']});

    config.allowedContent = true;
    config.height = '250px';
};

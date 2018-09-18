CKEDITOR.plugins.add( 'jme', {
    icons: 'jme',
    init: function( editor ) {
        // Plugin logic goes here...
        editor.addCommand( 'jmeDialog', new CKEDITOR.dialogCommand( 'jmeDialog' ) );
        editor.ui.addButton( 'jme', {
				    label: 'JMEditor',
				    command: 'jmeDialog',
				    toolbar: 'insert',
                    icon: this.path + "icons/formula.png"//在toolbar中的图标
				});
				CKEDITOR.dialog.add( 'jmeDialog', this.path + 'dialogs/jme.js' );
				
    }
});

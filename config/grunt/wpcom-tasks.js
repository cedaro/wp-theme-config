module.exports = function( grunt, options ) {
    var theme = {
        autoprefixer: {
            src: [
                '<%= paths.wpcom %>/style.css'
            ]
        },
        cssjanus: {
            files: [
                {
                    src: '<%= paths.wpcom %>/style.css',
                    dest: '<%= paths.wpcom %>/style-rtl.css',
                }
            ]
        },
        less: {
            files: [
                {
                    src: '<%= paths.less %>/wpcom.less',
                    dest: '<%= paths.wpcom %>/style.css'
                }
            ]
        },
        pixrem: {
            files: [
                {
                    src: '<%= paths.wpcom %>/style.css',
                    dest: '<%= paths.wpcom %>/style.css'
                }
            ]
        },
        wpcss: {
            files: [
                {
                    src: '<%= paths.wpcom %>/style.css',
                    dest: '<%= paths.wpcom %>/style.css'
                }
            ]
        }
    };

    if ( grunt.file.exists( options.paths.less + '/editor-style.less' ) ) {
        theme.autoprefixer.src.push( '<%= paths.wpcom %>/assets/css/editor-style.css' );

        theme.cssjanus.files.push({
            src: '<%= paths.wpcom %>/assets/css/editor-style.css',
            dest: '<%= paths.wpcom %>/assets/css/editor-style-rtl.css'
        });

        theme.less.files.push({
            src: '<%= paths.less %>/editor-style.less',
            dest: '<%= paths.wpcom %>/assets/css/editor-style.css'
        });

        theme.pixrem.files.push({
            src: '<%= paths.wpcom %>/assets/css/editor-style.css',
            dest: '<%= paths.wpcom %>/assets/css/editor-style.css'
        });

        theme.wpcss.files.push({
            src: '<%= paths.wpcom %>/assets/css/editor-style.css',
            dest: '<%= paths.wpcom %>/assets/css/editor-style.css'
        });
    }

    if ( grunt.file.exists( options.paths.assets + '/fonts/genericons-regular-webfont.svg' ) ) {
        theme.lineending.files = {
            '': '<%= paths.wpcom %>/assets/fonts/genericons-regular-webfont.svg'
        }
    }

    return theme;
};

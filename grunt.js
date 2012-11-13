/*global module:false*/

module.exports = function(grunt) {
	// load any module dependcies
	grunt.loadNpmTasks('grunt-css');

	// Project configuration.
	grunt.initConfig({
		meta: {
			name: 'HTML/CSS/JS Template',
			js_version: '0.4',
			js_banner: '/**\n' +
				'* <%= meta.name %>\n' +
				'*\n' +
				'* @version	<%= meta.js_version %>\n' +
				'* @author	Jasal Vadgama - http://blacklabelcreative.com/\n' +
				'* @require	jQuery 1.8.0\n' +
				'*			Hammer.js\n' +
				'* @license	MIT\n' +
				'**/\n',
			css_version: '0.4',
			css_banner: '/**\n' +
				'* <%= meta.name %>\n' +
				'*\n' +
				'* @version	<%= meta.css_version %>\n' +
				'* @author	Jasal Vadgama - http://blacklabelcreative.com/\n' +
				'* @license	MIT\n' +
				'**/\n'
		},
		lint: {
			files: ['grunt.js', 'assets/js/script.js']
		},
		qunit: {
			files: ['test/**/*.html']
		},
		concat: {
			libs: {
				src: [
					'assets/js/libs/jquery/jquery-1.8.0.min.js',
					'assets/js/libs/touch/ios-orientationchange-fix.js',
					'assets/js/libs/touch/hammer.js',
					'assets/js/libs/touch/jquery.hammer.js'
				],
				dest: 'dist/assets/js/libs.js'
			}
		},
		min: {
			libs: {
				src: ['<config:concat.libs.dest>'],
				dest: 'dist/assets/js/libs.min.js'
			},
			custom: {
				src: ['<banner:meta.js_banner>', 'assets/js/script.js'],
				dest: 'dist/assets/js/script.min.js'
			}
		},
		cssmin: {
			reset: {
				src: ['<banner:meta.css_banner>', 'assets/css/reset.css'],
				dest: 'dist/assets/css/reset.min.css'
			},
			style: {
				src: ['<banner:meta.css_banner>', 'assets/css/style.css'],
				dest: 'dist/assets/css/style.min.css'
			},
			style_small: {
				src: ['<banner:meta.css_banner>', 'assets/css/style_small.css'],
				dest: 'dist/assets/css/style_small.min.css'
			},
			style_medium: {
				src: ['<banner:meta.css_banner>', 'assets/css/style_medium.css'],
				dest: 'dist/assets/css/style_medium.min.css'
			},
			style_large: {
				src: ['<banner:meta.css_banner>', 'assets/css/style_large.css'],
				dest: 'dist/assets/css/style_large.min.css'
			}
		},
		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			},
			globals: {
				jQuery: true
			}
		},
		uglify: {}
	});

	// Default task.
	//grunt.registerTask('default', 'lint qunit concat min');
	grunt.registerTask('default', 'lint concat min cssmin');
};
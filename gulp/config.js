const paths = {
	img_src: './src/img/',
	img_dest: './dest/img/',
	img_build: './docs/img/',

	js_src: './src/js/',
	js_dest: './dest/js/',
	js_build: './docs/js/',

	stylus_src: './src/stylus/',
	stylus_dest: './dest/css/',
	stylus_component_dest: './src/stylus/object/component/',
	stylus_build: './docs/css/',

	pug_src: './src/pug/**/*.pug',
	pug_include: './src/pug/include/',
	pug_exclude: '!./src/pug/**/_*.pug',

	yaml_src: './src/yaml/**/*.y{,a}ml',
	yaml_dest: './dest/json/',

	sprite_src: './src/sprite/',
	sprite_dest: './src/img/',

	iconfont_src: './src/iconfont/*.svg',
	iconfont_stylus_dest: './src/stylus/object/component/',
	iconfont_dest: './dest/font/',
	iconfont_build: './dest/font/',
	
	font_dest: './dest/webfont/',
	font_build: './docs/font/',
	
	template_src: './src/template/',
	template_dest: './dest/template/',

	dest: './dest/',
	build: './docs/',
};

export default paths;
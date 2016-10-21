module.exports = {
	production: {
		options: {
			metadata: {
				docsroot: 'https://beta.kent.ac.uk/patterns/',
				title: 'Pattern Library',
				description: 'A Pattern Library for the Kent Theme',
				section_names: {
					core_elements:'Core Elements',
					featured_content:'Featured Content',
					page_types:'Page Types'
				}
			},
			plugins: {
				'metalsmith-headings-identifier':{
					linkTemplate:'<!-- %s -->'
				},
				'metalsmith-headings':'h2.pattern',
				'metalsmith-navigation':{
					'navConfigs': {
						header:{
							filterProperty:false,
							sortBy:'nav_order'
						},
						all:{
							includeDirs: true,
							filterProperty:false,
							sortBy:'sub_title'
						},
						core_elements:{
							includeDirs: true,
							filterProperty:'section',
							sortBy:'nav_order'
						},
						featured_content:{
							includeDirs: true,
							filterProperty:'section',
							sortBy:'nav_order'
						},
						page_types:{
							includeDirs: true,
							filterProperty:'section',
							sortBy:'nav_order'
						}
					},
					'navSettings': {}
				},
				'metalsmith-layouts': {
					engine: 'handlebars',
					directory:'lib/pattern-wrappers',
					default:'content.html',
					partials:'lib/pattern-partials'
				}
				//'metalsmith-text-replace':{
				//	'**/**':{
				//		find: '../../examples/',
				//		replace: '../'
				//	}
				//}
			}
		},
		src: 'patterns',
		dest: 'docs'
	},
	sandbox: {
		options: {
			clean:false,
			metadata: {
				docsroot: 'http://localhost:8080/',
				title: 'Pattern Library',
				description: 'A Pattern Library for the Kent Theme',
				section_names: {
					core_elements:'Core Elements',
					featured_content:'Featured Content',
					page_types:'Page Types'
				}
			},
			plugins: {
				'metalsmith-headings-identifier':{
					linkTemplate:'<!-- %s -->'
				},
				'metalsmith-headings':'h2.pattern',
				'metalsmith-navigation':{
					'navConfigs': {
						header:{
							filterProperty:false,
							sortBy:'nav_order'
						},
						all:{
							includeDirs: true,
							filterProperty:false,
							sortBy:'sub_title'
						},
						core_elements:{
							includeDirs: true,
							filterProperty:'section',
							sortBy:'nav_order'
						},
						featured_content:{
							includeDirs: true,
							filterProperty:'section',
							sortBy:'nav_order'
						},
						page_types:{
							includeDirs: true,
							filterProperty:'section',
							sortBy:'nav_order'
						}
					},
					'navSettings': {}
				},
				'metalsmith-layouts': {
					engine: 'handlebars',
					directory:'lib/pattern-wrappers/dev',
					default:'content.html',
					partials:'lib/pattern-partials'
				}

			}
		},
		src: 'patterns',
		dest: 'sandbox'
	}
};

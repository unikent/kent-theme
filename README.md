# The Kent Theme

# THIS THEME IS STILL IN BETA AND NOT FOR APPROVED FOR PRODUCTION USE

## Setup

1. Make a copy of `.env.sample` and rename to `.env` 
  - change the WEBROOT and API_URL variables if you need to when developing locally.

2. Run `npm install` to install all dependencies, run grunt and start a watch task.

  - *Note: we're using the Ruby version of Sass so you'll need to have it in your PATH first - use `gem install sass`*
  - We're also using [grunt-php2html](https://www.npmjs.com/package/grunt-php2html) for frontend HTML generation of the pattern library. You need the `php-cgi` binary in your PATH for this to work. The previous link has instructions on how to do this for different OS.

3. To restart the watch for any reason simply run `grunt`.

*You may also need to run `bower update` to pull in updated dependencies.*

## Pattern Library

Patterns are located in the `/patterns/sections` directory, broken into their three sections `core_elements`, `featured_content` and `page_types`.
Page Layouts are located in `/lib/pattern-wrappers`. (The HTML versions are generated automatically from the PHP versions when the library is built.)
Page Template Partials are located in `/lib/pattern-partials`.

The Pattern Library can be build using `grunt patterns` or `grunt patterns_local` for local development, this will generate static pages in `/public/docs` or `/public/devdocs` respectively.
Menus, sidebar navigation and inpage navigation will all be generated automatically based on the folder hierarchies, and `<h2>`'s within each page.

Each source page should have a config section at the top of the file formatted as below:

```
---
OPTION: VALUE
---
```

| Config Option		    	| Description																				                                        |
|-----------------------|-------------------------------------------------------------------------------------------|
| sub_title	(required)	| Will be used at the pages title in menus and as an H1 on the page itself.				        	|
| lead                  | Lead paragraph / intro text                                                               |
| layout				        | The name of the layout file to use (Default: `content.html`)				              				|
| nav_order             | Controls this pages position within navigation menus                                      |


### Layouts
 - *content.html*: Content page layout (slim header with breadcrumb, .content-page class on <main>)
 - *home.html*: Pattern Library Homepage. (full header, no breadcrumb)

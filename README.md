# The Kent Theme

## Setup

Run `npm install` to install all dependencies, run grunt and start a watch task.

*Note: we're using the Ruby version of Sass so you'll need to have it in your PATH first - use `gem install sass`*

To restart the watch for any reason simply run `grunt`.

Make a copy of `lib/config.sample.php` and rename to `lib/config.php` - change the WEBROOT if you need to when developing locally.

## Pattern Library

Patterns are located in the `/patterns` directory.Page Layouts are located in `/lib/pattern-wrappers`. (The HTML versions are generated automatically from the PHP versions when the library is built.)
Page Template Partials are located in `/lib/pattern-partials`.

The Pattern Library can be build using `grunt patterns` or `grunt patterns_local` for local development, this will generate static pages in `/public/docs` or `/public/devdocs` respectively.
Menus will be generated automatically based on the folder hierarchies.

Each source page should have a config section at the top of the file formatted as below:

```
---
OPTION: VALUE
---
```

| Config Option			| Description																				|
|-----------------------|-------------------------------------------------------------------------------------------|
| sub_title	(required)	| Will be used at the pages title in menus and as an H1 on the page itself.					|
| layout				| The name of the layout file to use (Default: `basic.html`)								|
| mirror				| If true the whole content of the page will be wrapped in a codemirror block. (Default: false)|


### Layouts
 - *basic.html*: Default layout (slim header with breadcrumb, support for codemirror)
 - *content.html*: Content page layout (slim header with breadcrumb, .content-page class on <main>, support for codemirror)
 - *home.html*: Pattern Library Homepage. (full header, no breadcrumb)
 - *section_index.html*: Section index layout *see below* (full header with breadcrumb, and auto generated menu of section contents)

### Section Indexes

Pages in the root of the `/patterns` directory should be section index pages only. They should have a corresponding directory matching their `sub_title` value.
These also have some additional required config options:


| Config Option			| Description																				|
|-----------------------|-------------------------------------------------------------------------------------------|
| nav_order	(required)	| Numerical value used to order items in the primary navigation.							|
| layout	(required)	| *Must* be set to `section_index.html`														|


### Codemirror

Pattern pages can use codemirror to present the source code for patterns by wrapping the pattern in a <div> with class 'codemirror'.
For example:

```
<div class="codemirror">
<!-- your source here -->
</div>
```

Or can have the whole page wrapped automaticaly using the `mirror` config option (see above).
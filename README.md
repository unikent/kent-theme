# The Kent Theme

## Setup

Run `npm install` to install all dependencies, run grunt and start a watch task.

*Note: we're using the Ruby version of Sass so you'll need to have it in your PATH first - use `gem install sass`*

To restart the watch for any reason simply run `grunt`.

## Documentation

CSS documentation is provided inline using the [Hologram](http://trulia.github.io/hologram/) format.

Hologram allows generation of a living style guide. The example Hologram templates are kept in `plugins/hologram/code_example_templates`.

Instructions for installing and running Hologram can be found in the [Hologram github repository readme](https://github.com/trulia/hologram/blob/master/README.md).

For the purposes of kent-theme, use `npm install grunt-hologram --save-dev` to install the Hologram plugin.

To document, you'll need to add some comments to the SCSS file you want
Example:

```
/*doc
---
title: header
name: header
category: basics

Some text about what the CSS component is
---
*/
```

There's a separate style sheet for Hologram. The `hologram.scss` is a SASS file located in `plugins/hologram/doc_assets`. To create the CSS from this, run `grunt sass:hologram`.

To run the hologram task and generate the pattern library, run `grunt hologram` - simples.

*Both of the hologram tasks are excluded from the `grunt watch` so you'll need to run them manually*

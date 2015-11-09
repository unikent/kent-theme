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
  - If you have issues with this, you can do it the old-fashioned way with `gem install hologram`

To document, you'll need to add some comments to the SCSS file you want
Example:

```
/*doc
---
title: header
name: header
category: basics

Some text about what the SCSS component is
---
*/
```

## Testing

[PhantomCSS](https://github.com/Huddle/PhantomCSS) tests are used to perform regression testing on UI components.

To use [CasperJS](http://casperjs.org/) you'll need:
- [PhantomJS](http://phantomjs.org/) 1.8.2+ but less than 2.0
- [Python 2.6+](https://www.python.org/downloads/)
- Run `npm install -g casperjs` to install it
  - **Do not user homebrew to install it. You need casperjs 1.1.0-beta3. This isn't available via homebrew**

### Runing tests
Run the tests with `casperjs test test/phantomcss/tests.js`

PhantomCSS will generate a new set of images and compare them with the ones in `test/phantomcss/screenshots`. The resulting images and diffs with the placed in `test/phantomcss/results` and `test/phantomcss/failures`.

Add new tests to `test/phantomcss/tests.js`

To generate a fresh copy of the base images to compare with (in `test/phantomcss/screenshots`), run `casperjs test test/phantomcss/tests.js --rebase`


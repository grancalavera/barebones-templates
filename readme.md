#Grunt barebones templates

Two simple Grunt 0.4.x RequireJS templates: one for web based projects and one for
library projects.

https://github.com/gruntjs/grunt/wiki/Project-Scaffolding

## Out of the box

 - Live reloading.
 - CSS pre-processing.
 - Unit testing.
 - Project scaffolding.

## Dependencies

All of the following npm packages must be installed globally:

 - node ~0.8.14
 - npm ~1.1.65
 - volo ~0.2.7
 - grunt-cli ~0.1.6
 - grunt-init ~0.2.0rc8

##Install (Mac)

Clone this repo to anywhere in your computer.

Create symlinks at ```~/.grunt-init/barebones-www``` and ```~/.grunt-init/barebones-lib```
and make them point to those dierctories in your clone of barebones-templates

Install the grunt dependencies:
```sudo npm install -g grunt-cli@0.1.6```
```sudo npm install -g grunt-init@0.2.0rc8```

## Usage

From your project's directory, run:

  - ```grunt-init barebones-www``` to generate a template for a RequireJS web project.
  - ```grunt-init barebones-lib``` to generate a template for a RequireJS library project (a stand-alone module).

Then follow the instructions on the screen.

## Assumptions

 - RequireJS as AMD format.
 - Less for CSS pre-processing.
 - QUnit for unit testing.
 - Volo for dependencies management.

## In process

This is still in process, but I'll stop development for grunt 0.3.x and start working towards grunt 0.4.x and 0.5.x. This means there are some features that will never be avaliable for grunt 0.3.x, such as:

 - Code concatenation.
 - Code minification.
 - Publish to GitHub pages.

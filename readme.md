#Grunt barebones templates

Two simple Grunt 0.3 RequireJS templates: one for web based projects and one for library projects.

## Out of the box

 - Live reloading.
 - CSS pre-processing.
 - Unit testing.
 - Project scaffolding.

##Requirements

 - node ~0.8.14
 - npm ~1.1.65
 - grunt ~0.3.17

##Install

Clone this repo to ```~/.grunt/tasks/init``` (Mac).

## Usage

From your project's directory, run:

  - ```grunt init:barebones-www``` to generate a template for a RequireJS web project.
  - ```grunt init:barebones-lib``` to generate a template for a RequireJS library project (a stand-alone module).

Then follow the instructions on the screen.

## Assumptions

 - RequireJS as AMD format.
 - Less for CSS pre-processing.
 - QUnit for unit testing.
 - Volo for dependencies management.

## Still WIP

This is still work in progress, but I'll stop development for grunt 0.3.x and start working towards grunt 0.4.x and 0.5.x. This means there are some features that will never be avaliable for grunt 0.3.x, such as:

 - Code concatenation.
 - Code minification.
 - Publish to GitHub pages.





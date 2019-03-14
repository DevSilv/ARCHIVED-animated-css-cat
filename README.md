# silvuss-example-animated-CSS-cat-website

This repository contains an example website presenting an animated CSS cat.

## Table of contents

1. [Copyright note](#copyright-note)
2. [Disclaimers](#disclaimers)
3. [How to install this website?](#how-to-install-this-website)
4. [Environment, tools and technologies used](#environment-tools-and-technologies-used)
    1. [Overview](#overview)
    2. [A note about used HTML and CSS techniques and principles](#a-note-about-used-HTML-and-css-techniques-and-principles)
    3. [A note about used JavaScript techniques and principles](#a-note-about-used-javascript-techniques-and-principles)
    4. [A note about Sass features](#a-note-about-sass-features)
    5. [A note about LESS features](#a-note-about-less-features) 
    6. [Notes about other techniques and solutions](#notes-about-other-techniques-and-solutions)
5. [Sources](#sources)
6. [Remarks](#remarks)
    1. [1](#1)

## Copyright note

Note that this "silvuss-example-animated-CSS-cat-website" project (this repository) has currently **no license**, as explained in [this GitHub guide on licensing projects](https://choosealicense.com/no-permission/).

For your convenience, I am including below a quote from that site:
> When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can use, copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.

Also note that I can add a lincese in the future if it would be relevant to the needs of this project.

## How to install this website?

This website does not require any installation. You can use it (view it) simply by opening the following URL in your browser: [TODO]

## Environment, tools and technologies used

### Overview

- Markup languages:
  - [HTML](https://en.wikipedia.org/wiki/HTML) in version 5
- Style sheet languages:
    - [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) in version 3
    - [Sass](https://en.wikipedia.org/wiki/Sass_(stylesheet_language)) – compiled using Ruby Sass in version 3.5.6
    - [LESS](https://en.wikipedia.org/wiki/Less_(stylesheet_language)) – compiled using the online service http://lesscss.org/less-preview/ \*
- Programming languages and libraries:
    - [JavaScript](https://en.wikipedia.org/wiki/JavaScript) – [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) in version [TODO]
- Other technologies, tools and practices:
    - XMLHttpRequest API (in JavaScript) \*\*;
    - I have decided to avoid using the `this` keyword in JavaScript because of its complex semantics.
- Testing environment and conditions:
    - The browser in which I have tested this website is Firefox Quantum 65.0 (64-bit) for Fedora.
    - To test how the website would look like and feel in a mobile device (UI and UX), I was using Firefox's [Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode); the smallest size of the content area that I was testing with was 300 pixels wide and 300 pixels high.

\* _At least as of 2019 Feb 14, there seems to be a problem with the npm's clone package required by the "local" LESS compiler to work properly. That caused that I was having an option to choose either a CDN's LESS script (see the [LESS website](http://lesscss.org/)), or to compile LESS code using an online service. I have chosen the latter._

\*\* _To fulfil the presumptions of the website architecture that I wanted to implement, I had three choices: (1) plain XMLHttpRequest API (in JavaScript), (2) "external" framework or library (like jQuery), (3) HTML Imports. I have decided to use the first solution. This is for two reasons: because the [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports) are either not yet implemented or obsolete in the web browsers world; and because I think that the use of "external" software would be over-complicating or over-simplifying in this case._

### A note about used HTML and CSS techniques and principles

Creating this website, I was trying to follow the following HTML and CSS techniques and principles:

- For the purpose of learning, using the CSS [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) and [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) layouts as little as possible, but as much as code would not look too complicated or like there is too much hardcoded values. This rule does not apply to the version of the cat written in plain CSS (there are plenty of hardcoded values, because plain CSS does not support variables).

- For clarity, using as little CSS rules (and as clean) as possible. This rule does not apply to any of the cat version – because cat code has not been optimised nor cleaned.

- For clarity and simplicity, using as little CSS classes as possible (especially, not using any methodology like BEM, which presumes creating many classes). However, still using only classes, no IDs (and that is part of e.g. the BEM methodology). Besides that, there emerged some elements of BEM methodology, e.g. the cat's right ear element has classes `cat-ear` and `cat-ear-right` at the same time.

- For clarity and simplicity, using as "one-to-one" classes as possible. By "one-to-one" class I mean that one may make a one-to-one mapping between the class name meaning (semantics) and its usage.

- For simplicity, hardcoding any default values in HTML and CSS where possible (not in JavaScript or other places, like JSON).

### A note about used JavaScript techniques and principles

Creating this website, I was trying to follow the following JavaScript techniques and principles:

- Using no modules. JavaScript files are included in the proper way in the index.html file, and the state of the website is just one global variable in one of them.

- Declaring variables as late as possible (so scope may play its role).

- Using double quotes instead of single ones, and single ones instead of escaped ones (either double or single) where possible.

- Using promises.

- Using the strict mode (`"use strict"`).

- Using descriptive names for functions and parameters. Unfortunately, this rule sometimes involve very long names. Fortunately, it may decrease the need for comments.

- Using AJAX (by the XMLHttpRequest interface).

### A note about Sass features

Creating this page I was learning Sass and was using this page to help me: https://sass-lang.com/documentation/file.SASS_REFERENCE.html

According to that page, this website **uses** the following Sass features:
- Nested Rules
- Referencing Parent Selectors (`&`)
- Nested Properties
- Variables (`$`)
- Number Operations

This website **does not use** the following Sass features:
- Placeholder Selectors (`%foo`)
- Data Types
- String Operations
- Boolean Operations
- List Operations
- Functions
- Interpolation (`#{}`)
- Variable Defaults (`!default`)
- `@import` rule
- Partials
- Index Files
- `@media` directive
- `@extend` directive
- `@at-root` directive (including `(without: ...)` and `(with: ...)`)
- `@debug` directive (maybe I just had no occasion)
- `@warn` directive
- `@error` directive
- Control Directives & Expressions
- Mixin Directives
- Function Directives
- Output Style (`:nested etc.`; I had no occasion since I did not generate any files on my own)
- Sass extensions

### A note about LESS features

Creating this page I was learning LESS and was using this page to help me: http://lesscss.org/features/

According to that page, this website **uses** the following LESS features:
- Variables – only basics
- Parent Selectors – only with a pseudoselector

This website **does not use** the following LESS features:
- Variable Interpolation
- Variable Variables
- Lazy Evaluation
- Properties as Variables
- Parent Selectors within class names (it might be useful, but I have found that it would decrease the possiblity of searching classes by names) and other use cases
- Extend
- Merge
- Mixins
- CSS guards
- Detached Rulesets
- @import At-Rules (because I have found that it will decrease readability)
- @plugin At-Rules
- Maps

### Notes about other techniques and solutions

Any notes and comments on why code is written the way it is (or works the way it works) are in the comments in the source code.

## Sources

The following sources was helpful for me when creating this website (sorted alphabetically according to the subtitles). Some of them reminded me what I already knew, and from the other I learned new things.

### Envato Tuts+ website

- https://webdesign.tutsplus.com/articles/pure-css-animation-inspiration-on-codepen--cms-30875
- https://webdesign.tutsplus.com/tutorials/css3-animations-the-hiccups-and-bugs-youll-want-to-avoid--webdesign-4867

### CSS-Tricks website

- https://css-tricks.com/snippets/css/keyframe-animation-syntax/
- https://css-tricks.com/almanac/properties/t/transform-origin/
- https://css-tricks.com/almanac/properties/a/animation/
- https://css-tricks.com/snippets/css/complete-guide-grid/
- https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
- https://css-tricks.com/complete-guide-table-element/

### MDN Web Docs

- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ
- https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions
- https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
- https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
- https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

### Stack Overflow website

- https://stackoverflow.com/questions/37829448/hash-in-front-of-a-sass-argument
- https://stackoverflow.com/questions/18060132/what-is-ul-means-in-sass
- https://stackoverflow.com/questions/18812055/css-animation-with-time-interval
- https://stackoverflow.com/questions/23054067/css3-animation-delay-not-working
- https://stackoverflow.com/questions/40868858/how-to-transform-in-both-x-y-direction-with-css-only
- https://stackoverflow.com/questions/9998260/css-absolute-position-wont-work-with-margin-leftauto-margin-right-auto
- https://stackoverflow.com/questions/23994748/display-the-current-date-and-time-using-html-and-javascript-with-scrollable-effe
- https://stackoverflow.com/questions/16450973/why-javascript-is-not-loading-for-document-readystate-complete/16451012
- https://stackoverflow.com/questions/50500305/css-grid-with-padding-overflows-container
- https://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript
- https://stackoverflow.com/questions/8369252/step-parameter-for-input-type-of-range
- https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
- https://stackoverflow.com/questions/5472802/css-z-index-lost-after-webkit-transform-translate3d
- https://stackoverflow.com/questions/5502305/how-do-i-reset-the-value-of-a-text-input-when-the-page-reloads
- https://stackoverflow.com/questions/196498/how-do-i-load-the-contents-of-a-text-file-into-a-javascript-variable
- https://stackoverflow.com/questions/68578/multiple-cases-in-switch-statement
- https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript
- https://stackoverflow.com/questions/30067767/how-do-i-collapse-sections-of-code-in-visual-studio-code-for-windows
- https://stackoverflow.com/questions/2549320/looping-through-an-object-tree-recursively
- https://stackoverflow.com/questions/507138/how-do-i-add-a-class-to-a-given-element
- https://stackoverflow.com/questions/574944/how-to-load-up-css-files-using-javascript
- https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements
- https://stackoverflow.com/questions/9699039/button-with-displayblock-not-stretched

### W3Schools pages

- https://www.w3schools.com/colors/colors_picker.asp
- https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp
- https://www.w3schools.com/cssref/css3_pr_transform.asp
- https://www.w3schools.com/CSSref/css3_pr_transform-origin.asp
- https://www.w3schools.com/CSSref/css3_pr_animation-timing-function.asp
- https://www.w3schools.com/js/js_errors.asp
- https://www.w3schools.com/Js/js_json_parse.asp
- https://www.w3schools.com/jsref/prop_doc_readystate.asp
- https://www.w3schools.com/jsref/jsref_filter.asp
- https://www.w3schools.com/js/js_strict.asp

### Other

- https://codepen.io/agoodwin/pen/ypeWYE
- https://www.kirupa.com/html5/animating_multiple_elements_animate_method.htm
- https://www.petmd.com/cat/behavior/do-cats-blink
- https://chrisruppel.com/blog/css-animation-border-radius/
- https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/
- https://www.telerik.com/blogs/how-do-i-pause-execution-in-javascript
- https://gist.github.com/joyrexus/7307312

## Notes

### Outputting parameters

The following is a hint to outputting parameters. If you are using an arrow function with only one expression (say, `Array.prototype.filter()`) and want to output e.g. its parameters to the console, the short way would be to append to its body the negated `console.log()` call. It would work, since functions not explicitly returning value return the `undefined` value, which is converted to `false`; the negated `false` value becomes the `true` value; lastly, the `true` value appended with the logical `AND` operator does nothing.

Example: `const item = ["a", "b", "c"].filter(elem => elem === "b" && !console.log(elem))` (note the exclamation mark before `console`).

References:
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
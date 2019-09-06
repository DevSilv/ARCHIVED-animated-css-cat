# animated-css-cat

This project contains a simple example website presenting an animated CSS cat.

## Table of contents

1. [Copyright note](#copyright-note)
2. [Disclaimers](#disclaimers)
3. [How to see this website?](#how-to-see-this-website)
4. [Environments, tools and technologies used](#environments-tools-and-technologies-used)
5. [Sources](#sources)
6. [Details](#details)

## Copyright note

Note that this project "animated-css-cat" (this repository) has currently **no license**, as explained in [this GitHub guide on licensing projects](https://choosealicense.com/no-permission/).

For your convenience, I am including below a quote from that site:

> When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can use, copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.

Also note that I can add a license in the future if it would be relevant to the needs of this project.

## Disclaimers

Although I have made efforts to make the website (that this project contains) work as intended and described, it is not a "professional" website. Specifically, it was not tested in terms of separate unit tests or similar. It was tested to build on two platforms. For details on the platform, see the section "[Environment, tools and technologies used](#environment-tools-and-technologies-used)" below.

## How to see this website?

One can see this website online by going to the following URL in their web browser: https://silvuss.github.io/silvuss-animated-css-cat/

## Environments, tools and technologies used

### Environments and tools

- This website has been tested to work in the following environment:
    - **Web browser:** `Firefox Quantum 65.0 (64-bit) for Fedora`
    - To test how the website would look like and feel in a mobile device (UI and UX), I was using Firefox's [Responsive Design Mode](https://developer.mozilla.org/en-US/docs/Tools/Responsive_Design_Mode); the smallest size of the content area that I was testing with was 300 pixels wide and 300 pixels high.

### Technologies and tools

- Markup languages:
    - [HTML](https://en.wikipedia.org/wiki/HTML) in version 5
- Style sheet languages:
    - [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) in version 3
    - [Sass](https://en.wikipedia.org/wiki/Sass_(stylesheet_language)) – compiled using Ruby Sass in version 3.5.6
    - [LESS](https://en.wikipedia.org/wiki/Less_(stylesheet_language)) – compiled using the online service http://lesscss.org/less-preview/ \*
- Programming languages:
    - [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
- Other technologies:
    -  XMLHttpRequest API (in JavaScript) \*\*;

---

\* At least as of 2019 Feb 14, there seems to be a problem with the npm's clone package required by the "local" LESS compiler to work properly. That caused that I was having an option to choose either a CDN's LESS script (see the [LESS website](http://lesscss.org/)), or to compile the LESS code using an online service. I have chosen the latter.

\*\* To fulfil the presumptions of the website architecture that I wanted to implement, I had three choices: (1) plain XMLHttpRequest API (in JavaScript), (2) "external" framework or library (like jQuery), (3) HTML Imports. I have decided to use the first solution. This is for two reasons: because the [HTML Imports](https://developer.mozilla.org/en-US/docs/Web/Web_Components/HTML_Imports) are either not yet implemented or obsolete in the web browsers world; and because I think that the use of "external" software would be over-complicating or over-simplifying in this case.    

## Sources

Given in no particular order.

- **The website of Envato Tuts+:**
    - https://webdesign.tutsplus.com/articles/pure-css-animation-inspiration-on-codepen--cms-30875
    - https://webdesign.tutsplus.com/tutorials/css3-animations-the-hiccups-and-bugs-youll-want-to-avoid--webdesign-4867

- **CSS-Tricks:**
    - https://css-tricks.com/snippets/css/keyframe-animation-syntax/
    - https://css-tricks.com/almanac/properties/t/transform-origin/
    - https://css-tricks.com/almanac/properties/a/animation/
    - https://css-tricks.com/snippets/css/complete-guide-grid/
    - https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/
    - https://css-tricks.com/complete-guide-table-element/

- **MDN Web Docs:**
    - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateZ
    - https://developer.mozilla.org/en-US/docs/Web/CSS/WebKit_Extensions
    - https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate3d
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
    - https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
    - https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

- **Stack Overflow:**
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

- **W3Schools pages:**
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

- **A codepen of Anastasia Goodwin:**
    - https://codepen.io/agoodwin/pen/ypeWYE

- **kirupaForum:**
    - https://www.kirupa.com/html5/animating_multiple_elements_animate_method.htm

- **The website of petMD:**
    - https://www.petmd.com/cat/behavior/do-cats-blink

- **Chris Ruppel's blog:**
    - https://chrisruppel.com/blog/css-animation-border-radius/

- **Louis Lazaris's blog:**
    - https://www.impressivewebs.com/onchange-vs-oninput-for-range-sliders/

- **The website of Progress Software Corporation:**
    - https://www.telerik.com/blogs/how-do-i-pause-execution-in-javascript

- **A gist of J. Voigt (joyrexus):**
    - https://gist.github.com/joyrexus/7307312

## Details

For other information about this website, see the documentation in the directory `/docs` of this project.
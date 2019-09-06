# Techniques, principles and used features

## HTML and CSS

Creating this website, I was trying to follow the following HTML and CSS techniques and principles:

- For the purpose of learning, using the CSS [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) and [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) layouts as little as possible, but as much as code would not look too complicated or like there is too much hardcoded values. This rule does not apply to the version of the cat written in plain CSS (there are plenty of hardcoded values, because plain CSS does not support variables).

- For clarity, using as little CSS rules (and as clean) as possible. This rule does not apply to any of the cat version – because cat code has not been optimised nor cleaned.

- For clarity and simplicity, using as little CSS classes as possible (especially, not using any methodology like BEM, which presumes creating many classes). However, still using only classes, no IDs (and that is part of e.g. the BEM methodology). Besides that, there emerged some elements of BEM methodology, e.g. the cat's right ear element has classes `cat-ear` and `cat-ear-right` at the same time.

- For clarity and simplicity, using as "one-to-one" classes as possible. By "one-to-one" class I mean that one may make a one-to-one mapping between the class name meaning (semantics) and its usage.

- For simplicity, hardcoding any default values in HTML and CSS where possible (not in JavaScript or other places, like JSON).

## JavaScript

Creating this website, I was trying to follow the following JavaScript techniques and principles:

- I have decided to avoid using the `this` keyword in JavaScript because of its complex semantics.

- Using no modules. JavaScript files are included in the proper way in the index.html file, and the state of the website is just one global variable in one of them.

- Declaring variables as late as possible (so scope may play its role).

- Using double quotes instead of single ones, and single ones instead of escaped ones (either double or single) where possible.

- Using promises.

- Using the strict mode (`"use strict"`).

- Using descriptive names for functions and parameters. Unfortunately, this rule sometimes involve very long names. Fortunately, it may decrease the need for comments.

- Using AJAX (by the XMLHttpRequest interface).

## Sass and LESS

### Sass

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

### LESS

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

## Other

Any notes and comments on why code is written the way it is (or works the way it works) are in the comments in the source code.
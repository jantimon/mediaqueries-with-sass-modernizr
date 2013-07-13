---
layout: default
title: Media queries with Sass and Modernizr
---

### Media queries with Sass and Modernizr

Live demo: http://jantimon.github.io/mediaqueries-with-sass-modernizr/

This project demonstrates the synergy of Modernizr and Sass when using media queries.

## SCSS in action

```
sass/demo.scss
```

## CSS Result

The above scss code will be compiled to the following css code:

```
css/demo.css
```

## Modernizr

When building Modernizr make sure that you checked the "Media Queries" and "Add CSS Classes" options.

Modernizr is able to detect different levels of media-query support: http://modernizr.com/docs/#mq
However the media query test in this demonstration assures only that media queres are present at all:

```
javascripts/modernizr.mediaqueries.js
```

## SCSS Mixin

The SASS part uses a modified version of the respond-to mixin from 2011 which can be found in this article: http://thesassway.com/intermediate/responsive-web-design-part-2

```
sass/mixin.scss
```
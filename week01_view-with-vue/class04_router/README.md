Router
===

## Misc

* Kata Review
* Lab Review
* Other Vue Questions?

## Client-side router

* Completely separate from server
* Manages our "single page app" (SPA)

## Router Design

Fundamental parts:
1. Special link tags (like `a`) components that change the url
2. Router views that change what component they show in response to the url

In Vue:
1. `npm i vue-router`
1. Setup router in `router.js`
1. Configure vue to use router in `main.js`
1. Respond to url using the `RouterView`
1. Use `router-link` to change the url (or `this.$router.push` if programmatic)

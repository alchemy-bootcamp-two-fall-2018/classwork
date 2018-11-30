Router
===

## Agenda

* Kata Review
* Lab Review
* Vue Questions
* Laptop Policy

## Child Routes

```js
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/quadrants', component: Quadrants },
    { 
      path: '/quadrants/:id', 
      component: QuadrantDetail,
      children: [
        { path: 'list', component: NeighborhoodsList },
        { path: 'map', component: NeighborhoodsMap },
        { path: 'new', component: NewNeighborhood },
        { path: '*', redirect: 'list' }
      ]
    },
    { path: '*', redirect: '/' }
  ]
```

## Vue Slots

* Content structure where we want to vary not data, but html
* Form Control
* Third Party Component "API"

`<slot></slot>`

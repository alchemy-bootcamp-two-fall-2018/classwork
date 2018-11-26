Class 01: Intro to VueJS
===

## Agenda

* Welcome to Bootcamp II!
* MVC
* VueJS

## Welcome!

* Skills-based
* Commits and incrementalism
* Collaboration (Consultant's Mindset)

### Apps

* List
* Details
* Forms

## MVC

* Model
* View
* Controller

## Modern JavaScript

Extensive "Build Systems":

1. Frontend
    * `vue-cli`
    * `webpack`
    * Powered by `node`
1. Backend
    * ExpressJS
    * SQL - RDMS (PostgreSql)
    * Powered by `node`
    * Deployed to heroku

## Bootcamp II

* Week 1: The View
* Week 2: The Server and SQL
* Week 3: Apps: Users, Transitions, and more! 
* Week 4: Project Week

## Node JS

Let's check node.js is installed:

```sh
> node --version
```

Looking for version `10` or greater

Two possible issues:

1. Node not installed
1. Node path not set up

## Vue CLI

### Up and Running

#### Install Vue CLI Tool

```sh
> npm install -g @vue/cli
```

Issues: 

* EACCESS or other permission problem
* `npm` not found. Uh-oh! See Node path above


#### Create Project

```sh
> vue create my-project
```

### Review Template Project

What can we learn?

What else?

* .eslintrc config
* Veteur Extention (VSCode should prompt)
* `.vue` files

### ESLint

* ~~`> vue add @vue/eslint`~~
* ~~Choose "errors only"~~
* Copy in `.eslintrc` file
* Add `/* eslint-env node */` to top of `babel.config.js`

## Intro to Vue.js

### Where does data come from?

* returned from `data` config method
* `props` from parent

### How is DOM updated?

#### Text Nodes

Mustaches:

```html
{{data}}
```

**NOTE:** Data is interpreted as plain text. Use `v-html=` for raw html.

#### Element Properties

##### Set with `v-bind`

`v-bind:` prefix on attributes:

```html
<button v-bind:disabled="!isValid">Submit</button>
```

Shorthand is `:` (skip the `v-bind`)

**NOTE:** the value in the attribute is interpreted as data expression, without `v-bind:` is just "string"

##### Events Via `v-on:`

Register to events using `v-on:`

```html
<button v-on:click="doSomething">Click Me To Do Something</button>
```

Shorthand is `@` (in lieu of `v-on:`)

Can be:

* Assignment expression to evaluated
* Method on the component _to be called_

#### Blocks (Multiplicity)

* Loop with `v-for`
* Conditional render with `v-if`
* Show/Hide with `v-show`

## Modern JavaScript

### Object Properties

#### Shorthand

Omit `: function` for properties that are functions:

```js
const superhero = {
    fly: function() {

    }
};
```

```js
const superhero = {
    fly() {

    }
};
```

Collapse properties being assign variables of same name:

```js
const superhero = {
    name: name,
    power: power
};
```

```js
const superhero = { name, power };
```

#### Destructuring

Reference property of same name as variable:

```js
const name = superhero.name;
```

```js
const { name } = superhero;
```

Can be more than one:

```js
const { name, power } = superhero;
```

Works for function parameters too:

```js
function logHero({ name, power }) {
    console.log(name, power);
}
```

A lot more can be done with destructuring...
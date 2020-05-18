![pitfall.js logo](https://imgur.com/eqMsOvi.png)

Lightweight and Highly-Modular library of mostly random helper functions and methods to remove some of the gratuitousness of JavaScript.

* **Lightweight** - pitfall tries to have a minimal footprint on your system, to avoid the fated 1gb node_modules folder.
* **Modular** - You are able to use the entire library, down to certain categories of helper functions, and even cherry-pick individual functions. How's that for light?
* **Easy to Use** - With short and concise names inspired from other std and community libraries, pitfall.js is a breeze to use.

## Installation

NPM: `npm install pitfall.js`

Yarn: `yarn install pitfall.js`

pitfall.js is not yet ready for a browser environment, but when it is, it will be available as a standalone js file or from a CDN.

## Documentation

Documentation is available [here](https://canarado.github.io/pitfall.js/).

## Basic Usage

This library is meant to be highly modular and we mean it!

```js
// Let's require the entire library!
// We could also just use 'require('pitfall.js')' but we are going to be concise for the sake of this example
const pitfall = require('pitfall.js/core');

// Now we can use apis from the entire library such as the sleep function
pitfall.sleep(2000);

// or the random function :)
let array = [1, 2, 3, 4, 5];

let randomValue = pitfall.random(array);

// ..
```

> Well, canarado, I don't want to include the entire library! Can I use something more modular?

Yes :), you can import a small subsection of the library!
```js
// Let us require pitfall's utils!
const pitfallUtils = require('pitfall.js/util');

// The util sublib can be used for utility function, such as the promise-based sleep function!
pitfallUtils.sleep(2000);
```

> Hmmm...that still isn't modular enough for me, is there another option?

Absolutely! Let's cherry-pick one singular tiny function!
```js
// Wow! Importing a single function is this easy!
const sleep = require('pitfall.js/sleep');

sleep(2000);

// Theoretically, you could also import sleep singularly like this
// but this leads to longer runtimes and above is arguably more readable.
// The more 'pitfall-style' will be modular imports like above ^
const sleep = require('pitfall.js').sleep;
```
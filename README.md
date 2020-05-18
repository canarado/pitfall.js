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

## Support

For right now, until I have good enough reason to set up other options, the only way to contact me directly is through email (dev.canarado@gmail.com), but you can open an issue on the [GitHub Repo](https://github.com/canarado/pitfall.js/issues) as well.

## Roadmap

I plan on adding more functions based on problems and gratuitous code that I come across. Any suggestions to the library are welcome as well! I do plan on pitfall.js, for me personally, being a replacement for many small specific use-case libraries such as axios and chalk.

## Contributing

We are open to contributors, from first time contributers to pros! Contributing is fairly easy, there are just a few things to be aware of.
We strive for our code to be well documented and that means following [JSDoc 3](https://jsdoc.app/about-getting-started.html) standard.

Installing the devDependencies is easy with `npm i --only=dev`.

Our docs are auto-generated using `jsdoc`. You can install this locally using `npm i jsdoc --no-save` to generate docs or, our preferred way, installing globally with `npm i jsdoc -g`. Usage once jsdoc is installed is `npm run doc`. This updates the docs with any changes done to the library.

Furthermore, contributions are expected to follow ECMA standards and be well written.

Contributors, feel free to contact me, and you will be added to the authors and acknowledgement tab linking to your preferred site.

## License

pitfall.js is licensed under the Open Source Initiative MIT License. We strive for open source to be commonplace!

## Authors

- Lead Developer - [canarado (hire me!!!)](https://github.com/canarado)

## Project Status

pitfall.js is developed by one person who's sole job is not to develop the library. The project is very open to people contributing functionality to the library that they think would be a good fit.
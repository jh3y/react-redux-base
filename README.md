# react-base

A boilerplate for react applications that addresses some common gotchas and teething problems :sunglasses:

The boilerplate gets you up and running with a simple TODO app (:sleeping:) that uses some of the common things that you're likely to come across when you begin working with and setting up your `react` projects.

Featuring;
* `ES6`
* `react-router`
* `webpack`
* `webpack-dev-server`
* `flux`
* `react-test-utils`

## Usage
I'm not a huge fan of using `npm run-scripts`, so this boilerplate uses a self-documented `Makefile` for running tasks.

Simply run `make` in the root of the repo to see available tasks and what they do.

### Getting started

1. Clone/Fork the repo
2. Setup project

    ```shell
      make setup
    ```

### Development
For development using `webpack-dev-server` with hot module reloading;
  ```shell
    make develop
  ```
### Testing
To run tests;
  ```shell
    make test
  ```

### Analysis
To analyse the webpack bundle;
```shell
  make bundle-analyse
```
Then, upload `webpack.bundle.json` to [webpack.github.io/analyse](https://webpack.github.io/analyse).

## Contributing
As always, if you have any issues or suggestions please feel free to submit an issue, PR or tweet me [@_jh3y](https://twitter.com/@_jh3y)! :smile:



-------------------------

Made with :heart: by [@jh3y](https://twitter.com/@_jh3y) 2016

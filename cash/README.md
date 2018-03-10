# README

Cash is a library who convert a amount of currency in a other currency.

<p align="center">
  <img src="/img/currencies" alt="Bundle Analyzer example"
       width="650" height="335">
</p>

## Summary

 * Tools
 * Set-up
 * How it Works

# Tools


* [Node.js](https://nodejs.org/en/)
 *On Windows, don't forget to install npm in the process*

#### Linux: Install npm

```sh
$ sudo apt-get install npm
```
#### Linux: Install learnyounode

```sh
$ sudo apt-get install learnyounode
```


# Set-up

Go to directory */cash* using **cd /YourDirectory/cash** and run command: **npm install**
  * *This will install the packages listed in the package.json file*

```sh
$ npm install
```

# How It Works

Go to directory /cash using **cd /YourDirectory/cash** and run command: **node /bin/index.js [amount] [currency]**
  * Enter the *amount* and the *currency*, for example:

```sh
node /bin/index.js 1 USD
```
This will convert 1 USD in the default currencies EUR, GBD and PLN.

If you wish to convert the amount in different currencies, simply add them at the end of the command such as:

```sh
node /bin/index.js 1 USD EUR CAD PLN
```
To get the conversion in other currencies, simply add the symbol at the end of the command.

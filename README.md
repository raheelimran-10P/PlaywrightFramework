# PlaywrightFramework
Playwright Framework using POM

## Setup
This project requires an up-to-date version of Node

To set up this project on your local machine:
1. Clone it from this GitHub repository and open the project in the VS code and open terminal in it.
2. Run `npm i` or `npm install` from the command line in the project's root directory (it will install node module folder and packages existing in package.json file).
3. Now if you install any other packages so use command `npm install -save-dev <package-name>` it will install package locally. If you get some error after this command so run `npm cache clean -force`.
4. If you update or install any new package so update package.json on repo.

## Setup .env file

Create .env file at the root of the project location, and add below values like
```
BASE_URL=<place-your-url-here>

```

## Running Tests

Run `npx playwright test`.
Run `npx playwright show-report`.

## More Info
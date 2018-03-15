
# E2E BDD style v1

An awesome bdd style e2e fwk with `cucumber 1` with `protractor 5` 

## Dependencies

* node: `9.8.0`
* npm:  `5.6.0`
* chromedriver:  `2.36.5`
## Quick start



## Getting Started
1. Clone repo
```
git clone https://github.com/mcytnykoff/e2e-bdd-style.git
```
2. Open `e2e` folder in IDE of your choice and open ./env/test-local.env file

3. In ./env/test-local.env set UI_ENV= to match your local source code directory eg:

"file:///Users/mcytnykoff/Code/payLocityCodingChllange2018/e2e-bdd-skeleton/PaylocityQAInterviewChallenge/"

4. Run the following from the command line 
```
# install the dependencies with npm
$ npm i
```

5. Navigate to PayLocity login page to verify source code is in the right directory eg:

```file:///Users/mcytnykoff/Code/payLocityCodingChllange2018/e2e-bdd-skeleton/PaylocityQAInterviewChallenge/login.html"
```

## Start selenium webdriver (watch)
$ npm run wd-update
$ npm run wd-start
```


## Commands
| Command               | Description                       | 
|---                    |---                                |
|`npm run test`         | Run tests                         |
|`npm run wd-update`    | Update webdriver-manager          |
|`npm run wd-start`     | Start webdriver-manager           |
|`npm run wd-shutdown`  | Stop webdriver-manager            |


```
## Running Tests
When in repo root directory in Terminal window, type the following to run the tests...
```
$ . ./env/test-local.env && npm run test
```
Windows users must use git bash (https://gitforwindows.org/)



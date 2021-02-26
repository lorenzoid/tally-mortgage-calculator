# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Tally is doing a proof of concept web application as a small snippet on our
website. We would like to test a single page web application that can help
our customers budget how much they need to save to make a down
payment on a property.

Much like a mortgage calculator, we need to collect the payment period [10,
15, 20, 30, 50] years, the interest rate which should default to the current
federal Interest + 2.5% and the principal amount. We want to display the
monthly payments to finish the loan as a non-editable value.

Because we want to help our customers save, we will also display an
additional row of fields. A field for how much they can set aside a month for
a down payment and a field for how many months they are saving (1
month up to 5 years).

Based on this optional input, we will adjust the principal amount by the down
payment.


## To run the project please use the following  scripts

1. To run in development mode `yarn start`
2. To build a static html build for deployment `yarn build`. Serverless ready deployable directory will show up in the `/build` directory at the root.
3. To test mortgage calculation math `yarn test`. There is only one unit test and it is for the `calculateMortgagePayment()` method as asked in the deliverables section of the document.

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve`

Serves up the fake api via [json-server](https://github.com/typicode/json-server#getting-started)

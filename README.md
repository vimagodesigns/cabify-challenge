# Cart Test

This is a project where you can set a bunch of products and discounts, display the products, select the amount of them and see the total price and discounts automatically updated. You can click on the products so a modal opens to show more details and you can even purchase from there.

## State Managment

To manage the state of the application, I have used the way suggested on this article https://medium.com/simply/state-management-with-react-hooks-and-context-api-at-10-lines-of-code-baf6be8302c

Using contexts and reducers from React it has been created a State Provider which is going to wrap the application providing with the state of the application to all the containers which need it.

You can see this stateManagment at `src/stateManagment/state.js`

## Checkout Class

There is a class (required on the challenge) which has all the logic to scan and unscan products, calculating prices, amount of products and discounts, and managing the scanned products list.

## Structure project and little documentation about them

```
- bonus // Challenge bonus
- public // Some assests and challenge exercise
- src // Source of the project
  - components // All the documentation is in each component
    - atoms
      - MaintTitle
      - ProductAmount
      - ProductDetails
      - QuantityInput
      - SummaryDiscountItem
      - SummaryLIst
      - __tests__ // We store some tests in here
      - svg
        - close
    - molecules
      - ProductModal* // It has a note in the documentation
      - ProductsHeader
      - SummaryItems* // It has a note in the documentation
      - SummaryTotal* // It has a note in the documentation
    - organisms
      - ProductItem
  - config // Some config files
    - pricingRules.config.js // We have the pricing rule for each product which need it.
    - product.config.js // Product list with all the info you need from them
  - constants
    - products.constants.js // Some constants that is needed and they are from products
  - containers // All the documentation is in each container
    - atoms
      - Modal
      - ProductModal
      - SummaryDiscounts
    - molecules
      - Main
      - ProductList
      - __tests__ // We store some tests in here
  - reducers
    - checkout.reducer.js // Reducer for checkout (and the application)
  - services
    - checkout.class.js // We spoke about this above (basically the logic of checkout)
  - stateManagment // We spoke about this above (basically the state managment)
    - state.js // State provider
  - utils // Some utils to share them along all the components and containers
    - commont.utils.js // common utils
    - pricingRules.utils.js // pricing rules utils (generic function rules)
  - App.css // create-react file (styles)
  - App.js // create-react file (app logic)
  - App.test.js // create-react file (test)
  - index.css // create-react file (index styles)
  - index.js // create-react file (index logic)
  - logo.svg // create-react file (logo)
  - serviceWorker.js // create-react file (service workers)
- .gitIgnore // create-react file  (to ignore some folders and files for git)
- README.md // this file
- package-lock.json
- package.json
```

## Atomic design
I have selected a model of design for components and containers that is the atomic design, but for undderstand what is the logic in this model specifically:

- Components
  - Atoms are the components that are not using any other component
  - Molecules are the components that have some atoms components inside
  - Organisms are the components that have some molecules and/or atoms components inside

- Containers
  - Atoms are the containers with no other container inside
  - Molecules are the containers that have some atoms containers inside
  - Organisms are the containers that have some molecules and/or atoms containers inside

## Unit Tests

Every component, container and even service, util, etc should have thier own unit test, but so far for this project there is only two folders with tests

`/src/components/atoms/__tests__/`
`/src/containers/molecules/__tests__/`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

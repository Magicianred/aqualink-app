# Aqualink - Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

- **Styling & UI Library** Use [Material UI](https://material-ui.com/). Note that to use the [styles API](https://material-ui.com/styles/basics/) you can `import @material-ui/core/styles`. We prefer the Hooks styles API.
- **Routing** Uses [React Router](https://reacttraining.com/react-router/web/guides/quick-start).
- **State Management** Uses [Redux](https://redux.js.org/introduction/getting-started) and the [Redux Toolkit](https://redux-toolkit.js.org/api/configureStore) with slices.
- **Testing** Uses [Jest](https://jestjs.io/) with [Enzyme](https://enzymejs.github.io/enzyme/)

## Settings

The app must be configured before you can run it. Configuration is sourced from the following environment variables.

### Required

```
REACT_APP_API_BASE_URL="http://localhost:8080/"
```

### Optional

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_SOFAR_API_TOKEN=
REACT_APP_FEATURED_REEF_ID=1
```

In development, we optionally use [dotenv](https://www.npmjs.com/package/dotenv) to automatically load environment
variables from the file `./.env` - you can use the provided `.env.example` file as a template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

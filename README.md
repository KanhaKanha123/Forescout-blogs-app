# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install all the dependancies.\

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run test:coverage`

It will generate code coverage report.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Key points about project code
1. Used react-query to manage caching. Application is not making unnessary api requests.It will give a huge performance boost.
2. Created shared resuable componants this makes app loosely coupled. We can make development speed faster.
3. Use of context API provider help to manage app state all over the app for different pages.
4. Routing is used.
5. Code coverage is almost 87%. Which is not make sure the product is quality product.
6. App is loosely coupled and there is always scope to add things in future without changing existing code.
7. Styled components are in use they are more redable and maintainable.
8. area-labels and symentics tags added for accessibility.
9. Index.ts files added for each folder to make import shorter.
10. Debouncing implemented for serach to make less api calls.
11. Serach funcationality added.
12. Add new comment functionality partially added. we can get values on save click. i just added to the console.
14. config.ts added to set page size for blog list and comment list pagination.We can add other keys in future to this file.

## Folder strucutre
1. api--> it has the baseUrl of api so we don't have to write in other places when we make request.
2. assets--> To store icons.
3. Components-->It has all the components related to the app. It contains few sub components(blogs,header,shared-components) inside it according to the feature.
4. blogs--> It contains all the component related to blog like list of blogs, details of blog and comments list and single comment.
5. Header--> It has app header with search functionality.
6. Shared-components--> It has the styled-components and other components which are shareable all over the app.
7. Custom-hooks--> All the api calls are made here. This way we can make sure there is one place to make api calls and that is custom hooks. We can share this in any component also.
8. Error-Boundary--> It help us not to crash all app, just show a proper message.
9. helpers--> This folder will contains the helper mthods for the app.
10. pages--> This folder will contains main pages of the app which are in the router.
11. react-query--> This folder will have all the configs related to react-query.
12. router--> This folder containes all the routes.
13. store--> This folder contains the context api provider so we can manage state in all over the app.
14. test-utils--> this folder have all the resuable things or configs related to unit tests.

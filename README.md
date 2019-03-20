# angularjs-router-query-app

Generic app using `angularjs` (&ge;v1.5), `ui-router` (&ge;v1.0), and `ui-grid` (&ge;v4.0.0).

Includes routes for dropdowns and tabs, and a query application. The basic app has two parts: `queryForm` and `results`. The `queryForm` displays a set of inputs and a 'Search' button. This sets the parameters and sends a search to the server (e.g. a REST api provided by RESTHEART for MongoDB). The results are transformed (map, reduce, filter) and loaded into the ui-grid.

## QuickStart
TODO: View it on http://routerapp.xcentialcorp.co

It is running as a static Git Pages application.

## Installation

To install, check out the current repo and run

```bash
npm install
npm build
```

Serve from the main directory, (e.g. using Python simpleserver)

TODO: provide a nodejs service, to run with `npm start`

## Routes and states

This project demonstrates the use of `ui-router` (>1.0) states. Each state points to an html template (e.g. `about`) or an Angularjs component (e.g. `search.type`). The states are defined in `app/app.js`, and each component-based state points to a component in `app/components/appComponents.js`. The navbar at the top of the application (`templates/navbarTopComponent.html`) allows a user to select different states in a hyperlink. The state is defined in the `ui-sref` attribute of each link.

## Application layout

The html entry point for the application is in `index.html`, which is build from `index.src.html` by `npm build`. Changes to the index file should be made in `index.src.html` before building, though most changes can be done in sub-components. The `<ui-view></ui-view>` element in `index.html` generates all the subcomponents, depending on the current state. For example, in `search.type`, the `searchType` component is activated. This, in turn loads the template in `templates/searchTypeComponent.html`, which in turn loads the `queryForm` and `results` components.

## Search Applications
Search applications are built on the `searchType` component (in `/app/components/appComponents.js`). As mentioned above, this component is itself composed of both a `queryForm` component and a `results` component. There can be many 'types' of search application. Each is defined by a JSON object in `data/searchtypes.json` and a search function in `app/services/searchFnService.js`. The two definitions go together to define search and results-processing.

### SearchType JSON

The JSON object defines the following fields:

* `name`: the name of the search application
* `paramFields`: an array of objects. Each object defines an input element for the search, with a label, placeholder and a variable name (`varname`). These input fields are the ones that are used in the search function to retrieve data, e.g. from a server. The input fields defined here become the keys in a `queryParams` url parameter. For example, the variables may be `type1_input1` and `type1_input2`; when a user enters two values for these inputs (e.g. `this` and `that` respectively), and clicks `GO`, the application URL has the following appended: `queryParams={"type1_input1":"this","type1_input2":"that"}`
* `gridOptions`: these define the `ui-grid` to display the results of the search. This may include the column order, width, menus, filters, etc. Details about these options can be found at the Angular ui-grid repository [here](http://ui-grid.info/).

### Search Function

The search function for each type of search is defined in `app/services/searchFnService.js`. The search function in the `searchFns` object has the `name` of the search (defined in the search JSON above) as the key for the function. The function takes as input the `queryParams` object, defined by user input. This function may, for example, use `$http` to get data from a server, process the data (e.g. with `map`, `reduce` and `filter` functions) and return a data object in the form that can be consumed by the definition in the `gridOptions`, to display in the `ui-grid`.

The current two sample search types do not use the queryParams at all, but return a constant object that displays in the ui-grid.

TODO: Update the searchFn definition to show the use of `$http` and processing results.

# angularjs-router-query-app

Generic app using `angularjs` (&ge;v1.5), `ui-router` (&ge;v1.0), and `ui-grid` (&ge;v4.0.0)

Includes routes for dropdowns and tabs, and a query application. The basic app has two parts: `queryForm` and `results`. The `queryForm` displays a set of inputs and a 'Search' button. This sets the parameters and sends a search to the server (e.g. a REST api provided by RESTHEART for MongoDB). The results are transformed (map, reduce, filter) and loaded into the ui-grid.

# Bike Route Frontend
This frontend built using Vue utilizes a [RESTful](https://github.com/lbuibel/logan-uibel-RESTful-Node-Server) api built with Nodejs, and a [GRAPHQL](https://github.com/lbuibel/logan-uibel-graphql-server) api built with Prisma and Apollo Server.
## Setting up the server
To fully view this project, downloading and running a GraphQL server is first required. To do so, check out [logan-uibel-graphql-server](https://github.com/lbuibel/logan-uibel-graphql-server). Follow the instructions under 'How to Use/Starting from scratch', to start running the GraphQL server.

## Getting Started
Clone this repository:
```
git clone https://github.com/lbuibel/logan-uibel-final-project-fontend.git
```
cd into project:
```
cd logan-uibel-final-project-frontend
```
## Project Setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```


# Project Requirements
## REST

- [x] Create a meaningful (at least 5 data fields) resource through a REST endpoint that is stored in the datastore
- iframe information is automatically edited by the frontend after copying and pasting iframe info from google into the input box
- iframe is then displayed so the user can confirm if it's correct before entering
- Component that adds route can be found here:
    - [AddRouteRest](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/AddRouteRest.vue)

- [x] Read or GET meaningful data from 3 different REST endpoints
 - [REST-Homepage](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/HomeRest.vue) or "Route Deep Dive" comparatively displays route information.  
 - Route distance and grade comparisons are automatically loaded using the 'getAllCourses' endpoint.
 - Two additional components used on the rest homepage allow users to narrow down routes by grade and distance using the 'maxAverageGrade' endpoint, and the 'maxMiles' endpoint.  Examples of all three components can be found here:
    - [RouteComparisonRest](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/RouteComparisonRest.vue)
    - [SearchByGradeRest](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/SearchByGradeRest.vue)
    - [SearchByMilesRest](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/SearchByMilesRest.vue)

- [x] UPDATE at least 1 portion of meaningful data through the appropriate endpoint
- Updating routes requires a user having the route id
- Empty fields willl be updated to being empty in the datastore
    - [UpdateRoute](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/UpdateRest.vue)

- [x] DELETE some resource via the proper endpoint
- Deleting a route also requires having the id of the route you wish to delete 
    - [DeleteRoute](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/DeleteRest.vue)

> **Note**: Updating, deleting and adding routes can all be found on the [Rest-Admin](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/RestAdmin.vue) page.  For more information about the api used, checkout [logan-uibel-Restful-node-server](https://github.com/lbuibel/logan-uibel-RESTful-Node-Server).

## GRAPHQL
- [x] CREATE a meaningful (at least 5 data fields) resource through a GraphQL endpoint that is stored in the datastore
- functionally speaking, adding a route to the GRAPHQL datastore is the same process as adding a route to the restful datastore
- When a route is added correctly, you will see a 'toast' confirmation at the bottom of the page.
- The add route component can be found here:
    - [AddRouteGQL](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/AddRouteGQL.vue)
- The AddRoute query can be found here:
    - [AddRoute](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/graphql/AddRoute.gql)

- [x] Read or GET meaningful data from with at least 3 different query options from the GraphQL endpoint.
- On the homepage users will be prompted to "Search By Name".  This search component uses two different GET methods to work.
    - The first GET method is [AllRoutes](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/graphql/AllRoutes.gql), and is used to provide data for the autosuggestion searchbar so users can search the entire database.
    - The second GET method is [SearchRoutes](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/graphql/SearchRoutes.gql), and uses the name returned by the first query to search specifically for that route and return info on only one route.
    - The SearchByName component can be found [here](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/SearchByNameGQL.vue).

- Under the "Search By Name" component, there is text asking if the user knows the route id for the route they are searching for.  Clicking on this opens a section for users to do the same type of search, but uses the route id instead of name.
    - Query: [GetRoute](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/graphql/GetRoute.gql)
    - Component: [SearchByIdGQL](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/SearchByIdGQL.vue)
- Another use of the [AllRoutes](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/graphql/AllRoutes.gql) query can be found in the [AllRoutesGQL](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/AllRoutesGQL.vue) component, which is used on the [GQL-Homepage](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/Home.vue).  This component displays all of the routes inside a data iterator, that gives users the option to display only a certain amount of routes at time.

- [x] UPDATE at least 1 portion of meaningful data through an appropriate GraphQL mutation.
- Updating a route on the GRAPHQL datastore is a little easier than the REST datastore being that you don't need a route id.
- Routes are auto suggested by name using the 'AllRoutes', and 'SearchRoute' queries.
- Once the user selects the route they wish to update, the route id is automatically passed and used by the [UpdateRoute](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/graphql/UpdateRoute.gql) query to update the route.
- Update GQL component can be found [here](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/UpdateGQL.vue).

- [x] DELETE some resource using a proper GraphQL mutation.
- Deleting a route works similarily to the update route, with the id being automatically passed to the [DeleteRoute](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/graphql/DeleteRoute.gql) query.
- Delete component can be found [here](https://github.com/lbuibel/logan-uibel-final-project-fontend/blob/master/src/components/DeleteGQL.vue)

> **Note**: You'll need to run the GRAPHQL server locally to view or make any changes to the data within the datastore. To see how to do that, check out [logan-uibel-graphql-server](https://github.com/lbuibel/logan-uibel-graphql-server).
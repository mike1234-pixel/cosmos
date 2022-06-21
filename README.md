## App
This app displays the exoplanets  discovered by TESS in 2022 using the API endpoint `https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json`

The data is sorted by `releasedate`.

Clicking on a planet runs a google search for that planet.

## Running

To run this app you will need `nodejs` and `yarn`.  
Run `yarn` in this folder to install the dependencies and `yarn start` to start the app.

## Approach

In setting up this project and its architecture I have adopted maintable patterns that could handle the expansion of the application should it be further developed. 

In code style I have prioritised expressiveness and clarity.

## State Management

The application uses `redux` for global state management, and hooks may be used for state that is anticipated to only ever be used locally.

## Ajax

`axios` is used for http requests, and the requests are handled by `thunk action creators`.

## TypeScript

This app uses TypeScript as a way to write more expressive and documented code, as well as a way to catch bugs earlier. 

## BEM

This app uses the `block-element-modifier` pattern for consistent class naming.

## Testing

Unit tests are contained within the directory of the file being tested. Run `yarn test`.

## Further Development

Add more test coverage and create a CI pipeline.
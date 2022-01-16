# Nasdaq

## Overview
Nasdaq app is a stock market app that allows you to browse all stocks listed in Nasdaq exchange with their ticker, name, and details.
You can view the app here: https://mariamkhmahran.github.io/nasdaq

## Technologies

### The Stack

The stack includes:

1. `React` for building components and UI
2. `overmind` as a client-side cache and centralized store
3. `TypeScript` for type safety
4. `styled-components` for styling
5. `react-testing-library` for testing
6. `Prettier` and `Eslint` to maintain conformance to style guidelines

### API
[Polygon](https://polygon.io/docs) API was used to get all the data about the tickers and their open/close details

## Architecture

The web app is a React app built on `create-react-app`.

### Root directory

Here's an overview of the root directory tree:

```
./src/
  - __tests__/ // tests
  - assets/ // global assets (images & theme files)
  - components/ // global components
  - overmind-state/ // overmind state and configuration
  - screens/ // app's main screens
  - types/ // global types
  - utils/ // global functions
```

- `screens/`
  The app consists of three main screens and two error screens
  
  **Main Screens:**
  
  - Splash Screen.
    
  - Explore Screen:
       
       *Explore a list of all stocks listed in Nasdaq exchange. Click on any of the stocks for further details.*
    
  - Details Screen:
       
       *Learn more about the stocks and their daily open, high, low, and close (OHLC) values.*
  
  **Error Screens:**
  
  - 404 Not Found.

  - Something went wrong.

## Deployment

The app was deployed and hosted on Github pages. you can view the live version [here](https://mariamkhmahran.github.io/nasdaq/).

## Development Setup

To run the app locally for development follow the next steps:

1. Clone the repository.
2. Change your directory to **nasdaq** by running `cd nasdaq`
3. Run `yarn` to install dependencies.

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./style.css";
import cardsExamples from "./others/cardsExamples"

import albumReducer from "./reducers/albumReducer"

import App from "./components/App";

const store = createStore(albumReducer)

const rootElement = document.getElementById("root");
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

import { createStore } from "redux";
import { rootReducres } from "./reducres/index";

export const store= createStore(rootReducres,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



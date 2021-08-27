import { createStore } from "redux";
import {reducers} from "./reducers";

const initialState = {
    getConverges: []
}

export default createStore(reducers, initialState);
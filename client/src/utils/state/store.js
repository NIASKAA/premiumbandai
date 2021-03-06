import { createStore } from "redux";
import {reducers} from "./reducers";

const initialState = {
    getConverges: [],
    getHG: [],
    getRG: [],
    getMG: [],
    getPG: [],
    getSD: [],
    getOthers: [],
    getEnsemble: [],
    getGFrame: [],
}

export default createStore(reducers, initialState);
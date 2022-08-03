import { configureStore, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
const initialState = {
    company: null,
    products: null,
    collections: null,
    token: null,
    product: null,
    collection: null,
    idProduct: null,
    idCollection: null,
    user: null,
    login: null,
    api:"https://api.genuka.com/api/2021-10/",
    url: document.location.protocol + "//" + document.location.hostname,
    cart: {
        product: [],
        lastName: null,
        firstName: null,
        total: null,

    }
};

const dataSlice = createSlice({
    name: "data",
    initialState: initialState,
    reducers: {
        /**setter */
        setCompany: (state, action) => {
            state.company = action.payload
        },
        setLogin: (state, action) => {
            state.login = action.payload
        },
        setProducts: (state, action) => {
            state.products = action.payload
        },
        addProducts: (state, action) => {
            for (let index = 0; index < action.payload.length; index++) {
                const element = action.payload[index];
                state.products.data.push(element)

            }
        },
        addProduct: (state, action) => {
            state.products.data.push(action.payload)
        },
        addCollections: (state, action) => {
            for (let index = 0; index < action.payload.length; index++) {
                const element = action.payload[index];
                state.collections.data.push(element)

            }
        },
        addCollection: (state, action) => {
            state.collections.data.push(action.payload)
        },
        setCollections: (state, action) => {
            state.collections = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        },
        setProduct: (state, action) => {
            state.product = action.payload
        },
        setCollection: (state, action) => {
            state.collection = action.payload
        },
        setIdProduct: (state, action) => {
            state.idProduct = action.payload
        },
        setIdCollection: (state, action) => {
            state.idCollection = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setCart: (state, action) => {
            state.cart = action.payload
        },
        
        
    }
});
export const { 
    setCompany,
    setLogin,
    setProducts,
    addProducts,
    addProduct,
    addCollection,
    setCollections,
    setToken,
    setProduct,
    setCollection,
    setIdProduct,
    setIdCollection,
    setUser,
    setCart,getCompany } = dataSlice.actions;
export const store = configureStore({
    reducer: {
        data: dataSlice.reducer
    }
});
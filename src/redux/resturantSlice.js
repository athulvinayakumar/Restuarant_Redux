import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//api call 
export const fetchRestuarant = createAsyncThunk('restaurantList/fetchRestuarant', () => {
    return axios.get('/restaurant.json').then(response => response.data.restaurants)
})


// Thunk: accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
// Thunk is not a part of slice its a method in toolkit


const restaurantSlice = createSlice({
    name: 'restaurantList',
    initialState: {
        loading: false, //pending or not
        allRestaurant: [], // resolve
        searchRestaurant: [],// when filter is applied on returning to original state is not possible that is why a new state is created. 
        error: '' //reject
    },

    // now we need to do api call - which is a asynchronous function but reduxe is a synchronous function

    extraReducers: (builder) => {
        //builder holds the value/response from the thunk
        builder.addCase(fetchRestuarant.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRestuarant.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurant = action.payload
            state.searchRestaurant = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestuarant.rejected, (state, action) => {
            state.loading = false
            state.allRestaurant = ""
            state.error = action.error.message
        })
    },

    reducers: {
        search: (state, action) => {
            state.allRestaurant = state.searchRestaurant.filter(item => item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})


export const { search } = restaurantSlice.actions
export default restaurantSlice.reducer





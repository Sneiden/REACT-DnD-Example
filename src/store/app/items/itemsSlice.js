import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        items: [
            // {
            //     id: 1,
            //     name: 'item',
            //     itemType: 1, //Item
            //     index: 0,
            //     idItemGroup: ''
            // },
            // {
            //     id: 2,
            //     name: 'item',
            //     itemType: 2, //Group
            //     index: 1,
            //     idItemGroup: ''
            // },
        ],
        loading: true,
    },

    reducers: {
        //payload = objeto item
        addItem: (state, { payload }) => {
            state.items.push(payload);
        },
        //payload = id
        deleteItem: (state, { payload }) => {
            state.items = state.items.filter(item => item.id !== payload && item);
        },
        //payload = objeto item 
        updateItem: (state, { payload }) => {
            state.items = state.items.map(item => item.id === payload.id ? payload : item);
        },
    }
});

export const { addItem, deleteItem, updateItem } = itemsSlice.actions;
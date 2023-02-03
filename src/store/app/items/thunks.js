import { addItem, updateItem } from "./itemsSlice";

export const startAddItem = (item) => {
    return async (dispatch,getState) => {
        // const { items, loading } = getState().items;
        dispatch(addItem(item));
    }
}

export const startEditItem = (item) => {
    return async (dispatch,getState) => {
        // const { items, loading } = getState().items;
        dispatch(updateItem(item));
    }
}
const {createSlice} = require( '@reduxjs/toolkit')


export const Statuses = Object.freeze({
    IDEL : "idel",
    LODING: "Loding",
    ERROR: "Error"
});


const productSlice = createSlice({

  name: "product" , 
  initialState: {
    data: [],
    status: Statuses.IDEL,
  },

  reducers: {
    setProducts(state, action){
        state.data = action.payload;
    },
    setStatus(state, action) {
        state.status = action.payload
    },
     
  }

})

export const {setProducts , setStatus} = productSlice.actions;
export default productSlice.reducer;


// Thunks

export function fetchProducts(){
    return async function fetchProductsThunck( dispatch, getState){
        dispatch(setStatus(Statuses.LODING))
        try{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(Statuses.IDEL))
        }catch(err){
            dispatch(setStatus(Statuses.ERROR))
        }
    }
}
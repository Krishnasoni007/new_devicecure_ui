import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "address",
  initialState: {
      id:'',
      name:"",
      phone_number: "",
      alternate_number: "",
      house_number: "",
      street: "",
      pin_code: "",
      landmark: "",
      address_type:"",
      city:''
      
  },
  reducers: {
    setAddress(state,action){
        return {
          ...state,
          ...action.payload
        }
    }
  },
});
export const {setAddress} = addressSlice.actions;

export default addressSlice;

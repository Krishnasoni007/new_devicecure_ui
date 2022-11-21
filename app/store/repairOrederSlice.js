import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  mobile_brand: "",
  mobile_model: "",
  mobile_color: "",
  issues: [],
  repair_date : "",
  wallet_money: 0,
  time_slot:{},
  time_slot_id: 1,
  address_id : null,
  coupon_id: ""
  
}

const repairOrderSlice = createSlice({
    name:'repairOrder',
    initialState:initialState,
    reducers:{
      setPhoneDetail(state,action){
            const data = action.payload;
            return {
                ...state,
                ...data
            }
      },
      clearFields(state,action){
        state = initialState;
      }
    }

    
})

export const {setPhoneDetail,setAddress} = repairOrderSlice.actions
export default repairOrderSlice
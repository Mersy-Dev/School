import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import studService from './studService'


// const student = JSON.parse(localStorage.getItem("student"));





// const initialState = {
//     student: student ? student : null,
//     isError: false,
//     isSuccess: false,
//     isLoading: false,
//     message: "",
// }








export const studSlice = createSlice({
    name: "student",
    initialState: {
        student: []
    },
    reducers:{
        getStud: (state, action) => {
            state.student = action.payload.map(stud => {
                return{id:stud._id, firstName: stud.firstName, lastName:stud.lastName, email:stud.email, password: stud.password, address:stud.address, city:stud.city, phone:stud.phone, sttate:stud.sttate}
            })
        },
        addStud: (state, action) => {
            state.student.push(action.payload)
        }
      
    },
   
})





export const {getStud, addStud} = studSlice.actions;
export default studSlice.reducer;

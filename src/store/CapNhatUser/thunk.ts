// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { AccountSchemaType } from "schemas";
// import { capNhatUser } from "services";

// export const UpdateUserThunk  = createAsyncThunk(
//     'capNhatUser/UpdateUser',
//     async (payload: AccountSchemaType, { rejectWithValue }) => {
//         try {
//             const data = await capNhatUser.getUpdateUser(payload)
//             // console.log('data', data);
            
//             return data.data.content
           
               
            
//         } catch (err) {
//             return rejectWithValue(err)
//         }
//     }

// )
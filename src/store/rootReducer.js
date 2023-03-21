import authSlice from "./authSlice"
import usersSlice from "./usersSlice"

const rootReducer = {
    auth: authSlice,
    users: usersSlice
} 
export default rootReducer 
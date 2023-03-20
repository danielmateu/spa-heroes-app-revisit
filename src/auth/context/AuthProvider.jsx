import { useReducer } from "react"
import { types } from "../types/types"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false
}


export const AuthProvider = ({ children }) => {

    const [authState, dispatch] = useReducer(authReducer, initialState)

    const login = (name = '') => {
        const action = {
            type: types.login,
            payload: {
                name,
                id: '123'
            }
        }

        dispatch(action)
    }


    return (
        <AuthContext.Provider
            value={{
                login: login,
                ...authState
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}



export default AuthContext

import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas sobre authReducer', () => {

    test('Debe de retornar el estado por defecto', () => {

        const state = authReducer({ logged: false }, {})
        expect(state).toEqual({ logged: false })

    })

    test('Debe de autenticar y colocar el name del usuario', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'Dani',
                id: 'ABC'
            }
        }

        const state = authReducer({ logged: false }, action)
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })

    test('Debe de borrar el name del usuario y logged en false', () => {

        const state = { logged: true, user: { name: 'Dani', id: 'ABC' } }
        const action = {
            type: types.logout,
        }

        const newState = authReducer(state, action)
        expect(newState).toEqual({ logged: false })

    })

    
})
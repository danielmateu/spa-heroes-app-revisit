import { AuthContext } from "../../src/auth/context/AuthContext"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"

describe('Pruebas sobre PrivateRoute', () => {

    test('Debe mostrar el children si está autenticado', () => {

       /* Mocking the localStorage.setItem function. */
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: '123'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <PrivateRoute>
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')

    })
})
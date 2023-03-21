import { AuthContext } from "../../src/auth/context/AuthContext"
import { AppRouter } from "../../src/router/AppRouter"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas sobre AppRouter', () => {

    test('Debe de mostrar el login si no está autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug()
        expect(screen.getAllByText('Login').length).toBe(1)
    })

    test('Debe de mostrar el componente marvel si está autenticado', () => {
        const contextValue = {
            // dispatch: jest.fn(),
            user: {
                logged: true,
                user: {
                    name: 'Juan',
                    id: '123'
                }
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // screen.debug()
        // expect(screen.getAllByText('Marvel').length).toBeGreaterThan(1)
    })


})
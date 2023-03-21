import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"

import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas sobre PublicRoute', () => {

    test('Debe mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false,
            // dispatch: jest.fn()
        }

        render(
            <AuthContext.Provider value={{ contextValue }}>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta Pública')).toBeTruthy()
    })

    test('Debe navegar si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Juan',
                id: '123'
            },
            // dispatch: jest.fn()
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />
                        <Route path='marvel' element={<h1>Página Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug()

        expect(screen.getByText('Página Marvel')).toBeTruthy()

    })

    test('Debe bloquear el componente si está autenticado', () => {

    })
})
import { render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/auth/context/AuthContext"
import { Navbar } from "../../../src/ui/components/Navbar"

const mockUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}))

describe('Pruebas sobre Navbar', () => {

    const contextValue = {
        user: {
            name: 'Fernando',
            logged: true
        },
        logout: jest.fn()
    }

    beforeEach(() => {
        jest.clearAllMocks()
    })

    test('Debe de mostrarse el componente correctamente', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        
        // screen.debug()
        expect(screen.getByText('Comics App')).toBeTruthy()
        expect(screen.getByText('Marvel')).toBeTruthy()
        expect(screen.getByText('DC')).toBeTruthy()
        expect(screen.getByText('Logout')).toBeTruthy()

    })

    test('Debe de mostrar el nombre del usuario logueado', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect(screen.getByText('Fernando')).toBeTruthy()
    })

    test('Debe de llamar el logout y el useNavigate', () => {

        // const historyMock = {
        //     replace: jest.fn()
        // }

        render(
            <MemoryRouter>
                <AuthContext.Provider value={contextValue}>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        const logoutButton = screen.getByText('Logout')
        logoutButton.click()

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true})
    })
})
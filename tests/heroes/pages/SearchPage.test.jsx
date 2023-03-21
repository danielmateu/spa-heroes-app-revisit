import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
// import { useNavigate } from "react-router-dom"
import SearchPage from "../../../src/heroes/pages/SearchPage"

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe('Pruebas sobre SearchPage', () => {

    beforeEach(() => {
        mockNavigate.mockClear()
    })

    test('Debe mostrarse correctamente con valores por defecto', () => {

        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        // screen.debug()
        expect('body').toMatchSnapshot()
    })

    test('Debe mostrar a Batman si el usuario escribió batman', () => {

        const history = {
            location: {
                search: '?q=batman'
            }
        }

        render(
            <MemoryRouter
                initialEntries={['/search?q=batman']}
            >
                <SearchPage history={history} />
            </MemoryRouter>
        )
        const inputValue = screen.getByRole('textbox')
        expect(screen.getByText('Batman')).toBeTruthy()
        expect(inputValue.value).toBe('batman')
        // const img = screen.getByRole('img')
        // expect( img.src ).toContain('../../../heroes/dc-batman.jpg')
        // screen.debug()
        // to get the aria-label of an element
        const searchAlert = screen.getByLabelText('search-alert')
        // To appear in the document
        expect(searchAlert).toBeTruthy()

        const dangerAlert = screen.queryByLabelText('danger-alert')
        expect(dangerAlert.style).toHaveProperty('display', 'none')
    })

    test('Debe mostrar un error si no se encuentra el heroe', () => {

        const history = {
            location: {
                search: '?q=btman'
            }
        }

        render(
            <MemoryRouter
                initialEntries={['/search?q=btman']}
            >
                <SearchPage history={history} />
            </MemoryRouter>
        )
        // const inputValue = screen.getByRole('textbox')
        expect(screen.getByText('There\'s no results with')).toBeTruthy()
        // expect(inputValue.value).toBe('btman')
    })

    test('Debe llamar el navigate a la pantalla nueva', () => {

        const history = {
            location: {
                search: '?q=batman'
            }
        }
        
        const navigate = jest.fn()
        render(
            <MemoryRouter
                initialEntries={['/search?q=batman']}
            >
                <SearchPage history={history} navigate={navigate} />
            </MemoryRouter>
        )
        const inputValue = screen.getByRole('textbox')
        expect(inputValue.value).toBe('batman')

        const form = screen.getByRole('form')
        form.submit()

        expect(mockNavigate).toHaveBeenCalledWith('?q=batman')
    })
})
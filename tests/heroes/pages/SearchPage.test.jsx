import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import SearchPage from "../../../src/heroes/pages/SearchPage"

describe('Pruebas sobre SearchPage', () => {

    test('Debe mostrarse correctamente con valores por defecto', () => {

        render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )
        // screen.debug()
        expect('body').toMatchSnapshot()
        // expect( screen.getByText('Search your hero') ).toBeTruthy()
        // expect( screen.getByText('Search') ).toBeTruthy()
        // expect( screen.getByText('Results') ).toBeTruthy()
        // expect( screen.getByText('Search a hero') ).toBeTruthy()
        // expect( screen.queryByText('There\'s no results with') ).toBeNull()
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
        expect( screen.getByText('Batman') ).toBeTruthy()
        expect( inputValue.value ).toBe('batman')
        // const img = screen.getByRole('img')
        // expect( img.src ).toContain('../../../heroes/dc-batman.jpg')
        // screen.debug()
        // to get the aria-label of an element
        const searchAlert = screen.getByLabelText('search-alert')
        // To appear in the document
        expect( searchAlert ).toBeTruthy()

        const dangerAlert = screen.queryByLabelText('danger-alert')
        expect( dangerAlert.style ).toHaveProperty('display', 'none')


    })
})
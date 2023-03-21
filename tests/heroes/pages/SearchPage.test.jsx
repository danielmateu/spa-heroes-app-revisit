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
})
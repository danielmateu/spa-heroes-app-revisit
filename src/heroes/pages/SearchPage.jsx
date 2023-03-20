import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers/getHeroesByName'
import { HeroCard } from '../components/HeroCard'

// import { HeroCard } from '../components/HeroCard'

const SearchPage = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse(location.search)
    const heroesFiltered = getHeroesByName(q)

    const showSearchResults = (q.length === 0) 
    const showNoResults = (q.length > 0 && heroesFiltered.length === 0)

    const { searchText, onInputChange } = useForm({
        searchText: q,
    })

    const onSearchSubmit = (e) => {
        e.preventDefault()
        // if(searchText.trim().length <=1 ) return
        navigate(`?q=${searchText.toLowerCase().trim()}`)
    }

    return (
        <main className="flex gap-10 py-10">
            <div className='w-6/12'>
                <div className='flex flex-col gap-10'>
                    {/* <h4>Searching</h4> */}
                    <form action="" className='flex flex-col gap-4'
                        onSubmit={onSearchSubmit}
                    >
                        <label htmlFor="searchtext">Search your hero</label>
                        <input
                            type="text"
                            placeholder='Search your hero'
                            className='py-2 px-4'
                            name='searchText'
                            autoComplete='off'
                            id='searchText'
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                        '>Search</button>
                    </form>
                </div>
            </div>
            <div className='w-6/12'>
                <h4>Results</h4>

                <div className="alert alert-primary" style={{display: showSearchResults ? '' : 'none'}}>Search a hero</div>

                <div className="alert alert-danger" style={{display:  showNoResults ? '' : 'none'}}>There's no results with <b>{q}</b></div>
                {
                    heroesFiltered.map(hero => (
                        <HeroCard key={hero.id} hero={hero} />
                    ))
                }
            </div>
        </main>
    )
}

export default SearchPage

import { HeroCard } from './HeroCard'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4'>
            {
                heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero}/>
                ))
            }
        </div>
    )
}

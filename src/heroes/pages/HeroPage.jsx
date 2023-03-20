
import { useMemo } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

const HeroPage = () => {

    const params = useParams()
    const { heroId } = params

    const hero = useMemo(() => getHeroById(heroId), [heroId]); 
    if (!hero) return <Navigate to='/marvel' />

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero
    const heroImage = `../heroes/${heroId}.jpg`

    const handleReturn = () => {
        window.history.back()
    }

    return (
        <main className='flex flex-col md:flex-row p-10 gap-10'>

            <img src={heroImage} alt={superhero} className='w-full'/>

            <div className=' text-start'>
                <h1 className='text-3xl'>{superhero}</h1>
                <p className='text-2xl'><b>Aleter ego: </b>{alter_ego}</p>
                <p className='text-2xl'><b>Publiser: </b>{publisher}</p>
                <p className='text-2xl'><b>First appearance: </b>{first_appearance}</p>
                <p className='text-2xl'><b>Characters: </b> {characters}</p>
            </div>

            <button
                onClick={handleReturn}
                className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition'
            >Go back</button>

        </main>
    )
}

export default HeroPage
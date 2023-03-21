
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
        <main className='flex flex-col md:flex-row py-10 gap-10 items-center justify-center'>
            <img src={heroImage} alt={superhero} className='w-2/6'/>
            <div className=' text-start w- flex flex-col gap-4'>
                <h1 className='text-slate-500 text-3xl'>{superhero}</h1>
                <hr />
                <p className='text-slate-500 text-2xl'><b>Alter ego: </b><br /><small className='text-slate-400'>{alter_ego}</small></p>
                <p className='text-slate-500 text-2xl'><b>Publiser: </b><br /><small className='text-slate-400'>{publisher}</small></p>
                <p className='text-slate-500 text-2xl'><b>First appearance: </b><br /><small className='text-slate-400'>{first_appearance}</small></p>
                <p className='text-slate-500 text-2xl'><b>Characters: </b><br /><small className='text-slate-400'>{characters}</small></p>
            </div>
            <button
                onClick={handleReturn}
                className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded transition'
            >Go back</button>
        </main>
    )
}

export default HeroPage
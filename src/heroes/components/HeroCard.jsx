import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero
    const heroImage = `../../../heroes/${id}.jpg`

    const charactersByHero = (<p className='text-slate-300 text-start'>{characters}</p>)

    return (
        <div className='flex p-4 hover:shadow-md  shadow-2xl transition rounded-xl '>
            <div className='w-3/6'>
                <img src={heroImage} alt={hero.superhero} className='mx-auto' />
            </div>
            <div className='w-3/6 pl-2 flex flex-col gap-4'>
                <p className='text-slate-500 '>{superhero}</p>
                <p className='text-slate-400 text-start'>{alter_ego}</p>
                
                {/* {
                    (alter_ego !== characters) && charactersByHero
                } */}

                <p className='text-slate-300 text-start'>{first_appearance}</p>

                <Link to={`/hero/${id}`} className='text-sky-500 text-start'>
                    Más info...
                </Link>
            </div>
        </div>
    )
}

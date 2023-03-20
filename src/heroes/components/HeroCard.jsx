import React from 'react'

export const HeroCard = ({ hero }) => {

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero
    const heroImage = `../../../heroes/${id}.jpg`
    return (
        <div className='flex p-4 hover:shadow-md  shadow-2xl transition rounded-xl '>
            <div className='w-3/6'>
                <img src={heroImage} alt={hero.superhero} className='mx-auto' />
            </div>
            <div className='w-3/6 pl-2'>
                <p className='text-slate-500'>{superhero}</p>
                <p className='text-slate-400'>{alter_ego}</p>
                {
                    (alter_ego !== characters) && <p className='text-slate-300 text-start'>{characters}</p>
                }
            </div>
        </div>
    )
}

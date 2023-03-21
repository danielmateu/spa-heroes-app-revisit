import { HeroList } from "../components/HeroList"


const DCPage = () => {

    const publisher = 'DC Comics'

    return (
        <>
            <h1 className='text-center text-3xl py-4'>{publisher}</h1>

            <HeroList
                publisher={publisher}
            />
        </>
    )
}

export default DCPage
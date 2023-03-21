import { HeroList } from "../components/HeroList"


const MarvelPage = () => {

  const publisher = 'Marvel Comics'

  return (
    <>
      <h1 className='text-center text-3xl py-4'>{publisher}</h1>

      <HeroList
        publisher={publisher}
      />
    </>
  )
}

export default MarvelPage
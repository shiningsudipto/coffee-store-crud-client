import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/shared/CoffeeCard'

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee)

  return (
    <>
      <h2>Total Coffee : {loadedCoffee.length}</h2>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 gap-6 md:mx-10'>
          {
            coffees.map(coffee => <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            />)
          }
        </div>
      </div>
    </>
  )
}

export default App

import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'

const SearchBar = ({filter, setFilter}) => { 
  return (
    <div className="flexCenter search-bar">
    <HiLocationMarker color="var(--blue)" size={25} />
    <input
     placeholder='Escribir por titulo/ciudad/pais' 
     type="text"  
     value={filter} 
     onChange={(e)=> setFilter(e.target.value)}/>
    <button className="button">Buscar</button>
  </div>
  )
}

export default SearchBar

import React, { useEffect, useState } from 'react'

function Location() {
    const [planets,setPlanets] = useState([])

    const getLocation= async () => {
       const res = await fetch("https://rickandmortyapi.com/api/location")
       const data = await res.json();
       setPlanets(data.results)
       console.log(data);
    }

    useEffect(() => {
        getLocation()
    }, [])
  
  
    return (
        <div className='Location-Wrapper'>
            <table>
             <thead>
                <tr>
                 <th>Name</th>
                 <th>Type</th>
                 <th>Dimension</th>
                 </tr>
             </thead>
            <tbody>
                {planets.map((planet) => {
                  return (
                        <tr>
                         <td>{planet.name}</td>
                            <td>{planet.type}</td>
                             <td>{planet.dimension}</td>
                        </tr>
                         )
                         })}
                </tbody>
         </table>
    </div>
  )
}

export default Location
import React, { useEffect, useState } from "react";

function Episodes() {
  const [newEpisode, setNewEpisode] = useState([]);

  const fetchEpisodes = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/episode");
    const data = await res.json();
    setNewEpisode(data.results);
    
  };
  useEffect(() => {
    fetchEpisodes();
  },[]);

  
  return (
    <div className="Episode-Wrapper">
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Air Date</th>
          <th>Episode</th>
          </tr>
        </thead>
        <tbody>
        {newEpisode.map((x) => {
          return (
            <tr>
              <td>
                {x.name} 
              </td>
              <td>
                {x.air_date}
              </td>
              <td>
                {x.episode}
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Episodes;

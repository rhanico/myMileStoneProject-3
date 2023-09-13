import React, { useEffect, useState } from 'react';
import fecth from 'isomorphic-fetch';

function App() {
    const [ userData, setUserData ] = useState ([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

      fetch('/api')
                                   // will "FETCH" data from my back-end express server. //
        .then((response) => {
          if (!response.ok) {
            throw new Error( 'New Response Was Not Ok');
          }
          return response.json();
        })
        .then((data) => {
          setUserData(data.user)
          setLoading(false);       // set LOADING to false once data is fetched 
        })
        .catch((error) => {

          setLoading(false);
        });
    }, []);

  return (
    <div>
      <h1> Hello Word! </h1>
      {loading ? (
        <p> LOADING ... </p>
      ) : (
        <ul>
          {userData.map (( user, index ) => (
            <li key = {index}> {user} </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;

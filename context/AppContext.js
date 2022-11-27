import { createContext, useContext } from 'react';
import { useState, useEffect } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [list, setList] = useState([]);
  // console.log(list);

  useEffect(() => {
    fetch('https://imdb-api.com/en/API/MostPopularMovies/k_y1v09i8b')
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        setList(data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <AppContext.Provider value={list}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

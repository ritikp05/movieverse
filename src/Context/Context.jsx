

export const API_URL = 'http://www.omdbapi.com/?apikey=6455c66'
import React, { createContext, useEffect, useState } from 'react'
export const Datacontext = createContext()
const Context = ({ children }) => {

    const [isLoading, setIsloading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [query, Setquery] = useState("titanic");
    const [isError, setIserror] = useState({ show: "false", msg: "" });



    async function getdata(url) {
        setIsloading(true)
            
        try {
            const data = await fetch(url);
            const result = await data.json();
            if (result.Response === "True") {
                setIsloading(false)
                setMovie(result.Search)
                console.log(result.Search)
                     setIserror({ show: false, msg: "" })
            }
            else {

                setIserror({ show: true, msg: result.Error })
                // setIsloading(true)
                setMovie([])
      setIsloading(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        let timer = setTimeout(() => {
            getdata(`${API_URL}&s=${query}`);
        },1400);
        return () => clearTimeout(timer);
    }, [query])

    return (
        <>
            <Datacontext.Provider value={{ isLoading, setIsloading, movie, isError, query, Setquery, setMovie }}>
                <div>{children}</div>

            </Datacontext.Provider>
        </>
    )
}

export default Context
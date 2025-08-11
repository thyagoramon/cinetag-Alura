import { useState } from "react"
import { Context } from "./context"
import moviesJson from "@/json/db.json"

export const ContextProvider = ({children}) => {
  const [movies, setMovies] = useState(moviesJson)  

  return (
    <Context.Provider value={{movies, setMovies}}>
      {children}
    </Context.Provider>
  )
}

import React, { useState } from 'react'
import NoteContext from "./NoteContext"
export default function NoteState({children}) {
    const [userContext , setUserContext] = useState(null)
  return (
<NoteContext.Provider value={ {userContext , setUserContext}}>
    {children}
</NoteContext.Provider>
  )
}

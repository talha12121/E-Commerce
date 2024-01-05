import React from 'react'
import "../App.css"
import RouterApp from './Router';
import NoteState from './Context/NoteState';

function App() {
  return (
   <>
   <NoteState>
    <RouterApp />
   </NoteState>
    
    
    </>
  )
}
export default App;


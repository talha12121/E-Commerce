import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const [userContext, setUserContext] = useState(null);

 
  return (
    <NoteContext.Provider value={{ userContext, setUserContext }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;

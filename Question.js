import React, { useState } from "react";
import {HiPlus,HiMinus} from "react-icons/hi"
const Question = ({ question, info }) => {
  const [Showinfo, setShowinfo] = useState(false);
  return (
    <>
      <h1>{question}</h1>
      <button onClick={()=>setShowinfo(!Showinfo)}>
        {Showinfo ? <HiMinus /> : <HiPlus />}
      </button>
      {Showinfo && <h2>{info}</h2>}
    </>
  );
};

export default Question;
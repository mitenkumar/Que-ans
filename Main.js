import React, { useState } from "react";
import Api from "./Api";
import Question from "./Question";

const Main = () => {
  const [question, setquestion] = useState(Api);
  return (
    <>
      {question.map((elem) => {
        return <Question key={elem.id} {...elem}></Question>;
      })}
    </>
  );
};

export default Main;
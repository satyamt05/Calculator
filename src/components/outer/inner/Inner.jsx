import React, { useState } from "react";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Inner = ({ arr }) => {
  const [val, setval] = useState("");

  const handleonclick = (item) => {
    if (item === "clr") {
      setval("");
    } else if (item === "=") {
      try {
        const result = eval(val);
        setval(result.toString());
      } catch (error) {
        setval("Error");
      }
    } else {
      setval(val + item);
    }
  };
 
  return (
    <div>
      {/* <input type="Number" onChange={(e) => handleonchange(e.target.value)} /> */}
      <div className="display">{val}</div>
      <div className="container text-center">
        <div className="    ">
          {arr.map((item) => (
            <button
              className=" ke g-col-4"
              onClick={() => handleonclick(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inner;

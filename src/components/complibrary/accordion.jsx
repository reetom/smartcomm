import React from "react";

function Accordion({Data}) {
  
  
    
    return (
      <div>
        {qa.map(function(e, i) {
          return <List question={e.question} answer={e.answer} key={i} />;
        })}
      </div>
    );
  
}
export default Accordion;
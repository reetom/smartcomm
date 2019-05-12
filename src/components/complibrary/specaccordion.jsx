import React from 'react';
function SpecAccordion (props){

  let current = props.currentIndex === props.index;
        return (
            <div>
              <ul className="holder">
                <li className="question" onClick={() => props.handleChange(props.index)}>Specification</li>
                <li className={current ? "answer open" : "answer"} >{current && <p>hello world</p>}</li>
              </ul>
             </div>
        );
}
export default SpecAccordion;
import React from 'react';
function SpecAccordion (props){

  let current = props.currentIndex === props.index;
  const productSpecs = props.productSpecs;
 

        return (
            <div>
              <ul className="holder">
                <li className="question" onClick={() => props.handleChange(props.index)}>Specification</li>
                <li className={current ? "answer open" : "answer"} >{current && <p>product specs goes here</p>}</li>
              </ul>
             </div>
        );
}
export default SpecAccordion;
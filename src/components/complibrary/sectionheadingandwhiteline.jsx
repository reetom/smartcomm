import React from 'react';
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

function SectionHeadingAndWhiteLine (props){
    const color = props.color;
        return (
            <div className="section-heading">
                <h3>{props.heading}</h3>
                {ColoredLine}
                <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
             </div>
             
        );
}
export default SectionHeadingAndWhiteLine;
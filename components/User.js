import React from 'react';

const user = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
        <style jsx>{`
        div {
            border: solid 1px #ccc;
            padding: 10px;
            box-shadow: 0 2px 5px #ccc;
            text-align: center;
            margin: 2rem auto;
        } 
      `}</style>
    </div>
);

export default user;
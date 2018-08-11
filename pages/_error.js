import React from 'react';
import Link from 'next/link';


const errorPage = () => (
    <div>
        <h1>Ooops, something went wrong.</h1>
        <p>Try going<Link href="/"><a> Back</a></Link></p>
        <style jsx>{`
        a {
            text-decoration: none;
        }

        div {
            border: solid 1px #ccc;
            padding: 10px;
            box-shadow: 0 2px 3px #ccc;
            text-align: center;
        }

        h1 {
            color: red;
        } 
         
      `}</style>
    </div>
);

export default errorPage;
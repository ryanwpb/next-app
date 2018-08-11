import React from 'react';
import Link from 'next/link';
import User from '../../components/User.js'

const authindexPage = (props) => (
    <div>
        <h1>The Auth Index Page of {props.appName}</h1>
        <p><Link href="/"><a>Home</a></Link></p>
        <User name="Ryan Graham" age={38} />
        <User name="Natalie Lenderman" age={26} />
        <style jsx>{`
        h1 {
            color: #072F5F; 
        }
         a {
            text-decoration: none;
            
        }
      `}</style>
    </div>
);

authindexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'Super App (Auth)' });
        }, 1000)
    });
    return promise;
}

export default authindexPage;
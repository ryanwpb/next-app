import React from 'react';
import Link from 'next/link';
import User from '../../components/User.js'

const authindexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <p><Link href="/"><a>Home</a></Link></p>
        <User name="Ryan Graham" age={38} />
        <style jsx>{`
         a {
            text-decoration: none;
        }
      `}</style>
    </div>
);

export default authindexPage;
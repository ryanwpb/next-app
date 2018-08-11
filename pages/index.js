import React, { Component } from 'react';
import Link from 'next/link';


class IndexPage extends Component {
    getInitialContext(context) {
        console.log(context);
    }
    render() {
        return (
            <div>
                <h1>The Main Page</h1>
                <p>Go to<Link href="/auth"><a> Auth</a></Link></p>
                <style jsx>{`
               a {
                  text-decoration: none;
              }
            `}</style>
            </div>
        )
    }
}

export default IndexPage;
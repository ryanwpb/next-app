import React, { Component } from 'react';
import Link from 'next/link';


class IndexPage extends Component {
    static async getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'Super App' });
            }, 1000)
        });
        return promise;
    }
    render() {
        return (
            <div>
                <h1>The Main Page of {this.props.appName}</h1>
                <p>Go to<Link href="/auth"><a> Auth</a></Link></p>
                <style jsx>{`
                h1 {
                  color: #072F5F;
                }
               a {
                  text-decoration: none;
                }
            `}</style>
            </div>
        )
    }
}

export default IndexPage;
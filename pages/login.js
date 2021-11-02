import { Fragment } from 'react'
import LoginPage from '../Components/Auth/LoginPage';
import Head from 'next/head'


export default function login() {
    return (
        <Fragment>
            <Head>
                <title>
                    Login - ImponExpo
                </title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <LoginPage /> 
        </Fragment>
            
    )
}

import Head from 'next/head'
import SignupPage from '../Components/Auth/SignupPage'
import { Fragment } from 'react'

export default function signup() {
    return (
        <Fragment>
            <Head>
                <title>Sign up - ImponExpo</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <SignupPage />
        </Fragment>
    )
}

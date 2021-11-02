import React, { Fragment } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = (props) => {
    return (
        <Fragment>
            <Header>
                <main className="bg-light">{props.children}</main>
            </Header>
            <Footer />
        </Fragment>
    )
}

export default Layout

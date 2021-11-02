import React, { Fragment } from 'react';
import Link from 'next/link'

const Navigation = ({ mobile }) => {
    return (
        <Fragment>


            <ul className="navbar-nav mainnav d-none d-lg-flex">
                <li className="nav-item">
                    <Link href="/message" passHref>
                        <a href="/" className="nav-link d-flex flex-column justify-content-center align-items-center">
                            <span className="bi bi-chat"></span><span>My Inbox</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/cart" passHref>
                        <a href="/" className="nav-link d-flex flex-column justify-content-center align-items-center">
                            <span className="bi bi-cart4"></span><span> Cart</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/offers" passHref>
                        <a href="/" className="nav-link d-flex flex-column justify-content-center align-items-center">
                            <span className="bi bi-megaphone"></span><span>My offers</span>
                        </a>
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link d-flex flex-column justify-content-center align-items-center">
                        <span className="bi bi-bell"></span><span>Notification</span>
                    </a>
                </li>
                <li className="nav-item">
                    <Link href="/profile" passHref>

                        <a className="nav-link d-flex flex-column justify-content-center align-items-center">
                            <span className="bi bi-person"></span><span>My Account</span>
                        </a>
                    </Link>
                </li>
            </ul>


        </Fragment>
    )
}

export default Navigation

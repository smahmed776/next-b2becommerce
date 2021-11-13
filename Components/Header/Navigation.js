import React, { Fragment, useContext } from "react";
import Link from "next/link";

const Navigation = ({ mobile, session, user, logOut }) => {
  return (
    <Fragment>
      <ul className="navbar-nav mainnav d-none d-lg-flex">
        <li className="nav-item">
          <Link href="/message" passHref>
            <a
              href="/"
              className="nav-link d-flex flex-column justify-content-center align-items-center"
            >
              <span className="bi bi-chat"></span>
              <span>My Inbox</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/cart" passHref>
            <a
              href="/"
              className="nav-link d-flex flex-column justify-content-center align-items-center"
            >
              <span className="bi bi-cart4"></span>
              <span> Cart</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/offers" passHref>
            <a
              href="/"
              className="nav-link d-flex flex-column justify-content-center align-items-center"
            >
              <span className="bi bi-megaphone"></span>
              <span>My offers</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="/"
            className="nav-link d-flex flex-column justify-content-center align-items-center"
          >
            <span className="bi bi-bell"></span>
            <span>Notification</span>
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link d-flex flex-column justify-content-center align-items-center dropdown-toggle"
            role="button"
            id="accountdropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {!session && !user && (
              <>
                <span className="bi bi-person"></span>
                <span>My Account</span>
              </>
            )}
            {user && (
              <>
                <img
                  src={user.image}
                  alt={user.name}
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
                <span>{user.name}</span>
              </>
            )}
            {session && (
              <>
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  style={{
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    objectFit: "cover"
                  }}
                />
                <span>{session.user.name}</span>
              </>
            )}
          </a>

          <ul
            className="dropdown-menu account-dropdown"
            aria-labelledby="accountdropdown"
          >
            <li>
              {user && (
                <Link href="/profile" passHref>
                  <a className="dropdown-item">Profile</a>
                </Link>
              )}
              {!user && (
                <Link href="/signup" passHref>
                  <a className="dropdown-item">Create Account</a>
                </Link>
              )}
            </li>
            <li>
              {user && (
                <button onClick={() => logOut()} className="dropdown-item">
                  Log Out
                </button>
              )}
              {!user && (
                <Link href="/login" passHref>
                  <a className="dropdown-item">Log in</a>
                </Link>
              )}
            </li>
          </ul>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navigation;

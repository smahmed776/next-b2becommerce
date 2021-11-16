import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import API from "../API";

const Navigation = ({ mobile, session, user, isLoading, isError }) => {
  const Router = useRouter();
  const logout = async () => {
    try {
      await API.delete("/logout", {
        headers: {
          "Content-Type": "application/json"
        }
      });

      Router.reload();
    } catch (error) {
      console.log(error.response, error);
    }
  };
  if (isError) {
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
              <span className="bi bi-person"></span>
              <span>My Account</span>
            </a>

            <ul
              className="dropdown-menu account-dropdown"
              aria-labelledby="accountdropdown"
            >
              <li>
                <Link href="/signup" passHref>
                  <a className="dropdown-item">Create Account</a>
                </Link>
              </li>
              <li>
                <Link href="/login" passHref>
                  <a className="dropdown-item">Log in</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </Fragment>
    );
  }
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

        {user && <li className="nav-item dropdown">
          <a
            className="nav-link d-flex flex-column justify-content-center align-items-center dropdown-toggle"
            role="button"
            id="accountdropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
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
          </a>

          <ul
            className="dropdown-menu account-dropdown"
            aria-labelledby="accountdropdown"
          >
            <li>
              <Link href="/profile" passHref>
                <a className="dropdown-item">Profile</a>
              </Link>
            </li>
            <li>
              <button onClick={() => logout()} className="dropdown-item">
                Log Out
              </button>
            </li>
          </ul>
        </li>}
      </ul>
    </Fragment>
  );
};

export default Navigation;

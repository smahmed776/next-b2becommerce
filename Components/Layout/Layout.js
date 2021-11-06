import React, { Fragment, useContext, useEffect } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import { useSession } from 'next-auth/react';
import API from '../API';
import { AuthContext } from '../GlobalContext/authContext'

const Layout = (props) => {
    const { data: session } = useSession();
    const {customerInfo, marchentInfo} = useContext(AuthContext);
    const [customer] = customerInfo;
    const [marchent] = marchentInfo;


    async function registerUser(){
        try {
            
            const data = {
                name: session.user.name,
                email: session.user.email,
                image: session.user.image
            }
            await API.post("/signup", data, {
              headers: {
                "Content-Type": "application/json",
                "Authorization": "oauth"
              },
            });
           
          } catch (error) {
            console.log(error.response, error)
      
          }
    }

    useEffect(()=> {
        if(session){
            registerUser();        
        }
    }, [session])
    return (
        <Fragment>
            <Header customer={customer[0]} marchent={marchent[0]}>
                <main className="bg-light">{props.children}</main>
            </Header>
            <Footer />
        </Fragment>
    )
}

export default Layout

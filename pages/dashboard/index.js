import { Fragment } from "react";
import Head from 'next/head'
import DashboardPage from "../../Components/Dashboard/DashboardPage";

export default function dashboard(){
    return (
        <Fragment>
            <Head>
                <title>Dashboard - ImponExpo</title>
            </Head>
            <DashboardPage user={null} />
        </Fragment>
    )
}
import React from 'react'
import CardContainer from '../../components/CardContainer'
import Head from 'next/head'

function index() {
    return (
        <>
            <Head>
                <title>Cath Control Panel</title>
            </Head>
            <div>
                <h1>Control Panel</h1>
                <CardContainer link='/controlpanel/commands'>Commands</CardContainer>
            </div>
        </>
    )
}

export default index

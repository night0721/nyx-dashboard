import React from 'react'
import CardContainer from '../../components/CardContainer'
import Head from 'next/head'
import { useSession } from 'next-auth/client'

function Index() {

    const [session, loading] = useSession()

    return (
        <>
            {!session && <>
                <h1>Seems like you&apos;re not logged in. Log in to get started!</h1>
            </>
            }
            {session && <>
                <Head>
                    <title>Cath Control Panel</title>
                </Head>
                <div>
                    <h1>Control Panel</h1>
                    <CardContainer link='/controlpanel/commands'>Commands</CardContainer>
                </div>
            </>
            }
        </>
    )
}

export default Index

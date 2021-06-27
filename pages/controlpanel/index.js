import React from 'react'
import Card from '../../components/Card'
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { Text } from "@chakra-ui/react"

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
                    <Text fontSize='4xl'>Control Panel</Text>
                    <Card title='Commands' desc='Control your commands and their settings.' link='/controlpanel/commands'/>
                    <Card title='Commands' desc='Control your commands and their settings.' link='/controlpanel/commands'/>
                    <Card title='Commands' desc='Control your commands and their settings.' link='/controlpanel/commands'/>
                </div>
            </>
            }
        </>
    )
}

export default Index

import React from 'react'
import Card from '../../components/Card'
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import { Flex, Text, Spacer } from "@chakra-ui/react"


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
                    <Text fontSize='4xl' marginBottom='15'>Control Panel</Text>
                    <Flex direction='column'>
                        <Card title='Commands' desc='Control your commands' link='/controlpanel/commands'/>
                        <Spacer/>
                        <Card title='Commands' desc='Control your commands' link='/controlpanel/commands'/>
                        <Spacer/>
                        <Card title='Commands' desc='Control your commands' link='/controlpanel/commands'/>
                    </Flex>
                </div>
            </>
            }
        </>
    )
}

export default Index

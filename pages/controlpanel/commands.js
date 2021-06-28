import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Switch
} from "@chakra-ui/react"
import Head from 'next/head'
import { useSession } from 'next-auth/client'


function Controller({initialState}) {
    const [online, setOnline] = React.useState(initialState)

    React.useEffect(()=>{
        // fake post req
        console.log(online)
    }, [online])

    return (
        <Switch
            size="lg"
            colorScheme={'teal'}
            isChecked={online}
            value={online}
            onChange={() => { setOnline(!online) }}
        />
    )
}

function Commands() {
    const [session, loading] = useSession()


    const [commands, setCommands] = React.useState(
        [
            {command: 'Help', online: true},
            {command: 'Help', online: true},
            {command: 'Help', online: true},
            {command: 'Help', online: true},
        ]
    )


    return (
        <>
            {session &&
            <>
                <Head>
                    <title>Cath Commands</title>
                </Head>
                <Table variant="simple">
                    <TableCaption>Command Controls</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Command</Th>
                            <Th>Enabled</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {commands.map((command, idx)=>(
                            <Tr key={idx}>
                                <Td>{command.command}</Td>
                                <Td>
                                    <Controller initialState={command.online}/>
                                </Td>
                            </Tr>
                        ))}
                        
                    </Tbody>
                </Table>
            </>
            } {!session && <>
                <h1>Seems like you&apos;re not logged in. Log in to get started!</h1>
            </>
            }
        </>
    );
}

export default Commands

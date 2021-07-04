import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Switch,
    Text
} from "@chakra-ui/react"
import Head from 'next/head'
import { useSession } from 'next-auth/client'
import axios from 'axios'
import { FaBullseye } from 'react-icons/fa';


function Controller({ initialState }) {
    const [online, setOnline] = React.useState(initialState)

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

function processOnline(status) {
    console.log(status)
    if (status == 'online') { return true }
    if (status == 'offline') { return false }
    if (status == 'maintenance') { return false }
}

function Commands() {
    const [session, loading] = useSession()


    const [categories, setCategories] = React.useState(
        [
            { name: 'Help', commands: [
                {name: 'Help', online: true}
            ] },
        ]
    )

    React.useEffect(() => {
        axios.get('https://cath.night0721.repl.co/api/commands')
            .then(res => setCategories(res.data))
    }, [])


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
                            {categories.map((category, idx) => (
                                <>
                                    <Text fontSize='3xl'>{category.name}</Text>
                                    {category.commands.map((command, commandIdx) => (
                                        <Tr key={commandIdx}>
                                            <Td>{command.name}</Td>
                                            <Td>
                                                <Controller initialState={processOnline(command.status)} />
                                            </Td>
                                        </Tr>
                                    ))}
                                </>
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
import React from 'react'
import Link from 'next/link'
import {Text, Flex, Button} from '@chakra-ui/react'

function Card({title, desc, link}) {
    return (
        <Link href={link}>
            <Flex direction='column' background='gray.900' width={300} height={150} p='5' borderRadius='15px'>
                <Text fontSize='2xl'>{title}</Text>
                <Text fontSize='lg' style={{ marginBottom: '10px' }}>{desc}</Text>
                <Button colorScheme='teal' variant='outline'>Learn More</Button>
            </Flex>
        </Link>
    )
}

export default Card

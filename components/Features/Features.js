import { Box, SimpleGrid } from '@chakra-ui/react'
import * as React from 'react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
import { Feature } from './Feature'

export const Features = () => (
    <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
            <Feature title="Secure by default" icon={<FcPrivacy />}>
                Cath will never leak any of your information. Ever. All your data is stored securely on our side.
            </Feature>
            <Feature title="Always up to date" icon={<FcTimeline />}>
                Cath is constantly being updated and worked on. Bugs and features, you name them, we do them.
            </Feature>
            <Feature title="Incredible statistics" icon={<FcDoughnutChart />}>
                Amazing server statistics that make tracking your server growth a breeze.
            </Feature>
            <Feature title="For everyone" icon={<FcMultipleDevices />}>
                No matter who you are, Cath is sure to have a purpose for you.
            </Feature>
        </SimpleGrid>
    </Box>
)

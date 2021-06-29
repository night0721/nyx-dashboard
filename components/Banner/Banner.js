import { Box, HStack, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { BannerLink } from './BannerLink'

export const Banner = () => (
    <Box as="section" pt="8" pb="12" height={50}>
        <Stack
            direction={{ base: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="center"
            py="3"
            px={{ base: '3', md: '6', lg: '8' }}
            color="white"
            bg={useColorModeValue('blue.600', 'blue.400')}
        >
            <HStack spacing="3">
                <Text fontWeight="medium" marginEnd="2">
                    Cath's dashboard is still in testing phase. It is not stated to release soon.
                </Text>
            </HStack>
            <BannerLink w={{ base: 'full', sm: 'auto' }} flexShrink={0}>
                Learn More
            </BannerLink>
        </Stack>
    </Box>
)
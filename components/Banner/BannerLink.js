import { chakra } from '@chakra-ui/react'
import * as React from 'react'

export const BannerLink = (props) => (
    <chakra.a
        {...props}
        href="https://github.com/night0721/cath.gq"
        px="4"
        py="1.5"
        textAlign="center"
        borderWidth="1px"
        borderColor="whiteAlpha.400"
        fontWeight="medium"
        rounded="base"
        _hover={{
            bg: 'whiteAlpha.200',
        }}
    />
)

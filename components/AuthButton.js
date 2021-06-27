import { signIn, signOut, useSession } from 'next-auth/client'
import {Button} from '@chakra-ui/react' 

export default function Page() {
    const [session, loading] = useSession()

    return <>
        {!session && <>
            <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                bg: 'pink.300',
                }}
                onClick={()=>signIn()}>
                Sign In
            </Button>
        </>}
        {session && <>
            <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'#'}
                _hover={{
                    bg: 'pink.300',
                }}
                onClick={() => signOut()}>
                Sign Out
            </Button>
        </>}
    </>
}
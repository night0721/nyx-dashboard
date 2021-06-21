import { signIn, signOut, useSession } from 'next-auth/client'
import { Button } from '@material-ui/core'

export default function Page() {
    const [session, loading] = useSession()

    return <>
        {!session && <>
            <Button onClick={() => signIn()}>Sign in</Button>
        </>}
        {session && <>
            <Button onClick={() => signOut()}>Sign out</Button>
        </>}
    </>
}
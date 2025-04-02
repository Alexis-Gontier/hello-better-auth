import { getSession } from '@/lib/auth-session'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Page() {
    const session = await getSession()

    const user = session?.user

    if (!user) {
        return (
            redirect('/sign-in')
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Card className="p-6 w-full max-w-md shadow-md rounded-lg">
                <CardContent className="flex flex-col items-center gap-3">
                    <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
                    <p><strong>Email:</strong> {user.email}</p>
                    {user.emailVerified && (
                        <p className="text-green-60">Your email is verified ✅</p>
                    )}
                    {user.image && (
                        <img
                            src={user.image}
                            alt={`${user.name}'s profile`}
                            className="w-16 h-16 rounded-full"
                        />
                    )}
                    <p className="text-sm text-gray-500">
                        Last login: {new Date(session.session.updatedAt).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">
                        Account created on: {new Date(user.createdAt).toLocaleDateString()}
                    </p>
                    <form className="w-full">
                        <Button
                            variant="destructive"
                            className="w-full cursor-pointer"
                            formAction={async () => {
                                "use server"
                                await auth.api.signOut({
                                    headers: await headers()
                                })
                            }}
                        >
                            Sign Out
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

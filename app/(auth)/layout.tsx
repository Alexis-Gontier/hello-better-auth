import { getUser } from '@/lib/auth-session'
import { redirect } from 'next/navigation';

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    const user = await getUser()
    if (user) {
        redirect('/dashboard');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {children}
        </div>
    );
}
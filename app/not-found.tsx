'use client'

import React from 'react';
import PixelButton from '@/components/Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleViewHomepage = (): void => {
        setIsLoading(true);
        router.push("/")
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-custom">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl">Sorry, the page you are looking for does not exist.</p>
            <Link href="/" className="mt-6">
                <PixelButton size="md" variant="ghost" isLoading={isLoading} onClick={handleViewHomepage} loadingText="Loading ...">
                    Return to Home
                </PixelButton>
            </Link>
        </div>
    )
}
import type { ReactNode } from 'react';
import {orbitron} from './fonts';
import {exo_2} from './fonts';
import NavBar from '../components/NavBar';
import './globals.css';

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps ) {
    return (
        <html lang="en" className={`${orbitron.variable} ${exo_2.variable}`}>
            <body className="flex flex-col min-h-screen px-4 py-2 bg-orange-50">
                <header>
                    <NavBar />
                </header>
                <main className="grow py-3">
                {children}
                </main>
            </body>
            <footer className="border-t py-3 text-center text-xs">
                Game Data
            </footer>
        </html>
    );
}
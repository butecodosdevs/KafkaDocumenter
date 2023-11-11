'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import AppContextProvider from '@/context/AppContext';
import SideBar from '@/components/SideBar';
import Loading from '@/components/Loading';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AppContextProvider>
          <Loading></Loading>
          <div className='flex overflow-x-hidden flex-nowrap min-h-screen w-auto bg-slate-900'>
            <SideBar></SideBar>
            <main className='w-full p-2 relative'>
              {children}
            </main>
          </div>
        </AppContextProvider>
      </body>
    </html>
  )
}

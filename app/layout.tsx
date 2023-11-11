'use client';
import { Inter } from 'next/font/google'
import './globals.css'
import AppContextProvider, { appContext } from '@/context/AppContext';
import SideBar from '@/components/SideBar';
import MenuIndicator from '@/components/MenuIndicator';
import HamburguerIcon from '@/components/HamburguerIcon';
import { useContext, useState } from 'react';
import MenuButton from '@/components/MenuButton';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppContextProvider>
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

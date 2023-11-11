'use client';
import HamburguerIcon from '@/components/HamburguerIcon';
import MenuIndicator from '@/components/MenuIndicator';
import Paragraph from '@/components/Paragraph';
import SideBar from '@/components/SideBar';
import TextContent from '@/components/TextContent';
import { appContext } from '@/context/AppContext';
import { useContext, useState } from 'react';



export default function Home() {
  const [showArrow, setShowArrow] = useState(true);
  const { openSideMenu, toggleSideMenu } = useContext(appContext);
  const baseClass = 'absolute cursor-pointer w-8 h-8';
  const appendClass = openSideMenu ? 'bg-slate-700 rounde' : '';

  return (
    <div className='flex overflow-x-hidden flex-nowrap min-h-screen w-auto bg-slate-900'>
      <SideBar></SideBar>
      <main className='w-full p-2 relative'>
        {
          showArrow ? (<span className='absolute -rotate-[50deg] translate-y-12 translate-x-10 animate-pulse'>
            <MenuIndicator></MenuIndicator>
          </span>) : ''
        }
        <span onClick={() => {toggleSideMenu(); setShowArrow(false)}} className={`${baseClass} ${appendClass}`}>
          <HamburguerIcon></HamburguerIcon>
        </span>
        <section className='w-full mt-10'>
          <TextContent>
            <h1 className='text-2xl font-bold text-center mb-5'> Bem-Vindo ao evento sobre Apache Kafka 🎉</h1>
            <Paragraph>
              O evento será dirigido por Pedro Pietro durante um evento na comunidade do Chorume no dia 21 de Novembro de 2023 no Discord. Para acompanhar e ter como
              referência futura, a equipe de moderadores e administradores do chorume estão disponibilizando esse material auxiliar. O material original pode ser encontrado clicando
              <a className='underline ml-1 text-yellow-500 cursor-pointer' href='https://data--flair-training.cdn.ampproject.org/c/s/data-flair.training/blogs/kafka-tutorials-home/' target='_blank'>aqui</a>.
            </Paragraph>
            <Paragraph>
              Todo o conteúdo é organizado no menu lateral e você pode acessá-los livremente. Contudo, caso você esteja entrando pela primeira vez ou esteja entrando enquanto o evento está acontecendo, recomendamos seguir
              a sequência de links ou acompanhar o Pedro. Por fim, sinta-se livre para seguir o fluxo que lhe bem caber e ajudar no seu momento de estudos.
            </Paragraph>
          </TextContent>
        </section>
      </main>
    </div>
  );
}

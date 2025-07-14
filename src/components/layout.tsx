import { JSX, ReactNode } from 'react';
import { Header } from './organisms/header';
import { BackgroundLayout } from './style';
import dynamic from 'next/dynamic';
const StarsCanvas=dynamic(() => import('./atoms/StarMotion'), {
  ssr: false,
});

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
    
    <BackgroundLayout>
      <Header />
     <StarsCanvas />
      <main>{children}</main>
    </BackgroundLayout>
    </>
  );
}
import { JSX, ReactNode } from 'react';
import { Header } from './organisms/header';
import { BackgroundLayout } from './style';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <BackgroundLayout>
      <Header />
      <main>{children}</main>
    </BackgroundLayout>
  );
}
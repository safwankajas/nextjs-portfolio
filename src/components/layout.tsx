import { JSX, ReactNode } from 'react';
import { Header } from './organisms/header';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
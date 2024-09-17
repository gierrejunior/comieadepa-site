// Header.tsx
'use client';

import Logo from './logo';
import Menu from './menu';
import styles from './styles.module.scss'; // Importe o arquivo SCSS

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
}

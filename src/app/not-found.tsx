import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Link from 'next/link';

import styles from './NotFound.module.scss'; // Importando o arquivo SCSS

const roboto = Roboto({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '404 | GR-Dev',
};

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>
        <span>Oops! Não conseguimos encontrar essa página!</span>
        <span>
          Clique no botão abaixo para ser redirecionado à Página Inicial
        </span>
      </p>
      <Link href="/" className={`${roboto.className} ${styles.button}`}>
        Ir para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;

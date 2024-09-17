// Logo.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss'; // Importe o arquivo SCSS

export default function Logo() {
  return (
    <div className={styles.iconContainer}>
      <Link href="/">
        <Image
          src="/icons/brasao-comieadepa.svg"
          alt="Logo"
          width={65}
          height={65}
        />
      </Link>
    </div>
  );
}

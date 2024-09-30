// Menu.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss'; // Importe o arquivo SCSS

export default function Menu() {
  const menuRef = useRef<HTMLDivElement | null>(null); // Define o tipo de menuRef
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Função para alternar a visibilidade do menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Fecha o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Verifica se menuRef está definido e se contém o alvo do clique
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  // Fecha o menu quando a tela é redimensionada para um tamanho maior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Contêiner para o ícone de abrir/fechar */}
      <div className={styles.hamburger}>
        {!isMenuOpen && (
          <Image
            src="icons/bar-open.svg" // Ícone de abrir
            alt="Open Menu"
            width={30}
            height={30}
            onClick={toggleMenu} // Clique para abrir o menu
          />
        )}
        {isMenuOpen && (
          <Image
            src="icons/bar-close.svg" // Ícone de fechar
            alt="Close Menu"
            width={30}
            height={30}
            onClick={toggleMenu} // Clique para fechar o menu
          />
        )}
      </div>

      {/* Menu Padrão para Telas Maiores */}
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="https://comieadepa.org:2083/">WebMail</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/institucional">Institucional</Link>
          <Link href="/diretoria">Diretoria</Link>
          <Link href="/ago">AGO</Link>
        </nav>
      </div>

      {/* Menu Móvel para Telas Menores */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.showMenu : ''}`}
        ref={menuRef} // Referência ao menu para controle de cliques fora
        onClick={(e) => e.stopPropagation()} // Evita fechar ao clicar dentro
      >
        <nav className={styles.nav}>
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>
          <Link href="https://comieadepa.org/webmail/" onClick={closeMenu}>
            WebMail
          </Link>
          <Link href="/contato" onClick={closeMenu}>
            Contato
          </Link>
          <Link href="/institucional" onClick={closeMenu}>
            Institucional
          </Link>
          <Link href="/diretoria" onClick={closeMenu}>
            Diretoria
          </Link>
          <Link href="/ago" onClick={closeMenu}>
            AGO
          </Link>
        </nav>
      </div>
    </>
  );
}

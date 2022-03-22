import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export const navItems = [
  {
    title: 'Home',
    url: '',
    cName: 'nav-links',
    id: 1
  },
  {
    title: 'About',
    url: 'about',
    cName: 'nav-links',
    id: 2
  },
  {
    title: 'HOF',
    url: 'hof',
    cName: 'nav-links',
    id: 3
  },
  {
    title: 'Blog',
    url: 'blog',
    cName: 'nav-links',
    id: 4
  },
];

export default function Nav() {


  return (
    <div>
      <nav className={styles.navigation}>
        {navItems.map(({ title, url, id }) => {
            return (
              <li className={`${styles.link_item_nav}`} key={id}>
                <Link href={`/${url}`}>
                  <span>{title}</span>
                </Link>
              </li>
            );
          })}
        {/* <li><Link href={`/blog`}>blog</Link></li> */}
      </nav>
    </div>
  );
}


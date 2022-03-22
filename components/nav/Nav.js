import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Nav({navItems}) {

  console.log(navItems)
  return (
    <div>
      <nav className={styles.navigation}>
        {navItems && navItems?.map(item => {
            return (
              <li className={`${styles.link_item_nav}`} key={item?.node?.id}>
                <Link href={item?.node?.path}>
                  <span className={styles.link_item}>{item?.node?.label}</span>
                </Link>
              </li>
            );
          })}
      </nav>
    </div>
  );
}


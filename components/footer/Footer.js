import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Footer({ footerItems }) {
  console.log(footerItems);
  return (
    <div className={styles.footer}>
      <nav className={styles.footer}>
        {footerItems &&
          footerItems?.map((item) => {
            return (
              <li className={`${styles.footer_item}`} key={item?.node?.id}>
                <Link href={item?.node?.path}>
                  <span>{item?.node?.label}</span>
                </Link>
              </li>
            );
          })}
      </nav>
    </div>
  );
}

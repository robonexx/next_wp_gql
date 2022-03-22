import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/nav/Nav';
import client from '../lib/apollo-client';
import { GET_MENUS } from '../lib/get-menus';
import styles from '../styles/Home.module.css';

export default function Home({ menus }) {
  console.warn('menus: ', menus);
  return (
    <div className={styles.container}>
      {/*  <Nav pages={pages}/> */}
      <h1 style={{ color: 'white' }}>Home page</h1>
      <h1 style={{ color: '#888' }}>Learning headless cms with next and wp</h1>

      <h1 className={styles.bigTitle}> LEARNING AS I GO</h1>

      {/*  {pages &&
          pages.nodes.map(({ title, slug }) => {
            return (
              <ul key={slug}>
              <li className={styles.link_item}>
                <Link href={`/pages/${slug}`}>
                <span>{title}</span>
                </Link>
                </li>
                </ul>
            );
          })} */}
      {/*  <h2>and the posts</h2> */}
      {/*  {posts &&
          posts.nodes.map(({ title, slug }) => {
            return (
              <ul key={slug}>
              <li className={styles.link_item}>
                <Link href={`/posts/${slug}`}>
                <span>{title}</span>
                </Link>
                </li>
                </ul>
            );
          })} */}
    </div>
  );
}

export async function getStaticProps(context) {
  const { data, loading, networkStatus } = await client.query({
    query: GET_MENUS,
  });

  return {
    props: {
      menus: {
        headerMenu: data?.headerMenu?.edges,
        footerMenu: data?.footerMenu?.edges,
      },
    },
  };
}

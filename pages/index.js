import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/nav/Nav';
import styles from '../styles/Home.module.css';

export default function Home() {
 
  return (
    <div className={styles.container}>
     {/*  <Nav pages={pages}/> */}
      <h1 style={{color: "white"}}>Home page</h1>
      <h1 style={{color: "#888"}}>Learning headless cms with next and wp</h1>

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

export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
          query MyQuery {
            posts {
              nodes {
                slug
                title
              }
            }
            pages {
              nodes {
                slug
                title
              }
            }
          }
          `,
    }),
  });

  const json = await res.json();

  return {
    props: {
      pages: json.data.pages,
      posts: json.data.posts,
    },
  };
}

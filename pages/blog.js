import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../components/nav/Nav';
import styles from '../styles/Home.module.css';

export default function Blog({ posts }) {
  console.log({ posts });
  return (
    <div className={styles.container}>
      <header className={styles.header}>
       Header for website
      </header>
          <h1>
              Blog
      </h1>
     
      <h2>and the posts</h2>
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
/* export async function getStaticProps() {
  const res = await fetch(process.env.NEXT_PUBLIC_WORDPRESS_SITE_ENDPOINT, {
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
 */
import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

function MyApp({ Component, pageProps, pages }) {
  return (
  <Layout pages={pages}>
    <Component {...pageProps} />
  </Layout>

  )
}

export default MyApp


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


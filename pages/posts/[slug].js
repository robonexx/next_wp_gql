import Image from 'next/image';

import styles from '../../styles/PostContent.module.css';

export default function Post(data) {
  console.log({ data });
  const post = data.post;

  return (
    <div className={styles.post_content}>
      <h1>{post.title}</h1>
      {/* <Image width="640" height="480" src={post.featuredImage.node.sourceUrl} /> */}
      <article
        dangerouslySetInnerHTML={{ __html: post.content }}
        className={styles.post_article}
      ></article>
    </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
                query SinglePost($id: ID!, $idType: PostIdType!) {
                    post(id: $id, idType: $idType) {
                        title
                        slug
                        content
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            `,
      variables: {
        id: context.params.slug,
        idType: 'SLUG',
      },
    }),
  });

  const json = await res.json();

  return {
    props: {
      post: json.data.post,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
            query AllPostsQuery {
                posts {
                    nodes {
                        slug
                        content
                        title
                        featuredImage {
                            node {
                                sourceUrl
                            }
                        }
                    }
                }
            }
        `,
    }),
  });

  const json = await res.json();
  const posts = json.data.posts.nodes;

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}
/* 
export default function getStaticProps(context) {

    const res = await fetch('http://localhost/robert/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
              query SinglePost($id: ID!, $idType: PostIdType!) {
                post(id: $id, idType: $idType) {
                  title
                  slug
                  content
                  featuredImage {
                        node {
                            sourceUrl
                        }
                  }
                }
              }
              `,
            variables: {
                id: context.params.slug,
                idType: 'SLUG'
            }
        }),
      });
    
      const json = await res.json();
    
      return {
        props: {
          post: json.data.post,
        },
      };
}


export async function getStaticPaths() {

    const res = await fetch('http://localhost/robert/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
        query AllPostQuery {
            posts {
                nodes {
                    slug
                    content
                    title
                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                }
            }
        }
        `})
    })

    const json = await res.json()
    const posts = json.data.posts.nodes;

    const paths = posts.map((post) => ({
        params: {slug: post.slug},
    }))

    return { paths, fallback: false }
} */

import {  searchPosts } from '@/api-lib/db';
import { database } from '@/api-lib/middlewares';
import nc from 'next-connect';
import { Search } from '@/page-components/Search';
export default function UserPostPage({posts}) {

  return (
    <>
        <Search  />

    </>
  );
}

export async function getServerSideProps(context) {
    await nc().use(database).run(context.req, context.res);
    const posts = await searchPosts(context.req.db, context.params.searchValue);
    if (!posts) {
      return {
        notFound: true,
      };
    }
    console.log("posts server", posts);

    return {
        props: { posts : JSON.parse(JSON.stringify(posts)) }
      }
}

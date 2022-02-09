import { searchPosts } from '@/api-lib/db';
import { database } from '@/api-lib/middlewares';
import nc from 'next-connect';
import { Search } from '@/page-components/Search';
export default function UserPostPage({ posts, searchValue }) {

    return (
        <>
            <h2 style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center", paddingTop: "1rem"
            }}>Search Result for "{searchValue}"</h2>
            <Search posts={posts} />

        </>
    );
}

export async function getServerSideProps(context) {
    await nc().use(database).run(context.req, context.res);

    if(context.params.searchValue === "undefined" || context.params.searchValue === ""){
        return {
            redirect: {
              destination: `/`,
              permanent: false,
            },
          };
    }
    const posts = await searchPosts(context.req.db, context.params.searchValue);
    if (!posts) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            posts: JSON.parse(JSON.stringify(posts)),
            searchValue: context.params.searchValue
        }
    }
}

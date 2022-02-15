import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import { MainLayout } from "../../layout/MainLayout";
import { NextPageContext } from "next";
import { MyPost } from "../../interfaces/post";

interface PostPageProps{
    post: MyPost
}

const Post = ({post: serverPost}: PostPageProps) => {
    const router = useRouter();
    const [post, setPost] = useState(serverPost)

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        }
        if(!serverPost){
            load(); 
        }
    },[]);

    if(!post) {
        return(
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }
    
    return(
        <MainLayout title="Post">
            <h2>{post.title}</h2>
            <hr />
            <p>{post.body}</p>
            <button onClick={() => Router.push("/posts")}>Back to all posts</button>
        </MainLayout>
    )
}


Post.getInitialProps = async (ctx) => {  // front + back
    const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
    const post: MyPost = await response.json();
    return {
        post,
    }
}

// interface PostNextPageContext extends NextPageContext{
//     query: {
//         id: string
//     }
// }

// Post.getInitialProps = async ({query, req}: PostNextPageContext) => {  // front + back
//     if(!req){
//      return{
//         post: null
//      } 
//     }
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const post: MyPost = await response.json();
//     return {
//         post,
//     }
// }

export default Post;

// export async function getServerSideProps({query, req}: NextPageContext) { // front
//     // if(!req){
//     //  return{ post: null} 
//     // }
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const post: MyPost = await response.json();
//     return {props: {post}}
// }

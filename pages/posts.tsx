import { useState, useEffect } from "react";
import Link from "next/link";
import { MainLayout } from "../layout/MainLayout";
import {MyPost} from "../interfaces/post";
import { NextPageContext } from "next";

interface PostsPageProps{
    posts: MyPost[]
}

const Posts = ({posts: serverPosts}: PostsPageProps) => {
    const[posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts`);
            const data = await response.json();
            setPosts(data);
        }
        if(!serverPosts){
            load();
        }
    }, []);

    if(!posts){
        return(
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }
    return(
        <MainLayout title="Posts">
            <h1>Posts</h1>
            <ul>
             {posts.map((post) => (
                <li key={post.id}>
                    <Link 
                        href={`/post/${post.id}`}       // 1.
                        // href={`/post/[id]`}          // 2.
                        // as={`/post/${post.id}`}
                    >
                        <a>{post.title}</a>
                    </Link>
                </li>
                )
                    )
            }
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
    if(!req){
        return{
           post: null
        } 
    }
    const response = await fetch("http://localhost:4200/posts");
    const posts: MyPost[] = await response.json();
    return {
        posts: posts,
    }
}

export default Posts;
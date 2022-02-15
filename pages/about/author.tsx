import Router from "next/router";
import { MainLayout } from "../../layout/MainLayout";


const Author = () =>  {
    return(
        <MainLayout title="Author">
            <h1>Author Page</h1>
            <button onClick={() =>  Router.push('/')}>Back to home</button>
            <button onClick={() =>  Router.push('/posts')}>Posts</button>
        </MainLayout>
    )
}

export default Author;
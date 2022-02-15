import Router from "next/router";
import { MyPost } from "../../interfaces/post";
import { MainLayout } from "../../layout/MainLayout";

interface AboutPageProps{
    title: MyPost
}

const About = ({title}: AboutPageProps) => {
    return(
        <MainLayout title="About">
            <h1> {title} </h1>
            <button onClick={() => Router.push('/')}>Go back to home</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data: MyPost = await response.json();
    return {
        title: data.title
    }
}

export default About;
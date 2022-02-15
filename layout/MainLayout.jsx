import Head from "next/head";
import Link from "next/link";

export const MainLayout = ({children, title = "Next App"}) => {
    return(
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/about/author'}><a>Author</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style  jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: #0080006c;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }
                a {
                    color: white;
                }
                main{
                    margin-top: 60px;
                    padding: 30px;
                }
            `}</style>
        </>
    )
}
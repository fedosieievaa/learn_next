import Link from "next/link";
import { MainLayout } from "../layout/MainLayout";

export default function Home() {
  return (
    <>
      <MainLayout title="Home">
        <h1>Home</h1>
        <Link href={'/about/author'}>Author</Link>
        <Link href={'/posts'}>Posts</Link>
      </MainLayout>
    </>
  )
}

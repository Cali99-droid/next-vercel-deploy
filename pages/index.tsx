
import Link from "next/link"



import MainLayout from "../components/Layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
        <h1 className={'title'}> 
         Ir a <Link href="/about">About!</Link> 
        </h1>
    </MainLayout>
  );
}

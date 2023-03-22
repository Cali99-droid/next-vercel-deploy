import Head from "next/head";
import Link from "next/link"
import MainLayout from "../../components/Layouts/MainLayout";

import { NavBar } from "../../components/NavBar";
export default function ContactPage() {
  return (

      <MainLayout>
      <h1>Contact Page</h1>
        <h1 className={'title'}>
          go to  <Link href="/">Home</Link> 
        </h1>
      </MainLayout>

  );
}
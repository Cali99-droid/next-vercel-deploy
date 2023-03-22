import Head from "next/head";
import Link from "next/link"
import DarkLayout from "../components/Layouts/DarkLayout";
import MainLayout from "../components/Layouts/MainLayout";

import { NavBar } from "../components/NavBar";
export default function AboutPage() {
  return (
   <>
    <h1>About Page</h1>
        <h1 className={'title'}>
          Welcome to cambio <Link href="/">Home!</Link> 

          <p className={'description'}>gettins staritin{' '}</p> 
          <code className={'code'}>pages/about.jsx</code>
        </h1>
   </>
     
  
  );
}

AboutPage.getLayout = function getLayout(page:JSX.Element){
  return ( 
  <MainLayout>
    <DarkLayout>
      
      {page}
    </DarkLayout>
  </MainLayout>
  
  )
}
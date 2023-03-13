import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbars from "./Navbars";
import '../styles/Home.module.css'
import styles from '../styles/Home.module.css'


export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Carnet Culturel Numérique",
    description: `Carnet Culturel Numérique`,
    type: "website",
    image: "/icon.png",
    ...customMeta,
  };
  return (
    <div className="bg-classique">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Carnet Culturel Numérique" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} /> 
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        
        
      </Head>
      <main className=" w-full bg-classique">
        <Navbars />
        <div className="bg-classique">{children}</div>
        
      </main>
      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          Carnet Culturel Numérique 2023,  Emma CARRAL
          
        </a>
      </footer>
    </div>
  );
}

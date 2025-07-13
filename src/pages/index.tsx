import Head from "next/head";
import { Layout } from "../components/layout";
import { projects } from "@/data/home";
import { HomeProps } from "@/types/home";



export default function Home({projects}: HomeProps) {
  return (
    <Layout>
      <Head>
        <title>Safwan Kajas </title>
        <meta name="description" content="Portfolio site of Safwan Kajas, showcasing frontend development work using React and Next.js." />
        <meta name="keywords" content="Safwan k,Safwankajas,kajas,safwan kajas, frontend, portfolio, React, Next.js" />
        <meta name="author" content="Safwan Kajas" />
        <meta property="og:title" content="Safwan Kajas Portfolio" />
        <meta property="og:description" content="Showcasing Safwan’s web development projects." />
        <meta property="og:url" content="https://safwankajas.netlify.app/" />
        <meta property="og:image" content="/cover.jpg" />
      </Head>
      <><ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul></>
    </Layout>
  );
}

export async function getStaticProps() {
  // Replace with real API call later
  

  return {
    props: {
      projects,
    },
  };
}


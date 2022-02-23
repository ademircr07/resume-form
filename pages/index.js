import Head from 'next/head';
import Information from '../components/Information';


export default function Home() {
  return (
    <div className="bg-zinc-200 h-screen overflow ">
      <Head>
        <title>Resume form</title>
      </Head>
      <main>
        <Information />
      </main>

      

    </div>
  )
}

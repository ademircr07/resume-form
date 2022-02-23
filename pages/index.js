import Head from 'next/head';
import Information from '../components/Information';
import Personal from '../components/Personal';


export default function Home() {
  return (
    <div className="bg-zinc-200 content-center">
      <Head>
        <title>Resume form</title>
      </Head>
      <main>
        <Information />
        <Personal />
      </main>

      

    </div>
  )
}

import Head from 'next/head';
import Information from '../components/Information';
import Personal from '../components/Personal';
import SkillsSect from '../components/SkillsSect';


export default function Home() {
  return (
    <div className="bg-slate-100 content-center flex justify-center">
      <Head>
        <title>Resume form</title>
      </Head>
      <main>
        <Personal />
        <Information />
       
        
      </main>

      

    </div>
  )
}

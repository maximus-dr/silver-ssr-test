import axios from 'axios';
import { API_ALL_EVENTS } from '../core/rest/paths';
import Link from 'next/link'


export async function getStaticProps() {

  const events = await axios.get(`https://soft.silverscreen.by:8443${API_ALL_EVENTS}`, {})
    .then(res => res.data)
    .catch(err => console.log(err));
  
  return {
    props: {
      events
    },
    revalidate: 1
  }
}


export default function Home() {


  return (
    <div className="wrapper">
      <div className="subwrapper">
        <h1>Test</h1>
        <div className="links">
          <Link href="/ssg">
            <a>SSG</a>
          </Link>

          <Link href="/ssr1" prefetch={true}>
            <a>SSR</a>
          </Link>

          <Link href="/ssr2" prefetch={true}>
            <a>SSR2</a>
          </Link>
        </div>
      </div>

      <style jsx>{`

        .wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 100vh;
        }

        .subwrapper {
          text-align: center;
          padding-top: 300px;
        }

        .links {
          width: 300px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }

        h1 {
          font-size: 50px;
          margin-bottom: 100px;
        }

        a {
          font-size: 40px;
        }
      `}</style>
    </div>
  )
}

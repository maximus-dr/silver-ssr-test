import Link from 'next/link'


export default function Home() {


  return (
    <div className="wrapper">
      <div className="subwrapper">
        <h1>Test</h1>
        <div className="links">
          <Link href="/ssg">
            <a>SSG</a>
          </Link>

          <Link href="/ssr1">
            <a>SSR</a>
          </Link>

          <Link href="/ssr2">
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

import Link from 'next/link'


export default function Home() {


  return (
    <div className="wrapper">
      <div className="subwrapper">
        <h1>Test</h1>
        <div className="links">
          <div className="linkWrap">
            <Link href="/ssg">
              <a>SSG</a>
            </Link>
            <div className="description">
              <span className="note">Статический рендеринг</span>
            </div>
          </div>

          <div className="linkWrap">
            <Link href="/ssg" prefetch={false} passHref>
              <a>SSG</a>
            </Link>
            <div className="description">
              <span className="note">Статический рендеринг prefetch=false</span>
            </div>
          </div>

          <div className="linkWrap">
            <Link href="/ssr">
              <a>SSR</a>
            </Link>
            <div className="description">
              <span className="note">Динамический серверный рендеринг</span>
              <span className="note">events хранятся локально на сервере</span>
            </div>
          </div>

          <div className="linkWrap">
            <Link href="/ssr" prefetch={false}>
              <a>SSR</a>
            </Link>
            <div className="description">
              <span className="note">Динамический серверный рендеринг</span>
              <span className="note">events хранятся локально на сервере</span>
              <span className="note">prefetch=false</span>
            </div>
          </div>

          <div className="linkWrap">
            <Link href="/ssr2">
              <a>SSR2</a>
            </Link>
            <div className="description">
              <span className="note">Динамический серверный рендеринг</span>
              <span className="note">events приходят с сервера</span>
            </div>
          </div>

          <div className="linkWrap">
            <Link href="/ssr2" prefetch={false} passHref>
              <a>SSR2</a>
            </Link>
            <div className="description">
                <span className="note">Динамический серверный рендеринг</span>
                <span className="note">events приходят с сервера</span>
                <span className="note">prefetch=false</span>
            </div>
          </div>
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
          padding-top: 125px;
        }

        .links {
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        h1 {
          font-size: 50px;
          margin-bottom: 75px;
        }

        a {
          padding: 20px;
          font-size: 40px;
          text-decoration: underline;
        }

        .note {
          font-size: 16px;
        }

        .section {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .linkWrap {
          display: flex;
          align-items: baseline;
          width: 500px;
          justify-content: space-around;
        }

        .description {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 300px;
        }
      `}</style>
    </div>
  )
}

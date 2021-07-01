import TestPage from '../components/test/TestPage/TestPage';
import { initializeStore } from '../store/store';
const path = require('path');
const fs = require('fs');
import Head from 'next/head';


export async function getServerSideProps() {
    const dbPath = path.join(process.cwd(), 'db/events/events.json');
    const data = fs.readFileSync(dbPath, 'utf8');
    const events = JSON.parse(data);
    
    const reduxStore = initializeStore()
    const { dispatch } = reduxStore

    dispatch({
        type: 'SET_EVENTS',
        events
    })

    return { 
        props: { 
            initialReduxState: reduxStore.getState(),
            events
        }
    }
}


export default function SSR2(props) {

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="keywords" content="next,js,react" />
                <meta name="description" content="nextjs tutorial" />
                <title>SSR Test Page</title>
            </Head>

            <TestPage />
        </>
    )
}

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '../components/styles';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

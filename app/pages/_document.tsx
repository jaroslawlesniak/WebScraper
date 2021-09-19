import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="/css/uikit.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="/js/uikit.min.js"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
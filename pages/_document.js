import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document{
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    render(){
        return (
            <Html>
                <Head>
                    <meta name="description" content='Portfolio v0.1'/>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript></NextScript>
                </body>
            </Html>
        )
    }
}

export default MyDocument
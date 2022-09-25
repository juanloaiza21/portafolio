import Link from "next/link"
import Layout from "../components/Layout"

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1> 404 </h1>
            <p> This page does not exists. </p>
            <Link href="/" passHref>
                <button component="a" type="button" class="btn btn-light">Home</button>
            </Link>
        </div>
    </Layout>
)

export default custom404;
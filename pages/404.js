import Link from "next/link"
import Layout from "../components/layout"

export default function Paguina404() {
  return (
    <Layout
      title="Page not Found"
    >

      <p className="error">Page not Found</p>
      <Link className="error-enlace" href='/'>
        Back to Top
      </Link>

    </Layout>
  )
}

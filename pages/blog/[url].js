import Layout from "../../components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"
import { formatearFecha } from "../../utils/helpers"

export default function Post({ post }) {
  
  const { Titulo, cotenido, imagen, publishedAt } = post[0].attributes

  const fecha = formatearFecha(publishedAt)
  return (
    <Layout>
      <article className={`${styles.post} ${styles['mt-3']}`}>
        <Image src={imagen.data.attributes.url} width={1000} height={600} alt={`imagen blog ${Titulo}`} />
        <div className={styles.contenido}>
          <h3>{Titulo}</h3>
          <p className={styles.fecha}>{fecha}</p>
          <p className={styles.texto}>{cotenido[0].children[0].text}</p>
        </div>
      </article>
    </Layout>
  )
}

export async function getServerSideProps({query:  {url}}) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  const {data: post } = await respuesta.json()

  return {
    props: {
      post
    }
  }
}

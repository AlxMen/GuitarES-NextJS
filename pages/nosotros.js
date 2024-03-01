import Image from "next/image";
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description="Sobre nosotros, GuitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src={'/img/nosotros.jpg'} width={1000} height={800} alt="Imagen sobre nosotros" />

          <div>
            <p>
              Ut vitae est sed nunc posuere fermentum. Proin aliquet neque ac finibus posuere. Donec vel interdum libero, posuere sagittis ligula. Quisque blandit nisl quis nulla ultricies, sit amet vestibulum eros eleifend. Aliquam eu lectus ipsum. Sed placerat risus at pharetra luctus. Suspendisse quis sem facilisis, commodo eros sit amet, mollis urna. 
            </p>
            <p>
              Praesent fermentum at orci imperdiet aliquet. Phasellus commodo elit et dolor tincidunt cursus. Mauris eget elit sed tellus iaculis finibus cursus id nibh. Pellentesque scelerisque, tortor in sagittis ornare, mi arcu placerat eros, ac molestie ligula ex quis enim. Donec venenatis metus et nisi sodales commodo. Suspendisse potenti. 
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

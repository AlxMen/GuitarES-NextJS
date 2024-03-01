import Layout from "../components/layout";
import ListadoGuitarras from "../components/listado-guitarras";

export default function Tienda() {
  return (
    <Layout
      title={'Tienda'}
      description="Tienda, GuitarLA, tienda de musica"
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <ListadoGuitarras


        />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const respuesta = await fetch(`http://localhost:1337/api/guitarras?populate=imagen`)
  const resultado = await respuesta.json()

  return {
    props: {
      
    }
  }
}
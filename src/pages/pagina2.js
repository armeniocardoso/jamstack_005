import * as React from "react"
import Layout from "../components/layout"

const Pagina2 = () => {
  return (
    <Layout>
      <h1>Essa é uma página 2</h1>
      <div>
        <p>Esse é o primeiro parágrafo</p>
        <p>Esse é o segundo parágrafo</p>
      </div>
    </Layout>
  )
}

export default Pagina2

export const Head = () => <title>Página 2</title>

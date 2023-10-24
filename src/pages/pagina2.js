import * as React from "react"
import Layout from "../components/layout"
import Ufs from "../components/Ufs"
import { useState, useEffect } from "react";
import Municipios from "../components/Municipios";

const Pagina2 = () => {

  const [opcaoUf, setOpcaoUf] = useState({ key: "", value: "" });
  const [opcaoMunicipio, setOpcaoMunicipio] = useState({ key: "", value: "", uf: "" });

  useEffect(() => {
    if (opcaoUf.value.length > 0) {
      setOpcaoMunicipio({ ...opcaoMunicipio, uf: opcaoUf.key })
    }
  }, [opcaoUf]);

  return (
    <Layout>
      <h1>Essa é uma página 2</h1>
      <div>
        <p>Unidades da Federação:</p>
        <Ufs setOpcaoUf={setOpcaoUf} />
        <p>Municípios do Estado: <b>{opcaoUf.value}</b></p>
        <Municipios uf={opcaoUf.key} setOpcaoMunicipio={setOpcaoMunicipio} />
      </div>
    </Layout>
  )
}

export default Pagina2

export const Head = () => <title>Página 2</title>

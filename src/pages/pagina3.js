import * as React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby";

const Pagina3 = () => {

  const data = useStaticQuery(graphql`
    query {
      allRestApiUsers {
        edges {
          node {
            id
            name
            phone
            email
            address {
              city
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <h1>Essa é a Página 3</h1>
      <div>
        <p>Usuários:</p>
        <table width="100%">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>City</th>
          </tr>

          {data.allRestApiUsers.edges.map(edge => {
            return (
              <tr>
                <td >{edge.node.name}</td>
                <td>{edge.node.email}</td>
                <td>{edge.node.phone}</td>
                <td>{edge.node.address.city}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </Layout>
  )
}

export default Pagina3

export const Head = () => <title>Página 2</title>

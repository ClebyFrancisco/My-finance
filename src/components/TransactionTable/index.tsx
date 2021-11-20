import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

  useEffect(()=>{
      api.get("transactions").then(response => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Criação de website</td>
            <td className="deposit">R$ 1.200,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Hambuger</td>
            <td className="withdraw">R$ - 60,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Criação de website</td>
            <td className="deposit">R$ 1.200,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Hambuger</td>
            <td className="withdraw">R$ - 60,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

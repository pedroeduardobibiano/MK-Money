import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHighlight, TransactionsTable, TrasactionsConatiener } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TrasactionsConatiener>

                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%" >Desenvolvimento do site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>



                        <tr>
                            <td width="50%" >Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>13/04/2022</td>
                        </tr>

                    </tbody>
                </TransactionsTable>
            </TrasactionsConatiener>

        </div>
    )
}
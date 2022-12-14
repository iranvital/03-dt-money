import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./Components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant='income'>
                                R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>12/08/2022</td>
                        </tr>
                        <tr>
                            <td width="50%">Humburger</td>
                            <td>
                                <PriceHighlight variant='outcome'>
                                    - R$ 59,00
                                </PriceHighlight>
                            </td>
                            <td>Alimentacao</td>
                            <td>18/08/2022</td>
                        </tr>
            
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}
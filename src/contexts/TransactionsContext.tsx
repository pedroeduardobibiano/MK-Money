import { Children, createContext, ReactNode, useEffect, useState } from "react";
import { Transactions } from "../pages/transactions";


interface Transaction {
    id: number,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    category: string,
    createdAt: string,
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode
}

// export const TransactionsContext = createContext<TransactionContextType>({
//     transactions: []
// })

//ou
export const TransactionsContext = createContext({} as TransactionContextType)


export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function loadTransactions() {
        const response = await fetch('http://localhost:3333/transactions')
        const data = await response.json();
        setTransactions(data)
    }

    useEffect(() => {
        loadTransactions();
    }, [])

    //Ou

    // useEffect(() => {
    //     fetch('http://localhost:3333/transactions')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         })
    // }, [])

    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}
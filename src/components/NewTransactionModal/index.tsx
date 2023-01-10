import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>

                    <CloseButton>
                        <X size={24} />
                    </CloseButton>

                    Nova Transação
                    <form action="">
                        <input placeholder='Descrição' type="text" required />
                        <input placeholder='Preço' type="number" required />
                        <input placeholder='Ctegoria' type="text" required />

                        <TransactionType>
                            <TransactionTypeButton variant='income'>
                                Entrada
                                <ArrowCircleUp size={24} />

                            </TransactionTypeButton>
                            <TransactionTypeButton variant='outcome'>
                                Saída
                                <ArrowCircleDown size={24} />
                            </TransactionTypeButton>
                        </TransactionType>

                        <button type="submit">Cadastrar</button>
                    </form>
                </Dialog.Title>
            </Content>
        </Dialog.Portal>
    )
}
import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'

import {X} from 'phosphor-react'

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>

                    <CloseButton>
                        <X size={24}/>
                    </CloseButton>

                    Nova Transação
                    <form action="">
                        <input placeholder='Descrição' type="text" required />
                        <input placeholder='Preço' type="number" required />
                        <input placeholder='Ctegoria' type="text" required />

                        <button type="submit">Cadastrar</button>
                    </form>
                </Dialog.Title>
            </Content>
        </Dialog.Portal>
    )
}
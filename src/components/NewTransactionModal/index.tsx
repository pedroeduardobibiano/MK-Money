import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'

import * as z from 'zod'

import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'


const newTransactionFormSchema = z.object({
    desciption: z.string(),
    price: z.number(),
    category: z.string(),
    // type: z.enum(['income', 'outcome']),
})

type newTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting }
    }
        = useForm<newTransactionFormInputs>({
            resolver: zodResolver(newTransactionFormSchema)
        })


    async function handleCreateNewTransaction(data: newTransactionFormInputs) {
        await new Promise(resolver => setTimeout(resolver, 2000))
        console.log(data)
    }


    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>

                    <CloseButton>
                        <X size={24} />
                    </CloseButton>

                    Nova Transação
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input
                            placeholder='Descrição'
                            type="text "
                            required
                            {...register('desciption')}
                        />
                        <input
                            placeholder='Preço' type
                            ="number"
                            required
                            {...register('price', { valueAsNumber: true })}
                        />
                        <input
                            placeholder='Ctegoria'
                            type="text"
                            required
                            {...register('category')}
                        />

                        <TransactionType>
                            <TransactionTypeButton variant='income' value="income">
                                Entrada
                                <ArrowCircleUp size={24} />

                            </TransactionTypeButton>
                            <TransactionTypeButton variant='outcome' value='outcome'>
                                Saída
                                <ArrowCircleDown size={24} />
                            </TransactionTypeButton>
                        </TransactionType>

                        <button type="submit" disabled={isSubmitting}>Cadastrar</button>
                    </form>
                </Dialog.Title>
            </Content>
        </Dialog.Portal>
    )
}
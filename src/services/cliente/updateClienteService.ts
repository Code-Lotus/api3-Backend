import prismaClient from "../../prisma";

interface UpdateClienteProps {
    cliente_id: number;
    cliente_nome: string;
    cliente_cpfcnpj: string;
    cliente_segmento: string;
    cliente_data: Date;
}

export default class UpdateClienteService {
    async execute({ cliente_id, cliente_nome, cliente_cpfcnpj, cliente_segmento, cliente_data }: UpdateClienteProps) {

        if(!cliente_nome && !cliente_cpfcnpj && !cliente_segmento && !cliente_data) {
            throw new Error("Preencha no mínimo 1 campo")
        }

        let cliente
        if(cliente_nome) {
            cliente = await prismaClient.clientes.update({
                where: {
                    cliente_id: cliente_id
                },
                data: {
                    cliente_nome: cliente_nome  
                }
            })
        } if(cliente_cpfcnpj) {
            cliente = await prismaClient.clientes.update({
                where: {
                    cliente_id: cliente_id
                },
                data: {
                    cliente_cpfcnpj: cliente_cpfcnpj  
                }
            })
        } if(cliente_segmento) {
            cliente = await prismaClient.clientes.update({
                where: {
                    cliente_id: cliente_id
                },
                data: {
                    cliente_segmento: cliente_segmento  
                }
            })
        } if(cliente_data) {
            cliente = await prismaClient.clientes.update({
                where: {
                    cliente_id: cliente_id
                },
                data: {
                    cliente_data: cliente_data
                }
            })
        }

        return cliente
    }
}
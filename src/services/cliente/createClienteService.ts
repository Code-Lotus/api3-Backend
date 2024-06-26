import { threadId } from "worker_threads";
import prismaClient from "../../prisma";

interface CreateClienteProps {
    cliente_nome: string;
    cliente_cpfcnpj: string;
    cliente_segmento: string;
    cliente_data: Date
}

export default class CreateClienteService {
    async execute({ cliente_nome, cliente_cpfcnpj, cliente_segmento, cliente_data }: CreateClienteProps) {

        if(!cliente_nome || !cliente_cpfcnpj || !cliente_segmento || !cliente_data) {
            throw new Error("Preencha todos os campos")
        }

        let cliente = await prismaClient.clientes.create({
            data: {
                cliente_nome,
                cliente_cpfcnpj,
                cliente_segmento,
                cliente_data
            }
        })
        
        return cliente
    }
}
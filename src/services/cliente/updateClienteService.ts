import prismaClient from "../../prisma";

interface UpdateClienteProps {
    cliente_id: number;
    cliente_nome: string;
    cliente_cpfcnpj: string;
    cliente_segmento: string
}

export default class UpdateClienteService {
    async execute({ cliente_id, cliente_nome, cliente_cpfcnpj, cliente_segmento }: UpdateClienteProps) {

        if(!cliente_nome && !cliente_cpfcnpj && !cliente_segmento) {
            throw new Error("Preencha no mínimo 1 campo")
        }

        let cliente
        // FAZER AS CONDIÇÕES
    }
}
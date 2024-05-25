import prismaClient from "../../prisma";

interface ListaUnicoClienteProps {
    cliente_id: number;
}

export default class ListaUnicoClienteService {
    async execute({ cliente_id }: ListaUnicoClienteProps) {

        if(!cliente_id) {
            throw new Error("Preencha todos os campos")
        }

        let cliente = await prismaClient.clientes.findFirst({
            where: {
                cliente_id: cliente_id
            }
        })

        return cliente
    }
}
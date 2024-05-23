import prismaClient from "../../prisma";

interface DeleteClienteProps {
    cliente_id: number;
}

export default class DeleteClienteService {
    async execute({ cliente_id }: DeleteClienteProps) {

        if(!cliente_id) {
            throw new Error("Preencha todos os campos")
        }

        let cliente = await prismaClient.clientes.delete({
            where: {
                cliente_id: cliente_id
            }
        })
    }
}
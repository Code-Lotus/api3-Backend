import { FastifyRequest, FastifyReply } from "fastify";
import CreateClienteService from "../../services/cliente/createClienteService";

export default class CreateClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { cliente_nome, cliente_cpfcnpj, cliente_segmento, cliente_data } = request.body as { cliente_nome: string, cliente_cpfcnpj: string, cliente_segmento: string, cliente_data: Date }

        const clienteService = new CreateClienteService()
        const cliente = await clienteService.execute({ cliente_nome, cliente_cpfcnpj, cliente_segmento, cliente_data })

        reply.send(cliente)
    }
}
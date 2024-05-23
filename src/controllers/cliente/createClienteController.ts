import { FastifyRequest, FastifyReply } from "fastify";
import CreateClienteService from "../../services/cliente/createClienteService";

export default class CreateClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { cliente_nome, cliente_cpfcnpj, cliente_segmento } = request.body as { cliente_nome: string, cliente_cpfcnpj: string, cliente_segmento: string }

        const clienteService = new CreateClienteService()
        const cliente = await clienteService.execute({ cliente_nome, cliente_cpfcnpj, cliente_segmento })

        reply.send(cliente)
    }
}
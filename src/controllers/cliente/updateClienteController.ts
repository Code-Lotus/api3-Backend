import { FastifyRequest, FastifyReply } from "fastify";
import UpdateClienteService from "../../services/cliente/updateClienteService";

export default class UpdateClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { cliente_id, cliente_nome, cliente_cpfcnpj, cliente_segmento } = request.body as { cliente_id: number, cliente_nome: string, cliente_cpfcnpj: string, cliente_segmento: string }

        const clienteService = new UpdateClienteService()
        const cliente = await clienteService.execute({ cliente_id, cliente_nome, cliente_cpfcnpj, cliente_segmento })

        reply.send(cliente)
    }
}
import { FastifyRequest, FastifyReply } from "fastify";
import DeleteClienteService from "../../services/cliente/deleteClienteService";

export default class DeleteClienteController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { cliente_id } = request.body as { cliente_id: number }

        const clienteService = new DeleteClienteService()
        const cliente = await clienteService.execute({ cliente_id })

        return `Cliente ${cliente_id} apagado`
    }
}
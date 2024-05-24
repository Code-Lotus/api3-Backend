import { FastifyRequest, FastifyReply } from "fastify";
import DeleteVendaService from "../../services/venda/deleteVendaService";

export default class DeleteVendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { venda_id } = request.body as { venda_id: number }

        const vendaService = new DeleteVendaService()
        const venda = await vendaService.execute({ venda_id })

        return `Venda ${venda_id} apagada`
    }
}
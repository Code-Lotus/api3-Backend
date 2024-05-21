import { FastifyRequest, FastifyReply } from "fastify";
import CreateVendaService from "../../services/venda/createVendaService";

export default class CreateVendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { venda_data, venda_produto, venda_valor } = request.body as { venda_data: Date, venda_produto: string, venda_valor: number }

        const vendaService = new CreateVendaService()
        const venda = await vendaService.execute({ venda_data, venda_produto, venda_valor })

        reply.send(venda)
    }
}
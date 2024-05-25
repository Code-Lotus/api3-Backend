import { FastifyRequest, FastifyReply } from "fastify";
import CreateVendaService from "../../services/venda/createVendaService";

export default class CreateVendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { venda_data, venda_forma_pagamento, cliente_id, produto_id, usuario_id } = request.body as { venda_data: Date, venda_forma_pagamento: string, cliente_id: number, produto_id: number, usuario_id: number }

        const vendaService = new CreateVendaService()
        const venda = await vendaService.execute({ venda_data, venda_forma_pagamento, cliente_id, produto_id, usuario_id })

        reply.send(venda)
    }
}
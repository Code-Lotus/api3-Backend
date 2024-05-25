import { FastifyRequest, FastifyReply } from "fastify";
import UpdateVendaService from "../../services/venda/updateVendaService";

export default class UpdateVendaController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { venda_id, venda_data, venda_forma_pagamento, cliente_id, produto_id, usuario_id } = request.body as { venda_id: number, venda_data: Date, venda_forma_pagamento: string, cliente_id: number, produto_id: number, usuario_id: number }

        const vendaService = new UpdateVendaService()
        const venda = await vendaService.execute({ venda_id, venda_data, venda_forma_pagamento, cliente_id, produto_id, usuario_id })

        reply.send(venda)
    }
}
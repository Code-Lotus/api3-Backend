import { FastifyRequest, FastifyReply } from "fastify";
import UpdateComissaoService from "../../services/comissao/updateComissaoService";

export default class UpdateComissaoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { comissao_id, cnpn, cnpa, capn, capa } = request.body as { comissao_id: number, cnpn: number, cnpa: number, capn: number, capa: number }

        const comissaoService = new UpdateComissaoService()
        const comissao = await comissaoService.execute({ comissao_id, cnpn, cnpa, capn, capa })

        reply.send(comissao)
    }
}
import { FastifyRequest, FastifyReply } from "fastify";
import ListaComissaoService from "../../services/comissao/listaComissaoService";

export default class ListaComissaoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const comissaoService = new ListaComissaoService()
        
        const comissao = await comissaoService.execute()
        
        reply.send(comissao)
    }   
}
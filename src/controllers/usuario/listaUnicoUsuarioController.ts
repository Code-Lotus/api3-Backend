import { FastifyRequest, FastifyReply } from "fastify";
import ListaUnicoUsuarioService from "../../services/usuario/listaUnicoUsuarioService";

export default class ListaUnicoUsuarioController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { usuario_id } = request.body as { usuario_id: number }

        const usuarioService = new ListaUnicoUsuarioService();
        const usuario = await usuarioService.execute({ usuario_id });

        reply.send(usuario)
    }
}
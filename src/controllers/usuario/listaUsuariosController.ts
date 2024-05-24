import { FastifyRequest, FastifyReply } from "fastify";
import ListaUsuariosService from '../../services/usuario/listaUsuariosService';

export default class ListaUsuariosController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listaUsuariosService = new ListaUsuariosService();

        const usuarios = await listaUsuariosService.execute();

        reply.send(usuarios);

    }
}
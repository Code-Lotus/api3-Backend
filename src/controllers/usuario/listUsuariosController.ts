import { FastifyRequest, FastifyReply } from "fastify";
import ListUsuariosService from '../../services/usuario/listaUsuariosService';

export default class ListUsuariosController {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listaUsuariosService = new ListUsuariosService();

        const usuarios = await listaUsuariosService.execute();

        reply.send(usuarios);

    }
}
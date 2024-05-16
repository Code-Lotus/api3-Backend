import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import CreateUsuarioController from "../controllers/createUsuarioController";
import ListUsuariosController from "../controllers/listUsuariosController";
import DeleteUsuarioController from "../controllers/deleteUsuarioController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })
    
    fastify.get("/usuarios", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListUsuariosController().handle(request, reply);
    })
    
    fastify.post("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUsuarioController().handle(request, reply);
    })
    
    fastify.delete("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteUsuarioController().handle(request, reply);
    })

}
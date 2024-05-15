import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import CreateUsuarioController from "../controllers/createUsuarioController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/usuario", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateUsuarioController().handle(request, reply)
    })
}
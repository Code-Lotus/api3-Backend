import prismaClient from "../../prisma";

// interface ListaComissaoProps {
//     comissao_id: number
// }

// { comissao_id }: ListaComissaoProps

export default class ListaComissaoService {
    async execute() {
        const comissoes = await prismaClient.comissoes.findMany();

        return comissoes
    }
}
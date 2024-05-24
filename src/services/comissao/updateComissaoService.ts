import prismaClient from "../../prisma";

interface UpdateComissaoProps {
    comissao_id: number;
    cnpn: number;
    cnpa: number;
    capn: number;
    capa: number;
}

export default class UpdateComissaoService {
    async execute({ comissao_id, cnpn, cnpa, capn, capa }: UpdateComissaoProps) {

        if(!cnpn && !cnpa && !capn && !capa) {
            throw new Error("Preencha no mínimo 1 campo")
        }

        let comissao
        if(cnpn) {
            comissao = await prismaClient.comissoes.update({
                where: {
                    comissao_id: comissao_id
                },
                data: {
                    cnpn: cnpn
                }
            })
        } if(cnpa) {
            comissao = await prismaClient.comissoes.update({
                where: {
                    comissao_id: comissao_id
                },
                data: {
                    cnpa: cnpa
                }
            })
        } if(capn) {
            comissao = await prismaClient.comissoes.update({
                where: {
                    comissao_id: comissao_id
                },
                data: {
                    capn: capn
                }
            })
        } if(capa) {
            comissao = await prismaClient.comissoes.update({
                where: {
                    comissao_id: comissao_id
                },
                data: {
                    capa: capa
                }
            })
        }

        return comissao
    }
}
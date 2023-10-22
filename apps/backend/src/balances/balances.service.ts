import { PrismaService } from "@/prisma/prisma.service";
import { HttpException, Injectable } from "@nestjs/common";

@Injectable()
export class BalancesService {
    constructor(private prisma: PrismaService) {}

    async getBalances(jwt: any) {
        try {
            const user = await this.prisma.user.findUnique({
                where: {
                    id: jwt.id,
                },
                include: {
                    balance: true,
                },
            });

            if (!user) {
                throw new HttpException("Usuario não encontrado", 404);
            }

            return user;
        } catch (error) {
            console.log(error);
            throw new HttpException("Erro ao buscar usuário", 500);
        }
    }
}

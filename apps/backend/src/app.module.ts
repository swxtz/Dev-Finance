import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { UtilsModule } from "./utils/utils.module";
import { TransactionsModule } from "./transactions/transactions.module";
import { BalancesModule } from "./balances/balances.module";

@Module({
    imports: [
        PrismaModule,
        UsersModule,
        AuthModule,
        UtilsModule,
        TransactionsModule,
        BalancesModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}

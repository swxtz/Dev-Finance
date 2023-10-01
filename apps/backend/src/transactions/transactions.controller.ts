import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    UseGuards,
    Headers,
} from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { CreateTransactionDto } from "./dto/create-transaction.dto";
import { UpdateTransactionDto } from "./dto/update-transaction.dto";
import { ZodValidationPipe } from "nestjs-zod";
import { AuthGuard } from "@/auth/auth.guard";
import { UtilsService } from "@/utils/utils.service";

@Controller("transactions")
export class TransactionsController {
    constructor(
        private readonly transactionsService: TransactionsService,
        private jwtUtils: UtilsService,
    ) {}

    @Post()
    @UsePipes(new ZodValidationPipe(CreateTransactionDto))
    @UseGuards(AuthGuard)
    create(
        @Body() createTransactionDto: CreateTransactionDto,
        @Headers("Authorization") jwt: any,
    ) {
        const token = this.jwtUtils.getToken(jwt);
        return this.transactionsService.create(createTransactionDto, token);
    }

    @Get()
    findAll() {
        return this.transactionsService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return this.transactionsService.findOne(+id);
    }

    @Patch(":id")
    update(
        @Param("id") id: string,
        @Body() updateTransactionDto: UpdateTransactionDto,
    ) {
        return this.transactionsService.update(+id, updateTransactionDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.transactionsService.remove(+id);
    }
}

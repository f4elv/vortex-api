import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFormDto } from "./dtos/create-form.dto";

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}
	private readonly logger = new Logger(UserService.name)

	async create(createFormDto: CreateFormDto) {
		try {
			return this.prisma.form.create({
				data: createFormDto,
			});
		} catch {
			this.logger.error("Erro ao criar formulário: ${error.message}")
			throw new InternalServerErrorException("Erro interno do servidor")
		}
	}
}

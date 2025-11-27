import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateFormDto } from "./dtos/create-form.dto";

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async create(createFormDto: CreateFormDto) {
		return this.prisma.form.create({
			data: createFormDto,
		});
	}
}

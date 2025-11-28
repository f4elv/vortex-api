import { IsEnum, IsNotEmpty } from "class-validator";
import { FormStatus } from "@prisma/client";

export class UpdateStatusDto {
	@IsEnum(FormStatus, {
		message: "Status inválido. Valores aceitos: NOVO, RESPONDIDO, EM_ANDAMENTO, CONCLUIDO",
	})
	@IsNotEmpty({ message: "Status é obrigatório" })
	status: FormStatus;
}

import { IsString, IsNotEmpty, IsOptional, IsEnum, MinLength, MaxLength, Matches, IsPhoneNumber } from "class-validator";
import { ProjectType } from "@prisma/client";
import { Transform } from "class-transformer";
import { Escape } from "class-sanitizer";

export class CreateFormDto {
	@Escape()
	@IsString({ message: "Nome deve ser um texto" })
	@IsNotEmpty({ message: "Nome é obrigatório" })
	@MinLength(3, { message: "Nome deve ter pelo menos 3 caracteres" })
	@MaxLength(100, { message: "Nome deve ter no máximo 100 caracteres" })
	@Transform(({ value }) => value?.trim())
	name: string;

	@Escape()
	@IsString({ message: "Telefone deve ser um texto" })
	@IsNotEmpty({ message: "Telefone é obrigatório" })
	@Matches(/^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/, {
		message: "Telefone inválido. Use formato: (11) 99999-9999 ou 11999999999",
	})
	@Transform(({ value }) => value?.replace(/\D/g, ""))
	phone: string;

	@Escape()
	@IsString({ message: "Empresa deve ser um texto" })
	@IsNotEmpty({ message: "Empresa é obrgatória" })
	@MaxLength(100, { message: "Empresa deve ter no máximo 100 caracteres" })
	@Transform(({ value }) => value?.trim())
	company: string;

	@Escape()
	@IsString({ message: "Descrição do projeto deve ser um texto" })
	@IsNotEmpty({ message: "Descrição é obrigatório" })
	@MaxLength(1000, { message: "Descrição deve ter no máximo 1000 caracteres" })
	@Transform(({ value }) => value?.trim())
	projectDescription: string;

	@Escape()
	@IsString({ message: "Prazo deve ser um texto" })
	@IsNotEmpty({ message: "Prazo é obrigatório" })
	@MaxLength(50, { message: "Prazo deve ter no máximo 50 caracteres" })
	@Transform(({ value }) => value?.trim())
	deadline: string;

	@Escape()
	@IsString({ message: "Orçamento deve ser um texto" })
	@IsNotEmpty({ message: "Orçamento é obrigatório" })
	@MaxLength(50, { message: "Orçamento deve ter no máximo 50 caracteres" })
	@Transform(({ value }) => value?.trim())
	budget: string;

	@Escape()
	@IsEnum(ProjectType, {
		message: "Tipo de projeto inválido. Valores aceitos: LANDING, DASHBOARD, OUTRO",
	})
	@IsNotEmpty({ message: "Tipo do projeto é obrigatório" })
	projectType: ProjectType;

	@Escape()
	@IsString({ message: "Detalhes extras devem ser um texto" })
	@IsOptional()
	@MaxLength(2000, { message: "Detalhes extras devem ter no máximo 2000 caracteres" })
	@Transform(({ value }) => value?.trim())
	extraDetails?: string;
}

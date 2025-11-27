import { IsString, IsPhoneNumber, IsNotEmpty, IsOptional, IsEnum } from "class-validator";

export enum FormStatus {
	novo = "novo",
	respondido = "respondido",
	em_andamento = "em andamento",
	cancelado = "cancelado",
	finalizado = "finalizado",
}

export class CreateFormDto {
	@IsString()
	@IsNotEmpty()
	name: string;

	@IsPhoneNumber()
	@IsNotEmpty()
	phone: string;

	@IsString()
	@IsNotEmpty()
	company: string;

	@IsString()
	@IsNotEmpty()
	projectDescription: string;

	@IsString()
	@IsNotEmpty()
	deadline: string;

	@IsString()
	@IsNotEmpty()
	budget: string;

	@IsString()
	@IsNotEmpty()
	projectType: string;

	@IsString()
	@IsOptional()
	extraDetails?: string;
}

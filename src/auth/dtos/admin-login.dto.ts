import { IsString, IsNotEmpty } from "class-validator";

export class AdminLoginDto {
    @IsNotEmpty()
    @IsString()
    password: string;
}
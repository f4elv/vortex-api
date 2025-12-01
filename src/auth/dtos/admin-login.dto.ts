import { IsString, IsNotEmpty } from "class-validator";
import { Escape } from "class-sanitizer";

export class AdminLoginDto {
    @Escape()
    @IsNotEmpty({ message: "Senha é obrigatória" })
    @IsString()
    password: string;
}
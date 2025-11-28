import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminLoginDto } from "./dtos/admin-login.dto";

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService) {}

	async loginAdmin(adminLoginDto: AdminLoginDto) {
		const { password } = adminLoginDto;
		const adminPassword = process.env.ADMIN_PASSWORD;

		if (password !== adminPassword) {
			throw new UnauthorizedException("Senha inválida");
		}

		const payload = {
			role: "admin",
			iat: Date.now(),
		};

		const token = this.jwtService.sign(payload);

		return {
			access_token: token,
			message: "Login realizado com sucesso",
		};
	}

	async validateToken(payload: any) {
		if (payload.role != "admin") {
			throw new UnauthorizedException("Token inválido");
		}
		return { role: "admin" };
	}
}

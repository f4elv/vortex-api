import { Injectable, UnauthorizedException, Logger } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AdminLoginDto } from "./dtos/admin-login.dto";

@Injectable()
export class AuthService {
	constructor(private jwtService: JwtService) {}
	private readonly logger = new Logger(AuthService.name )

	async loginAdmin(adminLoginDto: AdminLoginDto) {
		const { password } = adminLoginDto;
		const adminPassword = process.env.ADMIN_PASSWORD;

		if (password !== adminPassword) {
			this.logger.warn("Admin errou a senha de login")
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
			this.logger.warn("Token do admin inválido")
			throw new UnauthorizedException("Token inválido");
		}
		return { role: "admin" };
	}
}

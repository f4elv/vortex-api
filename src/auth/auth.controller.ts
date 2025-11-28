import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AdminLoginDto } from "./dtos/admin-login.dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@Post("admin/login")
	loginAdmin(@Body() adminLoginDto: AdminLoginDto) {
		return this.authService.loginAdmin(adminLoginDto);
	}

	// Rota para testar se o token está válido
	@UseGuards(JwtAuthGuard)
	@Get("verify")
	verify() {
		return { message: "Token válido", authenticated: true };
	}
}

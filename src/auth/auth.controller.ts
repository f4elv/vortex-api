import { Controller, Post, Body, Get, UseGuards, Logger } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AdminLoginDto } from "./dtos/admin-login.dto";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

@Controller("auth")
export class AuthController {
	constructor(private readonly authService: AuthService) {}
	private readonly logger = new Logger(AuthController.name)

	@Post("admin/login")
	loginAdmin(@Body() adminLoginDto: AdminLoginDto) {
		this.logger.log("Admin realizou o Login")
		return this.authService.loginAdmin(adminLoginDto);
	}

	@UseGuards(JwtAuthGuard)
	@Get("verify")
	verify() {
		this.logger.log("Admim validou o token")
		return { message: "Token válido", authenticated: true };
	}

	@UseGuards(JwtAuthGuard)
	@Post("logout")
	logout () {
		return this.logger.log("Admin realizou o Logout")
	}
} 

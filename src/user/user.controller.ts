import { Controller, Post, Body, Logger } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateFormDto } from "./dtos/create-form.dto";
import { Throttle } from "@nestjs/throttler";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}
	private logger = new Logger(UserController.name)

	@Throttle({ default: { limit: 5, ttl: 60000 } })
	@Post()
	create(@Body() createFormDto: CreateFormDto) {
		this.logger.log("Usuário criou um novo formulário")
		return this.userService.create(createFormDto);
	}
}

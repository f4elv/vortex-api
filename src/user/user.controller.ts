import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateFormDto } from "./dtos/create-form.dto";
import { Throttle } from "@nestjs/throttler";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Throttle({ default: { limit: 3, ttl: 60000 } })
	@Post()
	create(@Body() createFormDto: CreateFormDto) {
		return this.userService.create(createFormDto);
	}
}

import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateFormDto } from "./dtos/create-form.dto";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createFormDto: CreateFormDto) {
		return this.userService.create(createFormDto);
	}
}

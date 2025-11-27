import dotenv from "dotenv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

dotenv.config();

const port = process.env.PORT || 3333;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	await app.listen(port);
	console.log("server is running on port" + port);
}
bootstrap();

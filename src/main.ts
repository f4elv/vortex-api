import dotenv from "dotenv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import helmet from "helmet";

dotenv.config();

const port = process.env.PORT || 3333;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.use(helmet());

	app.enableCors();

	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true,
			transform: true,
			transformOptions: {
				enableImplicitConversion: true,
			},
			errorHttpStatusCode: 400,
			stopAtFirstError: false,
		})
	);

	await app.listen(port);
	console.log("server is running on port " + port);
}
bootstrap();

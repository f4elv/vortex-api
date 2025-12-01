import dotenv from "dotenv";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { Logger } from "@nestjs/common";
import helmet from "helmet";

dotenv.config();

const port = process.env.PORT || 3333;

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		logger: ["error", "warn", "log", "debug", "verbose"]
	});

	app.use(helmet());
	app.enableCors();
	// app.enableCors({
  	// 	origin: process.env.FRONTEND_URL || 'https://seu-dominio.com',
  	// 	credentials: true,
  	// 	methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  	// 	allowedHeaders: ['Content-Type', 'Authorization'],
	// });

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

	const logger = new Logger("Bootstrap")

	app.enableShutdownHooks()

	await app.listen(port);
	console.log("server is running on port " + port);
}
bootstrap();

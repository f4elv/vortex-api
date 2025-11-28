import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';

@Module({
	imports: [UserModule, AdminModule, AuthModule],
	controllers: [],
	providers: [],
})
export class AppModule {}

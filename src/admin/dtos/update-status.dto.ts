import { IsEnum, } from 'class-validator';
import { FormStatus } from '@prisma/client';

export class UpdateStatusDto {
    @IsEnum(FormStatus)
    status: FormStatus;
}
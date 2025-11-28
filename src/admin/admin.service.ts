import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormStatus, ProjectType } from '@prisma/client';
import { UpdateStatusDto } from './dtos/update-status.dto';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

    async FindAllForms() {
        return this.prisma.form.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async FindFormById(formId: string) {
        return this.prisma.form.findUnique({
            where: { id: formId },
        });
    }

    async FindFormsByStatus(status: FormStatus) {
        return this.prisma.form.findMany({
            where: { status },
            orderBy: { createdAt: 'desc' },
        });
    }

    async FindFormsByProjectType(projectType: ProjectType) {
        return this.prisma.form.findMany({
            where: { projectType },
            orderBy: { createdAt: 'desc' },
        });
    }

    async UpdateFormStatus(formId: string, updateStatusDto: UpdateStatusDto) {
        return this.prisma.form.update({
            where: { id: formId },
            data: { status: updateStatusDto.status },
        });
    }
}
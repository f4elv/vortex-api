import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormStatus, ProjectType } from '@prisma/client';
import { UpdateStatusDto } from './dtos/update-status.dto';

@Injectable()
export class AdminService {
    constructor(private prisma: PrismaService) {}

    async FindAllForms() {
        const forms = await this.prisma.form.findMany({
            orderBy: { createdAt: 'desc' },
        });

        if(!forms) throw new NotFoundException("Formulários não encontrados")

        return forms
    }

    async FindFormById(formId: string) {
        const form = await this.prisma.form.findUnique({
            where: { id: formId },
        });

        if(!form) throw new NotFoundException("Formulário não encontrado")

        return form
    }

    async FindFormsByStatus(status: FormStatus) {
        const forms = await this.prisma.form.findMany({
            where: { status },
            orderBy: { createdAt: 'desc' },
        });

        if(!forms) throw new NotFoundException("Formulários não encontrados")

        return forms
    }

    async FindFormsByProjectType(projectType: ProjectType) {
        const forms = await this.prisma.form.findMany({
            where: { projectType },
            orderBy: { createdAt: 'desc' },
        });

        if(!forms) throw new NotFoundException("Formulários não encontrados")

        return forms
    }

    async UpdateFormStatus(formId: string, updateStatusDto: UpdateStatusDto) {
        const form = await this.prisma.form.update({
            where: { id: formId },
            data: { status: updateStatusDto.status },
        });

        if(!form) throw new NotFoundException("Formulário não encontrado")

        return form
    }
}
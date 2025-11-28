import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateStatusDto } from './dtos/update-status.dto';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Get('forms')
    async FindAllForms() {
        return this.adminService.FindAllForms();
    }

    @Get(':formId')
    async FindFormById(@Param('formId') formId: string) {
        return this.adminService.FindFormById(formId);
    }

    @Get('status/:status')
    async FindFormsByStatus(@Param('status') status: string) {
        return this.adminService.FindFormsByStatus(status as any);
    }

    @Get('project-type/:projectType')
    async FindFormsByProjectType(@Param('projectType') projectType: string) {
        return this.adminService.FindFormsByProjectType(projectType as any);
    }

    @Patch(':formId/status')
    async UpdateFormStatus(
        @Param('formId') formId: string,
        @Body() updateStatusDto: UpdateStatusDto,
    ) {
        return this.adminService.UpdateFormStatus(formId, updateStatusDto);
    }
}
import { 
  Controller, 
  Get, 
  Patch, 
  Param, 
  Body, 
  UseGuards, 
  Logger, 
  InternalServerErrorException 
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { UpdateStatusDto } from "./dtos/update-status.dto";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("admin")
@UseGuards(JwtAuthGuard)
export class AdminController {
  private readonly logger = new Logger(AdminController.name);

  constructor(private adminService: AdminService) {}

  @Get("forms")
  async FindAllForms() {
    try {
      this.logger.log("Listando todos os formulários");
      return this.adminService.FindAllForms();
    } catch (error) {
      this.logger.error(`Erro ao listar formulários: ${error.message}`, error.stack);
      throw new InternalServerErrorException("Erro ao listar formulários");
    }
  }

  @Get(":formId")
  async FindFormById(@Param("formId") formId: string) {
    try {
      this.logger.log(`Buscando formulário ${formId}`);
      return this.adminService.FindFormById(formId);
    } catch (error) {
      this.logger.error(
        `Erro ao buscar formulário ${formId}: ${error.message}`,
        error.stack
      );
      throw new InternalServerErrorException("Erro ao buscar formulário");
    }
  }

  @Get("status/:status")
  async FindFormsByStatus(@Param("status") status: string) {
    try {
      this.logger.log(`Buscando formulários com status ${status}`);
      return this.adminService.FindFormsByStatus(status as any);
    } catch (error) {
      this.logger.error(
        `Erro ao buscar por status ${status}: ${error.message}`,
        error.stack
      );
      throw new InternalServerErrorException("Erro ao buscar por status");
    }
  }

  @Get("project-type/:projectType")
  async FindFormsByProjectType(@Param("projectType") projectType: string) {
    try {
      this.logger.log(`Buscando formulários por tipo de projeto ${projectType}`);
      return this.adminService.FindFormsByProjectType(projectType as any);
    } catch (error) {
      this.logger.error(
        `Erro ao buscar por tipo do projeto ${projectType}: ${error.message}`,
        error.stack
      );
      throw new InternalServerErrorException("Erro ao buscar por tipo do projeto");
    }
  }

  @Patch(":formId/status")
  async UpdateFormStatus(
    @Param("formId") formId: string, 
    @Body() updateStatusDto: UpdateStatusDto
  ) {
    try {
      this.logger.log(`Atualizando status do formulário ${formId}`);
      return this.adminService.UpdateFormStatus(formId, updateStatusDto);
    } catch (error) {
      this.logger.error(
        `Erro ao atualizar status do formulário ${formId}: ${error.message}`,
        error.stack
      );
      throw new InternalServerErrorException("Erro ao atualizar status");
    }
  }
}

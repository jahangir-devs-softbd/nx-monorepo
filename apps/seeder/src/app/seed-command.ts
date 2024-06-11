import { Command, CommandRunner } from "nest-commander";
import { DataSource } from "typeorm";
import { CircleSeeder } from "@apps/seeder/seeds/location/circle.seed";
import { CityCorporationSeeder } from "@apps/seeder/seeds/location/city-corporation.seed";
import { CountrySeeder } from "@apps/seeder/seeds/location/country.seed";
import { DistrictSeeder } from "@apps/seeder/seeds/location/district.seed";
import { DivisionSeeder } from "@apps/seeder/seeds/location/division.seed";
import { MunicipalitySeeder } from "@apps/seeder/seeds/location/municipality.seed";
import { ThanaSeeder } from "@apps/seeder/seeds/location/thana.seed";
import { UnionSeeder } from "@apps/seeder/seeds/location/union.seed";
import { WardSeeder } from "@apps/seeder/seeds/location/ward.seed";
import { ZoneSeeder } from "@apps/seeder/seeds/location/zone.seed";
import { UpazilaSeeder } from "@apps/seeder/seeds/location/upazila.seed";
import { PermissionSeeder } from "@apps/seeder/seeds/permission/permission.seed";
import { PermissionGroupSeeder } from "@apps/seeder/seeds/permission/permission-group.seed";
import { PermissionModuleSeeder } from "@apps/seeder/seeds/permission/permission-module.seed";
import { GradeSeeder } from "@apps/seeder/seeds/user/grade.seed";
import { PostOfficeSeeder } from "@apps/seeder/seeds/location/post-office.seed";
import { RankSeeder } from "@apps/seeder/seeds/user/rank.seed";
import { UserSeeder } from "@apps/seeder/seeds/user/user.seed";
import { BaseOfficeSeeder } from "@apps/seeder/seeds/office/base-office.seed";
import { BaseOfficeOrganogramSeeder } from "@apps/seeder/seeds/office/base-office-organogram.seed";
import { MinistryOfficeSeeder } from "@apps/seeder/seeds/office/ministry-office.seed";
import { OfficeSeeder } from "@apps/seeder/seeds/office/office.seed";
import { OfficeLayerSeeder } from "@apps/seeder/seeds/office/office-layer.seed";
import { OfficeOrganogramSeeder } from "@apps/seeder/seeds/office/office-organogram.seed";
import { OfficeTimeSeeder } from "@apps/seeder/seeds/office/office-time.seed";
import { AllPermissionSeeder } from "@apps/seeder/seeds/permission/all-permission.seed";
import { AllUserSeeder } from "@apps/seeder/seeds/user/all-user.seed";
import { AllLocationSeeder } from "@apps/seeder/seeds/location/all-location.seed";
import { AllOfficeSeeder } from "@apps/seeder/seeds/office/all-office.seed";
import { AllSeeder } from "@apps/seeder/seeds/all.seed";
import { UserPermissionSeeder } from "@apps/seeder/seeds/permission/user-permission.seed";
import { PropertyStatusQuickNoteSeeder } from "@apps/seeder/seeds/data-bank/property-status-quick-note.seed";
import { WorkFlowSeeder } from "@apps/seeder/seeds/work-flow/work-flow.seed";
import { AllWorkFlowSeeder } from "@apps/seeder/seeds/work-flow/all-work-flow.seed";
import { PermissionGroupPermissionSeeder } from "@apps/seeder/seeds/permission/permission-group-permission.seed";
import { WorkFlowStepSeeder } from "@apps/seeder/seeds/work-flow/work-flow-step.seed";
import { WorkFlowActorSeeder } from "@apps/seeder/seeds/work-flow/work-flow-actor.seed";
import { AllLeaveSeeder } from "@apps/seeder/seeds/leave/all-leave.seed";
import { LeaveCategorySeeder } from "@apps/seeder/seeds/leave/leave-category.seed";
import { LeaveTypeSeeder } from "@apps/seeder/seeds/leave/leave-type.seed";
import { CommentTopicSeed } from "@apps/seeder/seeds/comment/comment-topic.seed";
import { EducationDegreeSeeder } from "@apps/seeder/seeds/user/education-degree.seed";
import { EducationInstituteSeeder } from "@apps/seeder/seeds/user/education-institute.seed";
import { EducationDepartmentSeeder } from "@apps/seeder/seeds/user/education-department.seed";
import { LeavePlaceholderSeeder } from "@apps/seeder/seeds/leave/leave-placeholder.seeder";
import { LeaveRuleSeeder } from "@apps/seeder/seeds/leave/leave-rule.seed";
import { DisciplinaryActionSeed } from "@apps/seeder/seeds/disciplinary-action/disciplinary-action.seed";
import { AllDisciplinaryActionSeed } from "@apps/seeder/seeds/disciplinary-action/all-disciplinary-action.seed";

@Command({ name: "seeder", description: "A parameter parse" })
export class SeederCommand extends CommandRunner {
  constructor(private dataSource: DataSource) {
    super();
  }

  async run(passedParams: string[]): Promise<void> {
    const instance = passedParams.length == 0 ? new AllSeeder() : this.getClass(passedParams[0]);
    await instance.run(this.dataSource);
  }

  getClass(seederClassName: string): any {
    const seeders = {
      /** All Seeder */
      AllSeeder: new AllSeeder(),
      /** End All Seeder */

      /** Permission Seeder */
      AllPermissionSeeder: new AllPermissionSeeder(),
      PermissionSeeder: new PermissionSeeder(),
      PermissionGroupSeeder: new PermissionGroupSeeder(),
      PermissionModuleSeeder: new PermissionModuleSeeder(),
      PermissionGroupPermissionSeeder: new PermissionGroupPermissionSeeder(),
      /** End Permission Seeder */

      /** Location Seeder */
      AllLocationSeeder: new AllLocationSeeder(),
      CircleSeeder: new CircleSeeder(),
      CityCorporationSeeder: new CityCorporationSeeder(),
      CountrySeeder: new CountrySeeder(),
      DistrictSeeder: new DistrictSeeder(),
      DivisionSeeder: new DivisionSeeder(),
      MunicipalitySeeder: new MunicipalitySeeder(),
      PostOfficeSeeder: new PostOfficeSeeder(),
      ThanaSeeder: new ThanaSeeder(),
      UnionSeeder: new UnionSeeder(),
      UpazilaSeeder: new UpazilaSeeder(),
      WardSeeder: new WardSeeder(),
      ZoneSeeder: new ZoneSeeder(),
      /** End Location Seeder */

      /** User Seeder */
      AllUserSeeder: new AllUserSeeder(),
      GradeSeeder: new GradeSeeder(),
      RankSeeder: new RankSeeder(),
      UserSeeder: new UserSeeder(),
      UserPermissionSeeder: new UserPermissionSeeder(),
      /** End User Seeder */

      /** Office Seeder */
      AllOfficeSeeder: new AllOfficeSeeder(),
      BaseOfficeSeeder: new BaseOfficeSeeder(),
      BaseOfficeOrganogramSeeder: new BaseOfficeOrganogramSeeder(),
      MinistryOfficeSeeder: new MinistryOfficeSeeder(),
      OfficeSeeder: new OfficeSeeder(),
      OfficeLayerSeeder: new OfficeLayerSeeder(),
      OfficeOrganogramSeeder: new OfficeOrganogramSeeder(),
      OfficeTimeSeeder: new OfficeTimeSeeder(),
      /** End Office Seeder */

      /** user education seeder */
      EducationDepartmentSeeder: new EducationDepartmentSeeder(),
      EducationDegreeSeeder: new EducationDegreeSeeder(),
      EducationInstituteSeeder: new EducationInstituteSeeder(),

      /** Databank seeder*/
      PropertyStatusQuickNoteSeeder: new PropertyStatusQuickNoteSeeder(),

      /** Work Flow Seeder */
      AllWorkFlowSeeder: new AllWorkFlowSeeder(),
      WorkFlowSeeder: new WorkFlowSeeder(),
      WorkFlowStepSeeder: new WorkFlowStepSeeder(),
      WorkFlowActorSeeder: new WorkFlowActorSeeder(),
      /** End Work Flow Seeder */

      /** Leave Seeder */
      AllLeaveSeeder: new AllLeaveSeeder(),
      LeaveCategorySeeder: new LeaveCategorySeeder(),
      LeaveTypeSeeder: new LeaveTypeSeeder(),
      LeavePlaceholderSeeder: new LeavePlaceholderSeeder(),
      LeaveRuleSeeder: new LeaveRuleSeeder(),
      /** End Leave Seeder */

      /** Comment seeder */
      CommentTopicSeeder: new CommentTopicSeed(),

      /** Disciplinary seeder */
      AllDisciplinaryActionSeed: new AllDisciplinaryActionSeed(),
      DisciplinaryActionSeeder: new DisciplinaryActionSeed(),
    };
    return seeders[seederClassName];
  }
}

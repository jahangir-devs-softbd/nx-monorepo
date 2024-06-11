import { DataSource } from "typeorm";
import { BaseOfficeSeeder } from "@apps/seeder/seeds/office/base-office.seed";
import { BaseOfficeOrganogramSeeder } from "@apps/seeder/seeds/office/base-office-organogram.seed";
import { MinistryOfficeSeeder } from "@apps/seeder/seeds/office/ministry-office.seed";
import { OfficeSeeder } from "@apps/seeder/seeds/office/office.seed";
import { OfficeLayerSeeder } from "@apps/seeder/seeds/office/office-layer.seed";
import { OfficeOrganogramSeeder } from "@apps/seeder/seeds/office/office-organogram.seed";
import { OfficeTimeSeeder } from "@apps/seeder/seeds/office/office-time.seed";

export class AllOfficeSeeder {
  async run(dataSource: DataSource): Promise<any> {
    await new BaseOfficeSeeder().run(dataSource);
    await new BaseOfficeOrganogramSeeder().run(dataSource);
    await new MinistryOfficeSeeder().run(dataSource);
    await new OfficeSeeder().run(dataSource);
    await new OfficeLayerSeeder().run(dataSource);
    await new OfficeOrganogramSeeder().run(dataSource);
    await new OfficeTimeSeeder().run(dataSource);
  }
}

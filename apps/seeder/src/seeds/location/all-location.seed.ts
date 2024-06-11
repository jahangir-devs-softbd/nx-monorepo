import { DataSource } from "typeorm";
import { CircleSeeder } from "@apps/seeder/seeds/location/circle.seed";
import { CityCorporationSeeder } from "@apps/seeder/seeds/location/city-corporation.seed";
import { CountrySeeder } from "@apps/seeder/seeds/location/country.seed";
import { DistrictSeeder } from "@apps/seeder/seeds/location/district.seed";
import { DivisionSeeder } from "@apps/seeder/seeds/location/division.seed";
import { MunicipalitySeeder } from "@apps/seeder/seeds/location/municipality.seed";
import { ThanaSeeder } from "@apps/seeder/seeds/location/thana.seed";
import { UnionSeeder } from "@apps/seeder/seeds/location/union.seed";
import { UpazilaSeeder } from "@apps/seeder/seeds/location/upazila.seed";
import { WardSeeder } from "@apps/seeder/seeds/location/ward.seed";
import { ZoneSeeder } from "@apps/seeder/seeds/location/zone.seed";
import { PostOfficeSeeder } from "@apps/seeder/seeds/location/post-office.seed";

export class AllLocationSeeder {
  async run(dataSource: DataSource): Promise<any> {
    await new CircleSeeder().run(dataSource);
    await new CityCorporationSeeder().run(dataSource);
    await new CountrySeeder().run(dataSource);
    await new DistrictSeeder().run(dataSource);
    await new DivisionSeeder().run(dataSource);
    await new MunicipalitySeeder().run(dataSource);
    await new PostOfficeSeeder().run(dataSource);
    await new ThanaSeeder().run(dataSource);
    await new UnionSeeder().run(dataSource);
    await new UpazilaSeeder().run(dataSource);
    await new WardSeeder().run(dataSource);
    await new ZoneSeeder().run(dataSource);
  }
}

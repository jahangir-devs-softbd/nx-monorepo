import { DataSource } from "typeorm";
import { ProspectiveRealEstateDataEntity } from "@lams/shared/database/entities/data-bank/prospective-real-estate-data.entity";

export class ProspectiveSeed {
  data: any[] = [
    {
      id: 1,
      acquisition_type_id: 1,
      amount: 40,
    },
    {
      id: 2,
      acquisition_type_id: 4,
      amount: 50,
    },
    {
      id: 3,
      acquisition_type_id: 5,
      amount: 70,
    },
    {
      id: 4,
      acquisition_type_id: 6,
      amount: 90,
    },
    {
      id: 5,
      acquisition_type_id: 7,
      amount: 230,
    },
    {
      id: 6,
      acquisition_type_id: 8,
      amount: 100,
    },
    {
      id: 7,
      acquisition_type_id: 9,
      amount: 20,
    },
    {
      id: 8,
      acquisition_type_id: 10,
      amount: 670,
    },
    {
      id: 9,
      acquisition_type_id: 11,
      amount: 2100,
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(ProspectiveRealEstateDataEntity).clear();
    await dataSource.manager.save(ProspectiveRealEstateDataEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

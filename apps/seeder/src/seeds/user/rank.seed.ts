import { RankEntity } from "@lams/shared/database/entities/office/rank.entity";
import { DataSource } from "typeorm";

export class RankSeeder {
  data: any[] = [
    {
      id: 1,
      name: "মন্ত্রী",
      name_en: "Minister",
      short_name: "MIN",
      short_name_en: "MIN",
      sort_order: 1,
    },
    {
      id: 2,
      name: "প্রতিমন্ত্রী",
      name_en: "State Minister",
      short_name: "SMIN",
      short_name_en: "SMIN",
      sort_order: 2,
    },
    {
      id: 3,
      name: "সচিব",
      name_en: "Secretary",
      short_name: "SEC",
      short_name_en: "SEC",
      sort_order: 3,
    },
    {
      id: 4,
      name: "অতিরিক্ত সচিব",
      name_en: "Additional Secretary",
      short_name: "ASEC",
      short_name_en: "ASEC",
      sort_order: 4,
    },
    {
      id: 5,
      name: "যুগ্ম সচিব",
      name_en: "Joint Secretary",
      short_name: "JSEC",
      short_name_en: "JSEC",
      sort_order: 5,
    },
    {
      id: 6,
      name: "উপ-সচিব",
      name_en: "Deputy Secretary",
      short_name: "DSEC",
      short_name_en: "DSEC",
      sort_order: 6,
    },
    {
      id: 7,
      name: "সিনিয়র সহকারী সচিব",
      name_en: "Senior Assistant Secretary",
      short_name: "SASEC",
      short_name_en: "SASEC",
      sort_order: 7,
    },
    {
      id: 8,
      name: "সহকারী সচিব",
      name_en: "Assistant Secretary",
      short_name: "ASSEC",
      short_name_en: "ASSEC",
      sort_order: 8,
    },
    {
      id: 9,
      name: "কমিশনার",
      name_en: "Commissioner",
      short_name: "COMM",
      short_name_en: "COMM",
      sort_order: 9,
    },
    {
      id: 10,
      name: "সহকারী কমিশনার",
      name_en: "Assistant Commissioner",
      short_name: "ACOMM",
      short_name_en: "ACOMM",
      sort_order: 14,
    },
    {
      id: 11,
      name: "অতিরিক্ত কমিশনার",
      name_en: "Additional Commissioner",
      short_name: "ADDCOMM",
      short_name_en: "ADDCOMM",
      sort_order: 10,
    },
    {
      id: 12,
      name: "জেলা প্রশাসক",
      name_en: "Deputy Commissioner",
      short_name: "DC",
      short_name_en: "DC",
      sort_order: 11,
    },
    {
      id: 13,
      name: "অতিরিক্ত জেলা প্রশাসক",
      name_en: "Additional Deputy Commissioner",
      short_name: "ADC",
      short_name_en: "ADC",
      sort_order: 12,
    },
    {
      id: 14,
      name: "উপজেলা নির্বাহী অফিসার",
      name_en: "Upazila Nirbahi Officer",
      short_name: "UNO",
      short_name_en: "UNO",
      sort_order: 13,
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(RankEntity).clear();
    await dataSource.manager.save(RankEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

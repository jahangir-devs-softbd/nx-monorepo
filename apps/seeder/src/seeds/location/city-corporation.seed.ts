import { DataSource } from "typeorm";
import { CityCorporationEntity } from "@lams/shared/database/entities/location/city-corporation.entity";

export class CityCorporationSeeder {
  data: any[] = [
    {
      id: 1,
      name: "ঢাকা দক্ষিন সিটি কর্পোরেশন",
      name_en: "Dhaka South City Corporation",
      bbs_code: "20",
      division_id: 3,
      district_id: 18,
      code: "CIT-1",
      division_bbs_code: "30",
      district_bbs_code: "26",
    },
    {
      id: 2,
      name: "ঢাকা উত্তর সিটি কর্পোরেশন",
      name_en: "Dhaka North City Corporation ",
      bbs_code: "25",
      division_id: 3,
      district_id: 18,
      code: "CIT-2",
      division_bbs_code: "30",
      district_bbs_code: "26",
    },
    {
      id: 3,
      name: "খুলনা সিটি কর্পোরেশন",
      name_en: "Khulna City Corporation",
      bbs_code: "33",
      division_id: 4,
      district_id: 39,
      code: "CIT-3",
      division_bbs_code: "40",
      district_bbs_code: "47",
    },
    {
      id: 4,
      name: "রংপুর সিটি কর্পোরেশন",
      name_en: "Rangpur City Corporation",
      bbs_code: "75",
      division_id: 6,
      district_id: 59,
      code: "CIT-4",
      division_bbs_code: "55",
      district_bbs_code: "85",
    },
    {
      id: 5,
      name: "কুমিল্লা সিটি কর্পোরেশন",
      name_en: "Comilla City Corporation",
      bbs_code: "50",
      division_id: 2,
      district_id: 11,
      code: "CIT-5",
      division_bbs_code: "20",
      district_bbs_code: "19",
    },
    {
      id: 6,
      name: "চট্রগ্রাম সিটি কর্পোরেশন",
      name_en: "Chittagong City Corporation",
      bbs_code: "16",
      division_id: 2,
      district_id: 10,
      code: "CIT-6",
      division_bbs_code: "20",
      district_bbs_code: "15",
    },
    {
      id: 7,
      name: "নারায়ণগঞ্জ সিটি কর্পোরেশন",
      name_en: "Narayanganj City Corporation",
      bbs_code: "44",
      division_id: 3,
      district_id: 28,
      code: "CIT-7",
      division_bbs_code: "30",
      district_bbs_code: "67",
    },
    {
      id: 8,
      name: "সিলেট সিটি কর্পোরেশন",
      name_en: "Sylhet City Corporation",
      bbs_code: "50",
      division_id: 7,
      district_id: 64,
      code: "CIT-8",
      division_bbs_code: "60",
      district_bbs_code: "91",
    },
    {
      id: 9,
      name: "গাজীপুর সিটি কর্পোরেশন",
      name_en: "Gazipur City Corporation",
      bbs_code: "33",
      division_id: 3,
      district_id: 20,
      code: "CIT-9",
      division_bbs_code: "30",
      district_bbs_code: "33",
    },
    {
      id: 10,
      name: "রাজশাহী সিটি কর্পোরেশন",
      name_en: "Rajshahi City Corporation",
      bbs_code: "66",
      division_id: 5,
      district_id: 51,
      code: "CIT-10",
      division_bbs_code: "50",
      district_bbs_code: "81",
    },
    {
      id: 11,
      name: "বরিশাল সিটি কর্পোরেশন",
      name_en: "Barisal City Corporation",
      bbs_code: "50",
      division_id: 1,
      district_id: 2,
      code: "CIT-11",
      division_bbs_code: "10",
      district_bbs_code: "06",
    },
    {
      id: 12,
      name: "ময়মনসিংহ সিটি কর্পোরেশন",
      name_en: "Mymensingh City Corporation",
      bbs_code: "4561",
      division_id: 8,
      district_id: 27,
      code: "CIT-12",
      division_bbs_code: "45",
      district_bbs_code: "61",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(CityCorporationEntity).clear();
    await dataSource.manager.save(CityCorporationEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

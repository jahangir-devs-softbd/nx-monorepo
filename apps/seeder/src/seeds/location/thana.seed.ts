import { DataSource } from "typeorm";
import { ThanaEntity } from "@lams/shared/database/entities/location/thana.entity";

export class ThanaSeeder {
  data: any[] = [
    {
      id: 1,
      name: "ডবলমুরিং",
      name_en: "Double Mooring",
      division_id: 2,
      district_id: 10,
      bbs_code: "28",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 2,
      name: "কোতোয়ালী",
      name_en: "Kotwali",
      division_id: 2,
      district_id: 10,
      bbs_code: "41",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 3,
      name: "পাঁচলাইশ",
      name_en: "Panchlaish",
      division_id: 2,
      district_id: 10,
      bbs_code: "57",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 4,
      name: "চট্টগ্রাম পোর্ট",
      name_en: "Chittagong Port",
      division_id: 2,
      district_id: 10,
      bbs_code: "20",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 5,
      name: "ডেমরা",
      name_en: "Demra",
      division_id: 3,
      district_id: 18,
      bbs_code: "12",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 6,
      name: "গুলশান আবাসিক এলাকা",
      name_en: "Gulshan Residential Area",
      division_id: 3,
      district_id: 18,
      bbs_code: "26",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 7,
      name: "মিরপুর",
      name_en: "Mirpur",
      division_id: 3,
      district_id: 18,
      bbs_code: "48",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 8,
      name: "মোহাম্মদপুর আবাসিক এলাকা",
      name_en: "Mohammadpur Residential Area",
      division_id: 3,
      district_id: 18,
      bbs_code: "50",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 9,
      name: "ক্যান্টনমেন্ট",
      name_en: "Cantonment",
      division_id: 3,
      district_id: 18,
      bbs_code: "08",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 10,
      name: "ধানমন্ডি",
      name_en: "Dhanmondi",
      division_id: 3,
      district_id: 18,
      bbs_code: "16",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 11,
      name: "কোতয়ালী",
      name_en: "Kotwali",
      division_id: 3,
      district_id: 18,
      bbs_code: "40",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 12,
      name: "লালবাগ",
      name_en: "Lalbagh",
      division_id: 3,
      district_id: 18,
      bbs_code: "42",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 13,
      name: "মতিঝিল",
      name_en: "Motijheel",
      division_id: 3,
      district_id: 18,
      bbs_code: "54",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 14,
      name: "রমনা",
      name_en: "Ramana",
      division_id: 3,
      district_id: 18,
      bbs_code: "75",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 15,
      name: "সূত্রাপুর",
      name_en: "Sutrapur",
      division_id: 3,
      district_id: 18,
      bbs_code: "88",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
    {
      id: 16,
      name: "তেজগাঁও",
      name_en: "Tejgaon",
      division_id: 3,
      district_id: 18,
      bbs_code: "90",
      row_status: 1,
      created_at: "2017-11-09 13:18:13",
      updated_at: "2017-11-09 13:18:13",
      deleted_at: null,
      created_by: null,
      updated_by: null,
      deleted_by: null,
      is_sadar_upazila: 0,
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(ThanaEntity).clear();
    await dataSource.manager.save(ThanaEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

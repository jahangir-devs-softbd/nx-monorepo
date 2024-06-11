import { DataSource } from "typeorm";
import { EducationDegreeEntity } from "@lams/shared/database/entities/user/education-degree.entity";

export class EducationDegreeSeeder {
  data: any[] = [
    {
      id: 1,
      name: "মাধ্যমিক শিক্ষা সার্টিফিকেট (এসএসসি)",
      name_en: "Secondary School Certificate (SSC)",
    },
    {
      id: 2,
      name: "উচ্চতর মাধ্যমিক শিক্ষা সার্টিফিকেট (এইচএসসি)",
      name_en: "Higher Secondary Certificate (HSC)",
    },
    {
      id: 3,
      name: "আর্টস স্নাতক (বিএ)",
      name_en: "Bachelor of Arts (BA)",
    },
    {
      id: 4,
      name: "বিজ্ঞান স্নাতক (বিএসসি)",
      name_en: "Bachelor of Science (BSc)",
    },
    {
      id: 5,
      name: "বাণিজ্য স্নাতক (বিকম)",
      name_en: "Bachelor of Commerce (BCom)",
    },
    {
      id: 6,
      name: "ব্যবসায় প্রশাসন স্নাতক (বিবিএ)",
      name_en: "Bachelor of Business Administration (BBA)",
    },
    {
      id: 7,
      name: "ইঞ্জিনিয়ারিং স্নাতক (বি ই)",
      name_en: "Bachelor of Engineering (BE)",
    },
    {
      id: 8,
      name: "চিকিৎসা স্নাতক, শাস্ত্রীয় চিকিৎসা স্নাতক (এমবিবিএস)",
      name_en: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    },
    {
      id: 9,
      name: "আর্টস স্নাতকোত্তর (এমএ)",
      name_en: "Master of Arts (MA)",
    },
    {
      id: 10,
      name: "বিজ্ঞান স্নাতকোত্তর (এমএসসি)",
      name_en: "Master of Science (MSc)",
    },
    {
      id: 11,
      name: "বাণিজ্য স্নাতকোত্তর (এমকম)",
      name_en: "Master of Commerce (MCom)",
    },
    {
      id: 12,
      name: "ব্যবসায় প্রশাসন স্নাতকোত্তর (এমবিএ)",
      name_en: "Master of Business Administration (MBA)",
    },
    {
      id: 13,
      name: "ইঞ্জিনিয়ারিং স্নাতকোত্তর (এম ই)",
      name_en: "Master of Engineering (ME)",
    },
    {
      id: 14,
      name: "দর্শন স্নাতকোত্তর (এমফিল)",
      name_en: "Master of Philosophy (MPhil)",
    },
    {
      id: 15,
      name: "জনস্বাস্থ্য স্নাতকোত্তর (এমপিএইচ)",
      name_en: "Master of Public Health (MPH)",
    },
    {
      id: 16,
      name: "সামাজিক কর্ম স্নাতকোত্তর (এমএসডব্লিউ)",
      name_en: "Master of Social Work (MSW)",
    },
    {
      id: 17,
      name: "কানুনের স্নাতক (এলএলবি)",
      name_en: "Bachelor of Laws (LLB)",
    },
    {
      id: 18,
      name: "শিক্ষাশাস্ত্র স্নাতক (বি এড)",
      name_en: "Bachelor of Education (BEd)",
    },
    {
      id: 19,
      name: "চিত্রকলা স্নাতক (বিএফএ)",
      name_en: "Bachelor of Fine Arts (BFA)",
    },
    {
      id: 20,
      name: "স্থাপত্য কলা স্নাতক (বিআর্ক)",
      name_en: "Bachelor of Architecture (BArch)",
    },
    {
      id: 21,
      name: "ইঞ্জিনিয়ারিং ডিপ্লোমা (ডিপইঞ্জ)",
      name_en: "Diploma in Engineering (DipEng)",
    },
    {
      id: 22,
      name: "নার্সিং ডিপ্লোমা",
      name_en: "Diploma in Nursing",
    },
    {
      id: 23,
      name: "কৃষি ডিপ্লোমা",
      name_en: "Diploma in Agriculture",
    },
    {
      id: 24,
      name: "কম্পিউটার বিজ্ঞান ডিপ্লোমা",
      name_en: "Diploma in Computer Science",
    },
    {
      id: 25,
      name: "ব্যবসা গবেষণা ডিপ্লোমা",
      name_en: "Diploma in Business Studies",
    },
    {
      id: 26,
      name: "আলিম (মাদ্রাসা শিক্ষায় এইচএসসি এর সממান)",
      name_en: "Alim (Equivalent to HSC in Madrasah Education)",
    },
    {
      id: 27,
      name: "ফাযিল (মাদ্রাসা শিক্ষায় স্নাতক পর্বের সমমান)",
      name_en: "Fazil (Equivalent to undergraduate level in Madrasah Education)",
    },
    {
      id: 28,
      name: "কামিল (মাদ্রাসা শিক্ষায় পোস্টগ্রাজুয়েট পর্বের সমমান)",
      name_en: "Kamil (Equivalent to postgraduate level in Madrasah Education)",
    },
  ];

  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(EducationDegreeEntity).clear();
    await dataSource.manager.save(EducationDegreeEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

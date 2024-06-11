import { DataSource } from "typeorm";
import { ZoneEntity } from "@lams/shared/database/entities/location/zone.entity";

export class ZoneSeeder {
  data: any[] = [
    {
      id: 1,
      name: "বগুড়া জোন",
      name_en: "BGR",
      division_id: 2,
      code: "ZON-1",
    },
    {
      id: 2,
      name: "বরিশাল জোন",
      name_en: "BRS",
      division_id: 5,
      code: "ZON-2",
    },
    {
      id: 3,
      name: "কুমিল্লা জোন",
      name_en: "CML",
      division_id: 5,
      code: "ZON-3",
    },
    {
      id: 4,
      name: "চট্টগ্রাম জোন",
      name_en: "CTG",
      division_id: 8,
      code: "ZON-4",
    },
    {
      id: 5,
      name: "ঢাকা জোন",
      name_en: "DHK",
      division_id: 3,
      code: "ZON-5",
    },
    {
      id: 6,
      name: "দিনাজপুর জোন",
      name_en: "DIN",
      division_id: 4,
      code: "ZON-6",
    },
    {
      id: 7,
      name: "ফরিদপুর জোন",
      name_en: "FRP",
      division_id: 3,
      code: "ZON-7",
    },
    {
      id: 8,
      name: "জামালপুর জোন",
      name_en: "JAM",
      division_id: 7,
      code: "ZON-8",
    },
    {
      id: 9,
      name: "যশোর জোন",
      name_en: "JSR",
      division_id: 6,
      code: "ZON-9",
    },
    {
      id: 10,
      name: "খুলনা জোন",
      name_en: "KHL",
      division_id: 6,
      code: "ZON-10",
    },
    {
      id: 11,
      name: "ময়মনসিংহ জোন",
      name_en: "MYM",
      division_id: 7,
      code: "ZON-11",
    },
    {
      id: 12,
      name: "নোয়াখালী জোন",
      name_en: "NOA",
      division_id: 8,
      code: "ZON-12",
    },
    {
      id: 13,
      name: "পাবনা জোন",
      name_en: "PAB",
      division_id: 2,
      code: "ZON-13",
    },
    {
      id: 14,
      name: "রাজশাহী জোন",
      name_en: "RAJ",
      division_id: 2,
      code: "ZON-14",
    },
    {
      id: 15,
      name: "রংপুর জোন",
      name_en: "RNP",
      division_id: 4,
      code: "ZON-15",
    },
    {
      id: 16,
      name: "সিলেট জোন",
      name_en: "SYL",
      division_id: 1,
      code: "ZON-16",
    },
    {
      id: 17,
      name: "টাংগাইল জোন",
      name_en: "TNG",
      division_id: 3,
      code: "ZON-17",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(ZoneEntity).clear();
    await dataSource.manager.save(ZoneEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

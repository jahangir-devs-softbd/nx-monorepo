import { DataSource } from "typeorm";
import { PropertyStatusQuickNoteEntity } from "@lams/shared/database/entities/data-bank/property-status-quick-note.entity";

export class PropertyStatusQuickNoteSeeder {
  data: any[] = [
    {
      id: 1,
      title: "পরিত্যক্ত সম্পত্তি ব্যবস্থাপনা বোর্ডে কার্যক্রম চলমান",
      title_en: "quick note 1",
    },
    {
      id: 2,
      title: "মন্ত্রণালয়ে সিদ্ধান্তের জন্য অপেক্ষমান",
      title_en: "quick note 2",
    },

    {
      id: 11,
      title: "অন্যান্য",
      title_en: "Other",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(PropertyStatusQuickNoteEntity).clear();
    await dataSource.manager.save(PropertyStatusQuickNoteEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

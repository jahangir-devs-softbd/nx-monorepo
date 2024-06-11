import { DataSource } from "typeorm";
import { CommentTopicEntity } from "@lams/shared/database/entities/comment/comment_topic.entity";

export class CommentTopicSeed {
  data: any[] = [
    {
      id: 1,
      comment_type_id: 1, // personal
      title: "উদ্ভাবনী ক্ষমতা",
      title_en: "Innovative capacity",
    },
    {
      id: 2,
      comment_type_id: 1,
      title: "কর্মতৎপরতা",
      title_en: "activity",
    },
    {
      id: 3,
      comment_type_id: 2, // given
      title: "কর্তব্যে অবহেলা",
      title_en: "Neglect of duty",
    },
    {
      id: 4,
      comment_type_id: 2,
      title: "বদলির জন্য তদবির",
      title_en: "Petition for transfer",
    },
  ];
  async run(dataSource: DataSource): Promise<any> {
    await dataSource.query("SET FOREIGN_KEY_CHECKS=0");
    await dataSource.getRepository(CommentTopicEntity).clear();
    await dataSource.manager.save(CommentTopicEntity, this.data);
    await dataSource.query("SET FOREIGN_KEY_CHECKS=1");
  }
}

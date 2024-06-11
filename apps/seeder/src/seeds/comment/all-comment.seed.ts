import { DataSource } from "typeorm";
import { CommentTopicSeed } from "@apps/seeder/seeds/comment/comment-topic.seed";

export class AllCommentSeed {
  async run(dataSource: DataSource): Promise<any> {
    await new CommentTopicSeed().run(dataSource);
  }
}

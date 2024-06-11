import { Column, Entity } from "typeorm";
import { AbstractEntity } from '../abstract.entity';
import { TABLE_USER } from '../../../utils/database.table';


@Entity(TABLE_USER)
export class AppraisalEntity extends AbstractEntity {
  @Column()
  age: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  date_of_birth: Date;
}

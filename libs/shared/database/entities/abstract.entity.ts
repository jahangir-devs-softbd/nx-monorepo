import {
  BaseEntity,
  BeforeInsert,
  BeforeRemove,
  BeforeSoftRemove,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

export abstract class AbstractEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;

  @DeleteDateColumn({ select: false })
  deleted_at: Date;

  @Column({ select: false })
  created_by: number;

  @Column({ select: false })
  updated_by: number;

  @Column({ select: false })
  deleted_by: number;

  @BeforeInsert()
  beforeCreated(): void {
    this.created_by = 1;
  }

  // This trigger only when data is changed in model.
  @BeforeUpdate()
  beforeUpdated(): void {
    this.updated_by = 2;
  }

  @BeforeRemove()
  beforeDeleted(): void {
    this.deleted_by = 1;
    console.log("beforeDeleted deleted_by", this.deleted_by);
  }

  @BeforeSoftRemove()
  beforeSoftRemove(): void {
    this.deleted_by = 1;
    console.log("beforeSoftRemove deleted_by", this.deleted_by);
  }

  getId(): number {
    return this.id;
  }
}

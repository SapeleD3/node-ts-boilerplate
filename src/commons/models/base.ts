import * as uuid from 'uuid';
import dayjs from 'dayjs';
import {
  Column,
  PrimaryKey,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  Default,
  BeforeCreate,
  BeforeUpdate,
} from 'sequelize-typescript';

export default class BaseModel extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  id!: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  isArchived!: boolean;

  @CreatedAt
  @Column(DataType.INTEGER)
  createdAt!: number;

  @UpdatedAt
  @Column(DataType.INTEGER)
  updatedAt?: number;

  @BeforeCreate
  static addEntityId(instance: BaseModel): void {
    const now = dayjs().unix();

    instance.id = uuid.v4();

    instance.createdAt = now;
    instance.updatedAt = now;
  }

  @BeforeUpdate
  static updateDate(instance: BaseModel): void {
    const now = dayjs().unix();
    instance.updatedAt = now;
  }
}

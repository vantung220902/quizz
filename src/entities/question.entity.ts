import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Question extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;
}

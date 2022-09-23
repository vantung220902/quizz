import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('quiz')
export default class Quiz extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The quiz unique identifier',
  })
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'boolean',
    default: 1,
  })
  isActive: boolean;
}

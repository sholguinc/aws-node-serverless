import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({ name: 'Books' })
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '50', nullable: false })
  name: string;

  @Column({ type: 'varchar', length: '50', nullable: false })
  author: string;

  @Column({ type: 'text', nullable: false })
  description: string;
}

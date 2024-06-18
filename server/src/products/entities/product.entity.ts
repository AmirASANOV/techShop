import { User } from 'src/auth/entities/user.entity';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn()
  user: User;

  @Column()
  nameInstrumental: string;

  @Column()
  description: string;

  @Column()
  price: string;

  @CreateDateColumn()
  created: Date;

  @Column()
  picture: string;
}

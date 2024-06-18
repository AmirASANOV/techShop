import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('files')
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  originalName: string;

  @Column()
  size: number;

  @Column()
  mimetype: string;

  // @ManyToOne(() => Product, (product) => product.nameInstrumental) //warning
  // product: Product;

  @DeleteDateColumn()
  deletedAt?: Date;
}

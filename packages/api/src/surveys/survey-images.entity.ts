import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ReefPointOfInterest } from '../reef-pois/reef-pois.entity';
import { Survey } from './surveys.entity';
import { User } from '../users/users.entity';

@Entity()
export class SurveyImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('point')
  @Index({ spatial: true })
  location: string;

  @Column()
  url: string;

  @Column()
  timestamp: Date;

  @Column()
  uploadTimestamp: Date;

  @Column({ default: 1 })
  quality: number;

  @Column()
  featured: boolean;

  @Column()
  hidden: boolean;

  @Column('json')
  metadata: string;

  @ManyToOne(() => Survey, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'survey_id' })
  surveyId: Survey;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  userId: User;

  @ManyToOne(() => ReefPointOfInterest, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'poi_id' })
  poiId: ReefPointOfInterest;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
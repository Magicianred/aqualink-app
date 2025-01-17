import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Reef } from './reefs.entity';

@Entity()
export class DailyData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column('float', { nullable: true })
  minBottomTemperature: number;

  @Column('float', { nullable: true })
  maxBottomTemperature: number;

  @Column('float', { nullable: true })
  avgBottomTemperature: number;

  @Column('float', { nullable: true })
  degreeHeatingDays: number;

  @Column('float', { nullable: true })
  topTemperature: number;

  @Column('float', { nullable: true })
  satelliteTemperature: number;

  @Column('float', { nullable: true })
  minWaveHeight: number;

  @Column('float', { nullable: true })
  maxWaveHeight: number;

  @Column('float', { nullable: true })
  avgWaveHeight: number;

  @Column({ nullable: true })
  waveDirection: number;

  @Column({ nullable: true })
  wavePeriod: number;

  @Column('float', { nullable: true })
  minWindSpeed: number;

  @Column('float', { nullable: true })
  maxWindSpeed: number;

  @Column('float', { nullable: true })
  avgWindSpeed: number;

  @Column({ nullable: true })
  windDirection: number;

  @Column('integer', { nullable: true })
  dailyAlertLevel: number;

  @Column('integer', { nullable: true })
  weeklyAlertLevel: number;

  @ManyToOne(() => Reef, { onDelete: 'CASCADE' })
  reef: Reef;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

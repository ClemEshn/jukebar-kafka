import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { EventDrinksPair } from '../../event-drinks-pairs/entities/event-drinks-pair.entity';

@Entity()
export class PriceHistory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    pairId: number;

    @Column('decimal', { precision: 6, scale: 2 })
    price_drink_1: number;

    @Column('decimal', { precision: 6, scale: 2 })
    price_drink_2: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    time: Date;
}

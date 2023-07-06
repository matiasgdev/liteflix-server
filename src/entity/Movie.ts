import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import {randomRate} from '../utils/randomRate'

@Entity({name: 'movies'})
export class Movie {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({type: 'bytea', nullable: false})
  image: Buffer

  @Column({
    type: 'float',
    default: randomRate(),
  })
  rate: number

  @Column({
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  createdAt: Date
}

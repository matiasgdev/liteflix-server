import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'
import {randomRate} from '../utils/randomRate'

@Entity({name: 'movies'})
export class Movie {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  title: string

  @Column({type: 'longblob', nullable: false})
  image: Buffer

  @Column({
    type: 'float',
    nullable: false,
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

import { Exclude } from "class-transformer";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public name: string;

  @Index()
  @Column({ unique: true })
  public email: string;

  @Column()
  @Exclude()
  public password?: string;

  @Column()
  public provider: "local" | "google";
}

export default User;

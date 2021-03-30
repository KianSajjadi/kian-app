import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {
	
    @PrimaryGeneratedColumn()
    id: number;

		@Column()
		email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    isActive: boolean;

		@Column()
		salt: string;

		@Column()
		password: string;

}

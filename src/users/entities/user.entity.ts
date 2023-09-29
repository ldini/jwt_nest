import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ unique:true , nullable:false})
    username:string

    @Column({ unique:true , nullable:false})
    email:string;

    @Column({ nullable:false })
    password:string;

    constructor(email:string,password:string,username:string){
        this.email = email;
        this.password = password;
        this.username = username;
    }
}

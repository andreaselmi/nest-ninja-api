import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, Length } from "class-validator";


export class CreateNinjaDto {
	@ApiProperty()
	@Length(3, 5, { message: "Il nome deve essere lungo tra i 3 e i 5 caratteri" })
	name: string;

	@ApiProperty({ enum: ["Hadouken", "Shoryuken"] })
	@IsEnum(["Hadouken", "Shoryuken"], { message: "Arma non valida" })
	weapon: "Hadouken" | "Shoryuken";
}
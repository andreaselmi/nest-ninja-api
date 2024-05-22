import { IsEnum, Length } from "class-validator";


export class CreateNinjaDto {
	@Length(3, 5, { message: "Il nome deve essere lungo tra i 3 e i 5 caratteri" })
	name: string;

	@IsEnum(["Hadouken", "Shoryuken"], { message: "Arma non valida" })
	weapon: "Hadouken" | "Shoryuken";
}
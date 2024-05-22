import {
	Body,
	Controller,
	Delete,
	Get,
	NotFoundException,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
	UseGuards,
	ValidationPipe
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('ninjas')
@UseGuards(BeltGuard) // to protect all routes in this controller (all routes in this file)
export class NinjasController {
	constructor(private readonly ninjasService: NinjasService) { }

	// GET /ninjas --> get all ninjas []
	@Get()
	getNinjas(@Query("weapon") weapon: "Hadouken" | "Shoryuken") {
		return this.ninjasService.getNinjas(weapon);
	}

	// GET /ninjas/:id --> get a single ninja
	@Get(':id')
	getNinja(@Param('id', ParseIntPipe) id: number) {
		try {
			return this.ninjasService.getNinja(id);
		} catch (error) {

			// we can use built-in exceptions in NestJS to handle errors in a more structured way 
			// on https://docs.nestjs.com/exception-filters#built-in-http-exceptions
			throw new NotFoundException();
		}
	}

	// // POST /ninjas --> create a ninja
	@Post()
	// @UseGuards(BeltGuard) to protect only this route

	createNinja(@Body(ValidationPipe) createNinjaDto: CreateNinjaDto) {
		return this.ninjasService.createNinja(createNinjaDto);
	}

	// PUT /ninjas/:id --> update a ninja
	@Put(':id')
	updateNinja(@Param('id', ParseIntPipe) id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
		return this.ninjasService.updateNinja(+id, updateNinjaDto);
	}

	// DELETE /ninjas/:id --> delete a ninja
	@Delete(':id')
	deleteNinja(@Param('id', ParseIntPipe) id: number) {
		return this.ninjasService.deleteNinja(id);
	}
}




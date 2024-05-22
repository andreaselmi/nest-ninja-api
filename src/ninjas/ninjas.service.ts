import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
	private ninjas = [
		{ id: 0, name: 'Ryu', weapon: 'Hadouken' },
		{ id: 1, name: 'Ken', weapon: 'Shoryuken' },
	];

	getNinjas(weapon?: "Hadouken" | "Shoryuken") {
		if (weapon) {
			return this.ninjas.filter(ninja => ninja.weapon.toLowerCase() === weapon.toLowerCase());
		}
		return this.ninjas;
	}

	getNinja(id: number) {
		const ninja = this.ninjas.find((ninja) => ninja.id === id);

		if (!ninja) {
			throw new Error('Ninja not found');
		}

		return ninja;
	}

	createNinja(createNinjaDto: CreateNinjaDto) {
		const newNinja = {
			id: this.ninjas.length,
			...createNinjaDto
		};

		this.ninjas.push(newNinja);
		return newNinja;
	}

	updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
		this.ninjas = this.ninjas.map((ninja) => {
			if (ninja.id === +id) {
				return { ...ninja, ...updateNinjaDto };
			}

			return ninja;
		})

		return this.getNinja(id);
	}

	deleteNinja(id: number) {
		const toBeDeleted = this.getNinja(id);

		this.ninjas = this.ninjas.filter((ninja) => ninja.id !== +id);

		return toBeDeleted;
	}
}

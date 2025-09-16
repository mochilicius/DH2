export const Abilities: {[k: string]: ModdedAbilityData} = {
	/*
	placeholder: {
		
		flags: {},
		name: "",
		shortDesc: "",
	},
	*/
	
	vesselofsigma: {
		onStart(pokemon) {
			if (this.suppressingAbility(pokemon)) return;
			this.add('-ability', pokemon, 'Vessel of Sigma');
		},
		onAnyModifySpe(spe, source, target, move) {
			const abilityHolder = this.effectState.target;
			if (source.hasAbility('Vessel of Sigma')) return;
			this.debug('Vessel of Sigma Spe drop');
			return this.chainModify(0.75);
		},
		flags: {},
		name: "Vessel of Sigma",
		shortDesc: "Active Pokemon without this Ability have their Speed multiplied by 0.75."
	},
	tacticalretreat: {
		onAfterMove(source, target, move) {
			if (!source || !target.hp || !move.totalDamage) return;
			if (Object.values(move.self.boosts).some(boost => boost < 0)) source.switchFlag = true;
		},
		flags: {},
		name: "Tactical Retreat",
		shortDesc: "This Pokemon switches out after using a move that lowers stats.",
	},
	forbiddenjuice: {
		onStart(pokemon) {
			if (pokemon.side.sideConditions['toxicspikes']) {
				this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
				pokemon.side.removeSideCondition('toxicspikes');
				this.boost({def: 1});
			}
		},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Poison') {
				if (!this.boost({def: 1})) {
					this.add('-immune', target, '[from] ability: Forbidden Juice');
				}
				return null;
			}
		},
		flags: {},
		name: "Forbidden Juice",
		shortDesc: "This Pokemon absorbs Poison-type moves and Toxic Spikes to raise its Def by 1.",
	},
	typhoon: {
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				target.addVolatile('ability:deltastream');
			}
			if (move.category === 'Special') {
				if (!target.hasType('Flying')) return;
				let newType = target.getTypes().filter(t => t !== 'Flying');
				if (target.setType(newType)) {
					this.add('-start', target, 'typechange', newType.join('/'), '[silent]');
				}
			}
		},
		flags: {},
		name: "Typhoon",
		shortDesc: "When hit by a physical move, set Delta Stream. When hit by a special move, lose Flying.",
	},
	protectiveaura: {
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ghost' || move.type === 'Dark') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ghost' || move.type === 'Dark') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['confusion', 'taunt', 'healblock', 'torment'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					const effectHolder = this.effectState.target;
					this.add('-block', target, 'ability: Protective Aura', '[of] ' + effectHolder);
				}
				return null;
			}
		},
		flags: {breakable: 1},
		name: "Protective Aura",
		shortDesc: "This Pokemon takes halved damage from Ghost/Dark attacks. Immune to confusion, Taunt, Heal Block, and Torment.",
	},
	asoneklang: {
		onStart(pokemon) {
			pokemon.addVolatile('ability:levitate');
			pokemon.addVolatile('ability:clearbody');
		},
		flags: {},
		name: "As One (Klang)",
		shortDesc: "Effects of Levitate and Clear Body.",
	},
	asoneseadra: {
		onStart(pokemon) {
			pokemon.addVolatile('ability:levitate');
			pokemon.addVolatile('ability:sniper');
		},
		flags: {},
		name: "As One (Seadra)",
		shortDesc: "Effects of Levitate and Sniper.",
	},
	raincurse: {
		onSwitchOut(pokemon) {
			this.field.setWeather('raindance');
		},
		onSourceBasePowerPriority: 17,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (['raindance', 'primordialsea'].includes(defender.effectiveWeather())) {
				return this.chainModify(2);
			}
		},
		flags: {},
		name: "Rain Curse",
		shortDesc: "This Pokemon sets Rain when switching out. Takes 2x damage in rain.",
	},
	spicycream: {
		onUpdate(pokemon) {
			if (pokemon.baseSpecies.baseSpecies !== 'Vanillite') return;
			if (pokemon.status === 'brn' && pokemon.species.forme !== 'Melted') pokemon.formeChange('Vanillite-Melted', this.effect, true);
		},
		flags: {},
		name: "Spicy Cream",
		shortDesc: "When Vanillite gets burned, it changes to Melted forme.",
	},
	pyromorphosis: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			target.addVolatile('pyromorphosis');
		},
		condition: {
			onStart(pokemon, source, effect) {
				this.add('-start', pokemon, 'Pyromorphosis', this.activeMove!.name, '[from] ability: ' + effect.name);
			},
			onRestart(pokemon, source, effect) {
				this.add('-start', pokemon, 'Pyromorphosis', this.activeMove!.name, '[from] ability: ' + effect.name);
			},
			onBasePowerPriority: 9,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('pyromorphosis boost');
					return this.chainModify(2);
				}
			},
			onMoveAborted(pokemon, target, move) {
				if (move.type === 'Fire' && move.id !== 'pyromorphosis') {
					pokemon.removeVolatile('pyromorphosis');
				}
			},
			onAfterMove(pokemon, target, move) {
				if (move.type === 'Fire' && move.id !== 'pyromorphosis') {
					pokemon.removeVolatile('pyromorphosis');
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Pyromorphosis', '[silent]');
			},
		},
		flags: {},
		name: "Pyromorphosis",
		shortDesc: "When this Pokemon is damaged by an attack, its next Fire move has doubled power.",
	},
	lastcall: {
		onFaint(pokemon) {
			this.actions.useMove(pokemon.moveSlots[pokemon.moveSlots.length - 1].id, pokemon);
		},
		flags: {},
		name: "LAST CALL",
		shortDesc: "When this Pokemon faints, it uses the last move in its moveset.",
	},
	narcissus: {
		onSwitchIn(pokemon) {
			this.effectState.switchingIn = true;
		},
		onStart(pokemon) {
			// Imposter does not activate when Skill Swapped or when Neutralizing Gas leaves the field
			if (!this.effectState.switchingIn) return;
			// copies across in doubles/triples
			// (also copies across in multibattle and diagonally in free-for-all,
			// but side.foe already takes care of those)
			const target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target) {
				target.transformInto(pokemon, this.dex.abilities.get('narcissus'));
			}
			this.effectState.switchingIn = false;
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1},
		name: "Narcissus",
		shortDesc: "On switchin, the opponent transforms into this Pokemon.",
	},
	magicbag: {
		onResidualOrder: 28,
		onResidualSubOrder: 2,
		onResidual(pokemon) {
			const flingable = this.dex.items.all().filter(item => item.fling);
			pokemon.currentItem = pokemon.item;
			const newItem = this.sample(flingable);
			pokemon.setItem(newItem);
			this.actions.useMove('fling', pokemon);
			pokemon.setItem(pokemon.currentItem);
		},
		flags: {},
		name: "Magic Bag",
		shortDesc: "This Pokemon flings a random item at the end of each turn.",
	},
	perseverance: {
		onModifyCritRatio(critRatio, source, target) {
			let drops = 0;
			let boost: BoostID;
			for (boost in source.boosts) {
				if (source.boosts[boost] < 0) drops -= source.boosts[boost];
			}
			return critRatio + drops;
		},
		flags: {},
		name: "Perseverance",
		shortDesc: "This Pokemon's crit ratio increases by 1 for each stat drop it has.",
	},
	phantomchute: {
		onSwitchOut(pokemon) {
			pokemon.side.addSlotCondition(pokemon, 'phantomchute');
		},
		condition: {
			duration: 1,
			onSwap(pokemon) {
				if (!pokemon.fainted) pokemon.side.removeSlotCondition(pokemon, 'phantomchute');
			},
		},
		flags: {},
		name: "Phantom Chute",
		shortDesc: "When this Pokemon switches out, its replacement is immune to hazards.",
	},
	masquerade: {
		onStart(pokemon) {
			let newType = '';
			switch (pokemon.item) {
				case 'hearthflamemask':
					newType = 'Fire';
					break;
				case 'wellspringmask':
					newType = 'Water';
					break;
				case 'cornerstonemask':
					newType = 'Rock';
					break;
				case 'stormbringermask':
					newType = 'Electric';
					break;
				case 'leek':
					newType = 'Grass';
					break;
			}
			this.add('-ability', pokemon, 'Masquerade');
			if(pokemon.addType(newType)) this.add('-start', pokemon, 'typeadd', newType);
		},
		flags: {failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1},
		name: "Masquerade",
		shortDesc: "Farfetch'd gains a secondary typing according to its held Ogerpon mask/Leek.",
	},
	debilitate: {
		shortDesc: "On switch-in, this Pokemon lowers the Special Attack of adjacent opponents.",
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.isAdjacent(pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Debilitate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({spa: -1}, target, pokemon, null, true);
				}
			}
		},
		name: "Debilitate",
	},
	metallize: {
		onModifyTypePriority: -1,
		onModifyType(move, pokemon) {
			const noModifyType = [
				'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'terrainpulse', 'weatherball',
			];
			if (move.type === 'Normal' && !noModifyType.includes(move.id) &&
				!(move.isZ && move.category !== 'Status') && !(move.name === 'Tera Blast' && pokemon.terastallized)) {
				move.type = 'Steel';
				move.typeChangerBoosted = this.effect;
			}
		},
		onBasePowerPriority: 23,
		onBasePower(basePower, pokemon, target, move) {
			if (move.typeChangerBoosted === this.effect) return this.chainModify([4915, 4096]);
		},
		flags: {},
		name: "Metallize",
		shortDesc: "This Pokemon's Normal-type moves become Steel type and have 1.2x power.",
	},
	maliciousroots: {
		onUpdate(pokemon) {
			for (const target of pokemon.adjacentFoes()) {
				if (target.status && !target.volatiles['leechseed']) target.addVolatile('leechseed', pokemon);
			}
		},
		flags: {},
		name: "Malicious Roots",
		shortDesc: "While this Pokemon is active, statused Pokemon are inflicted with Leech Seed.",
	},
};

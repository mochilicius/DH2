// List of flags and their descriptions can be found in sim/dex-moves.ts

export const Moves: import('../sim/dex-moves').MoveDataTable = {
	mistyterrain: {
		num: 581,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Misty Terrain",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1, metronome: 1},
		terrain: 'mistyterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (effect && ((effect as Move).status || effect.id === 'yawn')) {
					this.add('-activate', target, 'move: Misty Terrain');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Misty Terrain');
					return null;
				}
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Dragon' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('misty terrain weaken');
					return this.chainModify(0.5);
				}
				if (move.type === 'Fairy' && attacker.isGrounded()) {
					this.debug('misty terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Misty Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Misty Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'Misty Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMove: {boost: {spd: 1}},
		contestType: "Beautiful",
	},
	aurasphere: {
		num: 396,
		accuracy: true,
		basePower: 90,
		category: "Special",
		name: "Aura Sphere",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, metronome: 1, bullet: 1, pulse: 1},
		secondary: null,
		target: "any",
		type: "Fighting",
		contestType: "Beautiful",
	},
	direclaw: {
		num: 827,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Dire Claw",
		desc: "50% chance to Posion or Paralyze.",
		shortDesc: "50% chance to Posion or Paralyze.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 50,
			onHit(target, source) {
				const result = this.random(2);
				if (result === 0) {
					target.trySetStatus('psn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				}
			},
		},
		target: "normal",
		type: "Poison",
	},
	supercellslam: {
		num: 916,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		name: "Supercell Slam",
		desc: "No secondary effect.",
		shortDesc: "No secondary effect.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	wildcharge: {
		num: 528,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Wild Charge",
		desc: "Has 1/3 recoil.",
		shortDesc: "Has 1/3 recoil.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
	},
	volttackle: {
		num: 344,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		name: "Volt Tackle",
		desc: "Has 1/3 recoil.",
		shortDesc: "Has 1/3 recoil.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	darkvoid: {
		num: 464,
		accuracy: 80,
		basePower: 0,
		category: "Status",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1, nosketch: 1},
		status: 'slp',
		onTry(source, target, move) {
			if (source.species.name === 'Darkrai' || move.hasBounced) {
				return;
			}
			this.add('-fail', source, 'move: Dark Void');
			this.hint("Only a Pokemon whose form is Darkrai can use this move.");
			return null;
		},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('midnightterrain') && source.isGrounded()) {
				move.accuracy = 88;
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		zMove: {effect: 'clearnegativeboost'},
		contestType: "Clever",
	},
	sparklingaria: {
		num: 664,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Sparkling Aria",
		desc: "100% chance to lower the target's Attack by 1.",
		shortDesc: "100% chance to lower the target's Attack by 1.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacent",
		type: "Water",
		contestType: "Tough",
	},
	grassyglide: {
		num: 803,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Grassy Glide",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onModifyPriority(priority, source, target, move) {
			if (this.field.isTerrain('grassyterrain') && source.isGrounded()) {
				return priority + 1;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	hypnosis: {
		num: 95,
		accuracy: 60,
		basePower: 0,
		category: "Status",
		name: "Hypnosis",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('midnightterrain') && source.isGrounded()) {
				move.accuracy = 66;
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	lovelykiss: {
		num: 142,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Lovely Kiss",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('midnightterrain') && source.isGrounded()) {
				move.accuracy = 82.5;
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Beautiful",
	},
	sleeppowder: {
		num: 79,
		accuracy: 75,
		basePower: 0,
		category: "Status",
		name: "Sleep Powder",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1, powder: 1},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('midnightterrain') && source.isGrounded()) {
				move.accuracy = 82.5;
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	sing: {
		num: 47,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		name: "Sing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('midnightterrain') && source.isGrounded()) {
				move.accuracy = 60.5;
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
		contestType: "Cute",
	},
	grasswhistle: {
		num: 320,
		accuracy: 55,
		basePower: 0,
		category: "Status",
		isNonstandard: "Past",
		name: "Grass Whistle",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('midnightterrain') && source.isGrounded()) {
				move.accuracy = 60.5;
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMove: {boost: {spe: 1}},
		contestType: "Clever",
	},
	corrosivevenom: {
		num: 920,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Corrosive Venom",
		desc: "Super Effective on Steel types when paired with Corrosion.",
		shortDesc: "x2 on Steel types if user has Corrosion.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		target: "normal",
		type: "Poison",
		contestType: "Beautiful",
	},
	spiritofharmony: {
		num: -1,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Spirit of Harmony",
		desc: "Damage is increased by 1.1x if the user is inflicted with a status condition.",
		shortDesc: "1.1x power if user is burn/poison/paralyzed.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.status && pokemon.status !== 'slp') {
				return this.chainModify(1.1);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	partycannonblast: {
		num: -2,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Party Cannon Blast",
		desc: "20% chance to confuse or paralyze the target.",
		shortDesc: "20% chance to confuse or paralyze the target.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 20,
			onHit(target, source) {
				const result = this.random(2);
				if (result === 0) {
					target.trySetStatus('par', source);
				} else if (result === 1) {
					target.addVolatile('confusion', source);
				} 
			},
		},
		target: "normal",
		type: "Fairy",
	},
	sonicrainboom: {
		num: -3,
		accuracy: 85,
		basePower: 135,
		category: "Physical",
		name: "Sonic Rainboom",
		desc: "Has 33% recoil.",
		shortDesc: "Has 33% recoil.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1, metronome: 1},
		recoil: [33, 100],
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Cool",
	},
	applebuck: {
		num: -4,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Applebuck",
		desc: "Super effective on Water types and Ground types.",
		shortDesc: "Super effective on Water types and Ground types.",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
			if (type === 'Ground') return 1;
		},
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	blessingofnature: {
		num: -5,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		name: "Blessing of Nature",
		desc: "Has a 30% chance to deal 2x damage.",
		shortDesc: "30% chance to do 2x damage.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onBasePower(basePower, pokemon) {
			if (this.randomChance(3, 10)) {
				this.attrLastMove('[anim] Full Force of Nature');
				this.add('-activate', pokemon, 'move: Blessing of Nature');
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
	},
	rainingdiamonds: {
		num: -6,
		accuracy: 100,
		basePower: 85,
		category: "Special",
		name: "Raining Diamonds",
		desc: "Deals super effective damage against Steel types.",
		shortDesc: "Super effective against Steel.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Beautiful",
	},
	solarflare: {
		num: -7,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Solar Flare",
		desc: "Damage is increased by 1.1x if used against a burnt target.",
		shortDesc: "1.1x damage is target is burnt.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'brn') {
				return this.chainModify(1.1);
			}
		},
		target: "normal",
		type: "Fire",
	},
	bluemoon: {
		num: -8,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Blue Moon",
		desc: "Damage is increased by 1.1x if used against a sleeping target.",
		shortDesc: "1.1x damage if target is asleep.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onBasePower(basePower, pokemon, target) {
			if (target.status === 'slp') {
				return this.chainModify(1.1);
			}
		},
		target: "normal",
		type: "Dark",
	},
	crystalheartstorm: {
		num: -9,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Crystal Heart Storm",
		desc: "Base power is increased by 1.3x while under Misty Terrain.",
		shortDesc: "1.3x power is under Misty Terrain.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onBasePower(basePower, source) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				this.debug('terrain buff');
				return this.chainModify(1.3);
			}
		},
		onModifyMove(move, source, target) {
			if (this.field.isTerrain('mistyterrain') && source.isGrounded()) {
				move.target = 'allAdjacentFoes';
			}
		},
		secondary: null,
		target: "normal",
		type: "Rock",
	},
	searingbreath: {
		num: -10,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Searing Breath",
		desc: "Reduces the user’s Special Defense by 1 stage.",
		shortDesc: "Reduces the user’s Special Defense by 1 stage.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		selfBoost: {
			boosts: {
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	glimmeringbeam: {
		num: -11,
		accuracy: 100,
		basePower: 140,
		category: "Special",
		name: "Glimmering Beam",
		desc: "This move cannot be used twice in a row.",
		shortDesc: "This move cannot be used twice in a row.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, cantusetwice: 1},
		secondary: null,
		target: "normal",
		type: "Psychic",
	},
	shimmeringblaze: {
		num: -12,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Shimmering Blaze",
		desc: "30% chance to Burn the target.",
		shortDesc: "30% chance to Burn.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		contestType: "Tough",
	},
	greatandpowerfulexit: {
		num: -13,
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		name: "Great and Powerful Exit",
		desc: "User switches out.",
		shortDesc: "User switches out.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	bouldertoss: {
		num: -14,
		accuracy: true,
		basePower: 50,
		category: "Physical",
		name: "Boulder Toss",
		desc: "Hits twice.",
		shortDesc: "Hits twice.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Rock",
		zMove: {basePower: 180},
		maxMove: {basePower: 140},
		contestType: "Clever",
	},
	guardianblade: {
		num: -15,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Guardian Blade",
		desc: "20% chance to lower the target’s defense.",
		shortDesc: "20% chance to lower the target’s defense.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1, slicing: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	sunburstsweatherabjuration: {
		num: -16,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sunburst's Weather Abjuration",
		desc: "The user summons Sunny Day and vacates the field, allowing a party Pokemon/Pony to take their place.",
		shortDesc: "Starts Sunny Day. User switches out.",
		pp: 10,
		priority: 0,
		flags: {},
		// TODO show prepare message before the "POKEMON used MOVE!" message
		// This happens even before sleep shows its "POKEMON is fast asleep." message
		weather: 'sunnyday',
		selfSwitch: true,
		secondary: null,
		target: "all",
		type: "Fire",
	},
	seedsofwrath: {
		num: -17,
		accuracy: 100,
		basePower: 65,
		category: "Special",
		name: "Seeds of Wrath",
		desc: "This move has +1 priority under Grassy Terrain.",
		shortDesc: "+1 priority under Grassy Terrain.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onModifyPriority(priority, source, target, move) {
			if (this.field.isTerrain('grassyterrain') && source.isGrounded()) {
				return priority + 1;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	shatteringingrain: {
		num: -18,
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		name: "Shattering Ingrain",
		desc: "Restores the user’s HP by up to half the damage taken by the target.",
		shortDesc: "User recovers 50% of the damage dealt.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, punch: 1, heal: 1, metronome: 1},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Tough",
	},
	klutzystrike: {
		num: -19,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Klutzy Strike",
		desc: "30% chance to Confuse the target.",
		shortDesc: "30% chance to Confuse the target.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Flying",
	},
	soundwaveblast: {
		num: -20,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Soundwave Blast",
		desc: "No additional effect. Hits adjacent Pokemon.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		target: "normal",
		type: "Normal",
	},
	putdownthecello: {
		num: -21,
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		name: "Put Down the Cello",
		desc: "Hits all opponents on the field.",
		shortDesc: "Hits all opponents on the field.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		contestType: "Cool",
	},
	scatteredsparks: {
		num: -22,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		name: "Scattered Sparks",
		desc: "Power doubles if statused.",
		shortDesc: "Power doubles if statused.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onBasePower(basePower, pokemon) {
			if (pokemon.status && pokemon.status !== 'slp') {
				return this.chainModify(2);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
	},
	bellowingwhistle: {
		num: -23,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Bellowing Whistle",
		desc: "The user’s Attack is raised by one stage and the target’s Defense is lowered by one stage.",
		shortDesc: "Raises the user's Atk by 1. Decreases target's Def by 1.",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1},
		self: {
			boosts: {
				atk: 1,
			},
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Flying",
		contestType: "Cool",
	},
	toolsofchaos: {
		num: -24,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Tools of Chaos",
		desc: "50% chance to Confuse, Paralyze, or Poison the target.",
		shortDesc: "50% chance to Confuse, Paralyze, or Poison the target.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 50,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('psn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.addVolatile('confusion', source);
				}
			},
		},
		target: "normal",
		type: "Dark",
	},
	queenswrath: {
		num: -25,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		name: "Queen's Wrath",
		desc: "50% chance to Burn the target.",
		shortDesc: "50% chance to Burn the target.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		thawsTarget: true,
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "normal",
		type: "Bug",
		contestType: "Beautiful",
	},
	rayofoblivion: {
		num: -26,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		isNonstandard: "Past",
		name: "Ray of Oblivion",
		desc: "User’s HP is restored by 75% of the damage dealt to the target.",
		shortDesc: "User’s HP is restored by 75% of the damage dealt.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, heal: 1, metronome: 1},
		drain: [3, 4],
		secondary: null,
		target: "any",
		type: "Dark",
		contestType: "Cool",
	},
	barrageofshadows: {
		num: -27,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Barrage of Shadows",
		desc: "Inflicts Torment.",
		shortDesc: "Inflicts Torment.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, metronome: 1, bullet: 1},
		secondary: {
			chance: 100,
			volatileStatus: 'torment',
		},
		target: "any",
		type: "Dark",
		contestType: "Cool",
	},
	niriksrage: {
		num: -28,
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		name: "Nirik's Rage",
		desc: "20% chance to lower the target’s Defense.",
		shortDesc: "20% chance to lower the target’s Defense.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	blessingofthehive: {
		num: -29,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Blessing of the Hive",
		desc: "Boosts attack and speed by one stage. This move cures the user of burn.",
		shortDesc: "Cures user's burn, raises attack and speed by 1.",
		pp: 15,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		onHit(pokemon) {
			const success = !!this.boost({atk: 1, spe: 1});
			if (pokemon.status === 'brn') {
			return pokemon.cureStatus() || success;
			}
		},
		secondary: null,
		target: "self",
		type: "Bug",
	},
	draconicsoul: {
		num: -30,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Draconic Soul",
		desc: "Boosts special attack and speed by one stage and the user is cured of paralysis.",
		shortDesc: "Cures user's paralysis, raises Sp. Atk and speed by 1.",
		pp: 15,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		onHit(pokemon) {
			const success = !!this.boost({spa: 1, spe: 1});
			if (pokemon.status === 'par') {
			return pokemon.cureStatus() || success;
			}
		},
		secondary: null,
		target: "self",
		type: "Dragon",
	},
	ritualofaris: {
		num: -31,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Ritual of Aris",
		desc: "Attack and speed is raised by one stage, the user is cured of poison.",
		shortDesc: "Cures poison, raises attack and speed by 1.",
		pp: 15,
		priority: 0,
		flags: {snatch: 1, metronome: 1},
		onHit(pokemon) {
			const success = !!this.boost({atk: 1, spe: 1});
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
			return pokemon.cureStatus() || success;
			}
		},
		secondary: null,
		target: "self",
		type: "Fairy",
	},
	ornithianblade: {
		num: -32,
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		name: "Ornithian Blade",
		desc: "Ignores defense boosts. Cannot miss.",
		shortdesc: "Ignores defense boosts. Cannot miss.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, metronome: 1, slicing: 1},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	streetcattrickery: {
		num: -33,
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		name: "Street Cat Trickery",
		desc: "Power increased by 2x if the target is holding an item. Removes item.",
		shortDesc: "Power increased by 2x if the target is holding an item. Removes item",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onBasePower(basePower, source, target, move) {
			const item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemState, target, target, move, item)) return;
			if (item.id) {
				return this.chainModify(2);
			}
		},
		onAfterHit(target, source) {
			if (source.hp) {
				const item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Street Cat Trickery', '[of] ' + source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	midnightterrain: {
		num: -34,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Midnight Terrain",
		desc: "Summons Midnight Terrain.",
		shortDesc: "Summons Midnight Terrain.",
		pp: 10,
		priority: 0,
		flags: {nonsky: 1, metronome: 1},
		terrain: 'midnightterrain',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source?.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePowerPriority: 6,
			onBasePower(basePower, attacker, defender, move) {
							if (move.type === 'Psychic' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
								this.debug('midnight terrain weaken');
								return this.chainModify(0.5);
				}
				if (move.type === 'Dark' && attacker.isGrounded()) {
					this.debug('midnight terrain boost');
					return this.chainModify([5325, 4096]);
				}
			},
			onFieldStart(field, source, effect) {
				if (effect?.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Midnight Terrain', '[from] ability: ' + effect.name, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Midnight Terrain');
				}
			},
			onFieldResidualOrder: 27,
			onFieldResidualSubOrder: 7,
			onFieldEnd() {
				this.add('-fieldend', 'move: Midnight Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Dark",
		zMove: {boost: {spdef: 1}},
		contestType: "Beautiful",
	},
	guilttrip: {
		num: -35,
		accuracy: 100,
		basePower: 0,
		category: "Status",
		name: "Guilt Trip",
		desc: "Lowers Attack and Special Attack by 2 stages.",
		shortDesc: "Lowers Attack and Special Attack by 2 stages.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, bypasssub: 1, metronome: 1},
		onHit(target, source, move) {
			const success = this.boost({atk: -2, spa: -2}, target, source)
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMove: {effect: 'healreplacement'},
		contestType: "Cool",
	},
	crystalheartblessing: {
		num: -36,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Crystal Heart Blessing",
		desc: "Cures team of status. Heals user by 33%.",
		shortDesc: "Cures team of status. Heals user by 33%.",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1, metronome: 1},
		onHit(target, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let success = false;
			const allies = [...target.side.pokemon, ...target.side.allySide?.pokemon || []];
			for (const ally of allies) {
				if (ally !== source && ally.hasAbility('soundproof')) continue;
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		heal: [1, 3],
		target: "allyTeam",
		type: "Fairy",
		zMove: {effect: 'heal'},
		contestType: "Beautiful",
	},
	furioustalons: {
		num: -37,
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		name: "Furious Talons",
		desc: "Hits twice.",
		shortDesc: "Hits twice.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, metronome: 1, slicing: 1, contact: 1},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
};

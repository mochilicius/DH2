/*
List of flags and their descriptions:
authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
nonsky: Prevented from being executed or selected in a Sky Battle.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.
*/

export const Moves: {[k: string]: ModdedMoveData} = {
	dededehammerthrow: {
		num: -1,
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		shortDesc: "Lowers the user's Attack by 1.",
		name: "Dedede Hammer Throw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hammer Arm", target);
		},
		self: {
			boosts: {
				atk: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Tough",
	},
	electrohammer: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		shortDesc: "Lowers the user's Speed by 1.",
		name: "Electro Hammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Hammer Arm", target);
		},
		self: {
			boosts: {
				atk: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Tough",
	},
	sheikahslate: {
		num: -2,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		shortDesc: "20% chance to burn, freeze or paralyse the target.",
		name: "Sheikah Slate",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Tri Attack", target);
		},
		secondary: {
			chance: 20,
			onHit(target, source) {
				const result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	lightarrow: {
		num: -3,
		accuracy: 100,
		basePower: 70,
		category: "Special",
		shortDesc: "Traps target, super-effective against Dark.",
		name: "Light Arrow",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Dark') return 1;
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Spirit Shackle", target);
		},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Beautiful",
	},
	psyblast: {
		num: -4,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		shortDesc: "Consumes Berry and changes move type.",
		name: "Psy Blast",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (!item.naturalGift) return;
			move.type = item.naturalGift.type;
		},
		onPrepareHit(target, pokemon, move) {
			this.attrLastMove('[still]');
			this.add('-anim', pokemon, "Psystrike", target);
			if (pokemon.ignoringItem()) return false;
			const item = pokemon.getItem();
			if (!item.naturalGift) return false;
			move.basePower = item.naturalGift.basePower;
			if (!pokemon.hasAbility('adeptprowess')) {
				pokemon.setItem('');
				pokemon.lastItem = item.id;
				pokemon.usedItemThisTurn = true;
				this.runEvent('AfterUseItem', pokemon, null, null, item);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	puyopop: {
		num: -5,
		accuracy: 90,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			return 10 * move.hit;
		},
		category: "Special",
		shortDesc: "Hits 4 times. Each hit can miss, but power rises. Fourth hit clears user side's hazards.",
		id: "puyopop",
		name: "Puyo Pop",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onHit(target, source, move) {
			if (move.hit !== 4) return;
			const removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.dex.conditions.get(sideCondition).name, '[from] move: Puyo Pop', '[of] ' + source);
				}
			}
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Water Shuriken", target);
		},
		multihit: 4,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 180,
		contestType: "Cute",
	},
	dracoburning: {
		num: -6,
		accuracy: 90,
		basePower: 105,
		category: "Physical",
		shortDesc: "Can hit Pokemon using Bounce, Fly, or Sky Drop.",
		name: "Draco Burning",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Fire Blast", target);
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	frostkick: {
		num: -7,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		shortDesc: "High critical hit ratio. 10% chance to freeze.",
		name: "Frost Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'frz',
		},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Ice Hammer", target);
		},
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	shockkick: {
		num: -8,
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		shortDesc: "High critical hit ratio. 10% chance to paralyze.",
		name: "Shock Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		critRatio: 2,
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Thunderous Kick", target);
		},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	greatfire: {
		num: -9,
		accuracy: true,
		basePower: 200,
		category: "Special",
		name: "Great Fire",
		pp: 1,
		priority: 0,
		flags: {},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Inferno Overdrive", target);
		},
		useSourceAlternateDefensiveAsOffensive: true,
		isZ: "dracocentauriumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Beautiful",
	},
	jumbobarrel: {
		num: -10,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "30% chance to raise the user's Attack by 1. ",
		name: "Jumbo Barrel",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Aeroblast", target);
		},
		secondary: {
			chance: 30,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	precisionstrikes: {
		num: -11,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		shortDesc: "Heals 40% of the damage dealt.",
		name: "Precision Strikes",
		pp: 10,
		priority: 0,
		flags: {contact: 1, slicing: 1, heal: 1, protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Slash", target);
		},
		drain: [4, 10],
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	rudebuster: {
		num: -12,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		defensiveCategory: "Physical",
		shortDesc: "Special if user's SpA is higher.",
		name: "Rude Buster",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
 		onPrepareHit(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Punishment", target);
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) < pokemon.getStat('spa', false, true)) move.category = 'Special';
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Beautiful",
	},
	centipedeassault: {
		num: -13,
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		useSourceSpeedAsOffensive: true,
		shortDesc: "Uses user's Spe stat as Atk in damage calculation.",
		name: "Centipede Assault",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
 		onPrepareHit(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Flare Blitz", target);
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	luciolacruciata: {
		num: -14,
		accuracy: true,
		basePower: 180,
		category: "Physical",
		useSourceSpeedAsOffensive: true,
		shortDesc: "Uses user's Spe stat as Atk in damage calculation.",
		name: "Luciola Cruciata",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
 		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Inferno Overdrive", target);
		},
		isZ: "wriggliumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	icebreak: {
		num: -15,
		accuracy: 100,
		basePower: 80,
		category: "Special",
		shortDesc: "2x power against resists.",
		name: "Ice Break",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, source, target, move) {
			if (target.runEffectiveness(move) < 0) {
				this.debug(`ice break resist buff`);
				return this.chainModify(2);
			}
		},
 		onPrepareHit(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Sheer Cold", target);
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	arrowshot: {
		num: -16,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "High critical hit ratio. Cannot be redirected.",
		name: "Arrow Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		critRatio: 2,
		tracksTarget: true,
		onPrepareHit(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Snipe Shot", target);
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	mountainrangeshakingfirewoodofvenus: {
		num: -17,
		accuracy: true,
		basePower: 190,
		category: "Special",
		shortDesc: "Increases user's Special Attack by 1.",
		name: "Mountain Range-Shaking Firewood of Venus",
		pp: 1,
		priority: 0,
		flags: {},
 		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-message', source.name + " is overflowing with space power!");
			this.add('-anim', source, "Continental Crush", target);
		},
		isZ: "maannaniumz",
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Rock",
		contestType: "Tough",
	},
	lifesoup: {
		num: -18,
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "On hit: user heals 1/10 max HP.",
		name: "Life Soup",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		onPrepareHit(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Whirlpool", target);
		},
		onHit(pokemon, source, target) {
			this.add('-heal', pokemon, pokemon.getHealth, '[from] move: Life Soup');
			this.heal(pokemon.maxhp / 10, source);
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cute",
	},
	waterplanet: {
		num: -19,
		accuracy: true,
		basePower: 150,
		category: "Physical",
		shortDesc: "Lowers target's Def and SpD by 1.",
		name: "Water Planet",
		pp: 1,
		priority: 0,
		flags: {},
		onPrepareHit(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Oceanic Operetta", target);
		},
		isZ: "hecatiumz",
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		target: "normal",
		type: "Water",
		contestType: "Beautiful",
	},
	shakalakamaracas: {
		num: -20,
		accuracy: 90,
		basePower: 65,
		category: "Physical",
		name: "Shakalaka Maracas",
		shortDesc: "Sets up a layer of Spikes on the opposing side.",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onAfterHit(target, source, move) {
			if (!move.hasSheerForce && source.hp) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('spikes');
				}
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			if (!move.hasSheerForce && source.hp) {
				for (const side of source.side.foeSidesWithConditions()) {
					side.addSideCondition('spikes');
				}
			}
		},
		secondary: {}, // Sheer Force-boosted
		target: "normal",
		type: "Grass",
		contestType: "Cute",
	},
	doubledynamite: {
		num: -21,
		accuracy: 100,
		basePower: 90,
		category: "Special",
		name: "Double Dynamite",
		shortDesc: "Type varies based on the user's primary type.",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.getTypes()[0];
			if (type === "Bird") type = "???";
			if (type === "Stellar") type = pokemon.getTypes(false, true)[0];
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	treeoceanofhourai: {
		num: -22,
		accuracy: true,
		basePower: 180,
		category: "Special",
		shortDesc: "Drains 75% of damage dealt.",
		name: "Tree-Ocean of Hourai",
		pp: 1,
		priority: 0,
		flags: {bullet: 1},
		isZ: "kaguyiumz",
		drain: [3, 4],
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Beautiful",
	},
	poltergust: {
		num: -23,
		accuracy: 95,
		basePower: 110,
		category: "Special",
		name: "Poltergust",
		shortDesc: "20% chance to make the target flinch.",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, metronome: 1},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	// Negative Zone has no valid means of use due to using an invalid move as base, not implementing unless this is resolved
	heavenlysphere: {
		num: -25,
		accuracy: true,
		basePower: 200,
		category: "Special",
		shortDesc: "If Marle-Parasite: Electric-type",
		name: "Heavenly Sphere",
		pp: 1,
		priority: 0,
		flags: {},
		isZ: "marliumz",
		secondary: null,
		onModifyType(move, pokemon) {
			if (pokemon.species.name === 'Marle-Parasite') {
				move.type = 'Electric';
			} else {
				move.type = 'Flying';
			}
		},
		target: "normal",
		type: "Flying",
		contestType: "Beautiful",
	},
	desiccation: {
		num: -20,
		accuracy: 90,
		basePower: 65,
		category: "Physical",
		name: "Desiccation",
		shortDesc: "Applies Leech Seed on the target.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, metronome: 1},
		onHit(target, source, move) {
			return target.addVolatile('leechseed', source, move, 'trapper');
		},
		secondary: {}, // Sheer Force-boosted
		target: "normal",
		type: "Rock",
		contestType: "Cute",
	},
	dollswar: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		name: "Doll\'s War",
		shortDesc: "Special if user's SpA is higher. 50% chance to raise Defense by 1.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Photon Geyser", target);
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) < pokemon.getStat('spa', false, true)) move.category = 'Special';
		},
		ignoreAbility: true,
		secondary: {
			chance: 50,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	dollsphalanx: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Doll\'s Phalanx",
		shortDesc: "Protects from moves. Contact: loses 1/8 max HP.",
		pp: 10,
		priority: 4,
		flags: {noassist: 1, failcopycat: 1},
		stallingMove: true,
		volatileStatus: 'dollsphalanx',
		onPrepareHit(pokemon) {
			this.attrLastMove('[still]');
		  this.add('-anim', source, "Spiky Shield", target);
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (['gmaxoneblow', 'gmaxrapidflow'].includes(move.id)) return;
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move.smartTarget) {
					move.smartTarget = false;
				} else {
					this.add('-activate', target, 'move: Protect');
				}
				const lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZOrMaxPowered && this.checkMoveMakesContact(move, source, target)) {
					this.damage(source.baseMaxhp / 8, source, target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {def: 1}},
		contestType: "Tough",
	},
	artfulsacrifice: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		name: "Artful Sacrifice",
		shortDesc: "Special if user's SpA is higher. 30% chance to burn the target.",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Prismatic Laser", target);
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) < pokemon.getStat('spa', false, true)) move.category = 'Special';
		},
		ignoreAbility: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},

	// Below are vanilla moves altered by custom interractions
	bounce: {
		num: 340,
		accuracy: 85,
		basePower: 85,
		category: "Physical",
		name: "Bounce",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'dracoburning'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Flying",
		contestType: "Cute",
	},
	fly: {
		num: 19,
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		name: "Fly",
		pp: 15,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		condition: {
			duration: 2,
			onInvulnerability(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'dracoburning'].includes(move.id)) {
					return;
				}
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Clever",
	},
	skydrop: {
		num: 507,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		isNonstandard: "Past",
		name: "Sky Drop",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				move.flags.contact = 0;
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				this.add('-end', target, 'Sky Drop', '[interrupt]');
			}
		},
		onTryHit(target, source, move) {
			if (target.fainted) return false;
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.side === source.side) {
					return false;
				}
				if (target.getWeight() >= 2000) {
					this.add('-fail', target, 'move: Sky Drop', '[heavy]');
					return null;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			if (target.hp) this.add('-end', target, 'Sky Drop');
		},
		condition: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectState.target || pokemon === this.effectState.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectState.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectState.source) {
					attacker.activeMoveActions--;
					this.debug('Sky drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectState.target) return;
				if (this.effectState.source.fainted) return;
				return this.effectState.source;
			},
			onAnyInvulnerability(target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'dracoburning'].includes(move.id)) {
					return;
				}
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectState.target && target !== this.effectState.source) {
					return;
				}
				if (source === this.effectState.target && target === this.effectState.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		contestType: "Tough",
	},
	curse: {
		num: 174,
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Curse",
		pp: 10,
		priority: 0,
		flags: {authentic: 1},
		volatileStatus: 'curse',
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost') && !source.hasAbility('curseweaver')) {
				move.target = move.nonGhostTarget as MoveTarget;
			}
		},
		onTryHit(target, source, move) {
			if (!source.hasType('Ghost') && !source.hasAbility('curseweaver')) {
				delete move.volatileStatus;
				delete move.onHit;
				move.self = {boosts: {spe: -1, atk: 1, def: 1}};
			} else if (move.volatileStatus && target.volatiles['curse']) {
				return false;
			}
		},
		onHit(target, source) {
			this.directDamage(source.maxhp / 2, source, source);
		},
		condition: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 10,
			onResidual(pokemon) {
				this.damage(pokemon.baseMaxhp / 4);
			},
		},
		secondary: null,
		target: "randomNormal",
		nonGhostTarget: "self",
		type: "Ghost",
		zMove: {effect: 'curse'},
		contestType: "Tough",
	},
	bouncybubble: {
		inherit: true,
		isNonstandard: null,
	},
 	// No need for this effect to be coded, given mod isn't a doubles format
	chargedcannondive: {
		num: -30,
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		name: "Charged Cannon DiVE",
		shortDesc: "Deals additional half damage to the target's ally.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1},
		target: "normal",
		type: "Steel",
		contestType: "Tough",
	},
	bulletburst: {
		num: -31,
		accuracy: 85,
		basePower: 25,
		category: "Physical",
		name: "Bullet Burst",
		shortDesc: "Hits 2 to 5 times. 10% chance to lower the target's Defense by 1 stage.",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, bullet: 1, metronome: 1},
		multihit: [2, 5],
		secondary: {
			chance: 10,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	redtruth: {
		num: -32,
		accuracy: 100,
		basePower: 75,
		category: "Special",
		name: "Red Truth",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, metronome: 1, slicing: 1, sound: 1},
		ignoreImmunity: {'Normal': true},
		target: "normal",
		type: "Ghost",
		contestType: "Beautiful",
	},
};
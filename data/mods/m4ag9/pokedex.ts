export const Pokedex: {[speciesid: string]: ModdedSpeciesData} = {

	// Gen 9 stuff, this is ugly but it's at least a bandaid for now

	growlithehisui: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Rock Head"},
		isNonstandard: null,
	},
	arcaninehisui: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Rock Head"},
		isNonstandard: null,
	},
	voltorbhisui: {
		inherit: true,
		isNonstandard: null,
	},
	electrodehisui: {
		inherit: true,
		isNonstandard: null,
	},
	typhlosionhisui: {
		inherit: true,
		abilities: {0: "Blaze", H: "Frisk"},
		isNonstandard: null,
	},
	sneaselhisui: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Keen Eye", H: "Pickpocket"},
		isNonstandard: null,
	},
	shiftry: {
		inherit: true,
		abilities: {0: "Chlorophyll", 1: "Wind Rider", H: "Pickpocket"},
	},
	piplup: {
		inherit: true,
		abilities: {0: "Torrent", H: "Competitive"},
	},
	prinplup: {
		inherit: true,
		abilities: {0: "Torrent", H: "Competitive"},
	},
	empoleon: {
		inherit: true,
		abilities: {0: "Torrent", H: "Competitive"},
	},
	gallade: {
		inherit: true,
		abilities: {0: "Steadfast", 1: "Sharpness", H: "Justified"},
	},
	giratinaorigin: {
		inherit: true,
		requiredItem: "Griseous Core",
	},
	cresselia: {
		inherit: true,
		baseStats: {hp: 120, atk: 70, def: 110, spa: 75, spd: 120, spe: 85},
	},
	samurotthisui: {
		inherit: true,
		abilities: {0: "Torrent", H: "Sharpness"},
	},
	braviaryhisui: {
		inherit: true,
		abilities: {0: "Keen Eye", 1: "Sheer Force", H: "Tinted Lens"},
		isNonstandard: null,
	},
	spewpa: {
		inherit: true,
		evos: ["Vivillon", "Vivillon-Fancy"],
	},
	vivillonfancy: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Compound Eyes", H: "Friend Guard"},
		prevo: "Spewpa",
		evoLevel: 12,
	},
	vivillonpokeball: {
		inherit: true,
		abilities: {0: "Shield Dust", 1: "Compound Eyes", H: "Friend Guard"},
	},
	sliggoohisui: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Shell Armor", H: "Gooey"},
		isNonstandard: null,
	},
	goodrahisui: {
		inherit: true,
		abilities: {0: "Sap Sipper", 1: "Shell Armor", H: "Gooey"},
		isNonstandard: null,
	},
	decidueyehisui: {
		inherit: true,
		abilities: {0: "Overgrow", H: "Scrappy"},
		isNonstandard: null,
	},
	zacian: {
		inherit: true,
		baseStats: {hp: 92, atk: 120, def: 115, spa: 80, spd: 115, spe: 138},
	},
	zaciancrowned: {
		inherit: true,
		baseStats: {hp: 92, atk: 150, def: 115, spa: 80, spd: 115, spe: 148},
	},
	zamazenta: {
		inherit: true,
		baseStats: {hp: 92, atk: 120, def: 115, spa: 80, spd: 115, spe: 138},
	},
	zamazentacrowned: {
		inherit: true,
		baseStats: {hp: 92, atk: 120, def: 140, spa: 80, spd: 140, spe: 128},
	},
	wyrdeer: {
		inherit: true,
		isNonstandard: null,
	},
	// Kleavor is later
	ursaluna: {
		inherit: true,
		isNonstandard: null,
	},
	basculegion: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Adaptability", H: "Mold Breaker"},
		isNonstandard: null,
	},
	basculegionf: {
		inherit: true,
		abilities: {0: "Swift Swim", 1: "Adaptability", H: "Mold Breaker"},
		isNonstandard: null,
	},
	sneasler: {
		inherit: true,
		abilities: {0: "Pressure", 1: "Unburden", H: "Poison Touch"},
		evoType: "levelHold",
		evoItem: "Razor Claw",
		evoCondition: "during the day",
		isNonstandard: null,
	},
	overqwil: {
		inherit: true,
		isNonstandard: null,
	},
	enamorus: {
		inherit: true,
		abilities: {0: "Cute Charm", H: "Contrary"},
		isNonstandard: null,
	},
	enamorustherian: {
		inherit: true,
		isNonstandard: null,
	},

	// slate 1

	quaquaval: {
		inherit: true,
		mega: "quaquavalmega",
		megaName: "Quaquaval-Mega",
		megaAbility: {0: "Intimidate"},
		megaStats: {hp: 85, atk: 130, def: 110, spa: 115, spd: 85, spe: 105},
		megaStone: "Quaquavalite",
		movepoolAdditions: ["scald"],
		megaCreator: "ItzaDelta",
	},

	// not going to reformat Mega Brambleghast because it effectively has more than one Mega to a single base form, which would cause problems
	brambleghast: {
		inherit: true,
		otherFormes: [
			"Brambleghast-Mega", "Brambleghast-Mega-1", "Brambleghast-Mega-2", "Brambleghast-Mega-3", "Brambleghast-Mega-4", "Brambleghast-Mega-Tangled",
		],
		formeOrder: [
			"Brambleghast", "Brambleghast-Mega", "Brambleghast-Mega-1", "Brambleghast-Mega-2", "Brambleghast-Mega-3", "Brambleghast-Mega-4", "Brambleghast-Mega-Tangled",
		],
		movepoolAdditions: ["heatwave"],
	},
	brambleghastmega: {
		num: 947,
		name: "Brambleghast-Mega", // officially Mega-Tumbled
		baseSpecies: "Brambleghast",
		forme: "Mega",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 55, atk: 115, def: 90, spa: 90, spd: 40, spe: 190},
		abilities: {0: "Accumulate"},
		heightm: 1.2,
		weightkg: 6,
		color: "Brown",
		eggGroups: ["Grass"],
		requiredItem: "Brambleghite",
		battleOnly: "Brambleghast",
		creator: "Seito Chinchou",
	},
	brambleghastmega1: {
		num: 947,
		name: "Brambleghast-Mega-1",
		baseSpecies: "Brambleghast",
		forme: "Mega-1",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 55, atk: 100, def: 110, spa: 95, spd: 60, spe: 160},
		abilities: {0: "Accumulate"},
		heightm: 1.2,
		weightkg: 6,
		color: "Brown",
		eggGroups: ["Grass"],
		requiredItem: "Brambleghite",
		battleOnly: "Brambleghast",
		creator: "Seito Chinchou",
	},
	brambleghastmega2: {
		num: 947,
		name: "Brambleghast-Mega-2",
		baseSpecies: "Brambleghast",
		forme: "Mega-2",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 55, atk: 85, def: 130, spa: 100, spd: 80, spe: 130},
		abilities: {0: "Accumulate"},
		heightm: 1.2,
		weightkg: 6,
		color: "Brown",
		eggGroups: ["Grass"],
		requiredItem: "Brambleghite",
		battleOnly: "Brambleghast",
		creator: "Seito Chinchou",
	},
	brambleghastmega3: {
		num: 947,
		name: "Brambleghast-Mega-3",
		baseSpecies: "Brambleghast",
		forme: "Mega-3",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 55, atk: 70, def: 150, spa: 105, spd: 100, spe: 100},
		abilities: {0: "Accumulate"},
		heightm: 1.2,
		weightkg: 6,
		color: "Brown",
		eggGroups: ["Grass"],
		requiredItem: "Brambleghite",
		battleOnly: "Brambleghast",
		creator: "Seito Chinchou",
	},
	brambleghastmega4: {
		num: 947,
		name: "Brambleghast-Mega-4",
		baseSpecies: "Brambleghast",
		forme: "Mega-4",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 55, atk: 55, def: 170, spa: 110, spd: 120, spe: 70},
		abilities: {0: "Accumulate"},
		heightm: 1.2,
		weightkg: 6,
		color: "Brown",
		eggGroups: ["Grass"],
		requiredItem: "Brambleghite",
		battleOnly: "Brambleghast",
		creator: "Seito Chinchou",
	},
	brambleghastmegatangled: {
		num: 947,
		name: "Brambleghast-Mega-Tangled",
		baseSpecies: "Brambleghast",
		forme: "Mega-Tangled",
		types: ["Grass", "Ghost"],
		baseStats: {hp: 55, atk: 40, def: 190, spa: 115, spd: 140, spe: 40},
		abilities: {0: "Accumulate"},
		heightm: 1.2,
		weightkg: 6,
		color: "Brown",
		eggGroups: ["Grass"],
		requiredItem: "Brambleghite",
		battleOnly: "Brambleghast",
		creator: "Seito Chinchou",
	},

	lokix: {
		inherit: true,
		mega: "lokixmega",
		megaName: "Lokix-Mega",
		megaAbility: {0: "Tinted Lens"},
		megaStats: {hp: 71, atk: 152, def: 78, spa: 52, spd: 75, spe: 117},
		megaStone: "Lokixite",
		megaCreator: "chemicalmines",
	},

	// slate 2

	grumpig: {
		inherit: true,
		mega: "grumpigmega",
		megaName: "Grumpig-Mega",
		megaAbility: {0: "Beads of Ruin"},
		megaStats: {hp: 80, atk: 45, def: 95, spa: 130, spd: 120, spe: 100},
		megaStone: "Grumpignite",
		movepoolAdditions: ["recover"],
		megaCreator: "BlueRay, Exploziff and Gekokeso",
	},

	dachsbun: {
		inherit: true,
		mega: "dachsbunmega",
		megaName: "Dachsbun-Mega",
		megaAbility: {0: "Lingering Aroma"},
		megaStats: {hp: 57, atk: 115, def: 145, spa: 65, spd: 100, spe: 95},
		megaStone: "Dachsbunite",
		movepoolAdditions: ["followme", "wideguard"],
		megaCreator: "okispokis",
	},

	arboliva: {
		inherit: true,
		mega: "arbolivamega",
		megaName: "Arboliva-Mega",
		megaAbility: {0: "Renaturalization"},
		megaStats: {hp: 78, atk: 69, def: 125, spa: 141, spd: 149, spe: 48},
		megaStone: "Arbolivanite",
		movepoolAdditions: ["healbell", "toxic", "wish"],
		megaCreator: "Seito Chinchou",
	},

	// slate 3

	donphan: {
		inherit: true,
		mega: "donphanmega",
		megaName: "Donphan-Mega",
		megaType: ["Ground", "Flying"],
		megaAbility: {0: "Aerilate"},
		megaStats: {hp: 90, atk: 140, def: 140, spa: 60, spd: 85, spe: 85},
		megaStone: "Donphanite",
		megaCreator: "LordThemberchaud",
	},

	armarouge: {
		inherit: true,
		mega: "armarougemega",
		megaName: "Armarouge-Mega",
		megaAbility: {0: "Pavise"},
		megaStats: {hp: 85, atk: 60, def: 145, spa: 145, spd: 95, spe: 95},
		megaStone: "Armarouginite",
		movepoolAdditions: ["recover"],
		megaCreator: "BlueRay",
	},

	tinkaton: {
		inherit: true,
		mega: "tinkatonmega",
		megaName: "Tinkaton-Mega",
		megaAbility: {0: "Uplifting"},
		megaStats: {hp: 85, atk: 105, def: 127, spa: 70, spd: 115, spe: 104},
		megaStone: "Tinkatonite",
		movepoolAdditions: ["uturn"],
		megaCreator: "Paulluxx",
	},

	// slate 4

	coalossal: {
		inherit: true,
		mega: "coalossalmega",
		megaName: "Coalossal-Mega",
		megaAbility: {0: "Tar Slosh"},
		megaStats: {hp: 110, atk: 80, def: 155, spa: 100, spd: 90, spe: 75},
		megaStone: "Coalossalite",
		megaCreator: "jazzmat",
	},

	revavroom: {
		inherit: true,
		mega: "revavroommega",
		megaName: "Revavroom-Mega",
		megaAbility: {0: "Luster Swap"},
		megaStats: {hp: 80, atk: 139, def: 120, spa: 54, spd: 97, spe: 110},
		megaStone: "Revavroomite",
		movepoolAdditions: ["spiritbreak", "knockoff", "bodypress", "rapidspin"],
		megaCreator: "Seito Chinchou",
	},

	cyclizar: {
		inherit: true,
		mega: "cyclizarmega",
		megaName: "Cyclizar-Mega",
		megaAbility: {0: "Two-Minded"},
		megaStats: {hp: 70, atk: 110, def: 95, spa: 110, spd: 95, spe: 121},
		megaStone: "Cyclizite",
		movepoolAdditions: ["superpower"],
		megaCreator: "okispokis",
	},

	// slate 5

	pawmot: {
		inherit: true,
		mega: "pawmotmega",
		megaName: "Pawmot-Mega",
		megaAbility: {0: "Fluffy"},
		megaStats: {hp: 70, atk: 135, def: 110, spa: 85, spd: 70, spe: 120},
		megaStone: "Pawmite",
		movepoolAdditions: ["healbell"],
		megaCreator: "okispokis",
	},

	grafaiai: {
		inherit: true,
		mega: "grafaiaimega",
		megaName: "Grafaiai-Mega",
		megaAbility: {0: "Color Spray"},
		megaStats: {hp: 63, atk: 125, def: 75, spa: 90, spd: 102, spe: 130},
		megaStone: "Grafaiaite",
		movepoolAdditions: ["quickattack", "shadowsneak", "playrough"],
		megaCreator: "jazzmat",
	},

	cetitan: {
		inherit: true,
		mega: "cetitanmega",
		megaName: "Cetitan-Mega",
		megaAbility: {0: "Mold Breaker"},
		megaStats: {hp: 170, atk: 163, def: 100, spa: 45, spd: 55, spe: 88},
		megaStone: "Cetitanite",
		megaCreator: "DrPumpkinz",
	},

	// slate 5

	ninetales: {
		inherit: true,
		mega: "ninetalesmega",
		megaName: "Ninetales-Mega",
		megaAbility: {0: "Wandering Spirit"},
		megaStats: {hp: 73, atk: 76, def: 105, spa: 101, spd: 130, spe: 120},
		megaStone: "Ninetalesite",
		megaCreator: "DrPumpkinz",
	},

	noctowl: {
		inherit: true,
		mega: "noctowlmega",
		megaName: "Noctowl-Mega",
		megaType: ["Psychic", "Flying"],
		megaAbility: {0: "Endless Dream"},
		megaStats: {hp: 100, atk: 50, def: 70, spa: 126, spd: 116, spe: 90},
		megaStone: "Noctowlite",
		movepoolAdditions: ["focusblast", "uturn"],
		megaCreator: "Lysion and Mushroom-Flower",
	},

	hatterene: {
		inherit: true,
		mega: "hatterenemega",
		megaName: "Hatterene-Mega",
		megaAbility: {0: "Hair Trigger"},
		megaStats: {hp: 57, atk: 105, def: 115, spa: 156, spd: 138, spe: 39},
		megaStone: "Hatterenite",
		megaCreator: "okispokis",
	},

	// slate 6

	ribombee: {
		inherit: true,
		mega: "ribombeemega",
		megaName: "Ribombee-Mega",
		megaAbility: {0: "Powder Coat"},
		megaStats: {hp: 60, atk: 70, def: 70, spa: 120, spd: 100, spe: 144},
		megaStone: "Ribombinite",
		movepoolAdditions: ["roost"],
		megaCreator: "jazzmat",
	},

	bombirdier: {
		inherit: true,
		mega: "bombirdiermega",
		megaName: "Bombirdier-Mega",
		megaAbility: {0: "Late Delivery"},
		megaStats: {hp: 70, atk: 138, def: 115, spa: 60, spd: 115, spe: 87},
		megaStone: "Bombirdite",
		movepoolAdditions: ["smackdown"],
		megaCreator: "NANI",
	},

	fezandipiti: {
		inherit: true,
		mega: "fezandipitimega",
		megaName: "Fezandipiti-Mega",
		megaAbility: {0: "Toxic Drain"},
		megaStats: {hp: 88, atk: 111, def: 92, spa: 115, spd: 145, spe: 104},
		megaStone: "Fezandipitite",
		megaCreator: "okispokis",
	},

	// slate 7

	milotic: {
		inherit: true,
		mega: "miloticmega",
		megaName: "Milotic-Mega",
		megaType: ["Water", "Dragon"],
		megaAbility: {0: "Multiscale"},
		megaStats: {hp: 95, atk: 70, def: 109, spa: 130, spd: 155, spe: 81},
		megaStone: "Milotinite",
		megaCreator: "lydian",
	},

	probopass: {
		inherit: true,
		mega: "probopassmega",
		megaName: "Probopass-Mega",
		megaAbility: {0: "Congestion"},
		megaStats: {hp: 60, atk: 145, def: 180, spa: 55, spd: 165, spe: 20},
		megaStone: "Probopassite",
		movepoolAdditions: ["trickroom"],
		megaCreator: "Paulluxx",
	},

	ogerpon: {
		inherit: true,
		mega: "ogerponmega",
		megaName: "Ogerpon-Mega",
		megaType: ["Grass", "Fairy"],
		megaAbility: {0: "Masquerade"},
		megaStats: {hp: 80, atk: 135, def: 134, spa: 70, spd: 116, spe: 115},
		megaStone: "Ogerponite",
		megaCreator: "jazzmat",
	},

	// slate 8

	dugtrioalola: {
		inherit: true,
		mega: "dugtrioalolamega",
		megaName: "Dugtrio-Alola-Mega",
		megaType: ["Ground", "Steel"],
		megaAbility: {0: "Fur Coat"},
		megaStats: {hp: 35, atk: 110, def: 110, spa: 60, spd: 80, spe: 130},
		megaStone: "Dugtrionite",
		movepoolAdditions: ["painsplit", "thunderwave", "taunt"],
		megaCreator: "LordThemberchaud",
	},

	farigiraf: {
		inherit: true,
		otherFormes: [
			"Farigiraf-Mega", "Farigiraf-Mega-Nocturnal"
		],
		formeOrder: [
			"Farigiraf", "Farigiraf-Mega", "Farigiraf-Mega-Nocturnal"
		],
		movepoolAdditions: ["superpower"],
	},
	farigirafmega: {
		num: 981,
		name: "Farigiraf-Mega",
		baseSpecies: "Farigiraf",
		forme: "Mega",
		types: ["Normal", "Psychic"],
		baseStats: {hp: 120, atk: 100, def: 100, spa: 140, spd: 100, spe: 60},
		abilities: {0: "Twin Heart"},
		heightm: 1.8,
		weightkg: 50,
		eggGroups: ["Field"],
		megaCreator: "Lysion",
	},
	farigirafmeganocturnal: {
		num: 981,
		name: "Farigiraf-Mega-Nocturnal",
		baseSpecies: "Farigiraf",
		forme: "Mega-Nocturnal",
		types: ["Normal", "Dark"],
		baseStats: {hp: 120, atk: 100, def: 100, spa: 140, spd: 100, spe: 60},
		abilities: {0: "Twin Heart"},
		heightm: 1.8,
		weightkg: 50,
		eggGroups: ["Field"],
		requiredAbility: "Twin Heart",
		battleOnly: "Farigiraf-Mega",
		megaCreator: "Lysion",
	},

	hydrapple: {
		inherit: true,
		mega: "hydrapplemega",
		megaName: "Hydrapple-Mega",
		megaType: ["Grass", "Dragon"],
		megaAbility: {0: "Sugar Rush"},
		megaStats: {hp: 106, atk: 100, def: 150, spa: 130, spd: 110, spe: 44},
		megaStone: "Hydrapplinite",
		megaCreator: "jazzmat",
	},

	// slate 9

	tentacruel: {
		inherit: true,
		mega: "tentacruelmega",
		megaName: "Tentacruel-Mega",
		megaAbility: {0: "Residual Drain"},
		megaStats: {hp: 80, atk: 70, def: 98, spa: 130, spd: 120, spe: 117},
		megaStone: "Tentacruelinite",
		megaCreator: "Lord Pxperto & BlueRay",
	},

	galvantula: {
		inherit: true,
		mega: "galvantulamega",
		megaName: "Galvantula-Mega",
		megaAbility: {0: "Agitation"},
		megaStats: {hp: 70, atk: 87, def: 70, spa: 127, spd: 80, spe: 138},
		megaStone: "Galvantulinite",
		movepoolAdditions: ["strengthsap"],
		megaCreator: "jazzmat",
	},

	golurk: {
		inherit: true,
		mega: "golurkmega",
		megaName: "Golurk-Mega",
		megaAbility: {0: "Vengeful"},
		megaStats: {hp: 89, atk: 144, def: 120, spa: 55, spd: 110, spe: 65},
		megaStone: "Golurkite",
		megaCreator: "okispokis",
	},

	// slate 10

	emboar: {
		inherit: true,
		mega: "emboarmega",
		megaName: "Emboar-Mega",
		megaAbility: {0: "Inner Fortitude"},
		megaStats: {hp: 110, atk: 143, def: 80, spa: 115, spd: 115, spe: 65},
		megaStone: "Emboarite",
		megaCreator: "War Incarnate",
		megaWeight: 490,
	},

	beartic: {
		inherit: true,
		mega: "bearticmega",
		megaName: "Beartic-Mega",
		megaAbility: {0: "Frost Aura"},
		megaStats: {hp: 95, atk: 140, def: 98, spa: 70, spd: 98, spe: 104},
		megaStone: "Beartite",
		movepoolAdditions: ["fakeout", "icespinner", "slackoff"],
		megaCreator: "lydian",
		megaWeight: 350,
	},

	kleavor: {
		inherit: true,
		abilities: {0: "Swarm", 1: "Sheer Force", H: "Sharpness"},
		isNonstandard: null,
		mega: "kleavormega",
		megaName: "Kleavor-Mega",
		megaAbility: {0: "Defiant"},
		megaStats: {hp: 70, atk: 165, def: 120, spa: 45, spd: 95, spe: 105},
		megaStone: "Kleavorite",
		movepoolAdditions: ["roost"],
		megaCreator: "Lysion",
	},

	// slate 11

	slitherwing: {
		inherit: true,
		mega: "slitherwingmega",
		megaName: "Slither Wing-Mega",
		megaAbility: {0: "Swarm"},
		megaStats: {hp: 85, atk: 155, def: 99, spa: 105, spd: 135, spe: 91},
		megaStone: "Slitherwite",
		megaCreator: "DrPumpkinz",
	},

	ironthorns: {
		inherit: true,
		mega: "ironthornsmega",
		megaName: "Iron Thorns-Mega",
		megaAbility: {0: "Download"},
		megaStats: {hp: 100, atk: 144, def: 128, spa: 110, spd: 84, spe: 104},
		megaStone: "Thornite",
		megaCreator: "okispokis",
	},

	wochien: {
		inherit: true,
		mega: "wochienmega",
		megaName: "Wo-Chien-Mega",
		megaAbility: {0: "Grudgeful Tablets"},
		megaStats: {hp: 85, atk: 104, def: 141, spa: 112, spd: 144, spe: 84},
		megaStone: "Wochienite",
		movepoolAdditions: ["strengthsap"],
		megaCreator: "lydian",
	},

	// slate 12

	ludicolo: {
		inherit: true,
		mega: "ludicolomega",
		megaName: "Ludicolo-Mega",
		megaAbility: {0: "Magic Bounce"},
		megaStats: {hp: 80, atk: 70, def: 110, spa: 110, spd: 120, spe: 90},
		megaStone: "Ludicolinite",
		movepoolAdditions: ["flipturn"],
		megaCreator: "okispokis",
	},

	skeledirge: {
		inherit: true,
		mega: "skeledirgemega",
		megaName: "Skeledirge-Mega",
		megaAbility: {0: "Haunting Melody"},
		megaStats: {hp: 104, atk: 80, def: 140, spa: 125, spd: 110, spe: 71},
		megaStone: "Skeledite",
		megaCreator: "jazzmat",
	},

	bellibolt: {
		inherit: true,
		mega: "belliboltmega",
		megaName: "Bellibolt-Mega",
		megaType: ["Electric", "Water"],
		megaAbility: {0: "Liquidate"},
		megaStats: {hp: 109, atk: 79, def: 126, spa: 123, spd: 103, spe: 55},
		megaStone: "Belliboltite",
		movepoolAdditions: ["surf"],
		megaCreator: "War Incarnate",
	},

	// slate 13

	arcanine: {
		inherit: true,
		mega: "arcaninemega",
		megaName: "Arcanine-Mega",
		megaType: ["Fire", "Dragon"],
		megaAbility: {0: "Supreme Overlord"},
		megaStats: {hp: 90, atk: 130, def: 90, spa: 120, spd: 100, spe: 125},
		megaStone: "Arcanite",
		megaCreator: "DrPumpkinz",
	},

	mabosstiff: {
		inherit: true,
		mega: "mabosstiffmega",
		megaName: "Mabosstiff-Mega",
		megaAbility: {0: "Regenerator"},
		megaStats: {hp: 80, atk: 155, def: 120, spa: 65, spd: 90, spe: 95},
		megaStone: "Mabosstite",
		movepoolAdditions: ["partingshot"],
		megaCreator: "okispokis",
	},

	okidogi: {
		inherit: true,
		mega: "okidogimega",
		megaName: "Okidogi-Mega",
		megaAbility: {0: "Toxic Gains"},
		megaStats: {hp: 88, atk: 138, def: 160, spa: 78, spd: 111, spe: 80},
		megaStone: "Okidogite",
		megaCreator: "DrPumpkinz",
	},

	// slate 14

	perrserker: {
		inherit: true,
		otherFormes: [
			"Perrserker-Mega",  "Brambleghast-Mega-Busted",
		],
		formeOrder: [
			"Perrserker", "Perrserker-Mega",  "Brambleghast-Mega-Busted",
		],
	},
	perrserkermega: {
		num: 947,
		name: "Perrserker-Mega", 
		baseSpecies: "Perrserker",
		forme: "Mega",
		types: ["Steel"],
		baseStats: {hp: 70, atk: 190, def: 100, spa: 50, spd: 70, spe: 60},
		abilities: {0: "Ice Face"},
		heightm: 0.8,
		weightkg: 28,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Perrserkite",
		battleOnly: "Perrserker",
		creator: "DrPumpkinz",
	},
	perrserkermegabusted: {
		num: 947,
		name: "Perrserker-Mega-Busted",
		baseSpecies: "Perrserker",
		forme: "Mega-Busted",
		types: ["Steel"],
		baseStats: {hp: 70, atk: 190, def: 100, spa: 50, spd: 70, spe: 60},
		abilities: {0: "Ice Face"},
		heightm: 0.8,
		weightkg: 28,
		color: "Brown",
		eggGroups: ["Field"],
		requiredItem: "Perrserkite",
		battleOnly: "Perrserker",
		creator: "DrPumpkinz",
	},

	meowscarada: {
		inherit: true,
		mega: "meowscaradamega",
		megaName: "Meowscarada-Mega",
		megaAbility: {0: "Tricky Surge"},
		megaStats: {hp: 76, atk: 130, def: 100, spa: 91, spd: 95, spe: 138},
		megaStone: "Meowscaradite",
		movepoolAdditions: ["fakeout"],
		megaCreator: "War Incarnate",
	},

	maushold: {
		inherit: true,
		mega: "mausholdmega",
		megaName: "Maushold-Mega",
		megaType: ["Normal", "Fairy"],
		megaAbility: {0: "Prankster"},
		megaStats: {hp: 74, atk: 95, def: 120, spa: 65, spd: 110, spe: 101},
		megaStone: "Mausholdinite",
		movepoolAdditions: ["moonlight"],
		megaCreator: "LordThemberchaud",
	},

	// slate 15

	cloyster: {
		inherit: true,
		mega: "cloystermega",
		megaName: "Cloyster-Mega",
		megaAbility: {0: "Snow Warning"},
		megaStats: {hp: 50, atk: 105, def: 230, spa: 115, spd: 65, spe: 60},
		megaStone: "Cloysterite",
		movepoolAdditions: ["rapidspin"],
		megaCreator: "DrPumpkinz",
	},

	minior: {
		inherit: true,
		otherFormes: ["Minior-Meteor", "Minior-Mega", "Minior-Mega-Meteor"],
		cosmeticFormes: ["Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet"],
		formeOrder: [
			 // All of the colored Minior Meteor formes (unsupported by PS) are numbers 0-6
			"Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor", "Minior-Meteor",
			"Minior", "Minior-Orange", "Minior-Yellow", "Minior-Green", "Minior-Blue", "Minior-Indigo", "Minior-Violet",
			"Minior-Mega", "Minior-Mega-Meteor"
		],
	},
	miniormega: {
		num: 774,
		name: "Minior-Mega",
		baseSpecies: "Minior",
		forme: "Mega",
		baseForme: "Red",
		types: ["Rock", "Fairy"],
		gender: "N",
		baseStats: {hp: 60, atk: 140, def: 60, spa: 140, spd: 60, spe: 140},
		abilities: {0: "Shields Down"},
		heightm: 0.3,
		weightkg: 0.3,
		color: "Red",
		requiredItem: "Miniorite",
		battleOnly: "Minior",
		creator: "DrPumpkinz",
	},
	miniormegameteor: {
		num: 774,
		name: "Minior-Meteor",
		baseSpecies: "Minior",
		forme: "Mega-Meteor",
		types: ["Steel", "Flying"],
		gender: "N",
		baseStats: {hp: 60, atk: 60, def: 150, spa: 60, spd: 150, spe: 60},
		abilities: {0: "Shields Down"},
		heightm: 0.3,
		weightkg: 40,
		color: "Brown",
		eggGroups: ["Mineral"],
		requiredAbility: "Shields Down",
		requiredItem: "Miniorite",
		battleOnly: "Minior",
		creator: "DrPumpkinz",
	},

	rabsca: {
		inherit: true,
		mega: "rabscamega",
		megaName: "Rabsca-Mega",
		megaType: ["Bug", "Ground"],
		megaAbility: {0: "Drought"},
		megaStats: {hp: 75, atk: 50, def: 105, spa: 155, spd: 140, spe: 45},
		megaStone: "Rabscanite",
		movepoolAdditions: ["teleport"],
		megaCreator: "BlueRay & Lysion",
	},

	// slate 16

	kingdra: {
		inherit: true,
		mega: "kingdramega",
		megaName: "Kingdra-Mega",
		megaAbility: {0: "Super Luck"},
		megaStats: {hp: 75, atk: 115, def: 105, spa: 115, spd: 105, spe: 125},
		megaStone: "Kingdranite",
		megaCreator: "PalpitoadChamp",
	},

	sandaconda: {
		inherit: true,
		mega: "sandacondamega",
		megaName: "Sandaconda-Mega",
		megaAbility: {0: "Dust Devil"},
		megaStats: {hp: 72, atk: 142, def: 160, spa: 65, spd: 100, spe: 71},
		megaStone: "Sandacondanite",
		movepoolAdditions: ["wideguard"],
		megaCreator: "War Incarnate",
	},

	screamtail: {
		inherit: true,
		mega: "screamtailmega",
		megaName: "Scream Tail-Mega",
		megaAbility: {0: "Roaring Scream"},
		megaStats: {hp: 115, atk: 75, def: 119, spa: 85, spd: 135, spe: 141},
		megaStone: "Screamtailite",
		megaCreator: "BlueRay",
	},
};

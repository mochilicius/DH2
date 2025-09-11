export const Pokedex: {[k: string]: ModdedSpeciesData} = {
	cresceidon: {
		inherit: true,
		baseStats: {hp: 80, atk: 32, def: 111, spa: 88, spd: 99, spe: 125},
		abilities: {0: "Multiscale", 1: "Rough Skin"},
		eggGroups: ["Undiscovered"],
	},
	generalkillpain: {
        num: -5016,
        name: "General Kill Pain",
        types: ["Dark", "Fighting"],
        baseStats: {hp: 75, atk: 120, def: 95, spa: 75, spd: 80, spe: 110},
        abilities: {0: "Tinted Lens", 1: "Intimidate"},
        heightm: 2.3,
        weightkg: 90,
        color: "White",
        eggGroups: ["Undiscovered"],
        gen: 9,
    },
};

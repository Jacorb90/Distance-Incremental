const ELM_TABS = {
	fermions: function () {
		return true;
	},
	bosons: function () {
		return true;
	},
	theory: function () {
		return player.elementary.theory.unl;
	},
	hc: function () {
		return player.elementary.hc.unl;
	},
	foam: function() {
		return player.elementary.foam.unl;
	},
};

const QUARK_NAMES = ["up", "down", "charm", "strange", "top", "bottom"];
const QUARK_DESCS = {
	up: "Rocket gain is stronger.",
	down: "Cadaver gain is stronger.",
	charm: "Knowledge gain is stronger.",
	strange: "Pathogen gain is boosted by your Fermions.",
	top: "Lepton gain is faster.",
	bottom: "Ascension Power gain is faster."
};

const LEPTON_NAMES = ["electron", "muon", "tau", "netrion", "vibrino", "psi"];
const LEPTON_DESCS = {
	electron: "Perks are stronger.",
	muon: "The Cadaver effect is boosted.",
	tau: "Knowledge boosts Knowledge gain.",
	netrion: "Pathogen Upgrades are stronger.",
	vibrino: "Derivative Boosts are stronger.",
	psi: "Quark gain is faster."
};

const PHOTON_UPGS = 4;
const PH_CST_SCLD = {
	1: function(exp, s) { return ExpantaNum.pow(5, player.elementary.bosons.gauge.photons.upgrades[0].pow(exp).div(s.pow(exp.sub(1))).pow(2)).times(25) },
	2: function(exp, s) { return ExpantaNum.pow(4, player.elementary.bosons.gauge.photons.upgrades[1].pow(exp).div(s.pow(exp.sub(1))).pow(2)).times(40) },
	3: function(exp, s) { return ExpantaNum.pow(10, player.elementary.bosons.gauge.photons.upgrades[2].pow(exp).div(s.pow(exp.sub(1)))).times(1e4) },
	4: function(exp, s) { return ExpantaNum.pow(2, player.elementary.bosons.gauge.photons.upgrades[3].pow(exp).div(s.pow(exp.sub(1))).pow(1.1).times(ExpantaNum.pow(1.01, player.elementary.bosons.gauge.photons.upgrades[3]))).times(6e4) },
}

const GLUON_COLOURS = ["r", "g", "b", "ar", "ag", "ab"];

const HIGGS_UPGS = {
	"0;0;0": {
		cost: new ExpantaNum(4e4),
		desc: "Always keep TR Upgrades, the Pathogen Upgrade automator, & the Dark Core automator. You also start with Automation unlocked.",
		unl: function() { return true },
	},
	"1;0;0": {
		cost: new ExpantaNum(1e5),
		desc: "Unlock Auto-Robots.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;0") },
	},
	"0;1;0": {
		cost: new ExpantaNum(1e5),
		desc: "Unlock Auto-Infinity Upgrades, and Infinity Upgrades are never repealed.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;0") },
	},
	"0;0;1": {
		cost: new ExpantaNum(1e5),
		desc: "You start with 10 Endorsements on reset.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;0") },
	},
	"2;0;0": {
		cost: new ExpantaNum(1e7),
		desc: "Unlock Auto-Endorsements.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("1;0;0") },
	},
	"0;2;0": {
		cost: new ExpantaNum(1e7),
		desc: "Unlock Auto-Enlightenments.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;1;0") },
	},
	"1;1;0": {
		cost: new ExpantaNum(1.5e5),
		desc: "Quarks, Leptons, Photons, Gravitons, & Higgs Bosons boost Elementary Particle gain.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;1;0")||player.elementary.bosons.scalar.higgs.upgrades.includes("1;0;0") },
	},
	"1;0;1": {
		cost: new ExpantaNum(1.5e5),
		desc: "Perks last 900% longer.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;1")||player.elementary.bosons.scalar.higgs.upgrades.includes("1;0;0") },
	},
	"0;0;2": {
		cost: new ExpantaNum(1e7),
		desc: "Unlock Auto-Perks & the Perk Accelerator.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;1") },
	},
	"0;1;1": {
		cost: new ExpantaNum(1.5e5),
		desc: "Endorsements beyond 36 boost Higgs Boson gain.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;1;0")||player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;1") },
	},
	"3;0;0": {
		cost: new ExpantaNum(2.5e7),
		desc: "Keep Stadium Challenges on reset, and Elementary Particle gain & Higgs Boson gain are increased by 10% for each Higgs Upgrade bought.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("2;0;0") },
	},
	"0;0;3": {
		cost: new ExpantaNum(5e7),
		desc: "Unlock Auto-Derivative Shifts/Boosts, Auto-Endorsements buy max, and you gain Knowledge 200% faster.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;2") },
	},
	"1;2;0": {
		cost: new ExpantaNum(1e8),
		desc: "Unlock Auto-Spectral Gem Distribution, and you keep Purge Power on reset.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;2;0") },
	},
	"0;2;1": {
		cost: new ExpantaNum(2e8),
		desc: "Derivative Boosts are stronger based on your Higgs Bosons.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;2;0") },
	},
	"4;0;0": {
		cost: new ExpantaNum(2e9),
		desc: "Unlock 1 new row & column of Infinity Upgrades.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("3;0;0") },
	},
	"0;0;4": {
		cost: new ExpantaNum(2e9),
		desc: "Knowledge gain & Ascension Power gain are faster based on the Perk Accelerator's speed.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;0;3") },
	},
	"1;3;0": {
		cost: new ExpantaNum(1e12),
		desc: "Angels & Demons boost the Gauge Force effect.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("1;2;0") },
	},
	"0;3;1": {
		cost: new ExpantaNum(1e12),
		desc: "Purge Power boosts Quark & Lepton gain.",
		unl: function() { return player.elementary.bosons.scalar.higgs.upgrades.includes("0;2;1") },
	},
	"5;0;0": {
		cost: new ExpantaNum(5e20),
		desc: "inf10;4 uses a better formula.",
		unl: function() { return hasDE(3) },
	},
	"0;0;5": {
		cost: new ExpantaNum(5e20),
		desc: "Atomic Rank scaling starts later based on your Higgs Bosons.",
		unl: function() { return hasDE(3) },
	},
	"5;0;5": {
		cost: new ExpantaNum(1e21),
		desc: "inf10;10 uses a better formula.",
		unl: function() { return hasDE(3) },
	},
	"4;1;0": {
		cost: new ExpantaNum(2e20),
		desc: "Gain 666x more Gluons.",
		unl: function() { return hasDE(3) },
	},
	"0;1;4": {
		cost: new ExpantaNum(2e20),
		desc: "The softcap to Pathogen Upgrade 1's effect is nerfed, and Pathogen Upgrade 1's formula is better.",
		unl: function() { return hasDE(3) },
	},
}

const THEORY_REQ = [new ExpantaNum("1e4000000").times(DISTANCES.uni), new ExpantaNum(1000)]

const TH_TABS = {
	tv: function () {
		return true;
	},
	ss: function () {
		return true
	},
	tree: function() {
		return player.elementary.theory.supersymmetry.unl
	},
	strings: function() {
		return player.elementary.theory.tree.unl
	},
	preons: function() {
		return player.elementary.theory.strings.unl
	},
	accelerons: function() {
		return player.elementary.theory.preons.unl
	},
	inflatons: function() {
		return player.elementary.hc.unl&&player.elementary.theory.accelerons.unl
	},
};

const TREE_UPGS = {
	1: {
		cost: function(bought) { return bought.plus(1) },
		target: function(points) { return points.floor() },
		cap: new ExpantaNum(100),
		desc: "Supersymmetric Particles are gained faster based on your Higgs Bosons.",
		effect: function(bought) { 
			let exp = new ExpantaNum(0.1)
			if ((player.elementary.theory.tree.upgrades[26]||new ExpantaNum(0)).gte(1)) exp = new ExpantaNum(0.4)
			let ret = player.elementary.bosons.scalar.higgs.amount.times(new ExpantaNum(bought).pow(2)).plus(1).pow(exp) 
			if (ret.gte(50)) ret = ret.sqrt().times(Math.sqrt(50))
			if (ret.gte(100)) ret = ret.log10().pow(new ExpantaNum(100).logBase(2)).min(ret.cbrt().times(Math.pow(100, 2/3)))
			return ret
		},
		effD: function(e) { return showNum(e)+"x" },
	},
	2: {
		cost: function(bought) { return bought.pow(2).plus(1) },
		target: function(points) { return points.sub(1).sqrt().plus(1).floor() },
		cap: new ExpantaNum(50),
		desc: "Boost Knowledge gain & Higgs Boson gain.",
		effect: function(bought) { return ExpantaNum.pow(100, new ExpantaNum(bought).sqrt()) },
		effD: function(e) { return showNum(e)+"x" },
	},
	3: {
		cost: function(bought) { return bought.pow(3).plus(1) },
		target: function(points) { return points.sub(1).cbrt().plus(1).floor() },
		cap: new ExpantaNum(20),
		desc: "inf4;10 is stronger based on your # of achievements gotten.",
		effect: function(bought) { return ExpantaNum.mul(player.achievements.length, ExpantaNum.mul(0.0001, bought)) },
		effD: function(e) { return "Exponent of effect: "+showNum(5)+" -> "+showNum(e.plus(5)) },
	},
	4: {
		cost: function(bought) { return ExpantaNum.pow(5, bought).times(4) },
		target: function(points) { return points.div(4).max(1).logBase(5).plus(1).floor() },
		cap: new ExpantaNum(10),
		desc: "The Theoriverse's nerf is weakened.",
		effect: function(bought) { return new ExpantaNum(bought).plus(1).times(10).slog(10).sub(1).times(7.6).max(0) },
		effD: function(e) { return "-"+showNum(e)+" Depths" },
	},
	5: {
		cost: function(bought) { return ExpantaNum.pow(2, bought).times(4) },
		target: function(points) { return points.div(4).max(1).logBase(2).plus(1).floor() },
		cap: new ExpantaNum(15),
		desc: "Triple Supersymmetric Particle gain.",
		effect: function(bought) { return ExpantaNum.pow(3, bought) },
		effD: function(e) { return showNum(e)+"x" },
	},
	6: {
		unl: function() { return player.elementary.theory.strings.unl },
		cost: function(bought) { return ExpantaNum.add(bought.times(2), 6) },
		target: function(points) { return points.sub(6).div(2).plus(1).floor() },
		cap: new ExpantaNum(40),
		desc: "Entangled String gain is boosted by your Elementaries.",
		effect: function(bought) { return player.elementary.times.plus(1).pow(new ExpantaNum(bought).pow(0.15).div(5)) },
		effD: function(e) { return showNum(e)+"x" },
	},
	7: {
		unl: function() { return player.elementary.theory.strings.unl },
		cost: function(bought) { return ExpantaNum.add(bought.times(3), 2) },
		target: function(points) { return points.sub(2).div(3).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "Scaled Endorsement scaling starts later based on your Primary Strings, and Knowledge gain is boosted in Theoriverse runs.",
		effect: function(bought) { return player.elementary.theory.strings.amounts[0].plus(1).times(10).slog(10).log10().div(5).times(new ExpantaNum(bought).times(75)) },
		effD: function(e) { return "Scaling: "+showNum(e)+" later, Knowledge gain: "+showNum(e.plus(1).pow(10))+"x" },
	},
	8: {
		unl: function() { return player.elementary.theory.preons.unl },
		cost: function(bought) { return ExpantaNum.add(10, bought.pow(2).times(2)) },
		target: function(points) { return points.sub(10).div(2).sqrt().plus(1).floor() },
		cap: new ExpantaNum(16),
		desc: "Superscaled Rocket Fuel scaling is weaker.",
		effect: function(bought) { 
			if (bought.gte(16)) bought = ExpantaNum.sub(20, ExpantaNum.div(20, ExpantaNum.sub(bought, 11)));
			return ExpantaNum.mul(0.05, bought) 
		},
		effD: function(e) { return showNum(e.times(100))+"% weaker" },
	},
	9: {
		unl: function() { return player.elementary.theory.preons.unl },
		cost: function(bought) { return ExpantaNum.add(9, bought.times(3)) },
		target: function(points) { return points.sub(9).div(3).plus(1).floor() },
		cap: new ExpantaNum(90),
		desc: "Preons are gained faster based on your Fermions.",
		effect: function(bought) { return player.elementary.fermions.amount.pow(0.2).times(new ExpantaNum(bought).pow(2)).plus(1) },
		effD: function(e) { return showNum(e)+"x" },
	},
	10: {
		unl: function() { return player.elementary.theory.preons.unl },
		cost: function(bought) { return ExpantaNum.add(14, bought.pow(3).times(7)) },
		target: function(points) { return points.sub(14).div(7).cbrt().plus(1).floor() },
		cap: new ExpantaNum(10),
		desc: "Theoretical Boosters cost less.",
		effect: function(bought) { return ExpantaNum.pow(ExpantaNum.add(bought, 1), 3) },
		effD: function(e) { return showNum(e)+"x cheaper" },
	},
	11: {
		unl: function() { return player.elementary.theory.preons.unl },
		cost: function(bought) { return ExpantaNum.mul(20, bought.div(2).plus(1)) },
		target: function(points) { return points.div(20).sub(1).times(2).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "The above upgrade gets extra levels added to its effect based on your Preons.",
		effect: function(bought) { return player.elementary.theory.preons.amount.plus(1).times(10).slog(10).times(bought) },
		effD: function(e) { return showNum(e)+" extra levels" },
	},
	12: {
		unl: function() { return player.elementary.theory.accelerons.unl },
		cost: function(bought) { return ExpantaNum.mul(100, bought.sqrt().plus(1)).floor() },
		target: function(points) { return points.div(100).sub(1).pow(2).plus(1).floor() },
		cap: new ExpantaNum(12),
		desc: "Accelerons are generated faster based on your Supersymmetric Wave length.",
		effect: function(bought) { return tmp.elm.theory.ss.wavelength.plus(1).pow(0.04).pow(bought) },
		effD: function(e) { return showNum(e)+"x" },
	},
	13: {
		unl: function() { return player.elementary.theory.accelerons.unl },
		cost: function(bought) { return ExpantaNum.mul(5, bought.pow(2).plus(1)).plus(75) },
		target: function(points) { return points.sub(75).div(5).sub(1).sqrt().plus(1).floor() },
		cap: new ExpantaNum(10),
		desc: "Pathogen Upgrades are stronger based on your Bosons.",
		effect: function(bought) { return player.elementary.bosons.amount.plus(1).log10().plus(1).log10().times(ExpantaNum.sqrt(bought)) },
		effD: function(e) { return "+"+showNum(e.times(100))+"%" },
	},
	14: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return ExpantaNum.pow(2, ExpantaNum.pow(2, bought)).times(25) },
		target: function(points) { return points.div(25).max(1).logBase(2).max(1).logBase(2).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "The Secondary String effect is stronger.",
		effect: function(bought) { return ExpantaNum.mul(0.1, bought) },
		effD: function(e) { return "^"+showNum(e.plus(1)) },
	},
	15: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return ExpantaNum.pow(2, ExpantaNum.pow(2, bought)).times(25) },
		target: function(points) { return points.div(25).max(1).logBase(2).max(1).logBase(2).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "The Tertiary String effect is stronger.",
		effect: function(bought) { return ExpantaNum.mul(0.1, bought) },
		effD: function(e) { return "^"+showNum(e.plus(1)) },
	},
	16: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return ExpantaNum.pow(2, ExpantaNum.pow(2, bought)).times(25) },
		target: function(points) { return points.div(25).max(1).logBase(2).max(1).logBase(2).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "The Quaternary String effect is stronger.",
		effect: function(bought) { return ExpantaNum.mul(0.1, bought) },
		effD: function(e) { return "^"+showNum(e.plus(1)) },
	},
	17: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return ExpantaNum.pow(2, ExpantaNum.pow(2, bought)).times(25) },
		target: function(points) { return points.div(25).max(1).logBase(2).max(1).logBase(2).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "The Quinary String effect is stronger.",
		effect: function(bought) { return ExpantaNum.mul(0.1, bought) },
		effD: function(e) { return "^"+showNum(e.plus(1)) },
	},
	18: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return ExpantaNum.pow(2, ExpantaNum.pow(2, bought)).times(25) },
		target: function(points) { return points.div(25).max(1).logBase(2).max(1).logBase(2).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "The Senary String effect is stronger.",
		effect: function(bought) { return ExpantaNum.mul(0.1, bought) },
		effD: function(e) { return "^"+showNum(e.plus(1)) },
	},
	19: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return ExpantaNum.pow(2, ExpantaNum.pow(2, bought)).times(25) },
		target: function(points) { return points.div(25).max(1).logBase(2).max(1).logBase(2).plus(1).floor() },
		cap: new ExpantaNum(5),
		desc: "The Septenary String effect is stronger.",
		effect: function(bought) { return ExpantaNum.mul(0.1, bought) },
		effD: function(e) { return "^"+showNum(e.plus(1)) },
	},
	20: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(240) },
		cap: new ExpantaNum(1),
		desc: "The EP gain softcap is 50% weaker.",
		effect: function(bought) { return new ExpantaNum(0.5).times(bought) },
		effD: function(e) { return showNum(e.times(100))+"% weaker" },
	},
	21: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(240) },
		cap: new ExpantaNum(1),
		desc: "Each Graviton Boost is twice as strong.",
		effect: function(bought) { return new ExpantaNum(2).times(bought).max(1) },
		effD: function(e) { return showNum(e)+"x" },
	},
	22: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(50) },
		cap: new ExpantaNum(1),
		desc: "Sleptons also boost Squark gain.",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
	23: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(50) },
		cap: new ExpantaNum(1),
		desc: "Neutralinos also boost Slepton gain.",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
	24: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(50) },
		cap: new ExpantaNum(1),
		desc: "Charginos also boost Neutralino gain.",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
	25: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(250) },
		cap: new ExpantaNum(1),
		desc: "Pathogen Upgrades are 150% stronger (additive).",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
	26: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(250) },
		cap: new ExpantaNum(1),
		desc: "The topmost Theory Tree Upgrade's effect uses a better formula.",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
	27: {
		unl: function() { return hasDE(5) },
		cost: function(bought) { return new ExpantaNum(50) },
		cap: new ExpantaNum(1),
		desc: "Collapse Milestone 10 uses a better formula.",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
	28: {
		unl: function() { return player.elementary.hc.unl },
		cost: function(bought) { return ExpantaNum.mul(400, ExpantaNum.pow(bought, 2).times(1.5).plus(1)).round() },
		target: function(points) { return points.div(400).sub(1).div(1.5).sqrt().plus(1).floor() },
		cap: new ExpantaNum(10),
		desc: "You gain Purge Power outside Purge runs, but at a reduced rate.",
		effect: function(bought) { return ExpantaNum.mul(0.1, bought) },
		effD: function(e) { return showNum(e)+"x" },
	},
	29: {
		unl: function() { return player.elementary.hc.unl },
		cost: function(bought) { return ExpantaNum.pow(bought, 5).plus(25) },
		target: function(points) { return points.sub(25).pow(0.2).plus(1).floor() },
		cap: new ExpantaNum(20),
		desc: "Heavenly Chips & Demonic Souls are generated faster based on your Purge Power.",
		effect: function(bought) { return ExpantaNum.pow(ExpantaNum.mul(0.001, bought).plus(1), player.inf.pantheon.purge.power).times(ExpantaNum.pow(player.inf.pantheon.purge.power.max(1), ExpantaNum.sqrt(bought))) },
		effD: function(e) { return showNum(e)+"x" },
	},
	30: {
		unl: function() { return player.elementary.hc.unl },
		cost: function(bought) { return ExpantaNum.mul(750, ExpantaNum.add(bought, 1)) },
		target: function(points) { return points.div(750).floor() },
		cap: new ExpantaNum(5),
		desc: "Entangled String gain is boosted by your Hadrons.",
		effect: function(bought) { return ExpantaNum.pow(player.elementary.hc.hadrons.plus(1), ExpantaNum.sqrt(bought).div(2)) },
		effD: function(e) { return showNum(e)+"x" },
	},
	31: {
		unl: function() { return player.elementary.hc.unl },
		cost: function(bought) { return ExpantaNum.pow(bought, 2).plus(1).times(1e3) },
		target: function(points) { return points.div(1e3).sub(1).sqrt().plus(1).floor() },
		cap: new ExpantaNum(4),
		desc: "Hadron gain is boosted by your best-ever Endorsements.",
		effect: function(bought) { return ExpantaNum.pow(ExpantaNum.add(1, ExpantaNum.mul(0.05, bought)), player.bestEnd) },
		effD: function(e) { return showNum(e)+"x" },
	},
	32: {
		unl: function() { return player.elementary.hc.unl },
		cost: function(bought) { return new ExpantaNum(100) },
		cap: new ExpantaNum(1),
		desc: "All Quark & Lepton effects are active at once.",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
	33: {
		unl: function() { return player.elementary.hc.unl },
		cost: function(bought) { return new ExpantaNum(1.5e3) },
		cap: new ExpantaNum(1),
		desc: "The Hadron effect interval occurs twice as often.",
		effect: function(bought) { return new ExpantaNum(1).times(bought) },
		effD: function(e) { return e.eq(1)?"Active":"Nothing" },
	},
}
const TREE_AMT = Object.keys(TREE_UPGS).length

const UNL_STR = function() { 
	if (hasDE(2)) return 7
	else return 5 
}
const TOTAL_STR = 7
const STR_REQS = {
	1: new ExpantaNum(0),
	2: new ExpantaNum(0.5),
	3: new ExpantaNum(100),
	4: new ExpantaNum(1e4),
	5: new ExpantaNum(1e7),
	6: new ExpantaNum(1e14),
	7: new ExpantaNum(DISTANCES.pc),
}
const STR_NAMES = {
	1: "Primary",
	2: "Secondary",
	3: "Tertiary",
	4: "Quaternary",
	5: "Quinary",
	6: "Senary",
	7: "Septenary"
}

const MAX_DARK_EXPANDERS = 5
const DARK_EXPANDER_COSTS = {
	1: new ExpantaNum(40),
	2: new ExpantaNum(250),
	3: new ExpantaNum(600),
	4: new ExpantaNum(2e3),
	5: new ExpantaNum(4e3),
}
const DARK_EXPANDER_DESCS = {
	1: "Unlock a third Gluon Upgrade.",
	2: "Unlock two more Strings.",
	3: "Unlock new Higgs Upgrades.",
	4: "Unlock Graviton Boosts.",
	5: "Unlock new Theory Tree Upgrades, and the Theoretical Boost formula is much slower.",
}

const HC_REQ = [new ExpantaNum("e2e7").times(DISTANCES.uni), new ExpantaNum(64)]
const HC_DATA = {
	goal: ["text", [Number.MAX_VALUE, "e1e7"], "main"],
	noTRU: ["checkbox", undefined, "pre"],
	noCad: ["checkbox", undefined, "col"],
	noPU: ["checkbox", undefined, "col"],
	noDC: ["checkbox", undefined, "col"],
	noIU: ["checkbox", undefined, "inf"],
	spaceon: ["range", [0, 6], "inf"],
	solaris: ["range", [0, 6], "inf"],
	infinity: ["range", [0, 6], "inf"],
	eternity: ["range", [0, 6], "inf"],
	reality: ["range", [0, 6], "inf"],
	drigganiz: ["range", [0, 6], "inf"],
	noGems: ["checkbox", undefined, "inf"],
	purge: ["checkbox", undefined, "inf"],
	noDS: ["checkbox", undefined, "inf"],
	noDB: ["checkbox", undefined, "inf"],
	tv: ["range", [-1, 10], "elm"],
}
const HC_TITLE = {
	goal: "Challenge goal (in uni)",
	noTRU: "Time Reversal Upgrades do nothing",
	noCad: "You do not gain Cadavers",
	noPU: "Pathogen Upgrades do nothing",
	noDC: "You cannot buy Dark Cores",
	noIU: "You cannot buy Infinity Upgrades",
	spaceon: "Trapped in Spaceon's Challenge (disabled: 0)",
	solaris: "Trapped in Solaris' Challenge (disabled: 0)",
	infinity: "Trapped in Infinity's Challenge (disabled: 0)",
	eternity: "Trapped in Eternity's Challenge (disabled: 0)",
	reality: "Trapped in Reality's Challenge (disabled: 0)",
	drigganiz: "Trapped in Drigganiz's Challenge (disabled: 0)",
	noGems: "You cannot gain Spectral Gems",
	purge: "Trapped in Purge",
	noDS: "Derivative Shifts do nothing",
	noDB: "Derivative Boosts do nothing",
	tv: "Trapped in Theoriverse Depth (disabled: -1)",
}
const HC_CHALLS = ["spaceon","solaris","infinity","eternity","reality","drigganiz"]

const FOAM_REQ = new ExpantaNum("1e42000000")
const FOAM_TABS = {
	foamBoosts: function() { return true },
	qf1: function() { return true },
	entropy: function() { return player.elementary.entropy.unl },
}
const FOAM_BOOST_COSTS = {
	1: {
		1: {
			start: new ExpantaNum(10),
			base: new ExpantaNum(2.5),
			exp: new ExpantaNum(1.2),
		},
		2: {
			start: new ExpantaNum(30),
			base: new ExpantaNum(3),
			exp: new ExpantaNum(1.25),
		},
		3: {
			start: new ExpantaNum(75),
			base: new ExpantaNum(3.5),
			exp: new ExpantaNum(1.3),
		},
	},
	2: {
		1: {
			start: new ExpantaNum(40),
			base: new ExpantaNum(4),
			exp: new ExpantaNum(1.35),
		},
		2: {
			start: new ExpantaNum(250),
			base: new ExpantaNum(4.5),
			exp: new ExpantaNum(1.4),
		},
		3: {
			start: new ExpantaNum(500),
			base: new ExpantaNum(5),
			exp: new ExpantaNum(1.45),
		},
	},
	3: {
		1: {
			start: new ExpantaNum(100),
			base: new ExpantaNum(5.5),
			exp: new ExpantaNum(1.5),
		},
		2: {
			start: new ExpantaNum(400),
			base: new ExpantaNum(6),
			exp: new ExpantaNum(1.55),
		},
		3: {
			start: new ExpantaNum(1e3),
			base: new ExpantaNum(6.5),
			exp: new ExpantaNum(1.6),
		},
	},
	4: {
		1: {
			start: new ExpantaNum(200),
			base: new ExpantaNum(7),
			exp: new ExpantaNum(1.65),
		},
		2: {
			start: new ExpantaNum(750),
			base: new ExpantaNum(7.5),
			exp: new ExpantaNum(1.7),
		},
		3: {
			start: new ExpantaNum(1.2e3),
			base: new ExpantaNum(8),
			exp: new ExpantaNum(1.75),
		},
	},
	5: {
		1: {
			start: new ExpantaNum(250),
			base: new ExpantaNum(8.5),
			exp: new ExpantaNum(1.8),
		},
		2: {
			start: new ExpantaNum(1e3),
			base: new ExpantaNum(9),
			exp: new ExpantaNum(1.85),
		},
		3: {
			start: new ExpantaNum(5e3),
			base: new ExpantaNum(9.5),
			exp: new ExpantaNum(1.9),
		},
	},
}
const QF_NEXTLAYER_COST = {
	1: new ExpantaNum(1e4),
	2: new ExpantaNum(5e3),
	3: new ExpantaNum(1e4),
	4: new ExpantaNum(1.75e3),
	5: new ExpantaNum(1e6),
}
const QFB17_TARGETS = [1, 2, 3, 4, 5, 6, 8, 9, 10, 12]
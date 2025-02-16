import { reverseMap } from "../../utils/map"
import { Ability } from "./Ability"
import { Synergy } from "./Synergy"
import { Weather } from "./Weather"

export enum Item {
  FOSSIL_STONE = "FOSSIL_STONE",
  TWISTED_SPOON = "TWISTED_SPOON",
  MYSTIC_WATER = "MYSTIC_WATER",
  MAGNET = "MAGNET",
  BLACK_GLASSES = "BLACK_GLASSES",
  MIRACLE_SEED = "MIRACLE_SEED",
  NEVER_MELT_ICE = "NEVER_MELT_ICE",
  CHARCOAL = "CHARCOAL",
  HEART_SCALE = "HEART_SCALE",
  OLD_AMBER = "OLD_AMBER",
  DAWN_STONE = "DAWN_STONE",
  WATER_STONE = "WATER_STONE",
  THUNDER_STONE = "THUNDER_STONE",
  FIRE_STONE = "FIRE_STONE",
  MOON_STONE = "MOON_STONE",
  DUSK_STONE = "DUSK_STONE",
  LEAF_STONE = "LEAF_STONE",
  ICE_STONE = "ICE_STONE",
  CHOICE_SPECS = "CHOICE_SPECS",
  SOUL_DEW = "SOUL_DEW",
  UPGRADE = "UPGRADE",
  REAPER_CLOTH = "REAPER_CLOTH",
  POKEMONOMICON = "POKEMONOMICON",
  POWER_LENS = "POWER_LENS",
  SHELL_BELL = "SHELL_BELL",
  LUCKY_EGG = "LUCKY_EGG",
  AQUA_EGG = "AQUA_EGG",
  BLUE_ORB = "BLUE_ORB",
  SCOPE_LENS = "SCOPE_LENS",
  STAR_DUST = "STAR_DUST",
  GREEN_ORB = "GREEN_ORB",
  MANA_SCARF = "MANA_SCARF",
  SMOKE_BALL = "SMOKE_BALL",
  XRAY_VISION = "XRAY_VISION",
  RAZOR_FANG = "RAZOR_FANG",
  PROTECTIVE_PADS = "PROTECTIVE_PADS",
  CHOICE_SCARF = "CHOICE_SCARF",
  PUNCHING_GLOVE = "PUNCHING_GLOVE",
  DEFENSIVE_RIBBON = "DEFENSIVE_RIBBON",
  WONDER_BOX = "WONDER_BOX",
  CLEANSE_TAG = "CLEANSE_TAG",
  WIDE_LENS = "WIDE_LENS",
  RAZOR_CLAW = "RAZOR_CLAW",
  FLUFFY_TAIL = "FLUFFY_TAIL",
  KINGS_ROCK = "KINGS_ROCK",
  SHINY_CHARM = "SHINY_CHARM",
  GRACIDEA_FLOWER = "GRACIDEA_FLOWER",
  FLAME_ORB = "FLAME_ORB",
  ASSAULT_VEST = "ASSAULT_VEST",
  AMULET_COIN = "AMULET_COIN",
  POKE_DOLL = "POKE_DOLL",
  RED_ORB = "RED_ORB",
  MAX_REVIVE = "MAX_REVIVE",
  ROCKY_HELMET = "ROCKY_HELMET",
  AGUAV_BERRY = "AGUAV_BERRY",
  APICOT_BERRY = "APICOT_BERRY",
  ASPEAR_BERRY = "ASPEAR_BERRY",
  BABIRI_BERRY = "BABIRI_BERRY",
  CHERI_BERRY = "CHERI_BERRY",
  CHESTO_BERRY = "CHESTO_BERRY",
  GANLON_BERRY = "GANLON_BERRY",
  JABOCA_BERRY = "JABOCA_BERRY",
  LANSAT_BERRY = "LANSAT_BERRY",
  LEPPA_BERRY = "LEPPA_BERRY",
  LIECHI_BERRY = "LIECHI_BERRY",
  LUM_BERRY = "LUM_BERRY",
  ORAN_BERRY = "ORAN_BERRY",
  PECHA_BERRY = "PECHA_BERRY",
  PERSIM_BERRY = "PERSIM_BERRY",
  PETAYA_BERRY = "PETAYA_BERRY",
  RAWST_BERRY = "RAWST_BERRY",
  ROWAP_BERRY = "ROWAP_BERRY",
  SALAC_BERRY = "SALAC_BERRY",
  SITRUS_BERRY = "SITRUS_BERRY",
  COMFEY = "COMFEY",
  ELECTIRIZER = "ELECTIRIZER",
  MAGMARIZER = "MAGMARIZER",
  MACHO_BRACE = "MACHO_BRACE",
  LIGHT_BALL = "LIGHT_BALL",
  TOXIC_ORB = "TOXIC_ORB",
  METRONOME = "METRONOME",
  METAL_COAT = "METAL_COAT",
  SWIFT_WING = "SWIFT_WING",
  HARD_STONE = "HARD_STONE",
  BIG_NUGGET = "BIG_NUGGET",
  INCENSE = "INCENSE",
  EXP_SHARE = "EXP_SHARE",
  POKERUS_VIAL = "POKERUS_VIAL",
  ROTOM_PHONE = "ROTOM_PHONE",
  SILK_SCARF = "SILK_SCARF",
  TINY_MUSHROOM = "TINY_MUSHROOM",
  METEORITE = "METEORITE",
  TRASH = "TRASH",
  DYNAMAX_BAND = "DYNAMAX_BAND",
  SHINY_STONE = "SHINY_STONE",
  OLD_ROD = "OLD_ROD",
  GOOD_ROD = "GOOD_ROD",
  SUPER_ROD = "SUPER_ROD",
  RARE_CANDY = "RARE_CANDY",
  EVIOLITE = "EVIOLITE",
  WHITE_FLUTE = "WHITE_FLUTE",
  GOLD_BOTTLE_CAP = "GOLD_BOTTLE_CAP",
  ABSORB_BULB = "ABSORB_BULB",
  SACRED_ASH = "SACRED_ASH",
  COMET_SHARD = "COMET_SHARD",
  REPEAT_BALL = "REPEAT_BALL",
  DAMP_ROCK = "DAMP_ROCK",
  ICY_ROCK = "ICY_ROCK",
  HEAT_ROCK = "HEAT_ROCK",
  SMOOTH_ROCK = "SMOOTH_ROCK",
  BLACK_AUGURITE = "BLACK_AUGURITE",
  FLOAT_STONE = "FLOAT_STONE",
  MIST_STONE = "MIST_STONE",
  ELECTRIC_QUARTZ = "ELECTRIC_QUARTZ",
  BLOOD_STONE = "BLOOD_STONE",
  SMELLY_CLAY = "SMELLY_CLAY",
  FIRE_SHARD = "FIRE_SHARD",
  TEAL_MASK = "TEAL_MASK",
  WELLSPRING_MASK = "WELLSPRING_MASK",
  CORNERSTONE_MASK = "CORNERSTONE_MASK",
  HEARTHFLAME_MASK = "HEARTHFLAME_MASK",
  ZYGARDE_CUBE = "ZYGARDE_CUBE",
  TM_RAGE = "TM_RAGE",
  TM_BRICK_BREAK = "TM_BRICK_BREAK",
  TM_TAUNT = "TM_TAUNT",
  TM_BULK_UP = "TM_BULK_UP",
  TM_BIDE = "TM_BIDE",
  TM_PSYCH_UP = "TM_PSYCH_UP",
  TM_RETALIATE = "TM_RETALIATE",
  TM_PAYDAY = "TM_PAYDAY",
  HM_CUT = "HM_CUT",
  HM_FLY = "HM_FLY",
  HM_SURF = "HM_SURF",
  HM_STRENGTH = "HM_STRENGTH",
  HM_FLASH = "HM_FLASH",
  HM_ROCK_SMASH = "HM_ROCK_SMASH",
  HM_WHIRLPOOL = "HM_WHIRLPOOL",
  HM_WATERFALL = "HM_WATERFALL",
  CHEF_HAT = "CHEF_HAT",
  RAGE_CANDY_BAR = "RAGE_CANDY_BAR",
  TEA = "TEA",
  CURRY = "CURRY",
  CASTELIACONE = "CASTELIACONE",
  WHIPPED_DREAM = "WHIPPED_DREAM",
  BERRY_JUICE = "BERRY_JUICE",
  TART_APPLE = "TART_APPLE",
  SWEET_APPLE = "SWEET_APPLE",
  SIRUPY_APPLE = "SIRUPY_APPLE",
  SWEET_HERB = "SWEET_HERB",
  MOOMOO_MILK = "MOOMOO_MILK",
  BERRIES = "BERRIES",
  HONEY = "HONEY",
  POFFIN = "POFFIN",
  ROCK_SALT = "ROCK_SALT",
  NUTRITIOUS_EGG = "NUTRITIOUS_EGG",
  LEFTOVERS = "LEFTOVERS",
  BLACK_SLUDGE = "BLACK_SLUDGE",
  FRUIT_JUICE = "FRUIT_JUICE",
  LEEK = "LEEK",
  LARGE_LEEK = "LARGE_LEEK",
  SPINDA_COCKTAIL = "SPINDA_COCKTAIL"
}

export const AllItems: Item[] = Object.values(Item)

// should be excluded from carousels
export const SpecialItems: Item[] = [
  Item.COMFEY,
  Item.METEORITE,
  Item.TEAL_MASK,
  Item.WELLSPRING_MASK,
  Item.CORNERSTONE_MASK,
  Item.HEARTHFLAME_MASK,
  Item.ZYGARDE_CUBE,
  Item.BERRY_JUICE,
  Item.FIRE_SHARD,
  Item.OLD_ROD,
  Item.GOOD_ROD,
  Item.SUPER_ROD,
  Item.CHEF_HAT,
  Item.TRASH
]

export const FishingRods = [
  Item.SUPER_ROD,
  Item.GOOD_ROD,
  Item.OLD_ROD
] as const // order matters

export type FishingRod = (typeof FishingRods)[number]

export const ItemComponents: Item[] = [
  Item.FOSSIL_STONE,
  Item.TWISTED_SPOON,
  Item.MAGNET,
  Item.BLACK_GLASSES,
  Item.MIRACLE_SEED,
  Item.CHARCOAL,
  Item.NEVER_MELT_ICE,
  Item.HEART_SCALE,
  Item.MYSTIC_WATER
]

export const ItemRecipe: { [key in Item]?: Item[] } = {
  [Item.OLD_AMBER]: [Item.FOSSIL_STONE, Item.FOSSIL_STONE],
  [Item.DAWN_STONE]: [Item.FOSSIL_STONE, Item.TWISTED_SPOON],
  [Item.WATER_STONE]: [Item.FOSSIL_STONE, Item.MYSTIC_WATER],
  [Item.THUNDER_STONE]: [Item.FOSSIL_STONE, Item.MAGNET],
  [Item.FIRE_STONE]: [Item.FOSSIL_STONE, Item.CHARCOAL],
  [Item.MOON_STONE]: [Item.FOSSIL_STONE, Item.HEART_SCALE],
  [Item.DUSK_STONE]: [Item.FOSSIL_STONE, Item.BLACK_GLASSES],
  [Item.LEAF_STONE]: [Item.FOSSIL_STONE, Item.MIRACLE_SEED],
  [Item.ICE_STONE]: [Item.FOSSIL_STONE, Item.NEVER_MELT_ICE],
  [Item.CHOICE_SPECS]: [Item.TWISTED_SPOON, Item.TWISTED_SPOON],
  [Item.SOUL_DEW]: [Item.TWISTED_SPOON, Item.MYSTIC_WATER],
  [Item.UPGRADE]: [Item.TWISTED_SPOON, Item.MAGNET],
  [Item.REAPER_CLOTH]: [Item.TWISTED_SPOON, Item.BLACK_GLASSES],
  [Item.POKEMONOMICON]: [Item.TWISTED_SPOON, Item.MIRACLE_SEED],
  [Item.POWER_LENS]: [Item.TWISTED_SPOON, Item.NEVER_MELT_ICE],
  [Item.SHELL_BELL]: [Item.TWISTED_SPOON, Item.CHARCOAL],
  [Item.LUCKY_EGG]: [Item.TWISTED_SPOON, Item.HEART_SCALE],
  [Item.AQUA_EGG]: [Item.MYSTIC_WATER, Item.MYSTIC_WATER],
  [Item.BLUE_ORB]: [Item.MYSTIC_WATER, Item.MAGNET],
  [Item.SCOPE_LENS]: [Item.MYSTIC_WATER, Item.BLACK_GLASSES],
  [Item.STAR_DUST]: [Item.MYSTIC_WATER, Item.MIRACLE_SEED],
  [Item.GREEN_ORB]: [Item.MYSTIC_WATER, Item.NEVER_MELT_ICE],
  [Item.MANA_SCARF]: [Item.MYSTIC_WATER, Item.CHARCOAL],
  [Item.SMOKE_BALL]: [Item.MYSTIC_WATER, Item.HEART_SCALE],
  [Item.XRAY_VISION]: [Item.MAGNET, Item.MAGNET],
  [Item.RAZOR_FANG]: [Item.MAGNET, Item.BLACK_GLASSES],
  [Item.GRACIDEA_FLOWER]: [Item.MAGNET, Item.MIRACLE_SEED],
  [Item.CHOICE_SCARF]: [Item.MAGNET, Item.NEVER_MELT_ICE],
  [Item.PUNCHING_GLOVE]: [Item.MAGNET, Item.CHARCOAL],
  [Item.DEFENSIVE_RIBBON]: [Item.MAGNET, Item.HEART_SCALE],
  [Item.WONDER_BOX]: [Item.BLACK_GLASSES, Item.BLACK_GLASSES],
  [Item.CLEANSE_TAG]: [Item.BLACK_GLASSES, Item.MIRACLE_SEED],
  [Item.WIDE_LENS]: [Item.BLACK_GLASSES, Item.NEVER_MELT_ICE],
  [Item.RAZOR_CLAW]: [Item.BLACK_GLASSES, Item.CHARCOAL],
  [Item.FLUFFY_TAIL]: [Item.BLACK_GLASSES, Item.HEART_SCALE],
  [Item.KINGS_ROCK]: [Item.MIRACLE_SEED, Item.MIRACLE_SEED],
  [Item.SHINY_CHARM]: [Item.MIRACLE_SEED, Item.NEVER_MELT_ICE],
  [Item.PROTECTIVE_PADS]: [Item.MIRACLE_SEED, Item.CHARCOAL],
  [Item.MAX_REVIVE]: [Item.MIRACLE_SEED, Item.HEART_SCALE],
  [Item.ASSAULT_VEST]: [Item.NEVER_MELT_ICE, Item.NEVER_MELT_ICE],
  [Item.AMULET_COIN]: [Item.NEVER_MELT_ICE, Item.CHARCOAL],
  [Item.POKE_DOLL]: [Item.NEVER_MELT_ICE, Item.HEART_SCALE],
  [Item.RED_ORB]: [Item.CHARCOAL, Item.CHARCOAL],
  [Item.FLAME_ORB]: [Item.CHARCOAL, Item.HEART_SCALE],
  [Item.ROCKY_HELMET]: [Item.HEART_SCALE, Item.HEART_SCALE]
}

export const Berries: Item[] = [
  Item.AGUAV_BERRY,
  Item.APICOT_BERRY,
  Item.ASPEAR_BERRY,
  Item.BABIRI_BERRY,
  Item.CHERI_BERRY,
  Item.CHESTO_BERRY,
  Item.GANLON_BERRY,
  Item.JABOCA_BERRY,
  Item.LANSAT_BERRY,
  Item.LEPPA_BERRY,
  Item.LIECHI_BERRY,
  Item.LUM_BERRY,
  Item.ORAN_BERRY,
  Item.PECHA_BERRY,
  Item.PERSIM_BERRY,
  Item.PETAYA_BERRY,
  Item.RAWST_BERRY,
  Item.ROWAP_BERRY,
  Item.SALAC_BERRY,
  Item.SITRUS_BERRY
]

export const ArtificialItems: Item[] = [
  Item.EXP_SHARE,
  Item.ELECTIRIZER,
  Item.MAGMARIZER,
  Item.LIGHT_BALL,
  Item.TOXIC_ORB,
  Item.HARD_STONE,
  Item.METAL_COAT,
  Item.SWIFT_WING,
  Item.MACHO_BRACE,
  Item.INCENSE,
  Item.METRONOME,
  Item.BIG_NUGGET,
  Item.POKERUS_VIAL,
  Item.ROTOM_PHONE,
  Item.SILK_SCARF,
  Item.TINY_MUSHROOM
]

export const ShinyItems: Item[] = [
  Item.DYNAMAX_BAND,
  Item.SHINY_STONE,
  Item.RARE_CANDY,
  Item.EVIOLITE,
  Item.WHITE_FLUTE,
  Item.GOLD_BOTTLE_CAP,
  Item.ABSORB_BULB,
  Item.SACRED_ASH,
  Item.COMET_SHARD,
  Item.REPEAT_BALL
]

export const WeatherRocks: Item[] = [
  Item.DAMP_ROCK,
  Item.ICY_ROCK,
  Item.HEAT_ROCK,
  Item.SMOOTH_ROCK,
  Item.BLACK_AUGURITE,
  Item.FLOAT_STONE,
  Item.ELECTRIC_QUARTZ,
  Item.MIST_STONE,
  Item.BLOOD_STONE,
  Item.SMELLY_CLAY
]

export const WeatherRocksByWeather: Map<
  Weather,
  (typeof WeatherRocks)[number] | null
> = new Map([
  [Weather.SUN, Item.HEAT_ROCK],
  [Weather.RAIN, Item.DAMP_ROCK],
  [Weather.SANDSTORM, Item.SMOOTH_ROCK],
  [Weather.SNOW, Item.ICY_ROCK],
  [Weather.STORM, Item.ELECTRIC_QUARTZ],
  [Weather.MISTY, Item.MIST_STONE],
  [Weather.WINDY, Item.FLOAT_STONE],
  [Weather.SMOG, Item.SMELLY_CLAY],
  [Weather.NIGHT, Item.BLACK_AUGURITE],
  [Weather.BLOODMOON, Item.BLOOD_STONE],
  [Weather.NEUTRAL, null]
])

export const WeatherByWeatherRocks = reverseMap(WeatherRocksByWeather)

export const CraftableItems: Item[] = Object.keys(ItemRecipe) as Item[]

export const SynergyStones = [
  Item.OLD_AMBER,
  Item.DAWN_STONE,
  Item.WATER_STONE,
  Item.THUNDER_STONE,
  Item.FIRE_STONE,
  Item.MOON_STONE,
  Item.DUSK_STONE,
  Item.LEAF_STONE,
  Item.ICE_STONE
]

export const SynergyItems = [
  Item.OLD_AMBER,
  Item.DAWN_STONE,
  Item.WATER_STONE,
  Item.THUNDER_STONE,
  Item.FIRE_STONE,
  Item.MOON_STONE,
  Item.DUSK_STONE,
  Item.LEAF_STONE,
  Item.ICE_STONE,
  Item.MACHO_BRACE,
  Item.LIGHT_BALL,
  Item.TOXIC_ORB,
  Item.METRONOME,
  Item.METAL_COAT,
  Item.SWIFT_WING,
  Item.HARD_STONE,
  Item.BIG_NUGGET,
  Item.ROTOM_PHONE,
  Item.SHINY_STONE,
  Item.SILK_SCARF,
  Item.TINY_MUSHROOM
] as const

export const SynergyGivenByItem: Record<
  (typeof SynergyItems)[number],
  Synergy
> = {
  [Item.OLD_AMBER]: Synergy.FOSSIL,
  [Item.DAWN_STONE]: Synergy.PSYCHIC,
  [Item.WATER_STONE]: Synergy.WATER,
  [Item.THUNDER_STONE]: Synergy.ELECTRIC,
  [Item.FIRE_STONE]: Synergy.FIRE,
  [Item.MOON_STONE]: Synergy.FAIRY,
  [Item.DUSK_STONE]: Synergy.DARK,
  [Item.LEAF_STONE]: Synergy.GRASS,
  [Item.ICE_STONE]: Synergy.ICE,
  [Item.MACHO_BRACE]: Synergy.FIGHTING,
  [Item.LIGHT_BALL]: Synergy.LIGHT,
  [Item.TOXIC_ORB]: Synergy.POISON,
  [Item.METRONOME]: Synergy.SOUND,
  [Item.METAL_COAT]: Synergy.STEEL,
  [Item.SWIFT_WING]: Synergy.FLYING,
  [Item.HARD_STONE]: Synergy.ROCK,
  [Item.BIG_NUGGET]: Synergy.GROUND,
  [Item.ROTOM_PHONE]: Synergy.GHOST,
  [Item.SHINY_STONE]: Synergy.LIGHT,
  [Item.SILK_SCARF]: Synergy.NORMAL,
  [Item.TINY_MUSHROOM]: Synergy.BUG
}

export const NonSpecialItemComponents: Item[] = [
  Item.TWISTED_SPOON,
  Item.MAGNET,
  Item.BLACK_GLASSES,
  Item.MIRACLE_SEED,
  Item.CHARCOAL,
  Item.NEVER_MELT_ICE,
  Item.HEART_SCALE,
  Item.MYSTIC_WATER
]

export const NonHoldableItems: Item[] = [
  ...WeatherRocks,
  ...FishingRods,
  Item.METEORITE,
  Item.ZYGARDE_CUBE,
  Item.FIRE_SHARD
]

export const OgerponMasks: Item[] = [
  Item.TEAL_MASK,
  Item.WELLSPRING_MASK,
  Item.CORNERSTONE_MASK,
  Item.HEARTHFLAME_MASK
]

export const TMs = [
  Item.TM_RAGE,
  Item.TM_BRICK_BREAK,
  Item.TM_TAUNT,
  Item.TM_BULK_UP,
  Item.TM_BIDE,
  Item.TM_PSYCH_UP,
  Item.TM_RETALIATE,
  Item.TM_PAYDAY
]

export const HMs = [
  Item.HM_CUT,
  Item.HM_FLY,
  Item.HM_SURF,
  Item.HM_STRENGTH,
  Item.HM_FLASH,
  Item.HM_ROCK_SMASH,
  Item.HM_WATERFALL,
  Item.HM_WHIRLPOOL
]

export const AbilityPerTM: { [item in Item]?: Ability } = {
  [Item.TM_RAGE]: Ability.RAGE,
  [Item.TM_BRICK_BREAK]: Ability.BRICK_BREAK,
  [Item.TM_TAUNT]: Ability.TAUNT,
  [Item.TM_BULK_UP]: Ability.BULK_UP,
  [Item.TM_BIDE]: Ability.BIDE,
  [Item.TM_PSYCH_UP]: Ability.PSYCH_UP,
  [Item.TM_RETALIATE]: Ability.RETALIATE,
  [Item.TM_PAYDAY]: Ability.PAYDAY,
  [Item.HM_CUT]: Ability.CUT,
  [Item.HM_FLY]: Ability.FLY,
  [Item.HM_SURF]: Ability.SURF,
  [Item.HM_STRENGTH]: Ability.STRENGTH,
  [Item.HM_FLASH]: Ability.FLASH,
  [Item.HM_ROCK_SMASH]: Ability.ROCK_SMASH,
  [Item.HM_WATERFALL]: Ability.WATERFALL,
  [Item.HM_WHIRLPOOL]: Ability.WHIRLPOOL
}

export const Dishes = [
  Item.RAGE_CANDY_BAR,
  Item.ROCK_SALT,
  Item.TEA,
  Item.CURRY,
  Item.POFFIN,
  Item.CASTELIACONE,
  Item.WHIPPED_DREAM,
  Item.TART_APPLE,
  Item.SWEET_APPLE,
  Item.SIRUPY_APPLE,
  Item.SWEET_HERB,
  Item.HONEY,
  Item.LEFTOVERS,
  Item.BLACK_SLUDGE,
  Item.FRUIT_JUICE,
  Item.NUTRITIOUS_EGG,
  Item.LEEK,
  Item.LARGE_LEEK,
  Item.MOOMOO_MILK,
  Item.SPINDA_COCKTAIL,
  Item.BERRY_JUICE,
  Item.BERRIES
] as const

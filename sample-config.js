// rename this file to config.js
// examples

const only_me = {
    "disabled": false,
    "filters": {
        "account": {
            "input": "hardyhard"
        },
        "sale_type": {
            "option": "unpriced"
        },
        "price": {
            "min": '',
            "max": '',
        }
    }
}

const ring = {
    filters: {
        category: {
            option: "accessory.ring"
        }
    },
}


module.exports = {
    only_me: only_me,
    ring: ring,
}

const full_query = {
	"query": {
		"status": {
			"option": "online"
		},
		"name": "Kaom's Primacy",
		"type": "Karui Chopper",
		"stats": [{
			"type": "and",
			"filters": [{
				"id": "pseudo.pseudo_total_attack_speed",
				"value": {
					"min": 1,
					"max": 9999
				},
				"disabled": false
			}, {
				"id": "pseudo.pseudo_count_elemental_resistances",
				"value": {
					"min": 1,
					"max": 9999
				},
				"disabled": false
			}]
		}],
		"filters": {
			"weapon_filters": {
				"disabled": false,
				"filters": {
					"damage": {
						"min": 1,
						"max": 9999
					},
					"crit": {
						"min": 1,
						"max": 9999
					},
					"aps": {
						"min": 1,
						"max": 9999
					},
					"dps": {
						"min": 1,
						"max": 9999
					},
					"edps": {
						"min": 1,
						"max": 9999
					},
					"pdps": {
						"min": 1,
						"max": 9999
					}
				}
			},
			"armour_filters": {
				"disabled": false,
				"filters": {
					"ar": {
						"min": 1,
						"max": 9999
					},
					"es": {
						"min": 1,
						"max": 9999
					},
					"ev": {
						"min": 1,
						"max": 9999
					},
					"block": {
						"min": 1,
						"max": 9999
					}
				}
			},
			"socket_filters": {
				"disabled": false,
				"filters": {
					"sockets": {
						"min": 1,
						"max": 9999,
						"r": 1,
						"g": 1,
						"b": 1,
						"w": 1
					},
					"links": {
						"min": 1,
						"max": 9999,
						"r": 1,
						"g": 1,
						"b": 1,
						"w": 1
					}
				}
			},
			"req_filters": {
				"disabled": false,
				"filters": {
					"lvl": {
						"min": 1,
						"max": 9999
					},
					"dex": {
						"min": 1,
						"max": 9999
					},
					"str": {
						"min": 1,
						"max": 9999
					},
					"int": {
						"min": 1,
						"max": 9999
					}
				}
			},
			"misc_filters": {
				"disabled": false,
				"filters": {
					"quality": {
						"min": 1,
						"max": 9999
					},
					"map_tier": {
						"min": 1,
						"max": 9999
					},
					"map_iiq": {
						"min": 1,
						"max": 9999
					},
					"gem_level": {
						"min": 1,
						"max": 9999
					},
					"ilvl": {
						"min": 1,
						"max": 9999
					},
					"map_packsize": {
						"min": 1,
						"max": 9999
					},
					"map_iir": {
						"min": 1,
						"max": 9999
					},
					"talisman_tier": {
						"min": 1,
						"max": 9999
					},
					"alternate_art": {
						"option": "true"
					},
					"identified": {
						"option": "true"
					},
					"corrupted": {
						"option": "true"
					},
					"crafted": {
						"option": "true"
					},
					"enchanted": {
						"option": "true"
					}
				}
			},
			"trade_filters": {
				"disabled": false,
				"filters": {
					"account": {
						"input": "xxx_accountname_xxx"
					},
					"sale_type": {
						"option": "priced"
					},
					"price": {
						"min": 1,
						"max": 9999
					}
				}
			},
			"type_filters": {
				"filters": {
					"category": {
						"option": "weapon.twoaxe"
					},
					"rarity": {
						"option": "unique"
					}
				}
			}
		}
	},
	"sort": {
		"price": "asc"
	}
}

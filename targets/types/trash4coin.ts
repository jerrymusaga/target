/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/trash4coin.json`.
 */
export type Trash4coin = {
  "address": "5kV7LSifqj1xuMVXHnXSfZUDtB4GetiQBftK3TMLAgXF",
  "metadata": {
    "name": "trash4coin",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "addNftType",
      "discriminator": [
        112,
        88,
        212,
        95,
        85,
        124,
        25,
        199
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "nftConfig"
          ]
        },
        {
          "name": "nftConfig",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "uri",
          "type": "string"
        }
      ]
    },
    {
      "name": "createRedeemableToken",
      "discriminator": [
        11,
        233,
        169,
        30,
        60,
        237,
        248,
        192
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "redeemableMint",
          "writable": true,
          "signer": true
        },
        {
          "name": "redeemableTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "authority"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "redeemableMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "nftConfig"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "editRewardAmount",
      "discriminator": [
        204,
        3,
        255,
        101,
        12,
        98,
        79,
        137
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "nftConfig"
          ]
        },
        {
          "name": "nftConfig",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "nftTypeIndex",
          "type": "u8"
        },
        {
          "name": "newRewardAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "getUserInfo",
      "discriminator": [
        216,
        140,
        210,
        76,
        46,
        9,
        66,
        81
      ],
      "accounts": [
        {
          "name": "user",
          "signer": true
        },
        {
          "name": "nftMint"
        },
        {
          "name": "nftTokenAccount",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "nftMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "redeemableMint"
        },
        {
          "name": "userRedeemableTokenAccount",
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "redeemableMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        }
      ],
      "args": [],
      "returns": {
        "defined": {
          "name": "userInfo"
        }
      }
    },
    {
      "name": "increaseMaxNftTypes",
      "discriminator": [
        185,
        219,
        148,
        163,
        6,
        112,
        154,
        42
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "nftConfig"
          ]
        },
        {
          "name": "nftConfig",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "newMax",
          "type": "u8"
        }
      ]
    },
    {
      "name": "increaseTokenSupply",
      "discriminator": [
        2,
        192,
        104,
        90,
        64,
        184,
        77,
        77
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "redeemableMint",
          "writable": true
        },
        {
          "name": "redeemableTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "authority"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "redeemableMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "nftConfig"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true
        },
        {
          "name": "nftConfig",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "maxNftTypes",
          "type": "u8"
        }
      ]
    },
    {
      "name": "mintNft",
      "discriminator": [
        211,
        57,
        6,
        167,
        15,
        219,
        35,
        251
      ],
      "accounts": [
        {
          "name": "minter",
          "writable": true,
          "signer": true
        },
        {
          "name": "mint",
          "writable": true,
          "signer": true
        },
        {
          "name": "tokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "minter"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "mint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "metadata",
          "writable": true
        },
        {
          "name": "masterEdition",
          "writable": true
        },
        {
          "name": "nftConfig"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "tokenMetadataProgram"
        }
      ],
      "args": [
        {
          "name": "nftTypeIndex",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "redeemAndBurnNft",
      "discriminator": [
        142,
        90,
        189,
        152,
        211,
        59,
        42,
        160
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "nftMint",
          "writable": true
        },
        {
          "name": "nftTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "nftMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "redeemableMint",
          "writable": true
        },
        {
          "name": "redeemableTokenAccount",
          "writable": true
        },
        {
          "name": "userRedeemableTokenAccount",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "account",
                "path": "user"
              },
              {
                "kind": "const",
                "value": [
                  6,
                  221,
                  246,
                  225,
                  215,
                  101,
                  161,
                  147,
                  217,
                  203,
                  225,
                  70,
                  206,
                  235,
                  121,
                  172,
                  28,
                  180,
                  133,
                  237,
                  95,
                  91,
                  55,
                  145,
                  58,
                  140,
                  245,
                  133,
                  126,
                  255,
                  0,
                  169
                ]
              },
              {
                "kind": "account",
                "path": "redeemableMint"
              }
            ],
            "program": {
              "kind": "const",
              "value": [
                140,
                151,
                37,
                143,
                78,
                36,
                137,
                241,
                187,
                61,
                16,
                41,
                20,
                142,
                13,
                131,
                11,
                90,
                19,
                153,
                218,
                255,
                16,
                132,
                4,
                142,
                123,
                216,
                219,
                233,
                248,
                89
              ]
            }
          }
        },
        {
          "name": "authority",
          "writable": true
        },
        {
          "name": "metadata"
        },
        {
          "name": "nftConfig"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "associatedTokenProgram",
          "address": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "setRewardAmount",
      "discriminator": [
        163,
        135,
        106,
        255,
        240,
        184,
        184,
        92
      ],
      "accounts": [
        {
          "name": "authority",
          "writable": true,
          "signer": true,
          "relations": [
            "nftConfig"
          ]
        },
        {
          "name": "nftConfig",
          "writable": true
        }
      ],
      "args": [
        {
          "name": "nftTypeIndex",
          "type": "u8"
        },
        {
          "name": "rewardAmount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "nftConfig",
      "discriminator": [
        92,
        106,
        11,
        162,
        250,
        188,
        6,
        90
      ]
    }
  ],
  "events": [
    {
      "name": "addNftTypeEvent",
      "discriminator": [
        142,
        79,
        190,
        11,
        164,
        255,
        89,
        37
      ]
    },
    {
      "name": "createRedeemableTokenEvent",
      "discriminator": [
        168,
        223,
        154,
        155,
        214,
        95,
        49,
        157
      ]
    },
    {
      "name": "editRewardAmountEvent",
      "discriminator": [
        213,
        50,
        130,
        36,
        255,
        135,
        220,
        40
      ]
    },
    {
      "name": "increaseMaxNftTypesEvent",
      "discriminator": [
        82,
        82,
        49,
        147,
        45,
        235,
        156,
        225
      ]
    },
    {
      "name": "increaseTokenSupplyEvent",
      "discriminator": [
        201,
        214,
        219,
        254,
        78,
        47,
        155,
        246
      ]
    },
    {
      "name": "initializeEvent",
      "discriminator": [
        206,
        175,
        169,
        208,
        241,
        210,
        35,
        221
      ]
    },
    {
      "name": "mintNftEvent",
      "discriminator": [
        61,
        132,
        188,
        51,
        125,
        206,
        152,
        18
      ]
    },
    {
      "name": "redeemAndBurnNftEvent",
      "discriminator": [
        196,
        248,
        220,
        228,
        50,
        24,
        214,
        1
      ]
    },
    {
      "name": "setRewardAmountEvent",
      "discriminator": [
        228,
        124,
        67,
        188,
        245,
        26,
        237,
        64
      ]
    },
    {
      "name": "userInfoFetched",
      "discriminator": [
        8,
        51,
        186,
        135,
        49,
        210,
        40,
        141
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidNftType",
      "msg": "Invalid NFT type"
    },
    {
      "code": 6001,
      "name": "maxNftTypesReached",
      "msg": "Maximum number of NFT types reached"
    },
    {
      "code": 6002,
      "name": "rewardAmountNotSet",
      "msg": "Reward amount not set for this NFT type"
    },
    {
      "code": 6003,
      "name": "invalidMaxNftTypes",
      "msg": "Invalid maximum number of NFT types"
    },
    {
      "code": 6004,
      "name": "emptyName",
      "msg": "Empty name provided"
    },
    {
      "code": 6005,
      "name": "emptySymbol",
      "msg": "Empty symbol provided"
    },
    {
      "code": 6006,
      "name": "emptyUri",
      "msg": "Empty URI provided"
    },
    {
      "code": 6007,
      "name": "invalidRewardAmount",
      "msg": "Invalid reward amount"
    },
    {
      "code": 6008,
      "name": "invalidAmount",
      "msg": "Invalid amount"
    },
    {
      "code": 6009,
      "name": "invalidMetadata",
      "msg": "Invalid metadata"
    },
    {
      "code": 6010,
      "name": "unauthorizedAccess",
      "msg": "Unauthorized access"
    },
    {
      "code": 6011,
      "name": "invalidNewMaxNftTypes",
      "msg": "New maximum number of NFT types must be greater than the current maximum"
    },
    {
      "code": 6012,
      "name": "arithmeticOverflow",
      "msg": "Arithmetic overflow"
    }
  ],
  "types": [
    {
      "name": "addNftTypeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          }
        ]
      }
    },
    {
      "name": "createRedeemableTokenEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "editRewardAmountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftTypeIndex",
            "type": "u8"
          },
          {
            "name": "oldRewardAmount",
            "type": "u64"
          },
          {
            "name": "newRewardAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "increaseMaxNftTypesEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "oldMax",
            "type": "u8"
          },
          {
            "name": "newMax",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "increaseTokenSupplyEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "initializeEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "maxNftTypes",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "mintNftEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "mint",
            "type": "pubkey"
          },
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "nftTypeIndex",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "nftConfig",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "pubkey"
          },
          {
            "name": "maxNftTypes",
            "type": "u8"
          },
          {
            "name": "nftTypes",
            "type": {
              "vec": {
                "defined": {
                  "name": "nftType"
                }
              }
            }
          }
        ]
      }
    },
    {
      "name": "nftType",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "symbol",
            "type": "string"
          },
          {
            "name": "uri",
            "type": "string"
          },
          {
            "name": "rewardAmount",
            "type": {
              "option": "u64"
            }
          }
        ]
      }
    },
    {
      "name": "redeemAndBurnNftEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "nftMint",
            "type": "pubkey"
          },
          {
            "name": "amountBurned",
            "type": "u64"
          },
          {
            "name": "rewardAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "setRewardAmountEvent",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftTypeIndex",
            "type": "u8"
          },
          {
            "name": "rewardAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userInfo",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftMint",
            "type": "pubkey"
          },
          {
            "name": "nftBalance",
            "type": "u64"
          },
          {
            "name": "redeemableBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userInfoFetched",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "nftMint",
            "type": "pubkey"
          },
          {
            "name": "nftBalance",
            "type": "u64"
          },
          {
            "name": "redeemableBalance",
            "type": "u64"
          }
        ]
      }
    }
  ]
};

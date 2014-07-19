(function (maps) {
    var proto = FullScreenMario.prototype.settings.maps.maps = {},
        mapName;
    
    for(mapName in maps) {
        if(maps.hasOwnProperty(mapName)) {
            proto[mapName] = maps[mapName];
        }
    }
})({
    "1-1": {
        "locations": [
              { "entry": "Plain" },
              { "entry": "PipeVertical" },
              { "area": 1 },
        ],
        "areas": [
            {
                "setting": "Overworld",
                "creation": [
                      { "location": 0 },
                      { "macro": "Pattern", "pattern": "BackRegular", "repeat": 5 },
                      { "macro": "Floor", "width": 552 },
                      { "thing": "Block", "x": 128, "y": 32 },
                      { "thing": "Brick", "x": 160, "y": 32 },
                      { "thing": "Block", "x": 168, "y": 32, "contents": "Mushroom" },
                      { "thing": "Goomba", "x": 176, "y": 8 },
                      { "thing": "Brick", "x": 176, "y": 32 },
                      { "thing": "Block", "x": 176, "y": 64 },
                      { "thing": "Block", "x": 184, "y": 32 },
                      { "thing": "Brick", "x": 192, "y": 32 },
                      { "macro": "Pipe", "x": 224, "height": 16 },
                      { "macro": "Pipe", "x": 304, "height": 24 },
                      { "macro": "Pipe", "x": 368, "height": 32 },
                      { "thing": "Goomba", "x": 340, "y": 8 },
                      { "macro": "Pipe", "x": 368, "height": 32 },
                      { "thing": "Goomba", "x": 412, "y": 8 },
                      { "thing": "Goomba", "x": 422, "y": 8 },
                      { "macro": "Pipe", "x": 456, "height": 32, "transport": 2 },
                      { "thing": "Block", "x": 512, "y": 40, "contents": "Mushroom1Up", "hidden": true },
                      { "macro": "Floor", "x": 568, "width": 120 },
                      { "thing": "Brick", "x": 616, "y": 32 },
                      { "thing": "Block", "x": 624, "y": 32, "contents": "Mushroom" },
                      { "thing": "Brick", "x": 632, "y": 32 },
                      { "thing": "Brick", "x": 640, "y": 32 },
                      { "thing": "Goomba", "x": 640, "y": 72 },
                      { "thing": "Brick", "x": 648, "y": 64 },
                      { "thing": "Brick", "x": 656, "y": 64 },
                      { "thing": "Goomba", "x": 656, "y": 72 },
                      { "macro": "Fill", "thing": "Brick", "x": 664, "y": 64, "xnum": 5, "xwidth": 8 },
                      { "macro": "Floor", "x": 712, "width": 512 }, 
                      { "macro": "Fill", "thing": "Brick", "x": 728, "y": 64, "xnum": 3, "xwidth": 8 },
                      { "thing": "Brick", "x": 752, "y": 32, "contents": "Coin" },
                      { "thing": "Block", "x": 752, "y": 64 },
                      { "thing": "Goomba", "x": 776, "y": 8 },
                      { "thing": "Goomba", "x": 788, "y": 8 },
                      { "thing": "Brick", "x": 800, "y": 32 },
                      { "thing": "Brick", "x": 808, "y": 32, "contents": "Star" },
                      { "thing": "Block", "x": 848, "y": 32 },
                      { "thing": "Koopa", "x": 856, "y": 12 },
                      { "thing": "Block", "x": 872, "y": 32 },
                      { "thing": "Block", "x": 872, "y": 64, "contents": "Mushroom" },
                      { "thing": "Block", "x": 896, "y": 32 },
                      { "thing": "Goomba", "x": 912, "y": 8 },
                      { "thing": "Goomba", "x": 924, "y": 8 },
                      { "thing": "Brick", "x": 944, "y": 32 },
                      { "macro": "Fill", "thing": "Brick", "x": 968, "y": 64, "xnum": 3, "xwidth": 8 },
                      { "macro": "Fill", "thing": "Goomba", "x": 992, "y": 8, "xnum": 4, "xwidth": 16 },
                      { "thing": "Brick", "x": 1024, "y": 64 },
                      { "thing": "Brick", "x": 1032, "y": 32 },
                      { "thing": "Block", "x": 1032, "y": 64 },
                      { "thing": "Brick", "x": 1040, "y": 32 },
                      { "thing": "Block", "x": 1040, "y": 64 },
                      { "thing": "Brick", "x": 1048, "y": 64 },
                      { "thing": "Stone", "x": 1072, "y": 8 },
                      { "thing": "Stone", "x": 1080, "y": 16, "height": 16 },
                      { "thing": "Stone", "x": 1088, "y": 24, "height": 24 },
                      { "thing": "Stone", "x": 1096, "y": 32, "height": 32 },
                      { "thing": "Stone", "x": 1120, "y": 32, "height": 32 },
                      { "thing": "Stone", "x": 1128, "y": 24, "height": 24 },
                      { "thing": "Stone", "x": 1136, "y": 16, "height": 16 },
                      { "thing": "Stone", "x": 1144, "y": 8 },
                      { "thing": "Stone", "x": 1184, "y": 8 },
                      { "thing": "Stone", "x": 1192, "y": 16, "height": 16 },
                      { "thing": "Stone", "x": 1200, "y": 24, "height": 24 },
                      { "thing": "Stone", "x": 1208, "y": 32, "height": 32 },
                      { "thing": "Stone", "x": 1216, "y": 32, "height": 32 },
                      { "macro": "Floor", "x": 1240, "width": 656 },
                      { "thing": "Stone", "x": 1240, "y": 32, "height": 32 },
                      { "thing": "Stone", "x": 1248, "y": 24, "height": 24 },
                      { "thing": "Stone", "x": 1256, "y": 16, "height": 16 },
                      { "thing": "Stone", "x": 1264, "y": 8 },
                      { "macro": "Pipe", "x": 1304, "height": 16, "transport": 1 },
                      { "thing": "Brick", "x": 1344, "y": 32 },
                      { "thing": "Brick", "x": 1352, "y": 32 },
                      { "thing": "Block", "x": 1360, "y": 32 },
                      { "thing": "Brick", "x": 1368, "y": 32 },
                      { "thing": "Goomba", "x": 1392, "y": 8 },
                      { "thing": "Goomba", "x": 1404, "y": 8 },
                      { "macro": "Pipe", "x": 1432, "height": 16 },
                      { "thing": "Stone", "x": 1448, "y": 8 },
                      { "thing": "Stone", "x": 1456, "y": 16, "height": 16 },
                      { "thing": "Stone", "x": 1464, "y": 24, "height": 24 },
                      { "thing": "Stone", "x": 1472, "y": 32, "height": 32 },
                      { "thing": "Stone", "x": 1480, "y": 40, "height": 40 },
                      { "thing": "Stone", "x": 1488, "y": 48, "height": 48 },
                      { "thing": "Stone", "x": 1496, "y": 56, "height": 56 },
                      { "thing": "Stone", "x": 1504, "y": 64, "height": 64, "width": 16 },
                      { "macro": "EndOutsideCastle", "x": 1584, "y": 0 }
                ]
            },
            {
                "setting": "Underworld",
                "creation": [
                    { "location": 2 },
                    { "macro": "Ceiling", "x": 32, "width": 56 },
                    { "macro": "Floor", "x": 0, "y": 0, "width": 136 },
                    { "macro": "Fill", "thing": "Brick", "x": 0, "y": 8, "ynum": 11, "yheight": 8 },
                    { "macro": "Fill", "thing": "Brick", "x": 32, "y": 8, "xnum": 7, "ynum": 3, "xwidth": 8, "yheight": 8 },
                    { "macro": "Fill", "thing": "Coin", "x": 33, "y": 31, "xnum": 7, "ynum": 2, "xwidth": 8, "yheight": 16 },
                    { "macro": "Fill", "thing": "Coin", "x": 41, "y": 63, "xnum": 5, "ynum": 1, "xwidth": 8 },
                    { "thing": "PipeHorizontal", "x": 104, "y": 16, "transport": 1, "width": 16 },
                    { "thing": "PipeVertical", "x": 120, "y": 88, "height": 88 }
                ]
            }
        ]
    },
    "1-2": {
        "locations": [
            { "entry": "Walking" },
            { "area": 1 },
            { "area": 2 },
            { "area": 1, "entry": "PipeVertical" },
            { "area": 3, "entry": "PipeVertical" },
            { "area": 1 }
        ],
        "areas": [
            {
                "setting": "Overworld",
                "creation": [
                    { "location": 0 },
                    { "macro": "Pattern", "pattern": "BackCloud", "y": 4, "repeat": 1 },
                    { "macro": "Floor", "width": 192 },
                    { "thing": "PipeHorizontal", "x": 80, "y": 16, "transport": 1 },
                    { "macro": "Pipe", "x": 96, "height": 32 }
                ]
            },
            {
                "setting": "Underworld",
                "creation": [
                    { "location": 1 },
                    { "macro": "Floor", "width": 640 },
                    { "macro": "Fill", "thing": "Brick", "y": 8, "ynum": 11 },
                    { "macro": "Ceiling", "x": 48, "width": 664 },
                    { "thing": "Block", "x": 80, "y": 32, "contents": "Mushroom" },
                    { "macro": "Fill", "thing": "Block", "x": 88, "y": 32, "xnum": 4 },
                    { "thing": "Goomba", "x": 128, "y": 8 },
                    { "thing": "Stone", "x": 136, "y": 8 },
                    { "thing": "Goomba", "x": 136, "y": 16 },
                    { "thing": "Stone", "x": 152, "y": 16, "height": 16 },
                    { "thing": "Stone", "x": 168, "y": 24, "height": 24 },
                    { "thing": "Stone", "x": 184, "y": 32, "height": 32 },
                    { "thing": "Stone", "x": 200, "y": 32, "height": 32 },
                    { "thing": "Stone", "x": 216, "y": 24, "height": 24 },
                    { "thing": "Goomba", "x": 232, "y": 8 },
                    { "thing": "Brick", "x": 232, "y": 40, "contents": "Coin" },
                    { "thing": "Stone", "x": 248, "y": 24, "height": 24 },
                    { "thing": "Stone", "x": 264, "y": 16, "height": 16 },
                    { "macro": "Fill", "thing": "Brick", "x": 312, "y": 32, "ynum": 3 },
                    { "thing": "Brick", "x": 320, "y": 32 },
                    { "thing": "Coin", "x": 321, "y": 39 },
                    { "macro": "Fill", "thing": "Brick", "x": 328, "y": 32, "ynum": 3 },
                    { "macro": "Fill", "thing": "Coin", "x": 330, "y": 60, "xnum": 4 },
                    { "thing": "Brick", "x": 336, "y": 48 },
                    { "thing": "Brick", "x": 344, "y": 48 },
                    { "macro": "Fill", "thing": "Koopa", "x": 352, "y": 12, "xnum": 2, "xwidth": 12 },
                    { "macro": "Fill", "thing": "Brick", "x": 352, "y": 32, "ynum": 3 },
                    { "thing": "Brick", "x": 360, "y": 32 },
                    { "thing": "Coin", "x": 361, "y": 39 },
                    { "macro": "Fill", "thing": "Brick", "x": 368, "y": 32, "ynum": 2 },
                    { "thing": "Brick", "x": 368, "y": 48, "contents": "Star" },
                    { "macro": "Fill", "thing": "Brick", "x": 416, "y": 32, "xnum": 2, "ynum": 5 },
                    { "macro": "Fill", "thing": "Brick", "x": 432, "y": 16, "xnum": 2, "ynum": 3 },
                    { "macro": "Fill", "thing": "Brick", "x": 432, "y": 72, "xnum": 2, "ynum": 2 },
                    { "macro": "Fill", "thing": "Brick", "x": 464, "y": 32, "xnum": 4, "ynum": 1 },
                    { "macro": "Fill", "thing": "Brick", "x": 464, "y": 72, "xnum": 5, "ynum": 2 },
                    { "macro": "Fill", "thing": "Coin", "x": 465, "y": 39, "xnum": 4 },
                    { "thing": "Koopa", "x": 472, "y": 12 },
                    { "macro": "Fill", "thing": "Brick", "x": 496, "y": 32, "xnum": 2, "ynum": 7 },
                    { "thing": "Goomba", "x": 494, "y": 8 },
                    { "thing": "Goomba", "x": 510, "y": 8 },
                    { "macro": "Fill", "thing": "Brick", "x": 528, "y": 72, "xnum": 4, "ynum": 2 },
                    { "macro": "Fill", "thing": "Brick", "x": 536, "y": 32, "ynum": 5 },
                    { "macro": "Fill", "thing": "Brick", "x": 544, "y": 32, "xnum": 2 },
                    { "thing": "Coin", "x": 545, "y": 39 },
                    { "thing": "Brick", "x": 552, "y": 40, "contents": "Mushroom" },
                    { "macro": "Fill", "thing": "Brick", "x": 576, "y": 32, "xnum": 2 },
                    { "thing": "Brick", "x": 576, "y": 40 },
                    { "macro": "Fill", "thing": "Brick", "x": 576, "y": 48, "xnum": 2, "ynum": 3 },
                    { "thing": "Brick", "x": 584, "y": 40, "contents": "Coin" },
                    { "thing": "Goomba", "x": 584, "y": 72 },
                    { "macro": "Fill", "thing": "Brick", "x": 608, "y": 32, "xnum": 4 },
                    { "macro": "Fill", "thing": "Goomba", "x": 608, "y": 40, "xnum": 2, "xwidth": 12 },
                    { "macro": "Fill", "thing": "Brick", "x": 608, "y": 72, "xnum": 4, "ynum": 2 },
                    { "macro": "Floor", "x": 664, "width": 272 },
                    { "macro": "Fill", "thing": "Brick", "x": 672, "y": 40, "xnum": 6, "ynum": 2 },
                    { "macro": "Fill", "thing": "Coin", "x": 674, "y": 64, "xnum": 6 },
                    { "thing": "Brick", "x": 712, "y": 88, "contents": "Mushroom1Up" },
                    { "macro": "Ceiling", "x": 720, "width": 360 },
                    { "macro": "Fill", "thing": "Goomba", "x": 768, "y": 8, "xnum": 3, "xwidth": 12 },
                    { "macro": "Pipe", "x": 800, "height": 24, "pirhana": true, "transport": 2 },
                    { "macro": "Pipe", "x": 848, "height": 32, "pirhana": true },
                    { "thing": "Goomba", "x": 872, "y": 8 },
                    { "macro": "Pipe", "x": 896, "height": 16, "pirhana": true, "entrance": 3 },
                    { "macro": "Floor", "x": 952, "width": 16 },
                    { "macro": "Fill", "thing": "Brick", "x": 952, "y": 8, "xnum": 2, "ynum": 3 },
                    { "macro": "Floor", "x": 984, "width": 96 },
                    { "thing": "Stone", "x": 1040, "y": 8 },
                    { "thing": "Stone", "x": 1048, "y": 16, "height": 16 },
                    { "thing": "Stone", "x": 1056, "y": 24, "height": 24 },
                    { "thing": "Goomba", "x": 1056, "y": 32 },
                    { "thing": "Stone", "x": 1064, "y": 32, "height": 32 },
                    { "thing": "Goomba", "x": 1064, "y": 48 },
                    { "thing": "Stone", "x": 1072, "y": 32, "height": 32 },
                    { "macro": "PlatformGenerator", "x": 1096, "width": 6 },
                    { "macro": "Floor", "x": 1144, "width": 64 },
                    { "macro": "Fill", "thing": "Brick", "x": 1144, "y": 40, "xnum": 5, "ynum": 1 },
                    { "thing": "Koopa", "x": 1152, "y": 12, "smart": true },
                    { "thing": "Brick", "x": 1184, "y": 40, "contents": "Mushroom" },
                    { "macro": "PlatformGenerator", "x": 1224, "width": 6, "direction": -1 },
                    { "macro": "Floor", "x": 1266,  "width": 256 },
                    { "macro": "Fill", "thing": "Brick", "x": 1266, "y": 8, "xnum": 17, "ynum": 3 },
                    { "thing": "PipeHorizontal", "x": 1314, "y": 40, "transport": 4 },
                    { "thing": "PipeVertical", "x": 1330, "y": 88, "height": 64 },
                    { "macro": "Ceiling", "x": 1274, "width": 56 },
                    { "macro": "Fill", "thing": "Brick", "x": 1346, "y": 32, "xnum": 7, "ynum": 7 },
                    { "macro": "Ceiling", "x": 1346, "width": 136 },
                    { "thing": "ScrollBlocker", "x": 1346 },
                    { "macro": "WarpWorld", "x": 1400, "warps": [4, 3, 2] },
                    { "macro": "Fill", "thing": "Brick", "x": 1506, "y": 8, "xnum": 2, "ynum": 11 }
                ]
            },
            {
                "setting": "Underworld",
                "creation": [
                    { "location": 2 },
                    { "macro": "Floor", "width": 136 },
                    { "macro": "Fill", "thing": "Brick", "y": 8, "ynum": 11 },
                    { "macro": "Fill", "thing": "Brick", "x": 24, "y": 32, "xnum": 9 },
                    { "macro": "Fill", "thing": "Brick", "x": 24, "y": 64, "xnum": 10, "ynum": 4 },
                    { "macro": "Fill", "thing": "Coin", "x": 25, "y": 7, "xnum": 9 },
                    { "macro": "Fill", "thing": "Coin", "x": 33, "y": 39, "xnum": 8 },
                    { "thing": "Brick", "x": 96, "y": 32, "contents": "Coin" },
                    { "macro": "Fill", "thing": "Brick", "x": 104, "y": 24, "xnum": 2, "ynum": 9 },
                    { "thing": "PipeHorizontal", "x": 104, "y": 16, "transport": 3 },
                    { "thing": "PipeVertical", "x": 120, "y": 100, "height": 100 }
                ]
            },
            {
                "setting": "Overworld",
                "creation": [
                    { "location": 4 },
                    { "macro": "Floor", "width": 464 },
                    { "macro": "Pipe", "height": 16, "pirhana": true, "entrance": 4 },
                    { "macro": "Pattern", "pattern": "BackRegular", "x": 104, },
                    { "thing": "Stone", "x": 16, "y": 8 },
                    { "thing": "Stone", "x": 24, "y": 16, "height": 16 },
                    { "thing": "Stone", "x": 32, "y": 24, "height": 24 },
                    { "thing": "Stone", "x": 40, "y": 32, "height": 32 },
                    { "thing": "Stone", "x": 48, "y": 40, "height": 40 },
                    { "thing": "Stone", "x": 56, "y": 48, "height": 48 },
                    { "thing": "Stone", "x": 64, "y": 56, "height": 56 },
                    { "thing": "Stone", "x": 72, "y": 64, "height": 64 },
                    { "macro": "EndOutsideCastle", "x": 148 }
                ]
            }
        ]
    },
    "1-3": {
        "time": 300,
        "locations": [
            { "entry": "Plain" }
        ],
        "areas": [
            {
                "setting": "Overworld",
                "creation": [
                    { "location": 0 },
                    { "macro": "Pattern", "pattern": "BackCloud", "x": 0, "y": 4, "repeat": 5 },
                    { "macro": "Floor", "x": 0, "y": 0, "width": 128 },
                    { "macro": "Tree", "x": 144, "y": 8, "width": 32 },
                    { "macro": "Tree", "x": 192, "y": 32, "width": 64 },
                    { "macro": "Tree", "x": 208, "y": 64, "width": 40 },
                    { "macro": "Fill", "thing": "Coin", "x": 217, "y": 71, "xnum": 3, "xwidth": 8 },
                    { "thing": "Koopa", "x": 240, "y": 76, "smart": true },
                    { "macro": "Tree", "x": 256, "y": 8, "width": 24 },
                    { "thing": "Coin", "x": 266, "y": 15 },
                    { "macro": "Tree", "x": 280, "y": 40, "width": 40 },
                    { "macro": "Fill", "thing": "Coin", "x": 297, "y": 87, "xnum": 2, "xwidth": 8 },
                    { "macro": "Tree", "x": 320, "y": 72, "width": 56 },
                    { "macro": "Fill", "thing": "Goomba", "x": 352, "y": 80, "xnum": 2, "xwidth": 16 },
                    { "macro": "Tree", "x": 400, "width": 32 },
                    { "macro": "Fill", "thing": "Coin", "x": 402, "y": 55, "xnum": 2, "xwidth": 8 },
                    { "thing": "Platform", "x": 440, "y": 56, "width": 24, "floating": true, "begin": -4, "end": 56 },
                    { "macro": "Tree", "x": 472, "width": 40 },
                    { "thing": "Block", "x": 472, "y": 24, "contents": "Mushroom" },
                    { "macro": "Tree", "x": 480, "y": 64, "width": 32 },
                    { "macro": "Fill", "thing": "Coin", "x": 482, "y": 71, "xnum": 4, "xwidth": 8 },
                    { "macro": "Tree", "x": 520, "width": 40 },
                    { "macro": "Tree", "x": 560, "y": 32, "width": 24 },
                    { "thing": "Koopa", "x": 592, "y": 76, "smart": true, "jumping": true, "floating": true, "begin": 16, "end": 88 },
                    { "macro": "Tree", "x": 608, "y": 56, "width": 48 },
                    { "thing": "Goomba", "x": 640, "y": 64 },
                    { "macro": "Fill", "thing": "Coin", "x": 681, "y": 63, "xnum": 2, "xwidth": 8 },
                    { "thing": "Platform", "x": 688, "y": 40, "width": 24, "sliding": true, "begin": 660, "end": 720 },
                    { "macro": "Fill", "thing": "Coin", "x": 745, "y": 71, "xnum": 2, "xwidth": 8 },
                    { "thing": "Platform", "x": 752, "y": 32, "width": 24, "sliding": true, "begin": 770, "end": 776 },
                    { "macro": "Fill", "thing": "Coin", "x": 777, "y": 71, "xnum": 2, "xwidth": 8 },
                    { "macro": "Tree", "x": 784, "y": 16, "width": 32 },
                    { "macro": "Tree", "x": 832, "y": 48, "width": 64 },
                    { "thing": "Koopa", "x": 880, "y": 60, "smart": true },
                    { "macro": "Tree", "x": 904, "width": 24 },
                    { "macro": "Fill", "thing": "Coin", "x": 906, "y": 7, "xnum": 3, "xwidth": 8 },
                    { "thing": "Koopa", "x": 912, "y": 68, "smart": true, "jumping": true, "floating": true, "begin": 4, "end": 76 },
                    { "macro": "Tree", "x": 928, "y": 32, "width": 32 },
                    { "macro": "Fill", "thing": "Coin", "x": 963, "y": 63, "xnum": 2, "xwidth": 8 },
                    { "macro": "Tree", "x": 976, "y": 32, "width": 32 },
                    { "macro": "Floor", "x": 1032, "width": 368 },
                    { "thing": "Platform", "x": 1048, "y": 56, "width": 24, "sliding": true, "begin": 1008, "end": 1076 },
                    { "thing": "Koopa", "x": 1064, "y": 12, "smart": true },
                    { "thing": "Stone", "x": 1104, "y": 32, "width": 16, "height": 32 },
                    { "thing": "Stone", "x": 1120, "y": 48, "width": 16, "height": 48 },
                    { "thing": "Stone", "x": 1136, "y": 64, "width": 16, "height": 64 },
                    { "macro": "EndOutsideCastle", "x": 1220, "big": true, "wallwidth": 88 }
                ]
            }
        ]
    }
});
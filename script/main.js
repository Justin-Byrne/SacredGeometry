"use strict";

////////////////////////////////////////////////////////////
////////        GLOBAL VARIABLES                    ////////
////////////////////////////////////////////////////////////

/**
 * config                   {Object}                    Object literal variables
 * @var                     {DOM Element} canvas        DOM element
 * @var                     {DOM Element} context       CanvasRenderingContext2D for drawing surface on the <canvas> element
 * @var                     {Object} domWindow          DOM window width, height, center x-coordinate, and center y-coordinate
 * @var                     {Object} about              General Information concerning  
 */
const config = 
{
    canvas    : document.getElementById("canvas"),
    context   : document.getElementById("canvas").getContext("2d"),
    canvas2   : document.getElementById("canvas-underlay"),
    context2  : document.getElementById("canvas-underlay").getContext("2d"),
    domWindow : 
    {
        width:    window.innerWidth  - 18,
        height:   window.innerHeight - 4,
        xCenter: (window.innerWidth  / 2),
        yCenter: (window.innerHeight / 2),
    },
    circle : 
    {
        centerDot: false,
        stroke:    true
    },
    debug : true,
    about : 
    {
        Author:    'Justin Don Byrne',
        Created:   'September, 11 2021',
        Library:   'Sacred Geometry Sketch Pad',
        Updated:   'December, 20 2021',
        Version:   '1.11.55',
        Copyright: 'Copyright (c) 2021 Justin Don Byrne',
        Window:    false
    }
}

const padding      = 10;
const zonaPolusada = config.domWindow.height / 2 - padding;
const magNo        = 0.578;                                

const spirit = 
{
    radius : zonaPolusada / 5
}

const matrix = 
[
    [       // Spirit
        [
            null,                                   // x    (00)
            null                                    // y
        ]
    ],[     // 1st Cycle | Genesis Pattern
        [
            null,                                   // x    (1) - (01) 
            - (spirit.radius)                       // y
        ],[
            - (spirit.radius / magNo) / 2,          // x    (2) - (02) 
            - (spirit.radius / 2)                   // y
        ],[
            - (spirit.radius / magNo) / 2,          // x    (3) - (03) 
            spirit.radius / 2                       // y
        ],[
            null,                                   // x    (4) - (04) 
            spirit.radius                           // y
        ],[
            (spirit.radius / magNo) / 2,            // x    (5) - (05) 
            spirit.radius / 2                       // y
        ],[
            (spirit.radius / magNo) / 2,            // x    (6) - (06) 
            - (spirit.radius / 2)                   // y
        ]
    ],[     // 2nd Rotation | Egg of Life   
        [
            - (spirit.radius / magNo) / 2,          // x    (1) - (07)
            - (spirit.radius * 1.5),                // y
        ],[
            - (spirit.radius / magNo),              // x    (2) - (08)
            null,                                   // y
        ],[
            - (spirit.radius / magNo) / 2,          // x    (3) - (09)
            spirit.radius * 1.5,                    // y
        ],[
            (spirit.radius / magNo) / 2,            // x    (4) - (10)
            spirit.radius * 1.5,                    // y
        ],[
            spirit.radius / magNo,                  // x    (5) - (11)
            null,                                   // y
        ],[
            (spirit.radius / magNo) / 2,            // x    (6) - (12)
            - (spirit.radius * 1.5),                // y
        ]
    ],[     // 3rd Rotation
        [
            null,                                   // x    (1) - (13)
            - (spirit.radius * 2),                  // y
        ],[    
            - (spirit.radius / magNo),              // x    (2) - (14)
            - spirit.radius,                        // y
        ],[    
            - (spirit.radius / magNo),              // x    (3) - (15)
            spirit.radius,                          // y
        ],[    
            null,                                   // x    (4) - (16)
            spirit.radius * 2,                      // y
        ],[    
            spirit.radius / magNo,                  // x    (5) - (17)
            spirit.radius,                          // y
        ],[    
            spirit.radius / magNo,                  // x    (6) - (18)
            - spirit.radius,                        // y
        ]
    ],[     // 4th Rotation
        [
            null,                                   // x    (1) - (19)
            - (spirit.radius * 3),                  // y    
        ],[
            - (spirit.radius / magNo) * 1.5,        // x    (2) - (20)
            - (spirit.radius * 1.5),                // y    
        ],[
            - (spirit.radius / magNo) * 1.5,        // x    (3) - (21)
            spirit.radius * 1.5,                    // y    
        ],[
            null,                                   // x    (4) - (22)
            spirit.radius * 3,                      // y    
        ],[
            (spirit.radius / magNo) * 1.5,          // x    (5) - (23)
            spirit.radius * 1.5,                    // y    
        ],[
            (spirit.radius / magNo) * 1.5,          // x    (6) - (24)
            - (spirit.radius * 1.5),                // y    
        ]
    ],[     // 5th Rotation
        [
            - (spirit.radius / magNo) / 2,          // x    (1) - (25)
            - (spirit.radius * 2.5),                // y    
        ],[
            - (spirit.radius / magNo) * 1.5,        // x    (2) - (26)
            - (spirit.radius / 2),                  // y    
        ],[
            - (spirit.radius / magNo),              // x    (3) - (27)
            spirit.radius * 2,                      // y    
        ],[
            (spirit.radius / magNo) / 2,            // x    (4) - (28)
            spirit.radius * 2.5,                    // y    
        ],[
            (spirit.radius / magNo) * 1.5,          // x    (5) - (29)
            spirit.radius / 2,                      // y    
        ],[
            spirit.radius / magNo,                  // x    (6) - (30)
            - (spirit.radius * 2),                  // y    
        ]
    ],[     // 6th Rotation
        [
            - (spirit.radius / magNo),              // x    (1) - (31)
            - (spirit.radius * 2),                  // y    
        ],[
            - (spirit.radius / magNo) * 1.5,        // x    (2) - (32)
            spirit.radius / 2,                      // y    
        ],[
            - (spirit.radius / magNo) / 2,          // x    (3) - (33)
            spirit.radius * 2.5,                    // y    
        ],[
            spirit.radius / magNo,                  // x    (4) - (34)
            spirit.radius * 2,                      // y    
        ],[
            (spirit.radius / magNo) * 1.5,          // x    (5) - (35)
            - (spirit.radius / 2),                  // y    
        ],[
            (spirit.radius / magNo) / 2,            // x    (6) - (36)
            - (spirit.radius * 2.5),                // y    
        ]
    ],[     // 7th Rotation
        [
            null,                                   // x    (1) - (37)
            - (spirit.radius * 4),                  // y    
        ],[
            - (spirit.radius / magNo) * 2,          // x    (2) - (38)
            - (spirit.radius * 2),                  // y    
        ],[
            - (spirit.radius / magNo) * 2,          // x    (3) - (39)
            spirit.radius * 2,                      // y    
        ],[
            null,                                   // x    (4) - (40)
            spirit.radius * 4,                      // y    
        ],[
            (spirit.radius / magNo) * 2,            // x    (5) - (41)
            spirit.radius * 2,                      // y    
        ],[
            (spirit.radius / magNo) * 2,            // x    (6) - (42)
            - (spirit.radius * 2),                  // y    
        ]
    ],[     // 8th Rotation
        [
            - (spirit.radius / magNo) / 2,          // x    (1) - (43)
            - (spirit.radius * 3.5),                // y    
        ],[
            - (spirit.radius / magNo) * 2,          // x    (2) - (44)
            - (spirit.radius),                      // y    
        ],[
            - (spirit.radius / magNo) * 1.5,        // x    (3) - (45)
            spirit.radius * 2.5,                    // y    
        ],[
            (spirit.radius / magNo) / 2,            // x    (4) - (46)
            spirit.radius * 3.5,                    // y    
        ],[
            (spirit.radius / magNo) * 2,            // x    (5) - (47)
            spirit.radius,                          // y    
        ],[
            (spirit.radius / magNo) * 1.5,          // x    (6) - (48)
            - (spirit.radius * 2.5),                // y    
        ]
    ],[     // 9th Rotation
        [
            - (spirit.radius / magNo),              // x    (1) - (49)
            - (spirit.radius * 3),                  // y    
        ],[
            - (spirit.radius / magNo) * 2,          // x    (2) - (50)
            null,                                   // y    
        ],[
            - (spirit.radius / magNo),              // x    (3) - (60)
            spirit.radius * 3,                      // y    
        ],[
            (spirit.radius / magNo),                // x    (4) - (70)
            spirit.radius * 3,                      // y    
        ],[
            (spirit.radius / magNo) * 2,            // x    (5) - (71)
            null,                                   // y    
        ],[
            spirit.radius / magNo,                  // x    (6) - (72)
            - (spirit.radius * 3),                  // y    
        ]
    ],[     // 10th Rotation
        [
            - (spirit.radius / magNo) * 1.5,        // x    (1) - (73)
            - (spirit.radius * 2.5),                // y    
        ],[
            - (spirit.radius / magNo) * 2,          // x    (2) - (74)
            spirit.radius,                          // y    
        ],[
            - (spirit.radius / magNo) / 2,          // x    (3) - (75)
            spirit.radius * 3.5,                    // y    
        ],[
            (spirit.radius / magNo) * 1.5,          // x    (4) - (76)
            spirit.radius * 2.5,                    // y    
        ],[
            (spirit.radius / magNo) * 2,            // x    (5) - (77)
            - (spirit.radius),                      // y    
        ],[
            (spirit.radius / magNo) / 2,            // x    (6) - (78)
            - (spirit.radius * 3.5),                // y    
        ]
    ]
];

const patterns =
[
    {   // Vesica Pisces            0
        'circle': [
            [0, 0],
            [1, 0]
        ],
        'hexagon':  [],
        'line': [
            [480, 472, 480, 472],
            [480, 380, 480, 380],
            [559.5847750865051, 426, 480, 380],
            [480, 380, 400.4152249134948, 426],
            [400.4152249134948, 426, 480, 472],
            [480, 472, 559.5847750865051, 426],
            [480, 380, 480, 472],
            [400.4152249134948, 426, 559.5847750865051, 426]
        ],
        'triangle': []
    },
    {   // Seed of Life             1
        'circle': [
            [0, 0],
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5]
        ],
        'hexagon':  [],
        'line':     [],
        'triangle': []
    },
    {   // Fruit of Life            2
        'circle': [
            [0, 0],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4],
            [3, 5],
            [7, 0],
            [7, 1],
            [7, 2],
            [7, 3],
            [7, 4],
            [7, 5]
        ],
        'hexagon':  [],
        'line':     [],
        'triangle': []
    },
    {   // Flower of Life           3
        'circle': [
            [0, 0],
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [1, 4],
            [1, 5],
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [2, 4],
            [2, 5],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4],
            [3, 5]
        ],
        'hexagon':  [],
        'line':     [],
        'triangle': []
    },
    {   // Ocosahedron              4
        'circle':   [],
        'hexagon':  [ "7" ],
        'line':     [
            [480, 104, 161.66089965397924, 656],
            [161.66089965397924, 656, 798.3391003460208, 656],
            [798.3391003460208, 656, 480, 104],
            [161.66089965397924, 288, 320.8304498269896, 380],
            [320.8304498269896, 380, 639.1695501730104, 380],
            [639.1695501730104, 380, 480, 656],
            [480, 656, 320.8304498269896, 380],
            [639.1695501730104, 380, 798.3391003460208, 288],
            [480, 656, 480, 840]
        ],
        'triangle': []
    },
    {   // Metatron's Cube          5
        'circle':   [],
        'hexagon':  [],
        'line': [
            [480, 104, 161.66089965397924, 288],
            [161.66089965397924, 288, 161.66089965397924, 656],
            [161.66089965397924, 656, 480, 840],
            [480, 840, 798.3391003460208, 656],
            [798.3391003460208, 656, 798.3391003460208, 288],
            [798.3391003460208, 288, 480, 104],
            [480, 104, 161.66089965397924, 656],
            [161.66089965397924, 656, 798.3391003460208, 656],
            [798.3391003460208, 656, 480, 104],
            [161.66089965397924, 288, 798.3391003460208, 288],
            [798.3391003460208, 288, 480, 840],
            [480, 840, 161.66089965397924, 288],
            [480, 288, 320.8304498269896, 564],
            [320.8304498269896, 564, 639.1695501730104, 564],
            [639.1695501730104, 564, 480, 288],
            [320.8304498269896, 380, 639.1695501730104, 380],
            [639.1695501730104, 380, 480, 656],
            [480, 656, 320.8304498269896, 380],
            [480, 104, 320.8304498269896, 564],
            [480, 104, 639.1695501730104, 564],
            [480, 104, 480, 840],
            [320.8304498269896, 380, 480, 840],
            [480, 840, 639.1695501730104, 380],
            [161.66089965397924, 288, 798.3391003460208, 656],
            [798.3391003460208, 288, 161.66089965397924, 656],
            [161.66089965397924, 288, 639.1695501730104, 380],
            [161.66089965397924, 288, 480, 656],
            [798.3391003460208, 288, 320.8304498269896, 380],
            [798.3391003460208, 288, 480, 656],
            [161.66089965397924, 656, 480, 288],
            [798.3391003460208, 656, 480, 288],
            [161.66089965397924, 656, 639.1695501730104, 564],
            [798.3391003460208, 656, 320.8304498269896, 564]
        ],
        'triangle': []
    },
    {   // Hexagon Formation        6
        'circle': [
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
            [3, 4],
            [3, 5],
            [7, 0],
            [7, 1],
            [7, 2],
            [7, 3],
            [7, 4],
            [7, 5]
        ],
        'hexagon':  [ "3", "7" ],
        'line':     [
            [480, 288, 480, 288],
            [320.8304498269896, 380, 320.8304498269896, 380],
            [320.8304498269896, 564, 320.8304498269896, 564],
            [480, 656, 480, 656],
            [639.1695501730104, 564, 639.1695501730104, 564],
            [639.1695501730104, 380, 639.1695501730104, 380],
            [798.3391003460208, 288, 798.3391003460208, 288],
            [480, 104, 480, 104],
            [161.66089965397924, 288, 161.66089965397924, 288],
            [161.66089965397924, 656, 161.66089965397924, 656],
            [480, 840, 480, 840],
            [798.3391003460208, 656, 798.3391003460208, 656],
            [480, 288, 320.8304498269896, 564],
            [320.8304498269896, 564, 639.1695501730104, 564],
            [639.1695501730104, 564, 480, 288],
            [320.8304498269896, 380, 639.1695501730104, 380],
            [639.1695501730104, 380, 480, 656],
            [480, 656, 320.8304498269896, 380],
            [161.66089965397924, 288, 798.3391003460208, 288],
            [798.3391003460208, 288, 480, 840],
            [480, 840, 161.66089965397924, 288],
            [480, 104, 161.66089965397924, 656],
            [161.66089965397924, 656, 798.3391003460208, 656],
            [798.3391003460208, 656, 480, 104]
        ],
        'triangle': []
    },
    {   // Triangle Grid            7
        'circle':   [],
        'hexagon':  [],
        'line':     [
            [161.66089965397924, 656, 480, 104],
            [480, 104, 798.3391003460208, 656],
            [798.3391003460208, 656, 400.4152249134948, 242],
            [798.3391003460208, 656, 241.24567474048445, 518],
            [161.66089965397924, 656, 559.5847750865051, 242],
            [161.66089965397924, 656, 718.7543252595156, 518],
            [161.66089965397924, 288, 480, 840],
            [480, 840, 798.3391003460208, 288],
            [798.3391003460208, 288, 400.4152249134948, 702],
            [161.66089965397924, 656, 798.3391003460208, 288],
            [798.3391003460208, 656, 161.66089965397924, 288],
            [161.66089965397924, 288, 559.5847750865051, 702],
            [718.7543252595156, 426, 161.66089965397924, 288],
            [798.3391003460208, 288, 241.24567474048445, 426]
        ],
        'triangle': []
    },
    {   // Hexagonal Grid           8
        'circle':   [],
        'hexagon':  [ "7" ],
        'line':     [
            [480, 104, 480, 840],
            [559.5847750865051, 794, 559.5847750865051, 150],
            [639.1695501730104, 196, 639.1695501730104, 748],
            [718.7543252595156, 702, 718.7543252595156, 242],
            [400.4152249134948, 150, 400.4152249134948, 794],
            [320.8304498269896, 748, 320.8304498269896, 196],
            [241.24567474048445, 242, 241.24567474048445, 702],
            [161.66089965397924, 656, 798.3391003460208, 656],
            [798.3391003460208, 564, 161.66089965397924, 564],
            [161.66089965397924, 472, 798.3391003460208, 472],
            [798.3391003460208, 380, 161.66089965397924, 380],
            [161.66089965397924, 288, 798.3391003460208, 288],
            [639.1695501730104, 196, 320.8304498269896, 196],
            [639.1695501730104, 748, 320.8304498269896, 748],
            [161.66089965397924, 656, 798.3391003460208, 288],
            [718.7543252595156, 242, 161.66089965397924, 564],
            [161.66089965397924, 472, 639.1695501730104, 196],
            [559.5847750865051, 150, 161.66089965397924, 380],
            [798.3391003460208, 380, 241.24567474048445, 702],
            [320.8304498269896, 748, 798.3391003460208, 472],
            [798.3391003460208, 564, 400.4152249134948, 794],
            [559.5847750865051, 794, 161.66089965397924, 564],
            [161.66089965397924, 472, 639.1695501730104, 748],
            [718.7543252595156, 702, 161.66089965397924, 380],
            [161.66089965397924, 288, 798.3391003460208, 656],
            [798.3391003460208, 564, 241.24567474048445, 242],
            [320.8304498269896, 196, 798.3391003460208, 472],
            [798.3391003460208, 380, 400.4152249134948, 150]
        ],
        'triangle': []
    },    
    {   // Dodecagram               9
        'circle':   [],
        'hexagon':  [ "8", "10" ],
        'line':     [
            [400.4152249134948, 150, 241.24567474048445, 702],
            [241.24567474048445, 702, 798.3391003460208, 564],
            [798.3391003460208, 564, 400.4152249134948, 150],
            [161.66089965397924, 380, 718.7543252595156, 242],
            [718.7543252595156, 242, 559.5847750865051, 794],
            [559.5847750865051, 794, 161.66089965397924, 380],
            [241.24567474048445, 242, 400.4152249134948, 794],
            [400.4152249134948, 794, 798.3391003460208, 380],
            [798.3391003460208, 380, 241.24567474048445, 242],
            [161.66089965397924, 564, 559.5847750865051, 150],
            [559.5847750865051, 150, 718.7543252595156, 702],
            [718.7543252595156, 702, 161.66089965397924, 564]
        ],
        'triangle': []
    }
]

const colorArray = 
[
    '74, 42, 115',                  // PURPLE           SECONDARY
    '26, 46, 128',                  // BLUE-PURPLE      TERTIARY
    '40, 74, 144',                  // BLUE             PRIMARY
    '63, 146, 167',                 // BLUE-GREEN       TERTIARY
    '73, 146, 80',                  // GREEN            SECONDARY
    '150, 181, 62',                 // YELLOW-GREEN     TERTIARY
    '242, 227, 76',                 // YELLOW           PRIMARY
    '239, 181, 65',                 // YELLOW-ORANGE    TERTIARY
    '224, 130, 57',                 // ORANGE           SECONDARY
    '215, 84, 50',                  // RED-ORANGE       TERTIARY
    '200, 44, 41',                  // RED              PRIMARY
    '146, 35, 121'                  // RED-PURPLE       TERTIARY
];

const inputs =
{
    circle: 
    {
        single:   document.querySelectorAll('.single-circle-checkbox'),
        sequence: document.querySelectorAll('.sequenced-circle-checkbox')
    },
    hexagon: document.querySelectorAll('.hexagon-checkbox')
}

const inputArray = 
{
    class : 
    [
        '.single-circle-checkbox',
        '.sequenced-circle-checkbox',
        '.hexagon-checkbox',
        '.pattern-checkbox'
    ],
    id : 
    [
        'full-circle-cycle',
        'full-hexagon-cycle',
        'clear-canvas'
    ]
}

const sacredArrays = 
{
    circle:   [],
    triangle: [],
    hexagon:  [],
    line:     []
}

const mouse = 
{
    start:   { x: null, y: null },
    current: { x: null, y: null },
    end:     { x: null, y: null },
    down: false,
    existingLineIndex: -1
}

////////        Debug Output        ////////

console.log('configuration: ', config);
console.log('matrix: ',        matrix);

//---   binding of resize()   ---//
window.addEventListener('resize', setupEnvironment);
window.addEventListener('load',   setupEnvironment);

////////////////////////////////////////////////////////////
////////        PROTOTYPE FUNCTIONS                 ////////
////////////////////////////////////////////////////////////

/**
 * containsArray()          {Array:Method}              Validates whether the root array contains the passed array passed.
 * @param                   {array} val                 Array sequence to validate
 * @return                  {boolean}                   True | False
 */
Array.prototype.containsArray      = function(val) 
{
    var hash = {};

    for (var i = 0; i < this.length; i++) 
    {
        hash[this[i]] = i;
    }

    return hash.hasOwnProperty(val);
}

/**
 * indexOfArray()           {Array:Method}              Returns the index of the array values (e.g.: [1, 2]) passed
 * @param                   {array} val                 Array sequence to validate
 * @return                  {number}                    Integer representing the index where the passed array matches 
 */
Array.prototype.indexOfArray       = function(val) 
{
    var index = -1;

    for (var i = 0; i < this.length; i++) 
    {
        var pointInversion = [val[2], val[3], val[0], val[1]];                  // For lines draw in an inverted fashion

        if (JSON.stringify(this[i]) === JSON.stringify(val) || JSON.stringify(this[i]) === JSON.stringify(pointInversion))
        {
            index = i;
        }
    }

    return index;
}

/**
 * pushPop()                {Array:Method}              Pushes or splices the value passed via the val param
 * @param                   {number} val                Value to be pushed or spliced
 */
Array.prototype.pushPop            = function(val)
{
    const index = (typeof(val) == 'number')
        ? this.indexOf(val)
        : this.indexOfArray(val);

    (index > -1) 
        ? this.splice(index, 1) 
        : this.push(val);

    this.sort((a, b) => a - b);    
}

/**
 * pushPopAdv()             {Array:Method}              Pushes or splices the value passed via the val param into a multidimensional array
 * @param                   {number} val                Value to be parsed into the appropriate array values
 */
Array.prototype.pushPopAdv         = function(val)
{
    if (val == 0)                   // Handle seed variable first
    {
        let index = sacredArrays.circle.indexOfArray([0, 0]);

        (index > -1)
            ? sacredArrays.circle.splice(index, 1)
            : sacredArrays.circle.push([0, 0]);
    }
    else                            // If value > 0, compare against matrix 9 x 6 groups
    {
        parseToSequence(val);
    }

    sacredArrays.circle.sort();
}

/**
 * convert2digStr()         {Number:Method}             Converts the casted value into a two digit string
 * @return                  {string}                    Two digit string
 */
Number.prototype.convert2digStr    = function()
{
    return (this < 10) ? `0${this}` : `${this}`;
}

/**
 * isSequenceFull()         {Number:Method}             Checks whether the sequence passed is full of it's child elements
 * @return                  {boolean}                   True | False
 */
Number.prototype.isSequenceFull    = function()
{
    var count = 0;

    for (var i = 1; i <= 6; i++)
    {
        (document.getElementById(`circle-${this.convert2digStr()}-${i.convert2digStr()}-checkbox`).checked)
            ? count++
            : null;
    }

    return (count == 6)
        ? true
        : false;
}

/**
 * isSequenceEmpty()        {Number:Method}             Checks whether the sequence passed is empty of it's child elements
 * @return                  {boolean}                   True | False
 */
Number.prototype.isSequenceEmpty   = function()
{
    var count = 0;

    for (var i = 1; i <= 6; i++)
    {
        (document.getElementById(`circle-${this.convert2digStr()}-${i.convert2digStr()}-checkbox`).checked)
            ? count++
            : null;
    }

    return (count >= 1)
        ? false
        : true;
}

////////////////////////////////////////////////////////////
////////        GENERAL FUNCTIONS                   ////////
////////////////////////////////////////////////////////////

/**
 * setupEnvironment()       {Method}                    Sets up the initial UI environment
 */
function setupEnvironment()
{
    document.getElementById("canvas").width  = `${config.domWindow.width}`;
    document.getElementById("canvas").height = `${config.domWindow.height}`;

    document.getElementById("canvas-underlay").width  = `${config.domWindow.width}`;
    document.getElementById("canvas-underlay").height = `${config.domWindow.height}`;

    document.getElementById("ui-overlay").style.setProperty('width', `${config.domWindow.width}px`);
    document.getElementById("ui-overlay").style.setProperty('height', `${config.domWindow.height}px`);

    document.title = config.about.Library + ' | ver: ' + config.about.Version;

    insertUIElements();
}

/**
 * centerX                  {Method}                    Orients the offset value passed with the canvas elements center x coordinate
 * @param                   {number} offset             Offset value
 * @return                  {number}                    X coordinate orientation offset by passed param
 */
function centerX(offset)
{
    return config.domWindow.xCenter + offset;
}

/**
 * centerY                  {Method}                    Orients the offset value passed with the canvas elements center y coordinate
 * @param                   {number} offset             Offset value
 * @return                  {number}                    Y coordinate orientation offset by passed param
 */
function centerY(offset)
{
    return config.domWindow.yCenter + offset;
}

/**
 * parseToSequence()        {Method}                    Parses and pushes the sequenced value of the value passed
 * @param                   {number} val                Value to be parsed in correspondence to its sequence
 */
function parseToSequence(val)
{
    var compareValues = [1, 6];

    for (var i = 1; i <= 10; i++)
    {
        var n = 1 + (6 * (i - 1));

        if (val >= compareValues[0] && val <= compareValues[1]) 
        {
            let index = sacredArrays.circle.indexOfArray([i, val - n]);

            (index > -1)
                ? sacredArrays.circle.splice(index, 1)
                : sacredArrays.circle.push([i, val - n]); break;
        }

        compareValues[0] = compareValues[0] + 6;
        compareValues[1] = compareValues[1] + 6;
    }
}

/**
 * getRegExp                {Method}                    Returns a single string from the passed RegEx expression
 * @param                   {string} string             String to match the passed RegEx expression
 * @param                   {string} regex              RegEx expression in string format
 * @return                  {string}                    RegEx matched group returned in a single string
 */
function getRegExp(val, regex) 
{
  let result = val.match(regex);
  
  return result[1];
}

////////////////////////////////////////////////////////////
////////        INTERFACE FUNCTIONS                 ////////
////////////////////////////////////////////////////////////

/**
 * toggleCheckbox()         {Method}                    Toggles whether the passed input[type='checkbox'] is checked; or not
 * @param                   {string} id                 The input element's id
 */
function toggleCheckbox(id)
{
    document.getElementById(id).checked = (document.getElementById(id).checked) ? false : true;
}

/**
 * toggleCheckboxes()       {Method}                    Toggles checkboxes in accordance with their sequence
 * @param                   {string} shape              String signifying the type of shape to sort
 */
function toggleCheckboxes(shape)
{
    switch (shape)
    {
        case 'sequenced-circle':

            for (var i = 0; i <= 9; i++)
            {
                (inputs.circle.sequence[i].checked)
                    ? toggleSequenceCheckboxes(i)           // Toggle 'on' all sequence checkboxes
                    : toggleSequenceCheckboxes(i, false);   // Toggle 'off' all sequence checkboxes
            }

            break;

        case 'single-circle':

            for (var i = 0; i <= 9; i++)
            {
                let idString = `sequenced-circle-${(i + 1).convert2digStr()}-checkbox`;

                document.getElementById(idString).checked = 
                    (Number(document.getElementById(idString).value).isSequenceFull())
                        ? true
                        : false;
            }

            break;

        default:

            console.log(`${shape} is not supported by the toggleCheckboxes() function!`);
    }
}

/**
 * toggleSequenceCheckboxes()       {Method}            Toggles 'on' or 'off' the complete underlying circles for each sequence passed via the sequence param
 * @param                           {number}  sequence  Sequence to toggle single circles
 * @param                           {boolean} on        Leave the single circles in an 'on' or 'off' state
 */
function toggleSequenceCheckboxes(sequence, on = true)
{
    for (var i = 0; i <= 5; i++)
    {
        var idString = `circle-${(sequence + 1).convert2digStr()}-${(i + 1).convert2digStr()}-checkbox`;

        (document.getElementById(idString).checked)
            ? toggleCheckbox(idString)
            : null;

        (on)
            ? toggleCheckbox(idString)
            : null;
    }
}

/**
 * toggleSequence()         {Method}                    Identify and toggle an entire sequential circle depending on the value passed
 * @param                   {number} val                Value to be identified within a circle's sequence
 */
function toggleSequence(val)
{
    let n = parseInt(val);

    let min = (n + (5 * (n - 1))), max = (n + (5 * n));

    let idString, idString2;

    for (var i = min; i <= max; i++)
    {
        idString = (val <= 1)
            ? `circle-${Number(val).convert2digStr()}-${Number(i).convert2digStr()}-checkbox`
            : `circle-${Number(val).convert2digStr()}-${Number((i - min) + 1).convert2digStr()}-checkbox`;

        idString2 = `sequenced-circle-${Number(val).convert2digStr()}-checkbox`;  

        if (document.getElementById(idString).checked == true && document.getElementById(idString2).checked == true)
        {
            continue;
        }
        else
        {
            sacredArrays.circle.pushPopAdv(i);
        }
    }
}

/**
 * pushPopPattern()         {Method}                    Pushes & pops values passed in from the 'patterns' drop-down 
 * @param                   {number} val                Numeric value passed from pushPopSacredArray()
 */
function pushPopPattern(val)
{
    for (let i = 0; i <= patterns[val].circle.length - 1; i++)                  // Circles
    {
        sacredArrays.circle.pushPop(patterns[val].circle[i]);

        let node = patterns[val].circle[i];
        
        toggleCheckbox(`circle-${(node[0]).convert2digStr()}-${(node[1] + 1).convert2digStr()}-checkbox`);

        toggleCheckboxes('single-circle');
    }

    for (let i = 0; i <= patterns[val].hexagon.length - 1; i++)                 // Hexagons
    {
        sacredArrays.hexagon.pushPop(patterns[val].hexagon[i]);

        toggleCheckbox(`hexagon-${Number(sacredArrays.hexagon[i]).convert2digStr()}-checkbox`);
    }

    for (let i = 0; i <= patterns[val].line.length - 1; i++)                    // Lines
    {
        sacredArrays.line.pushPop(patterns[val].line[i]);
    }
}

/**
 * clickCheckbox()          {Method}                    Programmatically clicks on a specific checkbox
 * @param                   {string} id                 String identifier for the checkbox to activate
 */
function clickCheckbox(id)
{
    document.getElementById(id).click();
}

////////////////////////////////////////////////////////////
////////        GRAPHIC ALGORITHMS                  ////////
////////////////////////////////////////////////////////////

/**
 * activateUnderlay()       {Method}                    Initiates the drawOutline method
 */
function activateUnderlay()
{
    drawOutline();
}

/**
 * clearUnderlay            {Method}                    Clears the entire underlay
 */
function clearUnderlay()
{
    config.context2.clearRect(0, 0, config.canvas2.width, config.canvas2.height);
}

/**
 * [getRadialGradient description]
 * @param                   {Object} start              Start values of eventually rendered gradient
 * @param                   {number} start.x            X-axis coordinate of the start circle
 * @param                   {number} start.y            Y-axis coordinate of the start circle
 * @param                   {number} start.radius       Radius of the start circle
 * @param                   {color}  start.color        Color defined from CSS color name list
 * @param                   {Object} end                End values of eventually rendered gradient
 * @param                   {number} end.x              X-axis coordinate of the end circle
 * @param                   {number} end.y              Y-axis coordinate of the end circle
 * @param                   {number} end.radius         Radius of the end circle
 * @param                   {color}  end.color          Color defined by RGB values
 * @return                  {Object} result             CanvasGradient object
 */
function getRadialGradient(start = { x, y, radius, color }, end = { x, y, radius, color })
{
    let result = config.context.createRadialGradient(start.x, start.y, start.radius, end.x, end.y, end.radius);

    result.addColorStop(0, start.color);
    result.addColorStop(0.9, end.color);
    result.addColorStop(1, end.color);

    return result;
}

/**
 * clearCanvas()            {Method}                    Clears the entire canvas element       
 */
function clearCanvas()
{
    config.context.clearRect(0, 0, config.canvas.width, config.canvas.height);
}

/**
 * drawCircle()             {Method}                    Draws a simple circle
 * @param                   {number}  x                 x - axis; center
 * @param                   {number}  y                 y - axis; center
 * @param                   {number}  radius            Circle radius
 * @param                   {Object}  angle             Angle object containing angle properties
 * @param                   {number}  angle.start       Start angle
 * @param                   {number}  angle.end         End angle
 * @param                   {Object}  stroke            Stroke object containing stroke properties
 * @param                   {string}  stroke.color      Stroke RGB number set for fill; r, g, b
 * @param                   {decimal} stroke.alpha      Stroke alpha (transparency) number value
 * @param                   {Object}  fill              Fill object containing fill properties
 * @param                   {string}  fill.color        Fill RGB number set for fill; r, g, b
 * @param                   {decimal} fill.alpha        Fill alpha (transparency) number value
 * @param                   {boolean} centerDot         Include a center dot
 */
function drawCircle(x, y, radius, angle = { start: 0, end: 2 * Math.PI }, stroke = { color: '0, 0, 0', alpha: 0.5 }, fill = { color: '255, 255, 255', alpha: 0.3}) 
{
    const circle = 
    { 
        start: 
        {
            x: centerX(x), 
            y: centerY(y), 
            radius: 10,  
            color: 'white'
        },
        end:
        {
            x: centerX(x), 
            y: centerY(y), 
            radius: 100, 
            color: `rgba(${fill.color}, ${fill.alpha})`            
        }
    }

    config.context.strokeStyle = `rgba(${stroke.color}, ${stroke.alpha})`;
    config.context.lineWidth   = 1;

    config.context.fillStyle = getRadialGradient(circle.start, circle.end);

    config.context.beginPath();
    
    config.context.arc(
        circle.start.x, 
        circle.start.y, 
        radius, 
        angle.start, 
        angle.end, 
        false                       // Counter Clockwise
    );
    
    (config.circle.stroke)
        ? config.context.stroke()
        : null;

    config.context.fill();

    (config.circle.centerDot)
        ? drawCircle(x, y, (radius / 4) * 0.18, angle.start, angle.end, stroke.color, stroke.alpha, fill.color, fill.alpha, false)
        : null;
}

/**
 * drawUnderlayCircles()    {Method}                    Draws outlines of (potential) points for reference
 * @param                   {number} x                  x - axis; center
 * @param                   {number} y                  y - axis; center
 * @param                   {number} radius             Circle radius
 * @param                   {number} alpha              Alpha level of underlay circles
 */
function drawUnderlayCircles(x, y, radius, alpha = 0.15)
{
    config.context2.strokeStyle = `rgba(0, 0, 0, ${alpha})`;

    config.context2.beginPath();

    config.context2.arc(
        centerX(x), 
        centerY(y), 
        radius, 
        0, 
        2 * Math.PI, 
        false
    );

    config.context2.stroke();
}

/**
 * drawOutline              {Method}                    Draws a semi-transparent outline on canvas-underlay
 * @param                   {number} alpha              Alpha level of underlay circles
 */
function drawOutline(alpha)
{
    drawUnderlayCircles(matrix[0][0][0], matrix[0][0][1], zonaPolusada, alpha);

    for (var i = 0; i <= matrix.length - 1; i++)            // Draw circles around all points existing with the matrix array
    {
        for (var j = 0; j <= matrix[i].length - 1; j++) 
        {
            drawUnderlayCircles(matrix[i][j][0], matrix[i][j][1], spirit.radius, alpha);
        }
    }
}

/**
 * drawLine()               {Method}                    Draws a simple circle
 * @param                   {number} startX             X coordinate position to begin drawing at
 * @param                   {number} StartY             Y coordinate position to begin drawing at
 * @param                   {number} endX               X coordinate position to finish drawing at
 * @param                   {number} endY               Y coordinate position to finish drawing at
 */
function drawLine(startX, startY, endX, endY, lineWidth = 1, strokeColor = '0, 0, 0', strokeAlpha = 0.5) 
{
    config.context.strokeStyle = `rgba(${strokeColor}, ${strokeAlpha})`;
    config.context.lineCap     = 'round';

    config.context.beginPath();                             // Resets the current path

    config.context.moveTo(startX, startY);                  // Creates a new subpath with the given point
    config.context.lineTo(endX, endY);                      // Adds the given point to the subpath

    config.context.lineWidth = lineWidth;                   // Sets the width the the line to be rendered
    config.context.stroke();                                // Strokes the subpaths with the current stroke style
}

////////////////////////////////////////////////////////////
////////        CYCLING ALGORITHMS                  ////////
////////////////////////////////////////////////////////////

/**
 * cycleFull()              {Method}                    Cycles through the entire shape array of the shape passed; via param
 * @param                   {string} shape              Shape array to cycle through
 */
function cycleFull(shape)
{
    clearCanvas();

    for (var i = 1; i <= matrix.length - 1; i++) 
    {
        for (var j = 0; j <= matrix[i].length - 1; j++) 
        {
            switch (shape)
            {
                case 'circle':

                    drawCircle(
                        matrix[i][j][0],
                        matrix[i][j][1],
                        spirit.radius,
                        undefined,
                        undefined,           
                        {
                            color: colorArray[i],
                            alpha: 0.3
                        }
                    );

                    break;

                case 'hexagon':

                    var n = j + 1;

                    if (n == 6) { n = 0; }

                    drawLine(
                        centerX(matrix[i][j][0]),        
                        centerY(matrix[i][j][1]), 
                        centerX(matrix[i][n][0]), 
                        centerY(matrix[i][n][1])
                    );

                    break;

                default:

                    console.log(`${shape} is not supported by the cycleFull() function!`);
            }
        }
    }
}

/**
 * cycleSacredArray()       {Method}                    Cycles through the 'single circle array'
 */
function cycleSacredArray()
{
    clearCanvas();

    for (var i = 0; i <= sacredArrays.circle.length - 1; i++)                   // Circles
    {
        drawCircle(
            matrix[sacredArrays.circle[i][0]][sacredArrays.circle[i][1]][0],
            matrix[sacredArrays.circle[i][0]][sacredArrays.circle[i][1]][1],
            spirit.radius,
            undefined,
            undefined,
            {
                color: colorArray[sacredArrays.circle[i][0]],
                alpha: 0.3
            }
        );
    }

    for (var i = 0; i <= sacredArrays.hexagon.length - 1; i++)                  // Hexagon
    {
        for (var j = 0; j <= matrix[sacredArrays.hexagon[i]].length - 1; j++) 
        {
            var n = j + 1;

            if (n == 6) { n = 0; }

            drawLine(
                centerX(matrix[sacredArrays.hexagon[i]][j][0]),
                centerY(matrix[sacredArrays.hexagon[i]][j][1]), 
                centerX(matrix[sacredArrays.hexagon[i]][n][0]), 
                centerY(matrix[sacredArrays.hexagon[i]][n][1]) 
            );

        }
    }

    for (var i = 0; i <= sacredArrays.line.length - 1; i++)                     // Lines
    {
        drawLine(
            sacredArrays.line[i][0], 
            sacredArrays.line[i][1], 
            sacredArrays.line[i][2], 
            sacredArrays.line[i][3]
        );
    }
    
    if (!config.debug)                                                          // For debugging purposes only
    {
        console.clear();
        console.log('config: ', config);
        console.log('sacredArrays: ', sacredArrays);
        console.log('inputs: ', inputs);
    }
}

////////////////////////////////////////////////////////////
////////        PROPITIATORY ARRAY ALGORITHMS       ////////
////////////////////////////////////////////////////////////

/**
 * pushPopSacredArray()     {Method}                    Sorts various shape arrays                    
 * @param                   {string}       shape        String signifying the type of shape to sort
 * @param                   {number|array} value        Value(s) to be sorted through the below (corresponding) algorithms
 */
function pushPopSacredArray(shape, value)
{
    switch (shape)
    {
        case 'sequenced-circle':

            toggleSequence(value);

            break;

        case 'single-circle':

            sacredArrays.circle.pushPopAdv(value);

            break;

        case 'hexagon':

            sacredArrays.hexagon.pushPop(value);

            break;

        case 'line':

            sacredArrays.line.pushPop(value);

            break;

        case 'pattern':

            pushPopPattern(value);

            break;

        default:

            console.log(`${shape} is not supported by the pushPopSacredArray() function!`);
    }

    cycleSacredArray();

    (shape != 'pattern')
        ? toggleCheckboxes(shape)
        : null;
}

////////////////////////////////////////////////////////////
////////        UI ALGORITHMS                       ////////
////////////////////////////////////////////////////////////

/**
 * highlightRegion()        {Method}                    Draws a semi-transparent circle over the designed area
 * @param                   {Object} obj                UI element
 */
function highlightRegion(obj)
{
    document.getElementById(obj.id).style.border = '1px dashed black';
    document.body.style.cursor                   = 'pointer';

    if (mouse.down)
    {
        let node = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);                   // For deletion detection

        let mouseTempEnd =                                                      // Precalculate line destination
        {
            x: centerX(matrix[parseInt(node[1])][parseInt(node[2])][0]),
            y: centerY(matrix[parseInt(node[1])][parseInt(node[2])][1])
        }

        mouse.existingLineIndex = sacredArrays.line.indexOfArray([mouse.start.x, mouse.start.y, mouseTempEnd.x, mouseTempEnd.y]);
    }
}

/**
 * unhighlightRegion()      {Method}                    Un-highlight UI elements
 * @param                   {Object} obj                UI element
 */
function unhighlightRegion(obj)
{
    document.getElementById(obj.id).style.border = '1px solid transparent';
    document.body.style.cursor                   = 'default';
}

/**
 * setRegion()              {Method}                    Inserts the (clicked) circle within the sacredArray
 * @param                   {Object} obj                UI element
 */
function setRegion(obj)
{
    let node = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);

    clickCheckbox(`circle-${node[1]}-${(parseInt(node[2]) + 1).convert2digStr()}-checkbox`);
}

/**
 * startLine()              {Method}                    Defines the beginner of a straight line
 * @param                   {Object} obj                UI element
 */
function startLine(obj)
{
    mouse.down = true;

    let node = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);

    mouse.start.x = centerX(matrix[parseInt(node[1])][parseInt(node[2])][0]);
    mouse.start.y = centerY(matrix[parseInt(node[1])][parseInt(node[2])][1]);
}

/**
 * endLine()                {Method}                    Defines the ending of a straight line 
 * @param                   {Object} obj                UI element
 */
function endLine(obj)
{
    mouse.down = false;

    let node = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);

    mouse.end.x = centerX(matrix[parseInt(node[1])][parseInt(node[2])][0]);
    mouse.end.y = centerY(matrix[parseInt(node[1])][parseInt(node[2])][1]);

    sacredArrays.line.pushPop([mouse.start.x, mouse.start.y, mouse.end.x, mouse.end.y]);

    clearCanvas();
    cycleSacredArray();
}

/**
 * uiElementPos()           {Method}                    Returns the appropriate position for each clickable UI element
 * @param                   {number} x                  X axis coordinate value 
 * @param                   {number} y                  Y axis coordinate value
 * @param                   {number} radius             Radius of UI element being passed
 * @return                  {array}  result             Returns the appropriate x & y coordinate values in accordance with screen dimensions
 */
function uiElementPos(x, y, radius = spirit.radius)
{
    let result = new Array();

    result[0] = centerX(x - (radius / 2));
    result[1] = centerY(y - (radius / 2));

    return result;
}

/**
 * insertUIElements()       {Method}                    Inserts UI objects for point and click interface
 */
function insertUIElements()
{
    for (var i = 0; i <= matrix.length - 1; i++) 
    {
        for (var j = 0; j <= matrix[i].length - 1; j++) 
        {
            let uiPositions = uiElementPos(matrix[i][j][0], matrix[i][j][1]);

            document.getElementById('ui-overlay').innerHTML += 
                `<div style="` 
                + `text-align: center; `
                + `line-height: 100px; `
                + `position: absolute; ` 
                + `left: ${uiPositions[0]}px; ` 
                + `top: ${uiPositions[1]}px; ` 
                + `width: ${spirit.radius}px; ` 
                + `height: ${spirit.radius}px; `
                + `border-radius: 50px; `
                + `border: 1px solid transparent;" ` 
                + `id="ui-node-${i.convert2digStr()}-${(j).convert2digStr()}" `
                + `onmouseover="highlightRegion(this)" ` 
                + `onmouseout="unhighlightRegion(this)" `
                + `onclick="setRegion(this)" ` 
                + `onmousedown="startLine(this)" `
                + `onmouseup="endLine(this)" `
                // + `>${i} - ${j}</div>`;                 // For Debugging Purposes Only
                + `></div>`;
        }

    }

    activateUnderlay();
}

/**
 * showAbout()              {Method}                    Triggers the about window
 */
function showAbout()
{
    let about = document.getElementById('about-window');

    (about.style.display == 'none')
        ? pupulate()
        : about.style.setProperty('display', 'none');    

    function pupulate()
    {
        about.style.setProperty('display', 'block');
        about.style.setProperty('margin-left', `${(config.domWindow.width  - parseInt(about.style.width))  / 2}px`);
        about.style.setProperty('margin-top',  `${(config.domWindow.height - parseInt(about.style.height)) / 2}px`);

        if (!config.about.Window)
        {
            document.getElementById('details').innerHTML +=
                `<div id="program-name"><b>Program:</b> ${config.about.Library}</div>`
                + `<div id="version-number"><b>Version:</b> ${config.about.Version}</div>`
                + `<div id="updated-last"><b>Updated:</b> ${config.about.Updated}</div>`
                + `<div id="about-copyright">Copyright &copy; 2021 Justin Don Byrne</div>`;

            config.about.Window = true; 
        }
    }
}

////////        UI Listeners        ////////

/**
 * Bind class inputs
 */
for (var i = 0; i <= inputArray.class.length - 1; i++)
{
    document.querySelectorAll(inputArray.class[i]).forEach(item =>
    {
        item.addEventListener('click', event =>
        {
            pushPopSacredArray(getRegExp(item.className, '([^\.]+?)(-checkbox|-cycle)'), item.value);
        });
    });
}

document.getElementById('full-circle-cycle').addEventListener("click", function()
{
    (document.getElementById('full-circle-cycle').checked) 
        ? (sacredArrays.circle.length > 0) 
            ? cycleSacredArray() : null 
        : cycleFull('circle');
});

document.getElementById('full-hexagon-cycle').addEventListener("click", function()
{
    (document.getElementById('full-hexagon-cycle').checked)
        ? (sacredArrays.hexagon.length > 0)
            ? cycleSacredArray() : null
        : cycleFull('hexagon');
});

document.getElementById('clear-canvas').addEventListener("click", function()
{
    clearCanvas();

    for (let shape in sacredArrays)
    {
        sacredArrays[shape].splice(0, sacredArrays[shape].length);
    }

    for (let i = 0; i <= 3; i++)    // Trigger all checked menu items upon clear
    {
        document.querySelectorAll(inputArray.class[i]).forEach(item =>
        {
            (document.getElementById(item.id).checked == true)
                ? document.getElementById(item.id).checked = false
                : null;
        });
    }
});

document.getElementById('about').addEventListener("click", function()
{
    showAbout();
});

window.addEventListener("mousemove", function(event) 
{
    clearCanvas();
    cycleSacredArray();

    mouse.current.x = event.clientX;
    mouse.current.y = event.clientY;

    if (mouse.down)
    {
        document.body.style.cursor = 'crosshair';

        drawLine(mouse.start.x, mouse.start.y, mouse.current.x, mouse.current.y);

        (mouse.existingLineIndex != -1 && sacredArrays.line.length > 0)
           ? drawLine(sacredArrays.line[mouse.existingLineIndex][0], sacredArrays.line[mouse.existingLineIndex][1], sacredArrays.line[mouse.existingLineIndex][2], sacredArrays.line[mouse.existingLineIndex][3], 7, '255, 25, 25')
           : mouse.existingLineIndex = -1;
    }
});
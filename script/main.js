"use strict";

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            GLOBAL VARIABLES                                        ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * config                   {Object}                    Object literal variables
 * @var                     {DOM Element} canvas        DOM element
 * @var                     {DOM Element} context       CanvasRenderingContext2D for drawing surface on the <canvas> element
 * @var                     {Object}      domWindow     DOM window width, height, center x-coordinate, and center y-coordinate
 * @var                     {Object}      about         General Information concerning  
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
    debug :         false,
    patternOverlay: false,
    windows:
    {
        about:      false,
        properties: false
    },
    about : 
    {
        Author:    'Justin Don Byrne',
        Created:   'September, 11 2021',
        Library:   'Sacred Geometry: Sketch Pad & Study Tool',
        Updated:   'January, 4 2022',
        Version:   '1.16.62',
        Copyright: 'Copyright (c) 2021 Justin Don Byrne',
    }
}

const padding      = 10;
const zonaPolusada = config.domWindow.height / 2 - padding;
const magNo        = 0.578;                                

const spirit = 
{
    radius : zonaPolusada / 5
}

const patterns =
[
    {   // Vesica Pisces            0
        'circle':   [ [0, 0], [1, 0] ],
        'hexagon':  [],
        'line':     [ [1, 0, 0, 0], [1, 0, 1, 5], [1, 1, 0, 0], [1, 1, 1, 0], [1, 5, 0, 0], [1, 5, 1, 1] ],
        'triangle': []
    },
    {   // Seed of Life             1
        'circle':   [ [0, 0], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5] ],
        'hexagon':  [],
        'line':     [],
        'triangle': []
    },
    {   // Fruit of Life            2
        'circle':   [ [0, 0], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5] ],
        'hexagon':  [],
        'line':     [],
        'triangle': []
    },
    {   // Flower of Life           3
        'circle':   [ [0, 0], [1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5] ],
        'hexagon':  [],
        'line':     [],
        'triangle': []
    },
    {   // Icosahedron              4
        'circle':   [],
        'hexagon':  [ 7 ],
        'line':     [ [3, 1, 3, 3], [3, 1, 7, 1], [3, 3, 3, 5], [3, 5, 3, 1], [3, 5, 7, 5], [7, 0, 7, 2], [7, 0, 7, 4], [7, 3, 3, 3], [7, 4, 7, 2] ],
        'triangle': []
    },
    {   // Metatron's Cube          5
        'circle':   [],
        'hexagon':  [ 3, 7 ],
        'line':     [ [3, 1, 3, 5], [3, 3, 3, 1], [3, 5, 3, 3], [7, 0, 7, 3], [7, 0, 7, 4], [7, 1, 7, 3], [7, 1, 7, 4], [7, 2, 7, 0], [7, 3, 7, 5], [7, 4, 7, 2], [7, 5, 7, 1], [7, 5, 7, 2] ],
        'triangle': []
    },
    {   // Hexagon Formation        6
        'circle':   [ [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5] ],
        'hexagon':  [ 3, 7 ],
        'line':     [ [7, 0, 7, 2], [7, 4, 7, 2], [7, 4, 7, 0], [7, 1, 7, 5], [7, 5, 7, 3], [7, 3, 7, 1], [3, 1, 3, 5], [3, 2, 3, 4], [3, 3, 3, 1], [3, 5, 3, 3], [3, 0, 3, 2], [3, 0, 3, 4] ],
        'triangle': []
    },
    {   // Hexagonal Grid           7
        'circle':   [],
        'hexagon':  [ 7 ],
        'line':     [ [10, 0, 8, 2], [10, 1, 8, 3], [10, 1, 8, 5], [10, 3, 8, 5], [10, 4, 8, 0], [10, 4, 8, 2], [7, 0, 7, 3], [7, 1, 7, 4], [7, 5, 7, 2], [8, 0, 10, 2], [8, 1, 10, 3], [8, 1, 10, 5], [8, 3, 10, 5], [8, 4, 10, 0], [8, 4, 10, 2], [9, 0, 9, 4], [9, 2, 9, 0], [9, 2, 9, 4], [9, 3, 9, 1], [9, 5, 9, 1], [9, 5, 9, 3] ],
        'triangle': []
    },    
    {   // Dodecagram               8
        'circle':   [],
        'hexagon':  [ 8, 10 ],
        'line':     [ [10, 0, 10, 2], [10, 0, 8, 5], [10, 1, 10, 5], [10, 2, 10, 4], [10, 2, 8, 4], [10, 3, 10, 1], [10, 3, 8, 2], [10, 4, 10, 0], [10, 5, 10, 3], [10, 5, 8, 1], [8, 0, 8, 2], [8, 1, 10, 2], [8, 1, 8, 3], [8, 2, 10, 0], [8, 2, 8, 4], [8, 3, 8, 5], [8, 4, 10, 5], [8, 4, 8, 0], [8, 5, 10, 3], [8, 5, 8, 1] ],
        'triangle': []
    },
    {   // Vector Equilibrium       9
        'circle':   [],
        'hexagon':  [ 7 ],
        'line':     [ [2, 0, 2, 3], [2, 0, 7, 1], [2, 1, 2, 3], [2, 1, 2, 4], [2, 1, 7, 1], [2, 2, 2, 0], [2, 2, 2, 4], [2, 2, 7, 2], [2, 3, 7, 3], [2, 4, 2, 0], [2, 4, 7, 4], [2, 5, 2, 1], [2, 5, 2, 3], [2, 5, 7, 5], [7, 0, 2, 0], [7, 0, 2, 5], [7, 0, 7, 3], [7, 1, 7, 4], [7, 2, 2, 1], [7, 2, 7, 5], [7, 3, 2, 2], [7, 4, 2, 3], [7, 5, 2, 4] ],
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
    coord:   { start: null, end: null },
    current: { x: null, y: null },
    down: false,
    existingLineIndex: -1
}

const matrix = new Array();

(function()
{
    let a, b, c, d, e, F;

    for (let i = 0; i <= 10; i++)
    {
        switch (i)
        {
            case 0:

                matrix.push([[null, null]]);

                break;

            case 1:
            case 3:
            case 4:
            case 7:

                switch (i)
                {
                    case 1:  a = 0.5; b = 1;  break;
                    case 3:  a = 1;   b = 2;  break;
                    case 4:  a = 1.5; b = 3;  break;
                    case 7:  a = 2;   b = 4;  break;
                }

                matrix.push(  [[    null,                       - (spirit.radius * b) ]]);
                matrix[i].push([ - (spirit.radius / magNo) * a, - (spirit.radius * a) ] );
                matrix[i].push([ - (spirit.radius / magNo) * a,   (spirit.radius * a) ] );
                matrix[i].push([    null,                         (spirit.radius * b) ] );
                matrix[i].push([   (spirit.radius / magNo) * a,   (spirit.radius * a) ] );
                matrix[i].push([   (spirit.radius / magNo) * a, - (spirit.radius * a) ] ); 

                break;

            case 2:
            case 9:

                switch (i)
                {
                    case 2:  a = 0.5; b = 1; c = 1.5;  break;
                    case 9:  a = 1;   b = 2; c = 3;    break;
                }

                matrix.push(  [[ - (spirit.radius / magNo) * a, - (spirit.radius * c)]]);
                matrix[i].push([ - (spirit.radius / magNo) * b,    null              ] );
                matrix[i].push([ - (spirit.radius / magNo) * a,    spirit.radius * c ] );
                matrix[i].push([   (spirit.radius / magNo) * a,    spirit.radius * c ] );
                matrix[i].push([   (spirit.radius / magNo) * b,    null              ] );
                matrix[i].push([   (spirit.radius / magNo) * a, - (spirit.radius * c)] );

                break;

            case 5:
            case 8:

                switch (i)
                {
                    case 5:  a = 0.5; b = 1;   c = 1.5; d = 2;   e = 2.5;  break;
                    case 8:  a = 0.5; b = 1.5; c = 2;   d = 2.5; e = 3.5;  break;
                }

                F = (i == 5) ? 0.5 : 1;

                matrix.push(  [[ - (spirit.radius / magNo) * a, - (spirit.radius * e)]]);
                matrix[i].push([ - (spirit.radius / magNo) * c, - (spirit.radius * F)] );
                matrix[i].push([ - (spirit.radius / magNo) * b,    spirit.radius * d ] );
                matrix[i].push([   (spirit.radius / magNo) * a,    spirit.radius * e ] );
                matrix[i].push([   (spirit.radius / magNo) * c,    spirit.radius * F ] );
                matrix[i].push([   (spirit.radius / magNo) * b, - (spirit.radius * d)] );

                break;

            case 6:
            case 10:

                switch (i)
                {
                    case 6:  a = 0.5;  b = 1;   c = 1.5; d = 2;   e = 2.5;  break;
                    case 10:  a = 0.5; b = 1.5; c = 2;   d = 2.5; e = 3.5;  break;
                }

                F = (i == 6) ? 0.5 : 1;

                matrix.push(  [[ - (spirit.radius / magNo) * b, - (spirit.radius * d)]]);
                matrix[i].push([ - (spirit.radius / magNo) * c,    spirit.radius * F ] );
                matrix[i].push([ - (spirit.radius / magNo) * a,    spirit.radius * e ] );
                matrix[i].push([   (spirit.radius / magNo) * b,    spirit.radius * d ] );
                matrix[i].push([   (spirit.radius / magNo) * c, - (spirit.radius * F)] );
                matrix[i].push([   (spirit.radius / magNo) * a, - (spirit.radius * e)] );

                break;
        }
    }
})();

////////                            Debug Output                                            ////////

console.log('configuration: ', config);
console.log('matrix: ',        matrix);

//---   binding of resize()   ---//
window.addEventListener('resize', setupEnvironment);
window.addEventListener('load',   setupEnvironment);

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            PROTOTYPE FUNCTIONS                                     ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            GENERAL FUNCTIONS                                       ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * setupEnvironment()       {Method}                    Sets up the initial UI environment
 */
function setupEnvironment()
{
    document.getElementById("canvas").width           = `${config.domWindow.width}`;
    document.getElementById("canvas").height          = `${config.domWindow.height}`;

    document.getElementById("canvas-underlay").width  = `${config.domWindow.width}`;
    document.getElementById("canvas-underlay").height = `${config.domWindow.height}`;

    document.getElementById("ui-overlay").style.setProperty('width', `${config.domWindow.width}px`);
    document.getElementById("ui-overlay").style.setProperty('height', `${config.domWindow.height}px`);

    document.title = config.about.Library + ' | ver: ' + config.about.Version;

    insertHtmlContent('ui-overlay');
}

/**
 * centerX()                {Method}                    Orients the offset value passed with the canvas elements center x coordinate
 * @param                   {number} offset             Offset value
 * @return                  {number}                    X coordinate orientation offset by passed param
 */
function centerX(offset)
{
    return config.domWindow.xCenter + offset;
}

/**
 * centerY()                {Method}                    Orients the offset value passed with the canvas elements center y coordinate
 * @param                   {number} offset             Offset value
 * @return                  {number}                    Y coordinate orientation offset by passed param
 */
function centerY(offset)
{
    return config.domWindow.yCenter + offset;
}

/**
 * arrayEquals()            {Method}                    Identifies whether the two array's passed are equal
 * @param                   {Array} a                   A array to compare to array B
 * @param                   {Array} b                   B array to compare to array A
 * @return                  {boolean}                   true|false 
 */
function arrayEquals(a, b)
{
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            INTERFACE FUNCTIONS                                     ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * toggleCheckbox()         {Method}                    Toggles whether the passed input[type='checkbox'] is checked; or not
 * @param                   {string}  id                The input element's id
 * @param                   {boolean} check             Overrides toggle to either 'on' or 'off'
 */
function toggleCheckbox(id, check = null)
{
    (check == null)
        ? document.getElementById(id).checked = (document.getElementById(id).checked) 
            ? false 
            : true
        : document.getElementById(id).checked = check;    
}

/**
 * toggleSequence()         {Method}                    Toggles all single sequence single circles in accordance to whether a sequence is full
 */
function toggleSequence()
{
    for (let i = 0; i <= 9; i++)
    {
        let idString = `sequenced-circle-${(i + 1).convert2digStr()}-checkbox`;

        document.getElementById(idString).checked = 
            (Number(document.getElementById(idString).value).isSequenceFull())
                ? true
                : false;
    }
}

/**
 * isolateMenuCluster()     {Method}                    Isolate menu cluster with multiple menu items
 * @param                   {Object} obj                Object within menu list to validate
 */
function isolateMenuCluster(obj)
{
    let elements = document.getElementsByClassName(obj.classList[0]);

    if (obj.checked)
    {
        for (let i = 0; i <= elements.length - 1; i++)
        {
            let menuElement = elements[i].parentNode.parentNode;

            if (obj.value == elements[i].value)
            {
                continue;
            }
            else
            {
                menuElement.className = 'disabled';
            }
        }
    }
    else
    {
        for (let i = 0; i <= elements.length - 1; i++)
        {
            let menuElement = elements[i].parentNode.parentNode;

            menuElement.className = '';
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
    }

    for (let i = 0; i <= patterns[val].hexagon.length - 1; i++)                 // Hexagons
    {
        sacredArrays.hexagon.pushPop(patterns[val].hexagon[i]);

        toggleCheckbox(`hexagon-${patterns[val].hexagon[i].convert2digStr()}-checkbox`);
    }

    for (let i = 0; i <= patterns[val].line.length - 1; i++)                    // Lines
    {
        sacredArrays.line.pushPop(patterns[val].line[i]);    
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            GRAPHIC ALGORITHMS                                      ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * getRadialGradient()      {Method}                    Returns a created gradient object for a canvas fill
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
 * drawUnderlay()           {Method}                    Draws a semi-transparent outline on canvas-underlay
 * @param                   {number} alpha              Alpha level of underlay circles
 */
function drawUnderlay(alpha)
{
    drawUnderlayCircles(matrix[0][0][0], matrix[0][0][1], zonaPolusada, alpha);

    for (var i = 0; i <= matrix.length - 1; i++)
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

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            MASTER DRAWING ALGORITHMS                               ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * drawSacredArray()        {Method}                    Cycles through the 'single circle array'
 */
function drawSacredArray()
{
    clearCanvas();

    ////////////////////////////////////////////////////////
    ////////    CIRCLES                             ////////
    ////////////////////////////////////////////////////////

    for (var i = 0; i <= sacredArrays.circle.length - 1; i++)
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

    ////////////////////////////////////////////////////////
    ////////    HEXAGON                             ////////
    ////////////////////////////////////////////////////////
    
    for (var i = 0; i <= sacredArrays.hexagon.length - 1; i++)
    {
        for (var j = 0; j <= matrix[sacredArrays.hexagon[i]].length - 1; j++) 
        {
            var n = j + 1;

            if (n == 6) { n = 0; }

            drawLine(
                centerX(matrix[sacredArrays.hexagon[i]][j][0]),                 // startX
                centerY(matrix[sacredArrays.hexagon[i]][j][1]),                 // startY
                centerX(matrix[sacredArrays.hexagon[i]][n][0]),                 // endX
                centerY(matrix[sacredArrays.hexagon[i]][n][1])                  // endY
            );
        }
    }

    ////////////////////////////////////////////////////////
    ////////    LINES                               ////////
    ////////////////////////////////////////////////////////

    for (var i = 0; i <= sacredArrays.line.length - 1; i++)
    {
        drawLine(
            centerX(matrix[sacredArrays.line[i][0]][sacredArrays.line[i][1]][0]),                   // startX
            centerY(matrix[sacredArrays.line[i][0]][sacredArrays.line[i][1]][1]),                   // startY
            centerX(matrix[sacredArrays.line[i][2]][sacredArrays.line[i][3]][0]),                   // endX
            centerY(matrix[sacredArrays.line[i][2]][sacredArrays.line[i][3]][1])                    // endY
        );
    }
    
    // ************************************************** //
    // *****    DEBUGGIN                            ***** //
    // ************************************************** //

    if (!config.debug)                                                          // For debugging purposes only
    {
        console.clear();
        console.log('config: ', config);
        console.log('sacredArrays: ', sacredArrays);
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////
////////                            GENERIC UI ALGORITHMS                                   ////////
////////////////////////////////////////////////////////////////////////////////////////////////////

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
        let node   = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);                 // For deletion detection

        let coords =                                                            // Precalculate line destination
        {
            startX: mouse.coord.start[0],
            startY: mouse.coord.start[1],
            endX:   parseInt(node[1]),
            endY:   parseInt(node[2])
        }

        mouse.existingLineIndex = sacredArrays.line.indexOfArray([coords.startX, coords.startY, coords.endX, coords.endY]);
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
    let triggerId = obj.id.match(/\w+/);
    let node      = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);

    switch (triggerId[0])
    {
        case 'ui':
            
            sacredArrays.circle.pushPop([parseInt(node[1]), parseInt(node[2])]);

            toggleCheckbox(`circle-${node[1]}-${(parseInt(node[2]) + 1).convert2digStr()}-checkbox`);

            break;

        case 'circle':

            sacredArrays.circle.pushPop([parseInt(node[1]), (parseInt(node[2]) - 1)]);

            break;

        case 'sequenced':

            if (obj.checked)
            {
                for (let i = 0; i <= 5; i++)
                {
                    let idString = `circle-${Number(obj.value).convert2digStr()}-${(i + 1).convert2digStr()}-checkbox`;

                    if (!document.getElementById(idString).checked)
                    {
                        sacredArrays.circle.pushPop([parseInt(obj.value), i]);  toggleCheckbox(idString);
                    }
                    else
                    {
                        continue;
                    }
                }
            }
            else
            {
                for (let i = 0; i <= 5; i++)
                {
                    let idString = `circle-${Number(obj.value).convert2digStr()}-${(i + 1).convert2digStr()}-checkbox`;

                    if (document.getElementById(idString).checked)
                    {
                        sacredArrays.circle.pushPop([parseInt(obj.value), i]);  toggleCheckbox(idString);
                    }
                    else
                    {
                        continue;
                    }
                }
            }

            break;

        case 'hexagon':

            sacredArrays.hexagon.pushPop(parseInt(obj.value));

            break;

        case 'pattern':

            isolateMenuCluster(obj);

            pushPopPattern(obj.value);

            break;

        default:

            console.log(`${triggerId[0]} is not supported by the setRegion() function!`);
            
            break;
    }

    toggleSequence();

    drawSacredArray();
}

/**
 * startLine()              {Method}                    Defines the beginner of a straight line
 * @param                   {Object} obj                UI element
 */
function startLine(obj)
{
    let node = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);

    mouse.down        = true;
    mouse.coord.start = [ parseInt(node[1]), parseInt(node[2]) ];
}

/**
 * endLine()                {Method}                    Defines the ending of a straight line 
 * @param                   {Object} obj                UI element
 */
function endLine(obj)
{
    let node   = obj.id.match(/(?<val1>\d+)-(?<val2>\d+)/);
    let coords = new Array();

    mouse.down      = false;
    mouse.coord.end = [ parseInt(node[1]), parseInt(node[2]) ];

    coords.push(mouse.coord.start[0], mouse.coord.start[1], mouse.coord.end[0], mouse.coord.end[1]);

    (!arrayEquals(mouse.coord.start, mouse.coord.end))      // Confirm that a line's being drawn are actual lines... not a 'dots'
        ? sacredArrays.line.pushPop(coords)
        : null;

    drawSacredArray();
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
 * insertHtmlContent()      {Method}                    Insert HTML content in accordance with the window ID passed
 * @param                   {string} windowId           Window to populate HTML content
 */
function insertHtmlContent(windowId)
{
    switch (windowId)
    {
        case 'about':

            if (!config.windows.about)
            {
                document.getElementById('content').innerHTML +=
                    `<div id="program-name"><b>Program:</b> ${config.about.Library}</div>`
                    + `<div id="version-number"><b>Version:</b> ${config.about.Version}</div>`
                    + `<div id="updated-last"><b>Updated:</b> ${config.about.Updated}</div>`
                    + `<div id="about-copyright">${config.about.Copyright}, all rights reserved</div>`;

                config.windows.about = true; 
            }

            break;

        case 'properties':

            if (!config.windows.properties)
            {
                config.windows.properties = true; 
            }

            break;

        case 'ui-overlay':

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

            drawUnderlay();

            break;

        default:

            console.log(`${windowId} is not supported by the insertHtmlContent() function!`);
            
            break;
    }
}

/**
 * showWindow()             {Method}                    Display the window that's passed via it's windowId param
 * @param                   {string} windowId           Window to populate HTML content
 * @param                   {string} align              How the window should be aligned against the main window
 */
function showWindow(windowId, align = 'center')
{
    let element = document.getElementById(`${windowId}-window`);

    (element.style.display == 'none')
        ? setElementsPosition()
        : element.style.setProperty('display', 'none');

    function setElementsPosition()
    {
        element.style.setProperty('display', 'block');

        switch (align)
        {
            case 'top':

                element.style.setProperty('margin-left', `${(config.domWindow.width  - parseInt(element.style.width))  / 2}px`);
                element.style.setProperty('margin-top',  '0px');

                break;

            case 'right':

                element.style.setProperty('margin-left', `${(config.domWindow.width  - parseInt(element.style.width))}px`);
                element.style.setProperty('margin-top',  `${(config.domWindow.height - parseInt(element.style.height)) / 2}px`);

                break;

            case 'bottom':

                element.style.setProperty('margin-left', `${(config.domWindow.width  - parseInt(element.style.width))  / 2}px`);
                element.style.setProperty('margin-top',  `${(config.domWindow.height - parseInt(element.style.height))}px`);

                break;

            case 'left':

                element.style.setProperty('margin-left', '0px');
                element.style.setProperty('margin-top',  `${(config.domWindow.height - parseInt(element.style.height)) / 2}px`);

                break;

            case 'center':

                element.style.setProperty('margin-left', `${(config.domWindow.width  - parseInt(element.style.width))  / 2}px`);
                element.style.setProperty('margin-top',  `${(config.domWindow.height - parseInt(element.style.height)) / 2}px`);

                break;
        }
    }

    insertHtmlContent(windowId);
}

////////                            UI Listeners                                            ////////

/**
 * Bind class inputs
 */
for (var i = 0; i <= inputArray.class.length - 1; i++)
{
    document.querySelectorAll(inputArray.class[i]).forEach(item =>
    {
        item.addEventListener('click', event =>
        {
            setRegion(item);
        });
    });
}

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
    showWindow('about');
});

window.addEventListener("mousemove", function(event) 
{
    clearCanvas();
    drawSacredArray();

    if (mouse.down)
    {
        document.body.style.cursor = 'crosshair';

        drawLine(
            centerX(matrix[mouse.coord.start[0]][mouse.coord.start[1]][0]),
            centerY(matrix[mouse.coord.start[0]][mouse.coord.start[1]][1]), 
            event.clientX, 
            event.clientY, 
        );

        (mouse.existingLineIndex != -1 && sacredArrays.line.length > 0)
           ? drawLine(
                centerX(matrix[sacredArrays.line[mouse.existingLineIndex][0]][sacredArrays.line[mouse.existingLineIndex][1]][0]), 
                centerY(matrix[sacredArrays.line[mouse.existingLineIndex][0]][sacredArrays.line[mouse.existingLineIndex][1]][1]), 
                centerX(matrix[sacredArrays.line[mouse.existingLineIndex][2]][sacredArrays.line[mouse.existingLineIndex][3]][0]), 
                centerY(matrix[sacredArrays.line[mouse.existingLineIndex][2]][sacredArrays.line[mouse.existingLineIndex][3]][1]), 
                7, 
                '255, 25, 25'
            )
           : mouse.existingLineIndex = -1;
    }
});
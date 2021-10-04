"use strict";

/**
 * config                   {Object}                    Object literal variables
 * @var                     {Number} step               Primarily iterator for step animations
 * @var                     {DOM Element} canvas        DOM element
 * @var                     {DOM Element} context       CanvasRenderingContext2D for drawing surface on the <canvas> element
 * @var                     {Object} domWindow          DOM window width, height, center x-coordinate, and center y-coordinate
 * @var                     {Object} about              General Information concerning  
 */
var config = 
{
    canvas :  document.getElementById("canvas"),
    context : document.getElementById("canvas").getContext("2d"),
    domWindow : 
    {
        width:    window.innerWidth  - 18,
        height:   window.innerHeight - 4,
        xCenter: (window.innerWidth  / 2),
        yCenter: (window.innerHeight / 2),
    },
    about : 
    {
        Author:  'Justin Don Byrne',
        Created: 'September, 11 2021',
        Library: 'Sacred Geometry',
        Updated: 'October, 3 2021',
        Version: '1.0.11',
    }
}

////////        Resize              ////////

/**
 * resize()                 {Method}                    Adjusts the canvas element in relation to the DOM window
 */
function resize() 
{
    document.getElementById("canvas").width  = `${config.domWindow.width}`;
    document.getElementById("canvas").height = `${config.domWindow.height}`;
}

//---   binding of resize()   ---//
window.addEventListener('resize', resize);
window.addEventListener('load',   resize);

////////        Resize              ////////

////////////////////////////////////////////////////////////
////////        PROTOTYPE FUNCTIONS                 ////////
////////////////////////////////////////////////////////////

/**
 * containsArray()          {Array:Method}              Validates whether the root array contains the passed array passed.
 * @param                   {Array} val                 Array sequence to validate
 * @return                  {Boolean}                   True | False
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
 * indexOfArrayValues()     {Array:Method}              Returns the index of the array values (e.g.: [1, 2]) passed
 * @param                   {Array} val                 Array sequence to validate
 * @return                  {Int}                       Integer representing the index where the passed array matches 
 */
Array.prototype.indexOfArrayValues = function(val) 
{
    var index = -1;

    for (var i = 0; i < this.length; i++) 
    {
        if (JSON.stringify(this[i]) === JSON.stringify(val))
        {
            index = i;
        }
    }

    return index;
}

/**
 * pushPop()                {Array:Method}              Pushes or splices the value passed via the val param
 * @param                   {Int} val                   Value to be pushed or spliced
 */
Array.prototype.pushPop            = function(val)
{
    const index = this.indexOf(val);

    (index > -1) 
        ? this.splice(index, 1) 
        : this.push(val);

    this.sort((a, b) => a - b);    
}

/**
 * pushPopAdv()             {Array:Method}              Pushes or splices the value passed via the val param into a multidimensional array
 * @param                   {Int} val                   Value to be parsed into the appropriate array values
 */
Array.prototype.pushPopAdv         = function(val)
{
    var compareValues = [1, 6];

    for (var i = 1; i <= 10; i++)
    {
        var n = 1 + (6 * (i - 1));

        if (val >= compareValues[0] && val <= compareValues[1])
        {
            var index = sacredArrays.circle.indexOfArrayValues([i, val - n]);

            if (index > -1)
            {
                sacredArrays.circle.splice(index, 1);
            }
            else
            {
                sacredArrays.circle.push([i, val - n]);

                break;
            }
        }

        compareValues[0] = compareValues[0] + 6;
        compareValues[1] = compareValues[1] + 6;
    }

    sacredArrays.circle.sort();
}

////////////////////////////////////////////////////////////
////////        GLOBAL VARIABLES                    ////////
////////////////////////////////////////////////////////////

const padding       = 10;
const zonaPolusada  = config.domWindow.height / 2 - padding;
const magNo         = 0.578;                                /// << === TODO: Convert from Array element to const var 

const spirit = 
{
    radius : zonaPolusada / 5
}

var matrix       = 
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

var colorArray   = 
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

var sacredArrays  = 
{
    circle:   [],
    triangle: [],
    hexagon:  [],
    line:     []
}

////////        Debug Output        ////////

console.log('configuration: ', config);
console.log('matrix: ',        matrix);
console.log('colorArray: ',    colorArray);

////////////////////////////////////////////////////////////
////////        GENERAL FUNCTIONS                   ////////
////////////////////////////////////////////////////////////

function parseToSequence(val)
{
    var result        = null;
    var compareValues = [1, 6];

    for (var i = 1; i <= 10; i++)
    {
        var n = 1 + (6 * (i - 1));

        if (val >= compareValues[0] && val <= compareValues[1]) 
        { 
            result = i;

            break; 
        }

        compareValues[0] = compareValues[0] + 6;
        compareValues[1] = compareValues[1] + 6;
    }

    return result;
}

////////////////////////////////////////////////////////////
////////        GRAPHIC ALGORITHMS                  ////////
////////////////////////////////////////////////////////////

/**
 * drawCircle()             {Method}                    Draws a simple circle
 * @param                   {number}  x                 x - axis; center
 * @param                   {number}  y                 y - axis; center
 * @param                   {number}  radius            Circle radius
 * @param                   {number}  startAngle        Start angle
 * @param                   {number}  endAngle          End angle
 * @param                   {boolean} counterClockwise  Draw circle clockwise
 * @param                   {string}  color             RGB number set; r, g, b
 * @param                   {number}  alpha             Alpha (transparency) number value
 * @param                   {boolean} centerDot         Include a center dot
 */
function drawCircle(x, y, radius, startAngle, endAngle, counterClockwise, color, alpha = 0.3, centerDot = true) 
{
    config.context.beginPath();
    
    config.context.arc(
        config.domWindow.xCenter + x, 
        config.domWindow.yCenter + y, 
        radius, 
        startAngle, 
        endAngle, 
        counterClockwise
    );
    
    config.context.stroke();

    config.context.fillStyle = "rgba(" + color + ", " + alpha + ")";

    config.context.fill();

    // Center Dot
    (centerDot)
        ? drawCircle(x, y, (radius / 4) * 0.18, startAngle, endAngle, counterClockwise, color, alpha, false)
        : null;
}

/**
 * drawLine()               {Method}                    Draws a simple circle
 * @param                   {number}  startX            X coordinate position to begin drawing at
 * @param                   {number}  StartY            Y coordinate position to begin drawing at
 * @param                   {number}  endX              X coordinate position to finish drawing at
 * @param                   {number}  endY              Y coordinate position to finish drawing at
 */
function drawLine(startX, startY, endX, endY) 
{
    config.context.beginPath();                    // Resets the current path

    config.context.moveTo(startX, startY);         // Creates a new subpath with the given point
    config.context.lineTo(endX, endY);             // Adds the given point to the subpath

    // config.context.closePath();                    // Marks subpath as closed
    config.context.stroke();                       // strokes the subpaths with the current stroke style
}

/**
 * clearCanvas()            {Method}                    Clears the entire canvas element       
 */
function clearCanvas()
{
    config.context.clearRect(0, 0, config.canvas.width, config.canvas.height);
}

/**
 * seedCanvas()             {Method}                    Seeds the page with the root (spirit) node along with the zona polusada
 */
function seedCanvas()
{
    setTimeout(function() 
    { 
        // Zona Polusada
        drawCircle(
            matrix[0][0][0], 
            matrix[0][0][1], 
            zonaPolusada, 
            0, 
            2 * Math.PI, 
            false, 
            "255,255,255"
        );

        // (0) - Spirit
        drawCircle(
            null, 
            null, 
            spirit.radius, 
            0, 
            2 * Math.PI, 
            false, 
            colorArray[0]
        );

    }, 1);
}

////////////////////////////////////////////////////////////
////////        CYCLING ALGORITHMS                  ////////
////////////////////////////////////////////////////////////

/**
 * fullCircleCycle()        {Method}                    Cycles through the 'whole circle array'
 */
function fullCircleCycle()
{
    setTimeout(function() 
    { 
        for (var i = 1; i <= matrix.length - 1; i++) 
        {
            for (var j = 0; j <= matrix[i].length - 1; j++) 
            {
                drawCircle(
                    matrix[i][j][0],        
                    matrix[i][j][1], 
                    spirit.radius, 
                    0, 
                    2 * Math.PI, 
                    false, 
                    colorArray[i]
                );

            }

        }

    }, 1);
}

/**
 * fullHexagonCycle()       {Method}                    Cycles through the 'whole hexagon array'
 */
function fullHexagonCycle()
{
    setTimeout(function() 
    { 
        for (var i = 1; i <= matrix.length - 1; i++) 
        {
            for (var j = 0; j <= matrix[i].length - 1; j++) 
            {
                var n = j + 1;

                if (n == 6) { n = 0; }

                drawLine(
                    config.domWindow.xCenter + matrix[i][j][0],        
                    config.domWindow.yCenter + matrix[i][j][1], 
                    config.domWindow.xCenter + matrix[i][n][0], 
                    config.domWindow.yCenter + matrix[i][n][1]
                );

            }

        }

    }, 1);
}

/**
 * cycleSacredArray() {Method}                    Cycles through the 'single circle array'
 */
function cycleSacredArray()
{
    clearCanvas();

    // Circle 
    setTimeout(function() 
    { 
        clearCanvas();

        for (var i = 0; i <= sacredArrays.circle.length - 1; i++) 
        {
            drawCircle(
                matrix[sacredArrays.circle[i][0]][sacredArrays.circle[i][1]][0],            // xCoord
                matrix[sacredArrays.circle[i][0]][sacredArrays.circle[i][1]][1],            // yCoord
                spirit.radius, 
                0, 
                2 * Math.PI, 
                false, 
                colorArray[sacredArrays.circle[i][0]]
            );

        }

    }, 1);

    // Hexagon
    setTimeout(function() 
    { 
        for (var i = 0; i <= sacredArrays.hexagon.length - 1; i++) 
        {
            for (var j = 0; j <= matrix[sacredArrays.hexagon[i]].length - 1; j++) 
            {
                var n = j + 1;

                if (n == 6) { n = 0; }

                drawLine(
                    config.domWindow.xCenter + matrix[sacredArrays.hexagon[i]][j][0], 
                    config.domWindow.yCenter + matrix[sacredArrays.hexagon[i]][j][1], 
                    config.domWindow.xCenter + matrix[sacredArrays.hexagon[i]][n][0], 
                    config.domWindow.yCenter + matrix[sacredArrays.hexagon[i]][n][1]
                );

            }

        }

    }, 1);
}

////////////////////////////////////////////////////////////
////////        SORTING ALGORITHMS                  ////////
////////////////////////////////////////////////////////////

/**
 * sortArray()              {Method}                    Sorts various shape arrays                    
 * @param                   {String} shape              String signifying the type of shape to sort
 * @param                   {Int|Array} value           Value(s) to be sorted through the below (corresponding) algorithms
 */
function sortArray(shape, value)
{
    var n = parseInt(value);

    switch (shape)
    {
        case 'sequencedCircle':

            var min = (n + (5 * (n - 1)));
            var max = (n + (5 * n));

            for (var i = min; i <= max; i++)
            {
                document.querySelectorAll('.single-circle-checkbox')[i - 1].click();
            }

            break;

        case 'singleCircle':

            sacredArrays.circle.pushPopAdv(value);

            break;

        case 'hexagon':

            sacredArrays.hexagon.pushPop(value);

            break;

        default:
            console.log(`${shape} is not supported by this sortArray() function!`)
    }
}

////////////////////////////////////////////////////////////
////////        UI Event Listeners                  ////////
////////////////////////////////////////////////////////////

/**
 * single-circle-checkbox   {Event Listener}            Listen for 'single circle' selections
 * @param                   {Object} item               UI element; and its value
 */
document.querySelectorAll('.single-circle-checkbox').forEach(item => 
{
    item.addEventListener('click', event => 
    {
        sortArray('singleCircle', item.value);

        cycleSacredArray();
    });
});

/**
 * sequenced-circle-checkbox{Event Listener}            Listen for 'sequenced circle' selections
 * @param                   {Object} item               UI element; and its value
 */
document.querySelectorAll('.sequenced-circle-checkbox').forEach(item => 
{
    item.addEventListener('click', event => 
    {
        sortArray('sequencedCircle', item.value);
    });
});

/**
 * hexagon-checkbox         {Event Listener}            Listen for 'hexagon' selections
 * @param                   {Object} item               UI element; and its value
 */
document.querySelectorAll('.hexagon-checkbox').forEach(item => 
{
    item.addEventListener('click', event => 
    {
        sortArray('hexagon', item.value);

        cycleSacredArray();
    });
});

/**
 * full-circle-cycle        {Event Listener}            Listen for 'full circle' selection
 * @param                   {Object} item               UI element; and its value
 */
document.getElementById('full-circle-cycle').addEventListener("click", function()
{
    clearCanvas();

    (document.getElementById('full-circle-cycle-checkbox').checked) 
        ? (sacredArrays.circle.length > 0) 
            ? cycleSacredArray() : null 
        : fullCircleCycle();
});

/**
 * full-hexagon-cycle       {Event Listener}            Listen for 'full hexagon' selection
 * @param                   {Object} item               UI element; and its value
 */
document.getElementById('full-hexagon-cycle').addEventListener("click", function()
{
    clearCanvas();

    (document.getElementById('full-hexagon-checkbox').checked)
        ? (sacredArrays.hexagon.length > 0)
            ? cycleSacredArray() : null
        : fullHexagonCycle();
});

/**
 * clear-canvas             {Event Listener}            Listen for 'clear canvas' selection
 * @param                   {object} item               UI element; and its value
 */
document.getElementById('clear-canvas').addEventListener("click", function()
{
    clearCanvas();

    (document.getElementById('full-circle-cycle-checkbox').checked) 
        ? el.click() 
        : null;
});
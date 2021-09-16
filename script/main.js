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
    step : 0,
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
        Updated: 'September, 16 2021',
        Version: '1.0.0',
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
////////        Init                                ////////
////////////////////////////////////////////////////////////

/**
 * containsArray()          {Array:Method}              Validates whether the root array contains the passed array passed.
 * @param                   {Array} val                 Array sequence to validate
 * @return                  {Boolean}                   True | False
 */
Array.prototype.containsArray = function(val) 
{
    var hash = {};

    for (var i = 0; i < this.length; i++) 
    {
        hash[this[i]] = i;
    }

    return hash.hasOwnProperty(val);
}

/**
 * indexOfArray()           {Array:Method}              Returns the index of the array passed
 * @param                   {Array} val                 Array sequence to validate
 * @return                  {Int}                       Integer representing the index where the passed array matches
 */
Array.prototype.indexOfArray = function(val) 
{
    var array = singleCircleArray.filter(n => n);

    var index = -1;

    for (var i = 0; i < array.length; i++) 
    {
        if (JSON.stringify(array[i]) === JSON.stringify(val))
        {
            index = i;
        }
    }

    return index;
}

////////////////////////////////////////////////////////////
////////        Global Variables                    ////////
////////////////////////////////////////////////////////////

const padding       = 10;
const zonaPolusada  = config.domWindow.height / 2 - padding;
const magNo         = [0.578];

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
            - (spirit.radius / magNo[0]) / 2,       // x    (2) - (02) 
            - (spirit.radius / 2)                   // y
        ],[
            - (spirit.radius / magNo[0]) / 2,       // x    (3) - (03) 
            spirit.radius / 2                       // y
        ],[
            null,                                   // x    (4) - (04) 
            spirit.radius                           // y
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (5) - (05) 
            spirit.radius / 2                       // y
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (6) - (06) 
            - (spirit.radius / 2)                   // y
        ]
    ],[     // 2nd Rotation | Egg of Life   
        [
            - (spirit.radius / magNo[0]) / 2,       // x    (1) - (07)
            - (spirit.radius * 1.5),                // y
        ],[
            - (spirit.radius / magNo[0]),           // x    (2) - (08)
            null,                                   // y
        ],[
            - (spirit.radius / magNo[0]) / 2,       // x    (3) - (09)
            spirit.radius * 1.5,                    // y
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (4) - (10)
            spirit.radius * 1.5,                    // y
        ],[
            spirit.radius / magNo[0],               // x    (5) - (11)
            null,                                   // y
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (6) - (12)
            - (spirit.radius * 1.5),                // y
        ]
    ],[     // 3rd Rotation
        [
            null,                                   // x    (1) - (13)
            - (spirit.radius * 2),                  // y
        ],[    
            - (spirit.radius / magNo[0]),           // x    (2) - (14)
            - spirit.radius,                        // y
        ],[    
            - (spirit.radius / magNo[0]),           // x    (3) - (15)
            spirit.radius,                          // y
        ],[    
            null,                                   // x    (4) - (16)
            spirit.radius * 2,                      // y
        ],[    
            spirit.radius / magNo[0],               // x    (5) - (17)
            spirit.radius,                          // y
        ],[    
            spirit.radius / magNo[0],               // x    (6) - (18)
            - spirit.radius,                        // y
        ]
    ],[     // 4th Rotation
        [
            null,                                   // x    (1) - (19)
            - (spirit.radius * 3),                  // y    
        ],[
            - (spirit.radius / magNo[0]) * 1.5,     // x    (2) - (20)
            - (spirit.radius * 1.5),                // y    
        ],[
            - (spirit.radius / magNo[0]) * 1.5,     // x    (3) - (21)
            spirit.radius * 1.5,                    // y    
        ],[
            null,                                   // x    (4) - (22)
            spirit.radius * 3,                      // y    
        ],[
            (spirit.radius / magNo[0]) * 1.5,       // x    (5) - (23)
            spirit.radius * 1.5,                    // y    
        ],[
            (spirit.radius / magNo[0]) * 1.5,       // x    (6) - (24)
            - (spirit.radius * 1.5),                // y    
        ]
    ],[     // 5th Rotation
        [
            - (spirit.radius / magNo[0]) / 2,       // x    (1) - (25)
            - (spirit.radius * 2.5),                // y    
        ],[
            - (spirit.radius / magNo[0]) * 1.5,     // x    (2) - (26)
            - (spirit.radius / 2),                  // y    
        ],[
            - (spirit.radius / magNo[0]),           // x    (3) - (27)
            spirit.radius * 2,                      // y    
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (4) - (28)
            spirit.radius * 2.5,                    // y    
        ],[
            (spirit.radius / magNo[0]) * 1.5,       // x    (5) - (29)
            spirit.radius / 2,                      // y    
        ],[
            spirit.radius / magNo[0],               // x    (6) - (30)
            - (spirit.radius * 2),                  // y    
        ]
    ],[     // 6th Rotation
        [
            - (spirit.radius / magNo[0]),           // x    (1) - (31)
            - (spirit.radius * 2),                  // y    
        ],[
            - (spirit.radius / magNo[0]) * 1.5,     // x    (2) - (32)
            spirit.radius / 2,                      // y    
        ],[
            - (spirit.radius / magNo[0]) / 2,       // x    (3) - (33)
            spirit.radius * 2.5,                    // y    
        ],[
            spirit.radius / magNo[0],               // x    (4) - (34)
            spirit.radius * 2,                      // y    
        ],[
            (spirit.radius / magNo[0]) * 1.5,       // x    (5) - (35)
            - (spirit.radius / 2),                  // y    
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (6) - (36)
            - (spirit.radius * 2.5),                // y    
        ]
    ],[     // 7th Rotation
        [
            null,                                   // x    (1) - (37)
            - (spirit.radius * 4),                  // y    
        ],[
            - (spirit.radius / magNo[0]) * 2,       // x    (2) - (38)
            - (spirit.radius * 2),                  // y    
        ],[
            - (spirit.radius / magNo[0]) * 2,       // x    (3) - (39)
            spirit.radius * 2,                      // y    
        ],[
            null,                                   // x    (4) - (40)
            spirit.radius * 4,                      // y    
        ],[
            (spirit.radius / magNo[0]) * 2,         // x    (5) - (41)
            spirit.radius * 2,                      // y    
        ],[
            (spirit.radius / magNo[0]) * 2,         // x    (6) - (42)
            - (spirit.radius * 2),                  // y    
        ]
    ],[     // 8th Rotation
        [
            - (spirit.radius / magNo[0]) / 2,       // x    (1) - (43)
            - (spirit.radius * 3.5),                // y    
        ],[
            - (spirit.radius / magNo[0]) * 2,       // x    (2) - (44)
            - (spirit.radius),                      // y    
        ],[
            - (spirit.radius / magNo[0]) * 1.5,     // x    (3) - (45)
            spirit.radius * 2.5,                    // y    
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (4) - (46)
            spirit.radius * 3.5,                    // y    
        ],[
            (spirit.radius / magNo[0]) * 2,         // x    (5) - (47)
            spirit.radius,                          // y    
        ],[
            (spirit.radius / magNo[0]) * 1.5,       // x    (6) - (48)
            - (spirit.radius * 2.5),                // y    
        ]
    ],[     // 9th Rotation
        [
            - (spirit.radius / magNo[0]),           // x    (1) - (49)
            - (spirit.radius * 3),                  // y    
        ],[
            - (spirit.radius / magNo[0]) * 2,       // x    (2) - (50)
            null,                                   // y    
        ],[
            - (spirit.radius / magNo[0]),           // x    (3) - (60)
            spirit.radius * 3,                      // y    
        ],[
            (spirit.radius / magNo[0]),             // x    (4) - (70)
            spirit.radius * 3,                      // y    
        ],[
            (spirit.radius / magNo[0]) * 2,         // x    (5) - (71)
            null,                                   // y    
        ],[
            spirit.radius / magNo[0],               // x    (6) - (72)
            - (spirit.radius * 3),                  // y    
        ]
    ],[     // 10th Rotation
        [
            - (spirit.radius / magNo[0]) * 1.5,     // x    (1) - (73)
            - (spirit.radius * 2.5),                // y    
        ],[
            - (spirit.radius / magNo[0]) * 2,       // x    (2) - (74)
            spirit.radius,                          // y    
        ],[
            - (spirit.radius / magNo[0]) / 2,       // x    (3) - (75)
            spirit.radius * 3.5,                    // y    
        ],[
            (spirit.radius / magNo[0]) * 1.5,       // x    (4) - (76)
            spirit.radius * 2.5,                    // y    
        ],[
            (spirit.radius / magNo[0]) * 2,         // x    (5) - (77)
            - (spirit.radius),                      // y    
        ],[
            (spirit.radius / magNo[0]) / 2,         // x    (6) - (78)
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

var sacredArray  = 
{
    circle:  [],
    hexagon: [],
    line:    []
}

var singleCircleArray = new Array();

var circleArray  = [];
var hexagonArray = [];
var lineArray    = [];

var checkboxes   = [];

////////        Debug Output        ////////

console.log('configuration: ', config);
console.log("matrix ",         matrix);
console.log("colorArray",      colorArray);

/**
 * seedCanvas()             {Method}                    Seeds the page with the root (spirit) node along with the zona polusada
 */
function seedCanvas()
{
    setTimeout(function() 
    { 
        // Zona Polusada
        drawCircle(
            matrix[0][0][0],        // x
            matrix[0][0][1],        // y
            zonaPolusada,           // radius
            0,                      // startAngle
            2 * Math.PI,            // endAngle
            false,                  // counterClockwise
            false,                  // centerDot
            "255,255,255"           // color
        );

        // (0) - Spirit
        drawCircle(
            null,                   // x
            null,                   // y
            spirit.radius,          // radius
            0,                      // startAngle
            2 * Math.PI,            // endAngle
            false,                  // counterClockwise
            false,                  // centerDot
            colorArray[0]           // color
        );

    }, 1);
}

/**
 * drawCircle()             {Method}                    Draws a simple circle
 * @param                   {number}  x                 x - axis; center
 * @param                   {number}  y                 y - axis; center
 * @param                   {number}  radius            Circle radius
 * @param                   {number}  startAngle        Start angle
 * @param                   {number}  endAngle          End angle
 * @param                   {boolean} counterClockwise  Draw circle clockwise
 * @param                   {boolean} centerDot         Include a center dot
 */
function drawCircle(x, y, radius, startAngle, endAngle, counterClockwise, centerDot, color, alpha = 0.3) 
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

    if (centerDot) 
    {
        config.context.beginPath()

        config.context.arc(
            config.domWindow.xCenter + x, 
            config.domWindow.yCenter + y, 
            (radius / 4) * 0.18, 
            startAngle, 
            endAngle, 
            counterClockwise
        );
        
        config.context.stroke();
    }
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

////////////////////////////////////////////////////////////
////////        Cycling Algorithms                  ////////
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
 * cycleHexagonArray()      {Method}                    Cycles through the 'hexagon array'
 */
function cycleHexagonArray()
{
    setTimeout(function() 
    { 
        clearCanvas();

        for (var i = 0; i <= hexagonArray.length - 1; i++) 
        {
            for (var j = 0; j <= matrix[hexagonArray[i]].length - 1; j++) 
            {
                var n = j + 1;

                if (n == 6) { n = 0; }

                drawLine(
                    config.domWindow.xCenter + matrix[hexagonArray[i]][j][0], 
                    config.domWindow.yCenter + matrix[hexagonArray[i]][j][1], 
                    config.domWindow.xCenter + matrix[hexagonArray[i]][n][0], 
                    config.domWindow.yCenter + matrix[hexagonArray[i]][n][1]
                );

            }

        }

    }, 1);
}

/**
 * cycleSingleCircleArray() {Method}                    Cycles through the 'single circle array'
 */
function cycleSingleCircleArray()
{
    setTimeout(function() 
    { 
        clearCanvas();
        // seedCanvas();

        for (var i = 0; i <= singleCircleArray.length - 1; i++) 
        {
            for (var j = 0; j <= singleCircleArray[i].length - 1; j++)
            {
                drawCircle(
                    matrix[singleCircleArray[i][0]][singleCircleArray[i][1]][0],            // xCoord
                    matrix[singleCircleArray[i][0]][singleCircleArray[i][1]][1],            // yCoord
                    spirit.radius, 
                    0, 
                    2 * Math.PI, 
                    false, 
                    false,
                    colorArray[singleCircleArray[i][0]]
                );

            }

        }

    }, 1);
}

/**
 * cycleCircleArray()       {Method}                    Cycles through the 'circle array'
 */
function cycleCircleArray()
{
    setTimeout(function() 
    { 
        clearCanvas();
        // seedCanvas();

        for (var i = 0; i <= circleArray.length - 1; i++) 
        {
            for (var j = 0; j <= matrix[circleArray[i]].length - 1; j++) 
            {
                drawCircle(
                    matrix[circleArray[i]][j][0],        
                    matrix[circleArray[i]][j][1], 
                    spirit.radius, 
                    0, 
                    2 * Math.PI, 
                    false, 
                    false,
                    colorArray[circleArray[i]]
                );

            }

        }

    }, 1);
}

////////////////////////////////////////////////////////////
////////        Sorting Algorithms                  ////////
////////////////////////////////////////////////////////////

/**
 * hexagonArraySort()       {Method}                    Sorts the 'hexagon array'
 * @param                   {Int} value                 Hexagon array element within the 'matrix'
 */
function hexagonArraySort(value)
{
    const index = hexagonArray.indexOf(value);

    if (index > -1)
    {
        hexagonArray.splice(index, 1);
    } 
    else 
    {
        hexagonArray.push(value);
    }

    hexagonArray.sort((a,b) => a-b);

    cycleHexagonArray();
}

/**
 * circleArraySort()        {Method}                    Sorts the 'circle array'
 * @param                   {Int} value                 Circle array element within the 'matrix'
 */
function circleArraySort(value)
{
    const index = circleArray.indexOf(value);

    if (index > -1)
    {
        circleArray.splice(index, 1);
    } 
    else 
    {
        circleArray.push(value);
    }

    circleArray.sort((a, b) => a - b);

    cycleCircleArray();
}

/**
 * singleCircleArraySort()  {Method}                    Sorts the 'single circle array'
 * @param                   {Int} value                 Single circle element based on total 60 elements
 */
function singleCircleArraySort(value)
{
    var compareValues = [1, 6];

    for (var i = 1; i <= 10; i++)
    {
        var n = 1 + (6 * (i - 1));

        if (value >= compareValues[0] && value <= compareValues[1])
        {
            const index = singleCircleArray.indexOfArray([i, value - n]);

            if (index > -1)
            {
                singleCircleArray.splice(index, 1);
            }
            else
            {
                singleCircleArray.push([i, value - n]);
                break;
            }
        }

        compareValues[0] = compareValues[0] + 6;
        compareValues[1] = compareValues[1] + 6;
    }

    singleCircleArray.sort();
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
        singleCircleArraySort(item.value);

        cycleSingleCircleArray();

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
        circleArraySort(item.value);

        cycleCircleArray();

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
        hexagonArraySort(item.value);

        cycleHexagonArray();

    });
});

/**
 * full-circle-cycle        {Event Listener}            Listen for 'full circle' selection
 * @param                   {Object} item               UI element; and its value
 */
document.getElementById('full-circle-cycle').addEventListener("click", function()
{
    var el = document.getElementById('full-circle-cycle-checkbox');

    if (el.checked)
    {
        clearCanvas();

        if (circleArray.length > 0)
        {
            cycleCircleArray();
        }
    }
    else 
    {
        clearCanvas();

        seedCanvas();

        fullCircleCycle();
    }
});

/**
 * full-hexagon-cycle       {Event Listener}            Listen for 'full hexagon' selection
 * @param                   {Object} item               UI element; and its value
 */
document.getElementById('full-hexagon-cycle').addEventListener("click", function()
{
    var el = document.getElementById('full-hexagon-checkbox');

    if (el.checked)
    {
        clearCanvas();

        if (hexagonArray.length > 0)
        {
            cycleHexagonArray();
        }
    }
    else 
    {
        clearCanvas();

        // seedCanvas();

        fullHexagonCycle();
    }
});

/**
 * clear-canvas             {Event Listener}            Listen for 'clear canvas' selection
 * @param                   {object} item               UI element; and its value
 */
document.getElementById('clear-canvas').addEventListener("click", function()
{
    var el = document.getElementById('full-circle-cycle-checkbox');

    clearCanvas();

    if (el.checked)
    {
        el.click();
    }
});
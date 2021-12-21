# Changelog
All notable changes to this project will be documented in this file.

## [1.11.55] - 2021-12-20
### Added
- about window and showAbout() trigger
- checked menu detection and appropriate trigger/clear when clearing canvas
- toggleSequenceCheckboxes() toggles 'on' or 'off' the complete underlying circles for each sequence passed via the sequence param
- pushPopPattern() pushes & pops values passed in from the 'patterns' drop-down 
- toggleSequence() Value to be identified within a circle's sequence

### Changed
- 'clear-canvas' event listener to clear sacredArray object along with canvas
- parseToSequence() modified to optimize Array.prototype.pushPopAdv()

## [1.10.49] - 2021-12-08
### Changed
- pushPopSacredArray() to fix sequencing bug

## [1.10.48] - 2021-12-05
### Added
- centerX() orients the offset value passed with the canvas elements center x coordinate
- centerY() orients the offset value passed with the canvas elements center y coordinate

### Changed
- Array.prototype.pushPopAdv() optimized internal algorithm
- expanded global mouse object for additional UI features
- expanded 'mousemove' event listener to implement visual erasing feature
- getRadialGradient() optimized with object parameters rather than single variables
- drawCircle() optimized with object parameters

## [1.10.41] - 2021-11-28
### Added
- unhighlitRegion() to un-highlight UI elements
- startLine() defines the beginner of a straight line
- endLine() defines the ending of a straight line 

### Changed
- activateRegion() to highlightRegion()
- highlightRegion() optimization
- Array.prototype.indexOfArrayValues() to Array.prototype.indexOfArray()
- Array.prototype.indexOfArray() updated to handle line variances
- Array.prototype.pushPop() updated to include array values being passed

## [1.8.35] - 2021-11-24
### Added
- circle object with master config
- activateUnderlay() method to highlight the key parameters
- clearUnderlay() method to clear the underlay
- getRadialGradient() method to return a radial gradient for context.fillStyle()

### Changed
- uiElementPos() to get UI element window positions
- insertUIElements() to insert UI elements

### Removed
- zona polusada UI element
- all timers

## [1.7.28] - 2021-11-17
### Added 
- canvas-underlay element
- drawOutline() & canvas-underlay to draw circular outlines
- favicon
- drawUnderlayCircle() method to handle canvas-underlay circles; only
- canvas-pre-ender element

### Changed
- drawCircle() added strokeColor & strokeAlpha params, removed counterClockwise param
- sortArray() to pushPopSacredArray()
- Array.prototype.pushPopAdv() to include seed variable of 0
- resize() to setupEnvironment()

### Removed
- seedCanvas() method

## [1.5.20] - 2021-11-15
### Added
- insertUIElements() method to embed UI div objects for point & click interface
- uiElementPos() method to return x & y coordinate values to position each UI element
- setRegion() inserts the (clicked) circle within the sacredArray
- activateRegion() draws a semi-transparent circle over the designed area
- clickCheckbox() programmatically clicks on a specific checkbox

### Changed
- optimized UI Listeners into array groups

### Fixed
- fixed resize() to include new UI overlay ordinates

## [1.4.15] - 2021-10-10
### Added
- cycleFull() method to replace/merge fullCircleCycle() and fullHexagonCycle() methods
- toggleCheckbox() method
- toggleCheckboxes() method
- convert2digStr() prototype method
- isSequenceFull() prototype method

### Changed
- merged Sequenced Circles in with Single circles to streamline UI

### Removed 
- fullCircleCycle() method
- fullHexagonCycle() method

### Fixed
- multiple cycling under sequenced shapes

## [1.0.11] - 2021-10-03
### Changed
- HTML nav menu structure
- indexOfArray() to indexOfArrayValues() and refined method's structure
- unnecessary magNo array to single variable
- cycleSingleCircleArray() to cycleSacredArray()
- trimmed down 'Center Dot' conditional algorithm within the drawCircle algorithm

### Fixed
- cycleSacredArray() method so it doesn't double draw each individual circle

### Added
- Array.prototype.pushPop() method
- hexagon cycle array to cycleSacredArray()

### Removed 
- Unnecessary clearCanvas() functions from main script
- cycleCircleArray()
- cycleHexagonArray()

## [1.0.0] - 2021-09-16
### Added
- Directory structure
- CHANGELOG.md
- README.md
- index.html
- styles; scss and css
- main.js

---

[1.10.49]: 2021-12-08 [CURRENT REVISION]

[1.10.48]: 2021-12-05 [2288256](https://github.com/Justin-Byrne/SacredGeometry/commit/2288256) implemented line eraser highlighting, and minor optimizations

[1.10.41]: 2021-11-28 [412aa0d](https://github.com/Justin-Byrne/SacredGeometry/commit/412aa0d) line drawing implemented & minor optimizations

[1.8.35]:  2021-11-24 [841fb2f](https://github.com/Justin-Byrne/SacredGeometry/commit/841fb2f) added UI elements, including performance & proficiency tweaks

[1.7.28]:  2021-11-17 [40feafa](https://github.com/Justin-Byrne/SacredGeometry/commit/40feafa) added canvas-underlay & revised existing features

[1.5.20]:  2021-11-15 [d26ee64](https://github.com/Justin-Byrne/SacredGeometry/commit/d26ee64) add UI and optimization elements

[1.4.15]:  2021-10-10 [37c5ff6](https://github.com/Justin-Byrne/SacredGeometry/commit/37c5ff6) new algorithms to assist sorting along with minor bug fixes

[1.0.11]:  2021-10-03 [de2f86d](https://github.com/Justin-Byrne/SacredGeometry/commit/de2f86d) various bug fixes and trimming down 

[1.0.0]:   2021-09-16 [9babc19](https://github.com/Justin-Byrne/SacredGeometry/commit/9babc19) initial upload
---

## Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## Copyright

![Byrne-Systems](http://byrne-systems.com/content/static/cube_sm.png)

==Byrne-Systems © 2021 - All rights reserved.==
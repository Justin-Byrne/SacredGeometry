# Changelog
All notable changes to this project will be documented in this file.

<<<<<<< HEAD
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

=======
>>>>>>> parent of d26ee64... add UI and optimization elements
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
<<<<<<< HEAD
[1.5.20]: 2021-11-15 [CURRENT REVISION]

[1.4.15]: 2021-10-10 [37c5ff6](https://github.com/Justin-Byrne/SacredGeometry/commit/37c5ff6) new algorithms to assist sorting along with minor bug fixes
=======
[1.4.15]: 2021-10-10 [CURRENT REVISION]
>>>>>>> parent of d26ee64... add UI and optimization elements

[1.0.11]: 2021-10-03 [de2f86d](https://github.com/Justin-Byrne/SacredGeometry/commit/de2f86d) various bug fixes and trimming down 

[1.0.0]: 2021-09-16 [9babc19](https://github.com/Justin-Byrne/SacredGeometry/commit/9babc19) initial upload
---

## Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## Copywrite

![Byrne-Systems](http://byrne-systems.com/content/static/cube_sm.png)

==Byrne-Systems © 2021 - All rights reserved.==
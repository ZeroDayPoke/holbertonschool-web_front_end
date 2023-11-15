# Holberton School Web Front End - Flexbox Project

## Overview

The Flexbox Project is a comprehensive exercise in mastering CSS Flexbox, a powerful layout tool in modern web design. This project focuses on transitioning from traditional CSS layouts to the more dynamic and responsive Flexbox system. It encompasses a range of tasks that gradually build up a deep understanding of Flexbox's capabilities, particularly in creating responsive and adaptable web layouts.

## Learning Objectives

At the end of this project, participants are expected to explain:

- The concept and application of Flexbox in CSS.
- How to convert float positioning to flex display.
- Horizontal and vertical alignment of elements using Flexbox.
- The distinction between main and cross axes in Flexbox.
- Properties applicable to flex elements vs. flex containers.
- The use of shorthand properties in Flexbox.
- Creating layouts with Flexbox in mind.

## Project Tasks

### Task 0: Add Display Flex

- **Files**: `0-index.html`, `0-styles.css`
  - Implemented `display: flex` for the `.row` class.
  - Removed `float: left` and `row::after` declarations for a Flexbox-based layout.

### Task 1: Add New Classes on Sections

- **Files**: `1-index.html`, `1-styles.css`
  - Added specific class names to different sections (`section-services`, `section-works`, etc.) for targeted styling.

### Task 2: Reverse Order of Latest News Cards

- **Files**: `2-index.html`, `2-styles.css`
  - Applied `flex-direction: row-reverse` to the `.row` class within the `section-latest-news` class for a reverse card order.

### Task 3: Simplify Services List

- **Files**: `3-index.html`, `3-styles.css`
  - Modified the Services section to have a single `ul` with `flex-wrap: wrap` for a responsive list layout.

### Task 4: Adjust Spacing Between Flex Service Items

- **Files**: `4-index.html`, `4-styles.css`
  - Adjusted column widths using `calc()` and set margins for the `.col-1-3` and `.col-1-2` selectors for balanced spacing.

### Task 5: Flexify the Header

- **Files**: `5-index.html`, `5-styles.css`
  - Wrapped the header elements in a `header-container` div and applied Flexbox for spacing and alignment.
  - Removed obsolete CSS variables and rules related to the header layout.

### Task 6: Flexify the Navbar

- **Files**: `6-index.html`, `6-styles.css`
  - Applied `display: flex` to the `.nav` class.
  - Adjusted styling for `.nav-item` and added margin rules for better alignment.

### Task 7: Align Center Logo and Navbar

- **Files**: `7-index.html`, `7-styles.css`
  - Set `align-items: center` in the `header-container` class for vertical centering of the header elements.

### Task 8: Simplify the Hero Banner

- **Files**: `8-index.html`, `8-styles.css`
  - Updated the hero section with Flexbox properties for improved layout and alignment.

### Task 9: Better Alignment in About Us

- **Files**: `9-index.html`, `9-styles.css`
  - Added `align-self: center` to all columns in the About Us section for consistent alignment.

### Task 10: Updating Hero Styles and Article Structure

- **Files**: `10-article.html`, `10-styles.css`
  - Reorganized the hero section and article styles for a more structured layout using Flexbox.

### Task 11: Update the New Hero Banner

- **Files**: `11-article.html`, `11-styles.css`
  - Enhanced the hero banner with new background images and Flexbox properties for better visual appeal and structure.

### Task 12: Structure of the Main Article

- **Files**: `12-article.html`, `12-styles.css`
  - Structured the main article using Flexbox, focusing on layout and spacing for content and aside elements.

### Task 13: Meta List in the Aside Section

- **Files**: `13-article.html`, `13-styles.css`
  - Created a meta information list in the aside section and styled it for better presentation and readability.

### Task 14: Add Share Social Icons

- **Files**: `14-article.html`, `14-styles.css`
  - Integrated social share icons into the article, enhancing the user interaction aspect of the page.

## Installation and Usage

No special installation is required. To view the project:

1. Clone the repository.
2. Open the `.html` files in a web browser to see the Flexbox layout and design.

## Authors

- **Chris Stamper** - [ZeroDayPoke](https://github.com/ZeroDayPoke)

## Acknowledgments

- Holberton School for providing the project guidelines and support.

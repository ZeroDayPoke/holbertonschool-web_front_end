# Holberton School Web Front End - Accessibility Project

## Project Description

This project focuses on web accessibility, emphasizing the importance of creating web content that is accessible to all users, including those with disabilities. It covers the implementation of ARIA (Accessible Rich Internet Applications) attributes, understanding WCAG (Web Content Accessibility Guidelines) conformance levels, and the utilization of various tools to ensure web accessibility.

## Learning Objectives

By the end of this project, students are expected to understand:

- The main purpose of ARIA in web development.
- WCAG conformance levels (A, AA, and AAA) and their importance.
- The significance of web accessibility.
- Tools and practices to enhance web accessibility.

## Project Tasks

### Task 0: Make the "Works" Card Focus Visible

- **Files**: `keyboard/01-index.html`, `keyboard/01-styles.css`
  - Updated CSS to improve focus visibility on the "Work" section cards when using the keyboard for navigation.

### Task 1: Add Skip Links

- **Files**: `skip-links/01-index.html`, `skip-links/01-article.html`, `skip-links/01-styles.css`
  - Implemented skip links for primary navigation and main content for better keyboard navigation.
  - Added ARIA labels and CSS for visually hiding the skip links until they are focused.

### Task 2: Elements Must Have Sufficient Color Contrast

- **File**: `fix-a11y/01-index.html`
  - Adjusted color contrast in the HTML file to meet accessibility standards.

### Task 3: Documents Must Have `<title>` Element

- **File**: `fix-a11y/02-index.html`
  - Added a `<title>` element to aid in document navigation and improve accessibility.

### Task 4: `<html>` Element Must Have Lang Attribute

- **File**: `fix-a11y/03-index.html`
  - Added the `lang` attribute to the `<html>` tag for language specification.

### Task 5: Images Must Have Alternate Text

- **File**: `fix-a11y/04-index.html`
  - Added `alt` text to images for better accessibility.

### Task 6: Form Elements Must Have Labels

- **File**: `fix-a11y/05-index.html`
  - Added labels to form elements for improved accessibility.

### Task 7: Links Must Have Discernible Text

- **File**: `fix-a11y/06-index.html`
  - Enhanced link accessibility with `aria-label`.

### Task 8: Zooming and Scaling Must Not Be Disabled

- **File**: `fix-a11y/07-index.html`
  - Adjusted meta viewport settings to allow zooming and scaling.

### Task 9: Proper Heading Levels and Landmarks

- **File**: `fix-a11y/08-index.html`
  - Corrected heading levels and ensured content is contained by landmarks.

### Task 10: Document Must Have One Main Landmark

- **File**: `fix-a11y/09-index.html`
  - Structured the document with appropriate semantic HTML5 tags like `<header>`, `<nav>`, `<main>`, and `<footer>`.

### Task 11: More Than 2 Elements Become List

- **File**: `fix-a11y/10-index.html`
  - Transformed certain elements into list items for better accessibility.

## Installation and Usage

1. Clone the repository to your local machine.
2. Open the `.html` files in a web browser to see the accessibility implementations.

## Authors

- **Chris Stamper** - [ZeroDayPoke](https://github.com/ZeroDayPoke)

## Acknowledgments

- Holberton School for providing the project guidelines and support.

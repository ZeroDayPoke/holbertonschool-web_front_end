# Holberton School Web Front End Project - HTML5 Forms

## Project Description

This project focuses on creating, styling, and understanding HTML5 forms. It aims to teach how to create usable and accessible forms using HTML5 and CSS. Key concepts covered include the selection of appropriate input types, form field constraints using regular expressions, and styling inputs for different form states like invalid, valid, and required fields.

## Learning Objectives

Upon completion, participants should be able to:

- Create HTML5 forms.
- Choose suitable input types for different data fields.
- Use regular expressions to constrain form fields.
- Style inputs for various form states (invalid, valid, required).
- Construct a comment form.
- Develop a simple search form.
- Understand the principles of creating usable and accessible forms.

## Project Tasks

### Task 0: Basic Form Structure

- **File**: `01-article.html`
  - Created a new `<section>` with the class `post-comments`.
  - Added a header with a heading level 2 and a paragraph indicating required fields.
  - Constructed a form with action `#` and method `post`.

- **File**: `01-styles.css`
  - Styled the `post-comments` class with specific width, margin, and padding.
  - Applied `font-variant: small-caps` to the `section-title` class within `post-comments`.
  - Set up basic form styles with display, flex-direction, and padding properties.

### Task 1: Form Structure and Styling

- **Files**: `02-article.html`, `02-styles.css`
  - Added fieldsets for personal information and comments, each with visually hidden legends.
  - Created and styled divs with specific classes for layout control.
  - Applied flexbox properties to fieldsets for structured form layout.

### Task 2: Labels and Input Containers

- **Files**: `03-article.html`, `03-styles.css`
  - Introduced labels for first name, last name, email, title, and comment fields.
  - Created divs with class `form-field` and `form-field-container` for input fields.
  - Styled labels for better cursor interaction and display properties.

### Task 3: Input Creation and Styling

- **Files**: `04-article.html`, `04-styles.css`
  - Added input fields for personal details and comment with specific attributes like `type`, `name`, `id`, `placeholder`, `pattern`, and `required`.
  - Styled all text and email inputs, and textareas for a consistent and accessible user interface.
  - Implemented specific CSS for input focus states and placeholder styling.

### Task 4: Form Icons and Helper Text

- **Files**: `05-article.html`, `05-styles.css`
  - Added empty `<i>` elements with `form-field-icon` class in each `form-field-container`.
  - Included helper text paragraphs in both fieldsets to guide user input.
  - Styled `form-group` class for padding and background, with focus state handling.
  - Applied styles to `form-field-container` and `form-field-icon` classes.
  - Added specific styles to `form-help` class and its focus state within `form-group`.

### Task 5: HTML/CSS Error Handling

- **Files**: `06-article.html`, `06-styles.css`
  - Defined custom properties for error (red) and valid (green) colors.
  - Implemented advanced CSS for form validation using pseudo-elements and classes.
  - Styled valid and invalid input states with appropriate colors and icons.
  - Adjusted button styles for primary class.

### Task 6: Search Form Implementation

- **Files**: `07-article.html`, `07-styles.css`
  - Added a search form in the navigation with a search button containing an SVG icon.
  - Styled the search form, button, and icon for a seamless integration with the nav bar.
  - Implemented dynamic styling for the search input to expand on focus and contract otherwise.

## Installation and Usage

No special installation is required. To view the project:

1. Clone the repository.
2. Open the `.html` files in a web browser to see the forms and their styles.

## Authors

- **Chris Stamper** - [ZeroDayPoke](https://github.com/ZeroDayPoke)

## Acknowledgments

- Holberton School for providing the project guidelines and support.

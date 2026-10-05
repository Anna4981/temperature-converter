Temperature Converter

A simple web app that converts temperatures between Celsius, Fahrenheit and Kelvin. Type a value in any box and the other two update instantly.

Built as the Day 5 task of the Veda Technology Web Development Internship.

Features
Inputs for Celsius, Fahrenheit and Kelvin
Live conversion using the input event (no button needed)
Separate JavaScript function for each conversion formula
Input validation:
Letters and symbols show an error message
Values below absolute zero are rejected
Invalid input never breaks the interface
Results rounded to 2 decimal places
"Clear all" button to reset the form
Responsive layout that works on phones and desktops
Technologies Used
HTML5
CSS3
JavaScript (vanilla)
Conversion Formulas
From	To	Formula
Celsius	Fahrenheit	F = C × 9/5 + 32
Celsius	Kelvin	K = C + 273.15
Fahrenheit	Celsius	C = (F − 32) × 5/9
Fahrenheit	Kelvin	K = (F − 32) × 5/9 + 273.15
Kelvin	Celsius	C = K − 273.15
Kelvin	Fahrenheit	F = (K − 273.15) × 9/5 + 32
Project Structure
temperature-converter/
├── index.html   # Page structure and form inputs
├── style.css    # Styling and layout
├── script.js    # Conversion functions, validation and DOM updates
└── README.md    # Project documentation
How to Run
Download or clone the repository:
   git clone https://github.com/Anna4981/temperature-converter.git
Open the project folder.
Double-click index.html to open it in your browser.

No installation or build step is required.

Example Conversions
Celsius	Fahrenheit	Kelvin
0	32	273.15
25	77	298.15
100	212	373.15
-40	-40	233.15
What I Learned
Using form inputs and the input event for live updates
Writing reusable functions for calculations
Validating numeric input and handling edge cases such as absolute zero
Updating the page with the DOM
Author

Anna Makgabo Thantsha Web Development Intern, Veda Technology GitHub: Anna4981# temperature-converter

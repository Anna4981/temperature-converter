// ---- Conversion functions (one per conversion) ----
function celsiusToFahrenheit(c) { return c * 9 / 5 + 32; }
function celsiusToKelvin(c)     { return c + 273.15; }
function fahrenheitToCelsius(f) { return (f - 32) * 5 / 9; }
function fahrenheitToKelvin(f)  { return (f - 32) * 5 / 9 + 273.15; }
function kelvinToCelsius(k)     { return k - 273.15; }
function kelvinToFahrenheit(k)  { return (k - 273.15) * 9 / 5 + 32; }

// ---- DOM references ----
const inputs = {
  celsius:    document.getElementById("celsius"),
  fahrenheit: document.getElementById("fahrenheit"),
  kelvin:     document.getElementById("kelvin")
};
const errors = {
  celsius:    document.getElementById("celsius-error"),
  fahrenheit: document.getElementById("fahrenheit-error"),
  kelvin:     document.getElementById("kelvin-error")
};

// Lowest physically possible value in each unit (absolute zero)
const absoluteZero = { celsius: -273.15, fahrenheit: -459.67, kelvin: 0 };

// For each source unit: which functions fill the other two boxes
const conversions = {
  celsius:    { fahrenheit: celsiusToFahrenheit, kelvin: celsiusToKelvin },
  fahrenheit: { celsius: fahrenheitToCelsius,    kelvin: fahrenheitToKelvin },
  kelvin:     { celsius: kelvinToCelsius,        fahrenheit: kelvinToFahrenheit }
};

// ---- Helpers ----
function formatNumber(n) {
  return String(Number(n.toFixed(2)));
}

function clearErrors() {
  for (const unit in inputs) {
    inputs[unit].classList.remove("invalid");
    errors[unit].textContent = "";
  }
}

function clearOthers(source) {
  for (const unit in inputs) {
    if (unit !== source) inputs[unit].value = "";
  }
}

function showError(unit, message) {
  inputs[unit].classList.add("invalid");
  errors[unit].textContent = message;
}

// ---- Main handler ----
function handleInput(source) {
  clearErrors();
  const text = inputs[source].value.trim();

  // Empty box: just empty the others
  if (text === "") {
    clearOthers(source);
    return;
  }

  // Still typing a minus sign or decimal point: wait quietly
  if (text === "-" || text === "." || text === "-.") {
    clearOthers(source);
    return;
  }

  // Only accept plain numbers such as 25, -40, 3.5, .5
  if (!/^-?(\d+\.?\d*|\.\d+)$/.test(text)) {
    showError(source, "Please enter a valid number.");
    clearOthers(source);
    return;
  }

  const value = parseFloat(text);

  if (value < absoluteZero[source]) {
    showError(source, "That is below absolute zero (" + absoluteZero[source] + ").");
    clearOthers(source);
    return;
  }

  // Convert and fill the other two boxes
  for (const target in conversions[source]) {
    const result = conversions[source][target](value);
    inputs[target].value = formatNumber(result);
  }
}

// ---- Events ----
for (const unit in inputs) {
  inputs[unit].addEventListener("input", function () {
    handleInput(unit);
  });
}

document.getElementById("reset").addEventListener("click", function () {
  for (const unit in inputs) inputs[unit].value = "";
  clearErrors();
  inputs.celsius.focus();
});
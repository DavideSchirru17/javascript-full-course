"use strict";
console.log("-----DEBUGGING ERRORS 61 ----");

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //! C) FIX
    // !how to convert string in number
    // * Number()
    value: Number(prompt("Degrees celsius: ")),
  };
  console.log(measurement);
  console.table(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  // debugger; // put the debugger js brouswer will open authomatically the sources debugging console
  return kelvin;
};

// A) IDENTIFICA BUG google chrome
console.log(measureKelvin());

//? to print into git but sintesi
// - Number() : convert string into a number
// - debugging google chrome - debugger -

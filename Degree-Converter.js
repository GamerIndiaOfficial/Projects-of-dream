while (true) {
  confirm("Fahrenheit or Celcius");
  let preference = prompt("You may also type 'f' and 'c' ").toLowerCase();
  if (preference === "fahrenheit" || preference === "celcius" || preference === "f" || preference === "c") {
    let Number = parseFloat(prompt("Which number you want to convert?"));
    if (preference === "fahrenheit" || preference === "f") {
      let answer = Number - 32;
      answer = answer * 5;
      answer = answer / 9;
      answer = Math.round(answer * 100) / 100;
      confirm(`${Number}° fahrenheit is ${answer}° celcius`);
      break;
    } else if (preference === "celcius" || preference === "c") {
      let answer = Number * 9;
      answer = answer / 5;
      answer = answer + 32;
      answer = Math.round(answer * 100) / 100;
      confirm(`${Number}° celcius is ${answer}° fahrenheit`);
      break;
    }
  } else {
    confirm("You may try again");
    continue;
  }
}
// This program is made by GamerIndiaOfficial
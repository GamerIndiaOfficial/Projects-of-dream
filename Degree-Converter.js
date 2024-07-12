while (true) {
  confirm("Which you want to convert from?");
  confirm("Fahrenheit or Celcius");
  confirm("You can also type 'f' and 'c'");
  let preference = prompt("Type here: ").toLowerCase();
  if (preference === "fahrenheit" || preference === "celcius" || preference === "f" || preference === "c") {
    confirm("Okay now which number you want converted");
    let Number = parseFloat(prompt("Write your number in the format of 0.00: "));
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
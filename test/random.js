function alphabetPosition(text) {
  text = text.toLowerCase();
  text = text.replace(/[^a-z]/g, "");
  var result = "";

  for (var i = 0; i < text.length; i++) {
    result += text.charCodeAt(i) - 96 + " ";
  }
  return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map(material => material.length));
// Expected output: Array [8, 6, 7, 9]

let dialogueIndex = 0;
const dialogueLines = [
  "Jude: Hey there! Welcome to my world.",
  "Jude: It's nice to meet you.",
  "Jude: Feel free to ask me anything.",
  "Jude: Or just hang out with me."
];

function nextDialogue() {
  dialogueIndex = (dialogueIndex + 1) % dialogueLines.length;
  document.getElementById("dialogue-text").innerText = dialogueLines[dialogueIndex];
}

function verifyAge() {
  const allow = confirm("Are you really 18 or older?");
  if (allow) {
    document.getElementById("remove-clothes").disabled = false;
    document.getElementById("remove-bra").disabled = false;
    alert("Access granted.");
  } else {
    alert("Access denied.");
  }
}

function toggleClothes() {
  const clothes = document.getElementById("jude-clothes");
  clothes.style.display = clothes.style.display === "none" ? "block" : "none";
}

function toggleBra() {
  const bra = document.getElementById("jude-bra");
  bra.style.display = bra.style.display === "none" ? "block" : "none";
}

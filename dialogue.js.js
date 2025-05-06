const dialogueLines = [
  "Hey there! I'm Jude. Nice to meet you!",
  "This is just a small demo of our visual novel.",
  "We're working on perfecting the core system first.",
  "Once that's ready, the story can truly begin!",
  "Click again if you're ready to continue..."
];

let currentLine = 0;

function advanceDialogue() {
  const dialogueText = document.getElementById("dialogueText");
  if (currentLine < dialogueLines.length) {
    dialogueText.textContent = dialogueLines[currentLine];
    currentLine++;
  } else {
    dialogueText.textContent = "[End of demo dialogue.]";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  advanceDialogue();
});

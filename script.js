function toggleSettings() {
  const panel = document.getElementById('settingsPanel');
  panel.classList.toggle('hidden');
}

function verifyAge() {
  const checkbox = document.getElementById('toggle18');
  const bra = document.getElementById('bra');
  const clothes = document.getElementById('clothes');

  if (checkbox.checked) {
    const age = prompt("Are you 18 or older? Type your age:");
    if (parseInt(age) >= 18) {
      clothes.style.display = "none";
      bra.style.display = "block";
    } else {
      alert("You must be 18 or older to view this content.");
      checkbox.checked = false;
    }
  } else {
    clothes.style.display = "block";
    bra.style.display = "block";
  }
}

// Initial visibility
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('bra').style.display = 'block';
  document.getElementById('clothes').style.display = 'block';
});

// Bitcoin Tip Jar — a tiny educational app.
// Not a real wallet. Does not touch the Bitcoin network. Text in, text out.

const generateBtn = document.getElementById("generate-btn");
const resultCard = document.getElementById("result-card");
const tipName = document.getElementById("tip-name");
const tipAddress = document.getElementById("tip-address");
const tipMessage = document.getElementById("tip-message");

generateBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!address) {
    alert("Please enter a Bitcoin or Lightning address.");
    return;
  }

  tipName.textContent = name ? `${name}'s Tip Jar` : "Anonymous Tip Jar";
  tipAddress.textContent = address;
  tipMessage.textContent = message || "";

  resultCard.hidden = false;

  // NOTE: There is currently no way to copy `address` without manual
  // text selection. See Issue: "Add a Copy Address Button".
});


let submit = document.querySelector("#submit");

submit.addEventListener("click", function () {
  collectEntryItems();
});

function collectEntryItems() {
  const myJournalEntry = {
    date: document.getElementById("date").value,
    concepts: document.getElementById("concepts").value,
    entry: document.getElementById("entry").value,
    mood: document.getElementById("mood").value
  };
  addJournalEntry(myJournalEntry);
}


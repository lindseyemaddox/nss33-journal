
const entries = [];

let output = document.getElementById("output");

function addJournalEntry(entryObject) {
  entries.push(entryObject);
  console.log("entries", entries);
  buildTheDom();
}

let buildTheDom = () => {
  output.innerHTML = "";
  for (var i = 0; i < entries.length; i++) {
    let journalEntry = entries[i];
    output.innerHTML += entryComponent(journalEntry);
  }
};

let entryComponent = (journalEntry) => {
  return `
    <div class="journalEntry">
      <h2>${journalEntry.concepts}</h2>
      <h4>${journalEntry.date}</h4>
      <p>${journalEntry.entry}</p>
      <h3>Mood: ${journalEntry.mood}</h3>
    </div>
  `;
};

let submit = document.getElementById("submit");

function collectEntryItems() {
  const myJournalEntry = {
    date: document.getElementById("date").value,
    concepts: document.getElementById("concepts").value,
    entry: document.getElementById("entry").value,
    mood: document.getElementById("mood").value
  };
  addJournalEntry(myJournalEntry);
}

submit.addEventListener("click", function () {
  collectEntryItems();
});
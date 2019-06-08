// code that is responsible for creating the journal entry HTML component

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


function saveCurrentMood(mood) {
  const today = new Date().toLocaleDateString();
  let moods = JSON.parse(localStorage.getItem('moodTracker')) || {};
  moods[today] = mood;
  localStorage.setItem('moodTracker', JSON.stringify(moods));
  displayMoodHistory();
}

function displayMoodHistory() {
  const moodEntry = document.getElementById('mood-history');
  moodEntry.innerHTML = '';
  const moods = JSON.parse(localStorage.getItem('moodTracker')) || {};
  Object.entries(moods).forEach((item) => {
    const [date, mood] = item
      const entry = document.createElement('div');
      entry.className = 'mood-entry';
      entry.innerHTML = `<span>${date}</span><span>${mood}</span>`;
      moodEntry.appendChild(entry);
  });
}

document.addEventListener('DOMContentLoaded', displayMoodHistory);
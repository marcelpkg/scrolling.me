document
  .getElementById("calculateButton")
  .addEventListener("click", calculateTime);

function calculateTime() {
  const screenTimeInput = document.getElementById("screenTime");
  const resultElement = document.getElementById("result");
  const screenTime = parseFloat(screenTimeInput.value);

  if (isNaN(screenTime) || screenTime < 0 || screenTime > 24) {
    alert("Please enter a valid number between 0 and 24.");
    return;
  }

  const daysPerMonth = (screenTime * 7 * 4.34) / 24;
  const daysPerYear = (screenTime * 365) / 24;
  const hoursPerYear = screenTime * 365;
  const percentOfYear = (screenTime / 24) * 100;
  const lifetimeYears = (screenTime * 80 * 365) / (24 * 365);

  resultElement.innerHTML = `
        <p>Based on your average daily screen time of ${screenTime.toFixed(
          1
        )} hours:</p>
        <ul>
            <li>You spend <span class="highlight">${daysPerMonth.toFixed(
              1
            )} days</span> per month on your phone, <span class="highlight">${daysPerYear.toFixed(
    1
  )} days</span> yearly.</li>
            <li>That's <span class="highlight">${hoursPerYear.toFixed(
              0
            )} hours</span> annually.</li>
            <li>It accounts for <span class="highlight">${percentOfYear.toFixed(
              1
            )}%</span> of your year.</li>
            <li>Over an 80-year lifespan, you'll lose <span class="highlight">${lifetimeYears.toFixed(
              1
            )} years</span> to screen time.</li>
        </ul>
    `;
}

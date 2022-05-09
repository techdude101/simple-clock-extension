(function () {
  /**
   * Display the date and time every 500 milliseconds.
   */
  function displayDateAndTime() {
    let dateContainer = document.querySelector("#popup-content-date");
    let timeContainer = document.querySelector("#popup-content-time");

    let now = new Date();
    dateContainer.textContent = now.toLocaleDateString();
    timeContainer.textContent = now.toLocaleTimeString();

    setInterval(() => {
      now = new Date();
      dateContainer.textContent = now.toLocaleDateString();
      timeContainer.textContent = now.toLocaleTimeString();
    }, 500);
  }

  /**
   * When the popup loads, display the date and time.
   */
  browser.tabs
    .executeScript({})
    .then(displayDateAndTime)
    .catch(displayDateAndTime);
})();

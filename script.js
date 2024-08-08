document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  const adviceElement = document.querySelector(".advice");
  const idValueElement = document.querySelector(".id-value");

  button.addEventListener("click", async () => {
    try {
      // Fetch advice from the API
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      const advice = data.slip.advice;
      const adviceId = data.slip.id;

      // Update the DOM
      adviceElement.textContent = advice;
      idValueElement.textContent = `#${adviceId}`;
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  });
});

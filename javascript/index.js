const data = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.info("🚀 ~ .then ~ data:", data)
    data.slice(0, 5).forEach((todo) => {
      const li = document.createElement("li");
      li.textContent = todo.title;
      document.getElementById("todo").appendChild(li);
    });
  })
  .catch((error) => {
    console.error(error);
  });

function filterByEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

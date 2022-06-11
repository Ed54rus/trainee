window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  let topic = [];
  let tr = body.querySelectorAll("tr");
  tr.forEach((el) => {
    if (el.dataset.topic_id) {
      const obj = {
        id: +el.dataset.topic_id,
        name: el.querySelector(`#tt-${el.dataset.topic_id}`).textContent,
        link: `https://rutracker-org.appspot.com/forum/dl.php?t=${el.dataset.topic_id}`,
      };
      topic.push(obj);
    }
  });

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(topic),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

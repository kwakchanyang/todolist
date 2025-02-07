const ul2 = document.querySelector("ul");

const render = () => {
  console.log(todos);
  const data = database.getItem("todos");
  console.log(data);
  console.log(typeof data);

  const todos = JSON.parse(data);

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const btn = document.createElement("button");

    p.innerText = todo; // <p></p>
    btn.innerText = "삭제"; // <button></button>
    div.appendChild(p); // <div><p></p></div>
    div.appendChild(btn); // <div><p></p><button></button></div>
    li.appendChild(div); // <li><div><p></p><button></button></div></li>

    ul2.appendChild(li);
  }
};

render();

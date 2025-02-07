const form = document.querySelector("form");
const input = document.getElementById("input");
const btn = document.querySelector("main>form>button");

let todos = ["설거지하기", "방청소하기", "공부하는척하기"];
const database = localStorage;

const store = (todo) =>
  new Promise((resolve, reject) => {
    if (todo.length <= 0) {
      return reject({ message: "길이가 너무 짧다" });
    }

    // const newTodo = Number(todo);
    // if (newTodo === "NaN" || !newTodo) {
    //   return reject({ message: "숫자가 아닙니다." });
    // }

    // todos.push(newTodo);
    database.setItem("todos", JSON.stringify(todos));

    return resolve({ message: "할일이 추가 되었습니다." });
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = input.value;

  // 1. 할일 입력되지 않았을 때 예외처리
  if (todo.length === 0) {
    alert("할일을 입력하세요");
    return input.focus();
  }

  // 2. 할일이 1글자일 때 예외처리
  if (todo.length === 1) {
    alert("너무 짧습니다.");
    return input.focus();
  }
  // 3. console.log(todo)
  console.log(todo);
  // 4. alert로 축하메세지 전달하기
  store(todo)
    .then((Response) => alert(Response.message))
    .catch((error) => alert(error.message));
  // 5. todo값 리셋하기
  input.value = "";
  // 6. 입력창으로 focus
});



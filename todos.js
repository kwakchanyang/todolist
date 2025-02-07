form.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = input.value;
  store(todo)
    .then((repsonse) => {
      console.log(repsonse);
      alert(repsonse);
      input.value = "";
      input.focus();
     



    })
    .catch((error) => {
      console.log(error);
      alert(error.message);
      input.focus();
    })
    .then(
        ()=>{
            fetchTodos().then(
                (repsonse)=>{
                    console.log(Response)
                    const todos = Response
                    console.log(todos)
                }
            )
        }
    ).catch(
        (error)=>{
            console.log(error)
        }

    )
 
});

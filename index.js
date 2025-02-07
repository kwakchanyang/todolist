//  querySelector=HTML의 모든것을 선택할 수 있음: 태그이름,클래스명,아이디명 모두 선택가능 선택할 때 css규칙을 따라서 작성함.
// 예) class="newClass" => '.newClass'
// id="newId"=>'#id'
// ul div => 'ul div'
// ul div.newClass => 'ul div.newClass'
// const body = document.querySelector("body");
// body.style.backgroundColor = "coral";
// const h1 = document.querySelector("header h1");
// h1.style.backgroundColor = "coral";

// // getElementById = id값 그래서 그냥 ''안에 적어주면 됨
// // 예) id="item"=>('item')
// const item = document.querySelector("#item");
// item.style.border = "1px solid";

let list = ["우유", "계란", "유부초밥", "한우++"];

const rendering = () => {
  const ul = document.querySelector("ul");

  ul.innerHTML = null; // ul태그 다 사라짐

  for (
    let i = 0;
    i < list.length;
    i = i + 1 // i+=1 // i++
  ) {
    const button = document.createElement("button");

    button.innerText = "삭제";

    button.onclick = () => {
      console.log("hello its ms", list[i]);

      list.splice(i, 1);
      console.log(list);
    };

    const p = document.createElement("p");
    p.innerText = list[i];
    const div = document.createElement("div");

    div.append(p, button);
    // 밑에있는 const tag = `<li><div><p></p></div></li>`은 문자열일뿐.. 그래서 버튼 형식으로 만들고 싶어서 이것을 만드는 것임

    const li = document.createElement("li");
    li.append(div);

    ul.append(li);

    //  const tag = `
    //   <li>
    //     <div>
    //         <p>${list[i]}</p>
    //         ${button}
    //     </div>
    //   </li>

    //   `;

    //   //   console.log(tag);
    //   number = number + i;
    //   li = `${li}${tag}`; // li+=tag
  }
  // ul.innerHTML = li;
};

rendering();

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //새로고침 방지// form태그 한정
  const item = input.value;
  if (item.length === 0) {
    alert("장 볼 물건을 입력해주세요.");
    return input.focus();
  }
  //   list.push();
  list.unshift(item);

  console.log(list);

  rendering();

  input.value = "";
});

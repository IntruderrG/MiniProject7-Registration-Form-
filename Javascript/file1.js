const storeFormData = document.getElementById("form");
storeFormData.addEventListener("submit", storeData);
import { checkPassword, checkNumberLength } from "./file2.js";

function storeData(event) {
  event.preventDefault();
  let obj1 = new FormData(storeFormData);
  checkPassword(obj1.get("pwd"), obj1.get("pwd1"));
  checkNumberLength(obj1.get("mobno"));
  const storeDetails = {};
  obj1.forEach((val, inp) => {
    storeDetails[inp] = val;
  });
  console.log(storeDetails); //Object stored can to passes to database when we move further
}

const bodyEl = document.querySelector("body");
const btn = document.querySelector("button")
let currMode = "light";

btn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        bodyEl.classList.add("dark");
        bodyEl.classList.remove("light");
    }else{
        currMode = "light";
        bodyEl.classList.add("light");
        bodyEl.classList.remove("dark");
    }
    console.log(currMode);
});
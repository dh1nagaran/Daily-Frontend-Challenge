let search = document.getElementById("search");
let div = document.querySelector("div");
let countries;
async function get() {
  const response = await fetch("https://api.countrystatecity.in/v1/countries", {
    headers: {
      "X-CSCAPI-KEY":
        "971baf8c4c8173ae3e77069598a8b9601dc241797703a665e3157f3730d629af",
    },
  });
  countries = await response.json();
}
get();

search.addEventListener("input", () => {
  let data = countries.filter((f) => {
    if (
      f.name.toLowerCase() === search.value.toLowerCase() ||
      f.name.toLowerCase().indexOf(search.value.toLowerCase()) != -1 ||
      f.capital.toLowerCase() === search.value.toLowerCase() ||
      f.capital.toLowerCase().indexOf(search.value.toLowerCase()) != -1
    )
      return f;
  });
  data = data.slice(0, 5);
  console.log(data);
  const opt = document.getElementsByClassName("opt");
  while (opt.length > 0) {
    opt[0].remove();
  }
  const cap = document.getElementsByClassName("cap");
  data.map((d) => {
    let option = document.createElement("button");
    option.classList.add("opt");
    option.value = d.name;
    option.innerHTML = d.name + " ---->  " + d.capital;
    div.append(option);
    option.addEventListener("click", () => {
      search.value = option.value;
    });
  });
});

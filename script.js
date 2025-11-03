const rowList = ["Rad 1", "Rad 2", "Rad 3", "Rad 4", "Rad 5"];
const oL = document.createElement("ol");
document.body.appendChild(oL);

// const listItem = document.createElement("li");
// oL.appendChild(listItem);
// listItem.innerText= rowList;
rowList.forEach(function (item) {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  oL.appendChild(listItem);
});

const FirstItmes = oL.children[0];
oL.style.display = "flex";
oL.style.flexDirection = "column";
oL.style.alignItems = "center";
oL.style.color = "#6e6ef7";
oL.style.fontWeight = "bold ";

const firstItem = oL.children[0];
firstItem.style.display = "flex";
firstItem.style.justifyContent = "center";
firstItem.style.alignItems = "center";

firstItem.style.margin = "20px";
firstItem.style.width = "100%"; // makes it taller

firstItem.style.textAlign = "center";
firstItem.style.backgroundColor = "#b6fbb6";

const SecondItme = oL.children[1];
SecondItme.style.display = "flex";
SecondItme.style.justifyContent = "center";
SecondItme.style.alignItems = "center";

SecondItme.style.margin = "20px";
SecondItme.style.width = "100%";
SecondItme.style.height = "40px"; // makes it taller
SecondItme.style.fontSize = "24px";

SecondItme.style.textAlign = "center";
SecondItme.style.backgroundColor = "#b6fbcd";



// ------------Third Item---------------

const thirdItme = oL.children[2];
thirdItme.style.display = "flex";
thirdItme.style.justifyContent = "center";
thirdItme.style.alignItems = "center";

thirdItme.style.margin = "20px";
thirdItme.style.width = "100%";
thirdItme.style.height = "60px"; // makes it taller
thirdItme.style.fontSize = "34px";

thirdItme.style.textAlign = "center";
thirdItme.style.backgroundColor = "#b6fbe4";



// foru

const fourdItme = oL.children[3];
fourdItme.style.display = "flex";
fourdItme.style.justifyContent = "center";
fourdItme.style.alignItems = "center";

fourdItme.style.margin = "20px";
fourdItme.style.width = "100%";
fourdItme.style.height = "80px"; // makes it taller
fourdItme.style.fontSize = "44px";

fourdItme.style.textAlign = "center";
fourdItme.style.backgroundColor = "#b6fbfb";


// five

const fiveItme = oL.children[4];
fiveItme.style.display = "flex";
fiveItme.style.justifyContent = "center";
fiveItme.style.alignItems = "center";

fiveItme.style.margin = "20px";
fiveItme.style.width = "100%";
fiveItme.style.height = "100px"; // makes it taller
fiveItme.style.fontSize = "54px";

fiveItme.style.textAlign = "center";
fiveItme.style.backgroundColor = "#b6e4fb";
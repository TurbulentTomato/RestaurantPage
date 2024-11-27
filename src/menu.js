import "./menu.css";
import chholeBhaturePic from "./Chole_Bhature_At_Local_Street.jpg";
export function renderMenu(content) {
  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "Menu";
  const mainHeading = document.createElement("h2");
  mainHeading.textContent = "Main dish";
  const beverageHeading = document.createElement("h2");
  beverageHeading.textContent = "Beverages";
  const itemHeadings = [
    "Chhole Bhature",
    "Dosa",
    "Shahi Paneer",
    "Lassi",
    "Jaljeera",
    "Chhachh"
  ];
  const itemImages = [chholeBhaturePic, "", "", ""];
  const itemImageAlts = ["Chhole Bhautre photo", "Dosa photo", "Shahi paneer photo", "Lassi photo", "Jaljeera photo", "Chhachh photo"];
  const mainList = document.createElement("ul");
  const beverageList = document.createElement("ul");
  const items = [];
  const itemDescription = [
    "Chhole Bhature is one of the most popular dish liked almost all over India. Chole stands for a spiced chickpea curry and Bhatura is a soft and fluffy fried leavened bread. Chhole Bhature always make for a delicious and filling meal.",
    "It is deliciously rich, where fresh, unmelting cheese lie in a pool of creamy gravy, perfect for serving with naan or roti. The word ‘shahi’ is ‘royal or royalty’ in English. And I guarantee that this dish is true to its name. So, what are you waiting for? Go ahead, make it and treat yourself like kings and queens!",
    "A dosa, dose, dosai or dosha is a thin, savoury crepe in Indian cuisine made from a fermented batter of ground black gram and rice. Dosas are served hot, often with chutney and sambar (a lentil-based vegetable stew). Dosas are a common food in South India.",
    "Lassi is a yogurt–based beverage with a smoothie-like consistency. It has been called \"the most popular and traditional yogurt-based drink\" in India.",
    "Jaljeera and summers are synonymous. This North Indian, non-alcoholic, vegan beverage is not just popular because of its simplicity, but is yummy and has great health benefits too. Made with water, cumin and other amazing ingredients, Jaljeera drink is refreshing, easy to make and the perfect thing to cool yourself with, in the sweltering Indian heat.",
    "Chaas (chhachh) is a curd-based drink popular across the Indian subcontinent. In Magahi (Magahi Language) and Bundeli, it is called Mattha. In Rajasthani it is called ghol, in Odia it is called Ghol/Chaash."
  ];
  itemHeadings.forEach((itemHeading, index) => {
    items[index] = document.createElement("li");
    items[index].appendChild(document.createElement("h3"));
    items[index].appendChild(document.createElement("img"));
    items[index].appendChild(document.createElement("p"));
    items[index].querySelector("img").setAttribute("width", "500px");
    items[index].querySelector("img").setAttribute("height", "500px");
  })
  items.map((item, index) => {
    item.querySelector("h3").textContent = itemHeadings[index];
    item.querySelector("img").src = itemImages[index];
    item.querySelector("img").alt = itemImageAlts[index];
    item.querySelector("p").textContent = itemDescription[index];
  })
  mainList.append(...items.slice(0, 3));
  beverageList.append(...items.slice(3));
  content.append(menuHeading, mainHeading, mainList, beverageHeading, beverageList);
}

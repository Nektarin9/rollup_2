import "./index.css";
import logo from './assets/Котик_Мурлыка.png';

const h1 = document.createElement("h1")
h1.textContent = "I love JavaScript"
document.body.append(h1)
const img = document.createElement("img")
img.src = logo
h1.insertAdjacentElement("afterend", img)
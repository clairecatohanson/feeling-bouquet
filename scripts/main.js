import { Flowers } from "./Flowers.js";
import { Retailers } from "./Retailers.js";

const flowersHTML = await Flowers();
const retailersHTML = await Retailers();

const pageHtml = `
    <section id="flowers" class="block">
        <h2 class="block__heading">Flowers</h2>
        ${flowersHTML}
    </section>
    <section id="retailers" class="block">
        <h2 class="block__heading">Retailers</h2>
        ${retailersHTML}
    </section>
`;

const mainEl = document.querySelector("#main-content");
mainEl.innerHTML = pageHtml;

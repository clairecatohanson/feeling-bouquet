export const Flowers = async () => {
  const response = await fetch("http://localhost:8088/flowers");
  const flowers = await response.json();

  const flowerHtmlStrings = flowers.map((flower) => {
    return `
        <div class="flower">
            ${flower.commonName}
        </div>
    `;
  });

  let html = '<article id="flowers__list">';
  html += flowerHtmlStrings.join("");
  html += "</article>";
  return html;
};

export const Retailers = async () => {
  const response = await fetch("http://localhost:8088/retailers");
  const retailers = await response.json();

  const distributorsResponse = await fetch(
    "http://localhost:8088/distributors"
  );
  const distributors = await distributorsResponse.json();

  console.log(retailers, distributors);

  const retailerHtmlStrings = retailers.map((retailer) => {
    const distributorMatch = distributors.find((distributor) => {
      return distributor.id === retailer.distributorId;
    });
    return `
    <div class="retailer">
        ${retailer.name} purchases its flowers from ${distributorMatch.name}
    </div>`;
  });

  return retailerHtmlStrings.join("");
};

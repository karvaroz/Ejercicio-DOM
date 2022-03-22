/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";
const contanierAvocados = document.querySelector("div#container");

const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",

    }).format(price);
    return newPrice;
}

// Conexion al server por medio de una promesa
window
  .fetch(`${baseUrl}/api/avo`)
  .then((response) => response.json())
  .then((responseJson) => {
    const todosLosElementos = [];
    responseJson.data.forEach((element) => {
      const img = document.createElement("img");
      img.src = `${baseUrl}${element.image}`;
      img.className =
        "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";

      const title = document.createElement("h2");
      title.textContent = element.name;
      title.className = "text-lg text-gray-800 font-bold";
      title.addEventListener("click", () => {
        window.alert(`${element.name}`);
      });

      const price = document.createElement("div");
      price.textContent = formatPrice(element.price);
      price.className = "text-gray-700 text-sm";

      const taste = document.createElement("h3");
      taste.textContent = "Taste: " + element.attributes.taste;
      taste.className = "text-gray-700 text-sm";

      const container = document.createElement("div");
      container.append(img, title, price, taste);

    //   const priceAndTitle = document.createElement("div");
    //   priceAndTitle.className = "text-center md:text-left";
    //   priceAndTitle.appendChild(title);
    //   priceAndTitle.appendChild(price);

    //   const card = document.createElement("div");
    //   card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
    //   card.appendChild(image);
    //   card.appendChild(priceAndTitle);

      todosLosElementos.push(container);
    });
    contanierAvocados.append(...todosLosElementos);
  });

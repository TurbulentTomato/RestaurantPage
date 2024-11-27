import "./home.css";
export function renderHome(content) {
  const restaurantHeading = document.createElement("h1");
  restaurantHeading.textContent = "Rasāsvādana Bhavanam";
  const descriptionContainer = document.createElement("div");
  descriptionContainer.appendChild(document.createElement("p")).textContent = `
Nestled in the heart of the city, Rasāsvādana Bhavanam invites you on a culinary journey through the vibrant and diverse flavors of India. Our restaurant emphasizes the rich heritage and traditions of Indian cuisine, offering an extensive menu that showcases regional specialties from the north to the south, and everything in between.

As you step inside, the warm and inviting ambiance instantly transports you to the colorful streets of India. Adorned with traditional decor, intricate tapestries, and soothing classical music, Rasāsvādana Bhavanam creates the perfect backdrop for an unforgettable dining experience.

Our skilled chefs, trained in the art of Indian cooking, use only the freshest ingredients and authentic spices to prepare each dish with care. India is heaven for vegetarians. For those seeking a plant-based experience, our vegetarian and vegan options are plentiful, showcasing the bold flavors and textures that Indian cuisine has to offer.

Complement your meal with our carefully curated selection of Indian wines, craft beers, and traditional drinks like Mango Lassi or Masala Chai. Don’t forget to save room for dessert; our homemade Gulab Jamun and Saffron Kulfi are the perfect sweet finish to your meal.

Whether you’re celebrating a special occasion, enjoying a family dinner, or simply exploring new flavors, Rasāsvādana Bhavanam promises an experience that delights your palate and ignites your senses. Join us for a taste of India that you’ll savor long after your visit.
`;
  descriptionContainer.querySelector("p").classList.toggle("description");
  content.appendChild(restaurantHeading);
  content.appendChild(descriptionContainer);
}

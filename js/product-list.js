const products = [
    {
        "id": "1",
        "title": "Baby Yoda",
        "price": 10.99,
        "image": "img/baby-yoda.svg",
        "description": "An adorable figure of Baby Yoda, also known as The Child, from the popular series. This charming figure captures the beloved character's cuteness and is perfect for fans of all ages."
    },
    {
        "id": "2",
        "title": "Banana",
        "price": 9.99,
        "image": "img/banana.svg",
        "description": "A vibrant, lifelike banana that adds a touch of whimsy to any space. Made with attention to detail, it's a delightful piece for kitchen decor or as a playful addition to a child's playset."
    },
    {
        "id": "3",
        "title": "Girl",
        "price": 29.99,
        "image": "img/girl.svg",
        "description": "A beautifully crafted figure of a girl with intricate details. This figure embodies the spirit of youth and innocence, making it a wonderful gift or a decorative piece for your home."
    },
    {
        "id": "4",
        "title": "Viking",
        "price": 22.99,
        "image": "img/viking.svg",
        "description": "A fierce and majestic Viking figure, showcasing the legendary warriors of the north. With detailed armor and weaponry, this figure is a must-have for history buffs and enthusiasts of Norse culture."
    }
];

function renderProducts(products) {
  let productsDomString = '';
  for (const product of products) {
    productsDomString += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}
            </p>
            <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                </button>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector('.products__list');
  productsContainer.innerHTML = productsDomString;
}
renderProducts(products);
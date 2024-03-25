const response = await fetch('api/products.json');
const products = await response.json();
renderProducts(products);

// fetch('api/products.json')
//     .then( response => response.json() )
//     .then( products => renderProducts(products) )
//     .catch( error => console.log(error) );

function renderProducts(products, rate = 1) {
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
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
            </div>
        </article>`;
  }
  const productsContainer = document.querySelector('.products__list');
  productsContainer.innerHTML = productsDomString;
}

let currencies;
let lastRead = 0;
async function convertCurrency() {
    if (!currencies || (new Date() - lastRead > 30 * 1000) ) {
        try {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            currencies = await response.json();
        } catch (error) {
            console.error('Error: ' + error.message);
        }
        lastRead = new Date();
    }
    const convertTo = document.querySelector('.products__currency').value;
    const rate = currencies.rates[convertTo];
    renderProducts(products, rate);
}

document.querySelector('.products__currency').addEventListener('change', convertCurrency);
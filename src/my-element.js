import { Invoice } from './modules/invoice.js';

// Instancia de la factura
const invoice = new Invoice();

// Elementos del DOM
const form = document.querySelector('#customer-form');
const productSelect = document.querySelector('#product');
const quantityInput = document.querySelector('#quantity');
const addProductBtn = document.querySelector('#add-product');
const invoiceBody = document.querySelector('#invoice-body');
const totalText = document.querySelector('#total');
const payButton = document.querySelector('#pay-button');

// Agregar producto a la factura
addProductBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const [productName, productPrice] = productSelect.value.split('|');
  const quantity = parseInt(quantityInput.value);

  invoice.addProduct(productName, parseFloat(productPrice), quantity);
  updateInvoice();
});

// Pagar y resetear factura
payButton.addEventListener('click', () => {
  invoice.pay();
  updateInvoice();
});

// Actualizar tabla de factura y total
function updateInvoice() {
  invoiceBody.innerHTML = '';
  invoice.products.forEach((product) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${product.name}</td>
      <td>${product.quantity}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>$${product.subtotal.toFixed(2)}</td>
    `;
    invoiceBody.appendChild(row);
  });
  totalText.textContent = `Total (con IVA): $${invoice.total.toFixed(2)}`;
}

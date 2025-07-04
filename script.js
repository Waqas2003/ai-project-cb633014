const products = [
    { id: 1, name: "Product 1", price: 10.99, quantity: 10 },
    { id: 2, name: "Product 2", price: 9.99, quantity: 20 },
    { id: 3, name: "Product 3", price: 12.99, quantity: 5 },
];

const orders = [
    { id: 1, customerName: "John Doe", total: 50.00 },
    { id: 2, customerName: "Jane Doe", total: 30.00 },
    { id: 3, customerName: "Bob Smith", total: 20.00 },
];

const customers = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", phone: "123-456-7890" },
    { id: 2, name: "Jane Doe", email: "janedoe@example.com", phone: "098-765-4321" },
    { id: 3, name: "Bob Smith", email: "bobsmith@example.com", phone: "555-123-4567" },
];

document.addEventListener("DOMContentLoaded", () => {
    const productTable = document.getElementById("product-list");
    const orderTable = document.getElementById("order-list");
    const customerTable = document.getElementById("customer-list");

    products.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
        `;
        productTable.appendChild(row);
    });

    orders.forEach((order) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customerName}</td>
            <td>${order.total}</td>
        `;
        orderTable.appendChild(row);
    });

    customers.forEach((customer) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
        `;
        customerTable.appendChild(row);
    });
});
```

This codebase includes a basic HTML structure, CSS styles, and JavaScript code to render a POS system webpage with three sections: Products, Orders, and Customers. Each section has a table to display the respective data, and buttons to add new products, orders, or customers. The JavaScript code uses DOM manipulation to render the data in the tables.
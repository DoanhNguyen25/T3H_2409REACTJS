function HeaderComponent() {
  return `
        <div class="container">
            <h1>Vinh</h1>
            <h1>Đạt</h1>
            <h1>Nam</h1>
            <h1>Header component4</h1>
        </div>
    `;
}
const headerElements = document.getElementsByTagName("HeaderComponent"); // array

for (let item of headerElements) {
  item.innerHTML = HeaderComponent();
}

function MenuComponent() {
  return `
          <div>
             <h1>Menu</h1>
          </div>
      `;
}
const menuElements = document.getElementsByTagName("MenuComponent"); // array
for (let item of menuElements) {
  item.innerHTML = MenuComponent();
}

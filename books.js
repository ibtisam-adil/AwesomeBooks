
let booksData = [];

const addBook = document.querySelector(".add-books");

const booksAdded = document.querySelector(".books-added");

addBook.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleInput = addBook.querySelector(
    'input[type="text"][placeholder="Title"]'
  ).value;
  const authorInput = addBook.querySelector(
    'input[type="text"][placeholder="Author"]'
  ).value;

  let newBook = {
    title: titleInput,
    author: authorInput,
  };

  booksData.push(newBook);

  renderbooks();
});

function renderbooks() {
  booksAdded.innerHTML = booksData
    .map((bookData, index) => {
      return `
            <p class="title">${bookData.title}</p>
            <p class="author">${bookData.author}</p>
            <button class="remove-btn" id="${index}">remove</button>
            <div class="end-line"></div>
        `;
    })
    .join("");

  
}

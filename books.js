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
        <div class="books">
            <div class="title-author">
                <p class="title">"${bookData.title}"</p>
                <p>by</p>
                <p class="author">${bookData.author}</p>
            </div>
            <button class="remove-btn" id="${index}">remove</button>
        </div> `;
    })
    .join("");

  const removebtn = document.querySelectorAll(".remove-btn");
  removebtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      booksData = booksData.filter((a, index) => {
        return index !== parseInt(e.target.id);
      });
      renderbooks();
    });
  });

  if (booksData.length === 0) {
    document.querySelector(".books-added").style.display = "none";
    document.querySelector(".end-line").style.display = "none";
  } else {
    document.querySelector(".books-added").style.display = "block";
    document.querySelector(".end-line").style.display = "block";
  }
}





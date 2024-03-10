class books {
  constructor() {
    this.booksData = [];

    this.addBook = document.querySelector(".add-books");
    this.booksAdded = document.querySelector(".books-added");

    this.addBook.addEventListener("submit", (e) => {
      e.preventDefault();

      this.title = this.addBook.querySelector(
        'input[type="text"][placeholder="Title"]'
      ).value;

      this.author = this.addBook.querySelector(
        'input[type="text"][placeholder="Author"]'
      ).value;

      this.addBooks();
    });
  }

  addBooks() {
    let newBook = {
      title: this.title,
      author: this.author,
    };

    this.booksData.push(newBook);

    this.renderbooks();
  }

  removeBook(e) {
    this.booksData = this.booksData.filter((a, index) => {
      return index !== parseInt(e.target.id);
    });
    this.renderbooks();
  }

  renderbooks() {
    this.booksAdded.innerHTML = this.booksData
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
        this.removeBook(e);
      });
    });

    if (this.booksData.length === 0) {
      document.querySelector(".books-added").style.display = "none";
      document.querySelector(".end-line").style.display = "none";
    } else {
      document.querySelector(".books-added").style.display = "block";
      document.querySelector(".end-line").style.display = "block";
    }
  }
}

const muneeb = new books();

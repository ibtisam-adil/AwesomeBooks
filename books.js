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

    this.booksAdded.style.display = this.booksData.length === 0 ? "none" : "block";
    document.querySelector(".end-line").style.display = this.booksData.length === 0 ? "none" : "block";
  }
}

const muneeb = new books();

// class Books {
//     constructor() {
//       this.booksData = [];
//       this.addBookForm = document.querySelector(".add-books");
//       this.booksAdded = document.querySelector(".books-added");
  
//       this.addBookForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         const titleInput = this.addBookForm.querySelector(
//           'input[type="text"][placeholder="Title"]'
//         );
//         const authorInput = this.addBookForm.querySelector(
//           'input[type="text"][placeholder="Author"]'
//         );
//         const title = titleInput.value;
//         const author = authorInput.value;
  
//         if (title.trim() !== "" && author.trim() !== "") {
//           this.addBooks(title, author);
//           titleInput.value = "";
//           authorInput.value = "";
//         }
//       });
  
//       this.booksAdded.addEventListener("click", (e) => {
//         if (e.target.classList.contains("remove-btn")) {
//           const index = parseInt(e.target.dataset.index);
//           this.removeBook(index);
//         }
//       });
//     }
  
//     addBooks(title, author) {
//       const newBook = {
//         title: title,
//         author: author,
//       };
//       this.booksData.push(newBook);
//       this.renderBooks();
//     }
  
//     removeBook(index) {
//       this.booksData = this.booksData.filter((book, i) => i !== index);
//       this.renderBooks();
//     }
  
//     renderBooks() {
//       this.booksAdded.innerHTML = this.booksData
//         .map((bookData, index) => {
//           return `
//           <div class="books">
//               <div class="title-author">
//                   <p class="title">${bookData.title}</p>
//                   <p>by</p>
//                   <p class="author">${bookData.author}</p>
//               </div>
//               <button class="remove-btn" data-index="${index}">remove</button>
//           </div>`;
//         })
//         .join("");
  
//       this.booksAdded.style.display = this.booksData.length === 0 ? "none" : "block";
//       document.querySelector(".end-line").style.display = this.booksData.length === 0 ? "none" : "block";
//     }
//   }
  
//   const myBooks = new Books();
  

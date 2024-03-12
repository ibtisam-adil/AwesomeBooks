


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
  }
}

const muneeb = new books();

const listlink = document.querySelector(".list-link");
const addlink = document.querySelector(".add-link");
const contactlink = document.querySelector(".contact-link");
const addsection = document.querySelector(".add-section");
const hero = document.querySelector(".hero");
const booksAdded = document.querySelector(".books-added");
const contactsection = document.querySelector(".contact-section");

listlink.addEventListener("click", () => {

  if (booksAdded.innerHTML === "") {
    booksAdded.innerHTML = `<h1 class="empty">"There are currently no books added."</h1>`
  }

  if (addsection.classList.contains("hide")) {
    addsection.classList.remove("show");
  } else {
    addsection.classList.remove("show");
    addsection.classList.add("hide");
  }
  
  if (hero.classList.contains("show")) {
    hero.classList.remove("hide");
  } else {
    hero.classList.remove("hide")
    hero.classList.add("show");
  }

  if(contactsection.classList.contains("hide")){
    contactsection.classList.remove("show") 
  } else {
    contactsection.classList.remove("show")
    contactsection.classList.add("hide")
  }
});


contactlink.addEventListener("click", () => {
  if (contactsection.classList.contains("show")) {
    contactsection.classList.remove("hide");
  } else {
    contactsection.classList.remove("hide");
    contactsection.classList.add("show");
  }

  if (addsection.classList.contains("hide")) {
    addsection.classList.remove("show");
  } else {
    addsection.classList.remove("show");
    addsection.classList.add("hide");
  }

  if (hero.classList.contains("hide")) {
    hero.classList.remove("show");
  } else {
    hero.classList.remove("show");
    hero.classList.add("hide");
  }
});

addlink.addEventListener("click", () => {

  if (contactsection.classList.contains("hide")) {
    contactsection.classList.remove("show");
  } else {
    contactsection.classList.remove("show");
    contactsection.classList.add("hide");
  }

  if (addsection.classList.contains("hide")) {
    addsection.classList.remove("hide");
    addsection.classList.remove("show");
  } else {
    addsection.classList.remove("hide");
    addsection.classList.remove("show");
  }

  if (hero.classList.contains("hide")){
    hero.classList.remove("show")
  } else {
    hero.classList.remove("show")
    hero.classList.add("hide");
  }
});



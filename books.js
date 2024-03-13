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

    this.booksAdded.style.display =
      this.booksData.length === 0 ? "none" : "block";
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
    booksAdded.innerHTML = (
      `<h1 class="empty">"There are currently no books added."</h1>`
    );
  }
  hero.classList.remove("hide");
  addsection.classList.add("hide");
  contactsection.classList.add("hide");
});

contactlink.addEventListener("click", () => {
  addsection.classList.add("hide");
  hero.classList.add("hide");
  contactsection.classList.remove("hide");
});

addlink.addEventListener("click", () => {
  contactsection.classList.add("hide");
  hero.classList.add("hide");
  addsection.classList.remove("hide");
});


const dateElement = document.getElementById("date");

let currentTime = new Date();

let month = currentTime.toLocaleString("default", { month: "long" });
let date = currentTime.getDate();
let year = currentTime.getFullYear();

function displaydate() {
  dateElement.innerHTML = `
    <span>${month}</span>
    <span>${date}</span>
    <span>${year}</span>
  `;
}
displaydate();

const timeElement = document.getElementById("time");

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;

function displayTime() {
  timeElement.innerHTML = `
    <span>${hours} :</span>
    <span>${minutes} :</span>
    <span>${seconds}</span>
    <span>${ampm}</span>
  `;
}
displayTime();


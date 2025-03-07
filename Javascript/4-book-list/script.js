let books = [
  {
    name: "자바스크립트 완벽 가이드",
    author: "David Flanagan",
  },
  {
    name: "클린 코드",
    author: "Robert C. Martin",
  },
  {
    name: "알고리즘 문제 해결 전략",
    author: "구종만",
  },
];
let editIndex = null;

function addBook() {
  const bookName = document.getElementById("book-name").value.trim();
  const bookAuthor = document.getElementById("book-author").value.trim();

  if (bookName === "" || bookAuthor === "") {
    showMessage("책 이름과 책 저자를 입력하세요.");
    return;
  }

  if (editIndex !== null) {
    books[editIndex] = { name: bookName, author: bookAuthor };
    showMessage("책 수정이 완료되었습니다.");
    editIndex = null;
  } else {
    books.push({ name: bookName, author: bookAuthor });
    showMessage("책이 추가되었습니다.");
  }

  document.getElementById("book-name").value = "";
  document.getElementById("book-author").value = "";

  renderBooks();
}

function renderBooks() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = "";

  books.forEach((book, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.name}</td>
      <td>${book.author}</td>
      <td>
        <div class="actions">
          <button class="edit-button" onclick="editBook(${index})">수정</button>
          <button onclick="deleteBook(${index})">삭제</button>
        </div>
      </td>
    `;
    bookList.appendChild(row);
  });
}

function editBook(index) {
  document.getElementById("book-name").value = books[index].name;
  document.getElementById("book-author").value = books[index].author;
  editIndex = index;
}

function deleteBook(index) {
  const deletedBook = books[index];
  books.splice(index, 1);
  renderBooks();
  showMessage(`책<${deletedBook.name}>이(가) 지워졌습니다`);
}

function showMessage(message) {
  const messageBar = document.getElementById("message-bar");
  messageBar.textContent = message;
  messageBar.style.display = "block";

  setTimeout(() => {
    messageBar.style.display = "none";
  }, 2000);
}

window.onload = () => renderBooks();

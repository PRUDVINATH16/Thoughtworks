let pageInfo = {
  pageNumber: 1,
}

const fetchBooks = () => {
  let booksEndCount = pageInfo.pageNumber * 10;
  let booksStartCount = booksEndCount - 10;
  let onPageBooks = [];
  for (let i = 0; i < booksEndCount; i++) {
    if (i >= booksStartCount) {
      onPageBooks.push(booksData[i]);
    }
  }
  return onPageBooks;
}

const generateTableUI = () => {
  let books = fetchBooks();

  let tableBodyHTML = '';
  books.forEach((book) => {
    let actualDate = new Date(book.publishedDate.$date);
    tableBodyHTML += `
      <tr>
        <td>
          ${book.title ? book.title : "Data Not Found!!"}
        </td>
        <td>
          ${book.isbn ? book.isbn : "Data Not Found!!"}
        </td>
        <td>
          ${book.pageCount ? book.pageCount : "Data Not Found!!"}
        </td>
        <td>
          ${actualDate.getDate()}-${actualDate.getMonth()+1}-${actualDate.getFullYear()}
        </td>
        <td>
          ${book.price ? "$"+book.price : "Data Not Found!!"}
        </td>
        <td>
          ${book.discount ? "$"+book.discount : "Data Not Found!!"}
        </td>
        <td>
          ${book.status ? book.status : "Data Not Found!!"}
        </td>
        <td>
          ${book.authors ? book.authors : "Data Not Found!!"}
        </td>
        <td>
          ${book.categories ? book.categories : "Data Not Found!!"}
        </td>
        <td>
          <a href="${book.thumbnailUrl}">click to view</a>
        </td>
        <td>
          ${book.shortDescription ? book.shortDescription : "Data Not Found!!"}
        </td>
        <td>
          ${book.longDescription ? book.longDescription : "Data Not Found!!"}
        </td>
      </tr>
    `;
  });
  document.querySelector('.page-number').textContent = `Page Number: ${pageInfo.pageNumber}`
  document.querySelector('tbody').innerHTML = '';
  document.querySelector('tbody').innerHTML = tableBodyHTML;

}

generateTableUI();
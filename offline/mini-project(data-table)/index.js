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
    let actualDate = new Date(book?.publishedDate?.$date);
    let data = `${actualDate.getDate()} - ${actualDate.getMonth() + 1} - ${actualDate.getFullYear()}`
    tableBodyHTML += `
      <tr>
        <td>
          ${book?.title ? book.title : "Data Not Found!!"}
        </td>
        <td>
          ${book.isbn ? book.isbn : "Data Not Found!!"}
        </td>
        <td>
          ${book.pageCount ? book.pageCount : "Data Not Found!!"}
        </td>
        <td>
          ${data.includes(NaN) ? 'No date provided' : data}
        </td>
        <td>
          ${book.price ? "$" + book.price : "Data Not Found!!"}
        </td>
        <td>
          ${book.discount ? "$" + book.discount : "Data Not Found!!"}
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
          <a href="${book.thumbnailUrl}" target="_blank">click to view</a>
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

document.querySelector('.btn-next').addEventListener('click', () => {
  pageInfo.pageNumber++;
  if (pageInfo.pageNumber == 40) {
    document.querySelector('.btn-next').disabled = true;
  } else {
    document.querySelector('.btn-prev').disabled = false;
  }
  generateTableUI();
});

document.querySelector('.btn-prev').addEventListener('click', () => {
  pageInfo.pageNumber--;
  if (pageInfo.pageNumber == 1) {
    document.querySelector('.btn-prev').disabled = true;
  } else {
    document.querySelector('.btn-next').disabled = false;
  }
  generateTableUI();
});

document.querySelector('.numbers').addEventListener('click', (e) => {
  let num = String(e.target.textContent);
  if (['1', '2', '3', '4', '5', '6', '7', '8'].includes(num)) {
    pageInfo.pageNumber = Number(num);
    if (num == 1) {
      document.querySelector('.btn-prev').disabled = true;
    } else {
      document.querySelector('.btn-prev').disabled = false;
    }
    generateTableUI();
  }
});
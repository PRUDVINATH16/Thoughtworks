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

const pageNationUIGen = (st_value = 0) => {
  let nums = 0;
  st_value = Number(st_value);
  console.log(booksData.length)
  console.log(st_value >= Math.floor(booksData.length / 10) - 8, st_value, booksData.length - 8)
  if (st_value >= Math.floor(booksData.length / 10) - 8) return;
  else {
    if (st_value == 0) {
      nums = [1, 2, 3, 4, 5, 6, 7, 8];
    } else {
      nums = [st_value, st_value + 1, st_value + 2, st_value + 3, st_value + 4, st_value + 5, st_value + 6, st_value + 7];
    }

    let numsHTML = '';
    nums.forEach((num) => {
      numsHTML += `<span>${num}</span>`;
    });
    numsHTML += `<span>...</span>`;
    document.querySelector('.numbers').innerHTML = numsHTML;
  }
} 

const generateTableUI = () => {
  pageNationUIGen(pageInfo.pageNumber);
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
          ${book?.isbn ? book.isbn : "Data Not Found!!"}
        </td>
        <td>
          ${book?.pageCount ? book.pageCount : "Data Not Found!!"}
        </td>
        <td>
          ${data.includes(NaN) ? 'No date provided' : data}
        </td>
        <td>
          ${book?.price ? "$" + book.price : "Data Not Found!!"}
        </td>
        <td>
          ${book?.discount ? "$" + book.discount : "Data Not Found!!"}
        </td>
        <td>
          ${book?.status ? book.status : "Data Not Found!!"}
        </td>
        <td>
          ${book?.authors ? book.authors : "Data Not Found!!"}
        </td>
        <td>
          ${book?.categories ? book.categories : "Data Not Found!!"}
        </td>
        <td>
          <a href="${book?.thumbnailUrl}" target="_blank">click to view</a>
        </td>
        <td>
          ${book?.shortDescription ? book.shortDescription : "Data Not Found!!"}
        </td>
        <td>
          ${book?.longDescription ? book.longDescription : "Data Not Found!!"}
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
  let num = e.target.textContent;
  let total_pages = Math.floor(booksData / 10)
  if (booksData.length % 10) {
    total_pages++;
  }
  pageNationUIGen(num);
  if (num == 0) {
    document.querySelector('.btn-prev').disabled = true;
  } else {
    document.querySelector('.btn-next').disabled = false;
  }

  if (num == total_pages) {
    document.querySelector('.btn-next').disabled = true;
  } else {
    document.querySelector('.btn-prev').disabled = false;
  }

  pageInfo.pageNumber = num;
  generateTableUI();
});
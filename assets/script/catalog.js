for (let result in books) {
  var books = data[result];
  if (books.bookType === `${bookType}`) {
    let newBook = $(`<div class = "rounded text-center">
        <div class="card shadow rounded" style="width: 15rem">
            <img class="card-img-top img-fluid " src="${books.imageUrl}" alt="Card image cap" style="height: 250px; object-fit: cover;">
            <div class="card-body ">
                <h6 class="card-title text-center book-name" style="height:40px">${books.bookName}</h6>
                <p class="card-text text-center" style="height: 50px; font-size:14px">${books.authorName}</p>
                <button class="btn btn-primary read-more" data-name="${books.bookName}" style="font-size:16px;">Read more</button>
            </div>
        </div>
    </div>
    `);

    $(emptyDiv).append(newBook);
  }
}

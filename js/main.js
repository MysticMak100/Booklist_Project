// Book class:Represents a book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

var count = 0;
if (count === 0) {
  document.getElementById('book-table').style.display = 'none';
}
// ADD BOOKS
var sub = document.getElementById('sub');
sub.addEventListener('submit', addBook);


// Function to add books
function addBook(e) {
  e.preventDefault();

  var titletext = document.getElementById('m1').value;
  var authortext = document.getElementById('m2').value;
  var isbntext = document.getElementById('m3').value;

  if (titletext === "" || authortext === "" || isbntext == "") {
    var div = document.createElement('div');
    div.className = 'alert alert-warning';
    div.appendChild(document.createTextNode("PLEASE ENTER ALL THE FIELDS"));
    // var main=document.getElementById('main');
    sub.insertBefore(div, sub.firstChild);
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
    return;
  }

  var book1 = new Book(titletext, authortext, isbntext);
  var tr = document.createElement('tr');
  var td1 = document.createElement('td');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  td1.className = 'border border-dark '
  td2.className = 'border border-dark '
  td3.className = 'border border-dark '
  td4.className = 'border border-dark '

  td1.append(book1.title);
  tr.append(td1);
  td2.append(book1.author);
  tr.append(td2);
  td3.append(book1.isbn);
  tr.append(td3);
  var delbtn = document.createElement('button');
  delbtn.className = 'btn btn-outline-danger ';
  delbtn.id = 'delete';
  var val = document.createTextNode('X');


  delbtn.append(val);
  td4.append(delbtn);
  tr.append(td4);

  //another way to append row
  //   const delbtn = "<button class='delete-button' id='delete' >X</button>";

  //  tr.innerHTML= `
  //  <td>${book1.title}</td>
  //  <td>${book1.author}</td>
  //  <td>${book1.isbn}</td>
  //  <td> ${delbtn} </td>
  //  `;

  // 

  var table = document.getElementById('table');
  table.append(tr);
  var div = document.createElement('div');
  div.className = 'alert alert-success';
  div.appendChild(document.createTextNode("BOOK ADDED"));
  sub.insertBefore(div, sub.firstChild);

  setTimeout(() => document.querySelector('.alert').remove(), 2000);

  document.getElementById('m1').value = "";
  document.getElementById('m2').value = "";
  document.getElementById('m3').value = "";
  count++;
  document.getElementById('book-table').style.display = 'block';

}

// DELETE BOOKS
var del = document.getElementById('table');
del.addEventListener('click', delBook);


//Function to delete books
function delBook(e) {
  if (e.target.classList.contains('btn-outline-danger')) {
    var td = e.target.parentElement;
    var tr = td.parentElement;
    var delt = tr.parentElement;
    delt.removeChild(tr);
    var div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.appendChild(document.createTextNode("BOOK DELETED"));
    sub.insertBefore(div, sub.firstChild);

    setTimeout(() => document.querySelector('.alert').remove(), 2000);
    count--;
    if (count === 0) {
      document.getElementById('book-table').style.display = 'none';
    }
    else {
      document.getElementById('book-table').style.display = 'block';

    }
  }
}


//FILTER BOOKS
var filter = document.getElementById('sb');

filter.addEventListener('keyup', filterBook);



//Function to filter books
function filterBook(e) {
  var found;
  var cmp = e.target.value.toLowerCase();
  var imp = document.getElementsByTagName('tr');
  Array.from(imp).forEach(function (element) {
    console.log(imp.length)
    for (var i = 0; i <= (imp.length); i++) {
      var parelem = element.children[i];

      if (parelem.tagName != 'TH') {
        var textimp = parelem.textContent;
        console.log(textimp)
        if (textimp.toLowerCase().indexOf(cmp) != -1) {
          element.style.display = 'table-row';
          found = true;
          break;
        } else {
          found = false;
          continue;
        }
      }
    }
    if (found === false) {
      element.style.display = 'none';

    }


  });
}


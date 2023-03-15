function newItem(){
let li = $('<li></li>');
let inputValue = $('#input').val();
let list = $('#list');
let crossOutButton = $('<button></button>')

if (inputValue === '') {
  alert('you must write something')
}else{
  list.append(li)
  li.append(inputValue);
}

function crossOut() {
  li.toggleClass('strike');
}

li.on('dblclick', crossOut);

crossOutButton.append(document.createTextNode('X'));

li.append(crossOutButton);

crossOutButton.on('click', deleteListItem);

function deleteListItem(){
  li.addClass('delete');
}

$('#list').sortable();

}


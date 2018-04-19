// detroy list items

// <ul id="listToDestroy">
//   <li><a href=#>blah</a></li>
// </ul>

ul.addEventListener('onClick', destroyItems)

function destroyItems(e){
  let ul = document.querySelector('#listToDestroy');
  let li = e.target()
  ul.removeChild(li);
}


document.getElementById('listToDestroy').addEventListener('click', destroyItems)

function destroyItems(e){
  e.preventDefault();
  // currentTarget vs target: currenttarget is what element the event listener is attached to, target is the most deeply nested child
  let el = e.target.parentNode;
  el.parentNode.removeChild(el);
  // el.innerHTML = "" is to remove all of the children
}


//write a script where you destroy the button on click, but is replaced with two other buttons
<div id="doubleHolder">
  <button class="double"></button>
</div>

document.getElementById('#doubleHolder').addEventListener('click', replaceWithTwoButtons)

function replaceWithTwoButtons(e){
  let button = document.querySelector('.dobule');
  let buttonHolder = button.parentNode;
  buttonHolder.removeChild(button);

  let newButton1  = document.createElement('button');
  let newButton2  = document.createElement('button');


  buttonHolder.appendChild(newButton1);
  buttonHolder.appendChild(newButton2);
}

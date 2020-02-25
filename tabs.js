// let tabHeader = document.querySelectorAll('.tabHeader');
// console.log(tabHeader);
// // tabHeader.forEach((button) => {
// //   button.onclick = changeTab;
// // });
// tabHeader.forEach((button, dataset) => {
//   console.log(button);
//   button.onclick = changeTab;
// });
//
//
// function changeTab() {
//   // console.log('click');
//   let tabNumber = parseInt(this.dataset.tab);
//   console.log('tabNumber');
//   // switch (tabNumber) {
//   //   case 1:
//   //     break;
//   //   case 2:
//   //     break;
//   //   case 3:
//   //     break;
//   //   case 4:
//   //     break;
//   //   case 5:
//   //     break;
//   //   default:
//   //     break;
//   // }
// }


// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

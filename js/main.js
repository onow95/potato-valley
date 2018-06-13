function collapse() { // Collapsible navigation bar
  let coll = document.getElementsByClassName('collapsible');
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
      let content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', collapse);
var table = document.getElementById('bagua-table');

/* ваш код */
var areaShowing = false;

table.onclick = function(e) {
  
  var target = e.target;
  
  while (target != this) {
    if (target.tagName == 'TD') {
      
      if (areaShowing) return;
      
      var area = document.createElement('textarea');
      var savedHTML = area.value = target.innerHTML;
      area.style.width = target.offsetWidth -5 + 'px';
      area.style.height = target.offsetHeight -10 + 'px';
      target.innerHTML = '';
      target.style.padding = '0px';
      target.appendChild(area);
      //target.style.display = 'none';
      area.focus();
      areaShowing = true;
      
      var okButton = document.createElement('button');
      var areaCoords = area.getBoundingClientRect();
      okButton.innerHTML = 'OK';
      okButton.style.top = areaCoords.bottom + 'px';
      okButton.style.left = areaCoords.left + 'px';
      document.body.appendChild(okButton);
      
      var cancelButton = document.createElement('button');
      var okCoords = okButton.getBoundingClientRect();
      cancelButton.innerHTML = 'CANCEL';
      cancelButton.style.top = okButton.style.top;
      cancelButton.style.left = okCoords.right + 'px';
      document.body.appendChild(cancelButton);
      
      okButton.onclick = function() {
        target.innerHTML = area.value;
        //target.parentNode.removeChild(area);
        document.body.removeChild(okButton);
        document.body.removeChild(cancelButton);
        target.style.padding = '10px';
        areaShowing = false;
      }
      
      cancelButton.onclick = function() {
        target.innerHTML = savedHTML;
        //target.parentNode.removeChild(area);
        document.body.removeChild(okButton);
        document.body.removeChild(cancelButton);
        target.style.padding = '10px';
        areaShowing = false;
      }
      
      return;
      
    }
    target = target.parentNode;
  }
  
}
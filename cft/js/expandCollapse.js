 
 
/******************** Expand/collapse toggle script ********************/
 function toggleDiv(id1,id2) {
  var tag = document.getElementById(id1).style;
  var tagicon = document.getElementById(id2);
  
  if(tag.display == "none") {
   tag.display = "block";
   //tagicon.innerHTML = "<img src='images/down_arrow.jpg' alt='' width='31' height='17' />";
   tagicon.className="on_arrow";
  } else {
   tag.display = "none";
   //tagicon.innerHTML = "<img src='images/right_arrow.jpg' alt='' width='31' height='17' />";
   tagicon.className="off_arrow";
  }
 }
 
 function expandAll(cnt) {
  for(var x=1; x<=cnt; x++) {
    document.getElementById('content'+x).style.display="block";
    //document.getElementById('icon'+x).innerHTML="<img src='images/down_arrow.jpg' alt='' width='31' height='17' />";
	document.getElementById('icon'+x).className="on_arrow";
  }
 }
 
 function collapseAll(cnt) {
  for(var x=1; x<=cnt; x++) {
    document.getElementById('content'+x).style.display="none";
    //document.getElementById('icon'+x).innerHTML="<img src='images/right_arrow.jpg' alt='' width='31' height='17' />";
	document.getElementById('icon'+x).className="off_arrow";
  }
 }

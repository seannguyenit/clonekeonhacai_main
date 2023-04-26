
document.addEventListener("DOMContentLoaded", function() {
  var openFilterButton = document.getElementById("open_filter");
  if(openFilterButton){
    openFilterButton.addEventListener("click", function () {
      var popup = document.getElementById("filter_options");
      let cr = popup.style.display;
      if(cr==="block"){
        popup.style.display = "none";
      }else{
        popup.style.display = "block";
      }
    });
  }
});

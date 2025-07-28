document.addEventListener('DOMContentLoaded', function () {
    $("button").hover(
      function(){
        if ($("button").hasClass("active")){
          $(this).text("In Cart")
        } else{
          $(this).text("Add to Cart")
        }
        
      },
      function(){
        if ($("button").hasClass("active")){
          $(this).text("In Cart")
        } else{
          $(this).text("£10.00")
        }
      }
    )
  });
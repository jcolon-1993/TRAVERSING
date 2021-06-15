$(function ()
{
  var $h2 = $("h2");
  $("ul").hide();
  $h2.append("<a class='show'>show</a>");

  //A click event anywhere in
  // the <h2> element will trigger an
  // anonymous function
  $h2.on("click", function()
  {
    
    //  The .next() method is used
    // to select the next sibling after
    // the <h2> element, which is the
    // <ul> element
    $h2.next("ul")
    
      //The <ul> is faded into view  
      .fadeIn(500)
    
      // The .children() method
      // then selects any child elements
      // of the <u1> element, and the
      // selector indicates that it should
      // pick only those whose class
      // attribute has a value of hot.
      .children(".hot")
    
       //The .addClass() method
      // is then used on those <li>
      // elements to add a class name of
      // complete. 
      .addClass("complete");
    
      //the .find()
      // method can be used to select
      // the <a> element that is a child
      // of the <h2> element and fade it
      // out because the list is now being
      // shown to the users. 
      $h2.find("a").fadeOut();
  });
});

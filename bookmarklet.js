//alert('hello');

(function(){
  function loadCss(){
    var link = document.createElement( "link" );
    link.href = "bookmarklet.css";
    link.type = "text/css";
    link.rel = "stylesheet";

    document.getElementsByTagName( "body" )[0].appendChild( link );
  }

  function createMarkup(){
    var wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    //wrapper.innerHTML = 'hello';

    document.body.appendChild(wrapper);

    var numberColumns = 30;

    for(var i=0; i<numberColumns; i++){
      createGrid();
    }


    function createGrid(el){
      var grid = document.createElement('div');
      grid.className = 'grid'

      wrapper.appendChild(grid);
    }
  }


  //window.onload = function(){
  loadCss();
  createMarkup();
//}

}());

linkFileTree = function(id){
    
    // Get all elements
    function getElements(){
        return document.getElementById(id).parentNode.getElementsByTagName('a');
    };
    
    function forEachElements(callback){
        var elements = getElements();
        for ( var i = 0; i < elements.length; i++ ) {
            var result = callback.call(elements[i]);
            if ( typeof(result) != 'undefined' ) {
                return result;
            }
        }
    };
    
    function getListElement(elem){
      
        while ( elem = elem.nextSibling ) {
            if ( elem.nodeType == 1 ) {
                if ( elem.nodeName == 'UL' ) {
                    break;
                }
            }
        }
        
        return elem;
    };
    
    forEachElements(function(){
      
        this.addEventListener('click', function(e){

            if ( this.getAttribute('data-type') == 'folder' ) {
              
                var listElement = getListElement(this);
                
                if ( listElement ) {
                  
                    var style = listElement.style;
                    
                    if ( style.display == 'none' ) {

                        style.display = '';
                        this.parentNode.setAttribute('data-opened', '1');
                      
                    } else {

                        style.display = 'none';
                        this.parentNode.setAttribute('data-opened', '0');
                    }
                }
            }
            
            if ( e.preventDefault ) {
                e.preventDefault();
            }

            return false;
        });
    });
};
;(function($){
  
    window.FileTree.linkFileTree = function(){
      
        var api = this, id = api.id,
            folderClosedClass = this.folderClosedClass,
            folderOpenedClass = this.folderOpenedClass;
        
        // Get all elements
        function getElements(){
            return api.getElements('a');
        };
        
        function forEachElements(callback){
            return api.forEachElements('a', callback);
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
                            $(this).find('i').removeClass(folderClosedClass).addClass(folderOpenedClass);
                          
                        } else {

                            style.display = 'none';
                            this.parentNode.setAttribute('data-opened', '0');
                            $(this).find('i').removeClass(folderOpenedClass).addClass(folderClosedClass);
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
    
    window.FileTree.linkFileTree();

}(jQuery));
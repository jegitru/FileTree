;(function($){
  
    window.FileTree.linkFileTree = function(){
      
        var api = this,
            folderClosedClass = this.folderClosedClass,
            folderOpenedClass = this.folderOpenedClass;
        
        // Get all elements
        function getElements(){
            return api.getElements('a');
        };
        
        function forEachElements(callback){
            return api.forEachElements('a', callback);
        };
        
        forEachElements(function(){
          
            $(this).bind('click', function(e){
              
                var elem = $(this);

                if ( elem.attr('data-type') == 'folder' ) {
                  
                    var listElement = elem.nextAll('ul');
                    
                    if ( listElement.length ) {

                        if ( listElement.is(':hidden') ) {

                            listElement.css('display', '');
                            elem.parent().attr('data-opened', '1');
                            elem.find('i').removeClass(folderClosedClass).addClass(folderOpenedClass);
                          
                        } else {

                            listElement.css('display', 'none');
                            elem.parent().attr('data-opened', '0');
                            elem.find('i').removeClass(folderOpenedClass).addClass(folderClosedClass);
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
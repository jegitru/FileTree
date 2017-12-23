;(function($){
  
    window.FileTree = $.extend(window.FileTree, {
      
        getElements : function(tag){
            return document.getElementById(this.id).parentNode.getElementsByTagName(tag);
        },
        
        forEachElements : function(tag, callback){
            var elements = this.getElements(tag);
            for ( var i = 0; i < elements.length; i++ ) {
                var result = callback.call(elements[i]);
                if ( typeof(result) != 'undefined' ) {
                    return result;
                }
            }
        }
    });

}(jQuery));
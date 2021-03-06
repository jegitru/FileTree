;(function($){
  
    $(document).ready(function(){
      
        window.FileTree.inputFileTree = function(){
          
            var api = this;
        
            // Get all elements
            function getElements(){
                return api.getElements('input');
            };
            
            function getFolderPath(path, index){
                return path.split('/').slice(0, index).join('/') + '/';
            };
            
            function forEachElements(callback){
                return api.forEachElements('input', callback);
            };
            
            function checkFolder(path, index){

                path = getFolderPath(path, index);
                
                var folder = getFolderElement(path);
                
                // Element has folder
                if ( folder ) {
                    folder.checked = getCheckedElements(path) == getCountFiles(path);
                }
            };
            
            function checkParentFolder(path){
                checkFolder(path, -1);
            };
            
            function checkRootFolder(path){
                checkFolder(path, 1);
            };
            
            // Get folder element by path
            function getFolderElement(path){
              
                path = getFolderPath(path, -1);
                
                return forEachElements(function(){
                    if ( this.value == path ) {
                        return this;
                    }
                });
            };
            
            // Get count checked elements by path
            function getCheckedElements(path){
              
                var checked = 0;
              
                path = getFolderPath(path, -1);
                
                forEachElements(function(){
                    if ( this.value.indexOf(path) === 0 ) {
                        if ( this.checked ) {
                            if ( this.name == 'file[]' ) {
                                checked++;
                            }
                        }
                    }
                });
                
                return checked;
            };
            
            // Get count of file elements by path
            function getCountFiles(path){
              
                var countFiles = 0;
              
                path = getFolderPath(path, -1);
                
                forEachElements(function(){
                    if ( this.value.indexOf(path) === 0 ) {
                        if ( this.name == 'file[]' ) {
                            countFiles++;
                        }
                    }
                });
                
                return countFiles;
            };
            
            forEachElements(function(){
              
                $(this).bind('change', function(){

                    if ( this.name == 'folder[]' ) {
                      
                        var elem = this;
                      
                        forEachElements(function(){
                            if ( this.value.indexOf(elem.value) === 0 ) {
                                this.checked = elem.checked;
                            }
                        });

                    } else if ( this.name == 'file[]' ) {
                      
                        checkParentFolder(this.value);
                    }
                    
                    checkRootFolder(this.value);
                });
            });

            $('#select-all').bind('change', function(){
              
                var elem = this;

                forEachElements(function(){
                    this.checked = elem.checked;
                });
            });
        };
        
        window.FileTree.inputFileTree();
    });
    
}(jQuery));
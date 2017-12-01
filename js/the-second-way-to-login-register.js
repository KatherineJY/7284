reflectionMap.forEach((value,key,map)=>{
    key.onclick = function(){
        item = this; 
        v = reflectionMap.get(item);
        for( let pair of v )
            pair.element.style.display = pair.displayProp;
    };
})();
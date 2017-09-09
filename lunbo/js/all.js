function $(id){
    return typeof id === 'string' ? document.getElementById(id) : id ;
}

function $$(tagName,oParent){
    return (document || oParent).getElementsByTagName(tagName);
}

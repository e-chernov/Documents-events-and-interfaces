function getDocumentScroll() {
     var scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

     var result = {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
        height: scrollHeight
    };
    
}
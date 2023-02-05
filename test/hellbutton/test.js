window.onload=function(){
    const hellButton = new hellButtonClass(200,100);
    document.getElementsByTagName('body')[0].appendChild(
        hellButton.render()
    );
};

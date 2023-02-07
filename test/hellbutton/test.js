window.onload=function(){
    const hellButton1 = new hellButtonClass(200,100);
    const hellButton2 = new hellButtonClass(200,100);
    document.getElementsByTagName('body')[0].appendChild(
        hellButton1.render()
    );
    document.getElementsByTagName('body')[0].appendChild(
        hellButton2.render()
    );
};

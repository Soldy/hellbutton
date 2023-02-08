window.onload=function(){
    const hellButton1 = new hellButtonClass(200,100, {
      text:'TEST',
      click:()=>{alert('TEST');}
    });
    const hellButton2 = new hellButtonClass(200,100, {
      text:'TEST',
      text_color:'#000000',
      image_url:'test.jpg'
    });
    const hellButton3 = new hellButtonClass(200,100, {
      text:'TEST',
      inner_color:'#0000ff'
    });
    document.getElementsByTagName('body')[0].appendChild(
        hellButton1.render()
    );
    document.getElementsByTagName('body')[0].appendChild(
        hellButton2.render()
    );
    document.getElementsByTagName('body')[0].appendChild(
        hellButton3.render()
    );
    document.getElementsByTagName('body')[0].appendChild(
        (new hellButtonClass(200,100)).render()
    );
};

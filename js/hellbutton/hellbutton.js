function hellButtonClass(width_, height_, options_){
    options_ = options_ || {};
    this.render = function(){
        _renderBorderLeft(); 
        _renderBorderRight(); 
           _renderInner(); 
           _svg.appendChild(_inner);
        _renderText();
        _renderImage();
        _svg.appendChild(_left_line);
        _svg.appendChild(_right_line);
        _svg.appendChild(_image);
        _svg.appendChild(_text);
        _shell.appendChild(_svg);
        return _shell;
    };
    const _create = (tag)=>document.createElementNS('http://www.w3.org/2000/svg', tag);
    const _attr = (el,list) =>{
        for(let i in list)
            el.setAttribute(i, list[i]);

    };
    const _svg = _create('svg');
    let _text_color = options_.text_color || '#fff';
    let _text_text = options_.text || '';
    let _image_url = options_.image_url || '';
    let _inner_color = options_.inner_color || '#0000';
    let _right_line; 
    let _left_line; 
    let _inner; 
    let _image; 
    let _text;
    let _width = width_;
    let _height = height_;
    let _shell = document.createElement('nav');
    const _widthCalc = function(inp){return (_width/2000)*inp;};
    const _heightCalc = function(inp){return (_height/1000)*inp;};
    const _renderPoint = function(xy){
        return (
          _widthCalc(xy[0]).toString()+
          ' '+
          _heightCalc(xy[1]).toString()
        );
    };
    const _renderLine = function(points){
         let out = '';
         for (let point of points)
             out += (
               ' '+
               _renderPoint(point)
             );
         return out ;
    };
    const _renderBorderStyle = function(el){
        _attr(el,{
            'fill': 'none',
            'stroke': '#aaa',
            'stroke-width': '1'
        });
    };
    const _renderBorderLine = function(direct){
        return _renderLine([
          [direct*200,200],
          [0,600],
          [direct*-200,200]
        ]);
    };
    const _renderBorder = function(points, direction){
        const out = _create('path');
        let start = _renderPoint(points);
        let line = _renderBorderLine(direction);
        out.setAttribute(
          'd',
          (
            ' M '+start+' l '+line
          )
        );
        _renderBorderStyle(out);
        return out;

    };
    const _renderBorderRight = function(){
        _right_line = _renderBorder(
           [2000-200,0],
           1
        );
    };
    const _renderBorderLeft = function(){
        _left_line = _renderBorder(
           [200,0],
           -1
        );
    };
    const _renderInner = function(){
        _inner = _create('rect');
        _attr(_inner,{
          'fill': _inner_color,
          x: _widthCalc(200),
          y: _heightCalc(200),
          width: _widthCalc(1600),
          height: _heightCalc(600)
       });
    };
    const _renderText = function(){
        _text = _create('text');
        _attr(_text,{
          'text-anchor':'middle',
          fill: _text_color,
          'font-family':'Verdana,Geneva,DejaVu Sans,sans-serif',
          'font-weight':'bold',
          'font-size':_widthCalc(200),
          x: _widthCalc(1000),
          y: _heightCalc(550)
        });
        _text.textContent = _text_text;

    };
    const _renderImage = function(){
        _image = _create('image');
        _attr(_image,{
          href: _image_url,
          x: _widthCalc(200),
          y: _heightCalc(200),
          width: _widthCalc(1600),
          height: _heightCalc(600)
        });
    };
    _attr(_svg, {height: height_,width: width_,vievbox:'0 0 '+width_+' '+height_,xmlns:'http://www.w3.org/2000/svg'});
    _attr(_shell, {class:'hell_button_shell'});

}

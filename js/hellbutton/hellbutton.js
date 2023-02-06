function hellButtonClass(width_, height_){
    this.render = function(){
        _renderBorderLeft(); 
        _renderBorderRight(); 
        _renderInner(); 
        _svg.appendChild(_left_line);
        _svg.appendChild(_right_line);
        _svg.appendChild(_inner);
        return _svg;
    };
    const _create = (tag)=>document.createElementNS('http://www.w3.org/2000/svg', tag);
    const _svg = _create('svg');
    let _right_line; 
    let _left_line; 
    let _inner; 
    let _width = width_;
    let _height = height_;
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
         console.log(points);
         for (let point of points)
             out += (
               ' '+
               _renderPoint(point)
             );
         return out ;
    };
    const _renderBorderStyle = function(el){
        el.setAttribute('fill', 'none');
        el.setAttribute('stroke', '#ccc');
        el.setAttribute('stroke-width', '1');

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
       _inner.setAttribute('fill', '#ffff00');
       _inner.setAttribute('x', _widthCalc(200));
       _inner.setAttribute('y', _heightCalc(200));
       _inner.setAttribute('width', _widthCalc(1600));
       _inner.setAttribute('height', _heightCalc(600));
    };
    _svg.setAttribute('height', height_);
    _svg.setAttribute('width', width_);
    console.log(width_);
}
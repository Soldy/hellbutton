function hellButtonClass(width_, height_){
    this.render = function(){
        _left_line = _renderBorderLeft(); 
        _right_line = _renderBorderRight(); 
        _svg.appendChild(_left_line);
        _svg.appendChild(_right_line);
        return _svg;
    };
    const _create = (tag)=>document.createElementNS('http://www.w3.org/2000/svg', tag);
    const _svg = _create('svg');
    let _right_line; 
    let _left_line; 
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
         console.log(out);
         return out ;
    };
    const _renderBorderStyle = function(el){
        el.setAttribute('fill', 'none');
        el.setAttribute('stroke', 'blue');
        el.setAttribute('stroke-width', '1');

    };
    const _renderBorderLine = function(direct){
        return _renderLine([
          [direct*200,200],
          [0,400],
          [direct*-200,200]
        ]);
    };
    const _renderBorderRight = function(){
        const out = _create('path');
        let start = _renderPoint([2000-200,200]);
        let line = _renderBorderLine(1);
        out.setAttribute(
          'd',
          (
            ' M '+start+' l '+line
          )
        );
        _renderBorderStyle(out);
        return out;
    };
    const _renderBorderLeft = function(){
        const out = _create('path');
        let start = _renderPoint([200,200]);
        let line = _renderBorderLine(-1);
        out.setAttribute(
          'd',
          (
            ' M '+start+' l '+line
          )
        );
        _renderBorderStyle(out);
        return out;
    };
    _svg.setAttribute('height', height_);
    _svg.setAttribute('width', width_);
    console.log(width_);
}

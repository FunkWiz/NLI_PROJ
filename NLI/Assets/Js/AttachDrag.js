export default (function () {
    var _AttachDragTo = function (el, transEl, bgEl) {
        this.$el = el;
        this.bgEl = bgEl;
        this.transEl = transEl;
        this.mouse_is_down = false;

        this.init();
    };

    _AttachDragTo.prototype = {
        onMousemove: function (e) {
            if (!this.mouse_is_down) return;

            var tg = e.target,
                x = e.clientX || e.originalEvent.touches[0].clientX,
                y = e.clientY || e.originalEvent.touches[0].clientY;

            var _xVal = x - this.origin_x + this.origin_bg_pos_x;
            var _yVal = y - this.origin_y + this.origin_bg_pos_y;
            

            if(_xVal < -300)
                _xVal = -300;
            if(_xVal > -150)
                _xVal = -150;
            
            if(_yVal < 10)
                _yVal = 10;
            if(_yVal > 120)
                _yVal = 120;

            var _xCssVal = (_xVal + 'px');
            var _yCssVal = (_yVal + 'px');
            this.transEl.css('transform', 'translate3d(@x, @y, 0)'.replace(/@x/, _xCssVal).replace(/@y/,  _yCssVal));

            this.bgEl.style.backgroundPositionX = _xCssVal;
            this.bgEl.style.backgroundPositionY = _yCssVal;
            //tg.style.backgroundPositionX = x - this.origin_x + this.origin_bg_pos_x + 'px';
            //tg.style.backgroundPositionY = y - this.origin_y + this.origin_bg_pos_y + 'px';
        },

        onMousedown: function (e) {
            this.mouse_is_down = true;
            this.origin_x = e.clientX || e.originalEvent.touches[0].clientX;
            this.origin_y = e.clientY || e.originalEvent.touches[0].clientY;
        },

        onMouseup: function (e) {
            var tg = e.target,
                styles = getComputedStyle(tg);

            this.mouse_is_down = false;
            
            let translate = _getTranslate(this.transEl);
            let _xVal =  parseInt(translate.x, 10);
            if(!(_xVal < -300 || _xVal > -150))
                this.origin_bg_pos_x = _xVal

           
            let _yVal = parseInt(translate.y, 10);

            if(!(_yVal <  10 || _yVal > 120))
                this.origin_bg_pos_y = _yVal;
            //this.origin_bg_pos_x = parseInt(styles.getPropertyValue('background-position-x'), 10);
            //this.origin_bg_pos_y = parseInt(styles.getPropertyValue('background-position-y'), 10);
        },

        init: function () {;
            //var styles = getComputedStyle(el);
            //var styles = getComputedStyle(el);
            //this.origin_bg_pos_x = parseInt(styles.getPropertyValue('background-position-x'), 10);
            //this.origin_bg_pos_y = parseInt(styles.getPropertyValue('background-position-y'), 10);
            let translate = _getTranslate(this.transEl);
            this.origin_bg_pos_x = parseInt(translate.x, 10)
            this.origin_bg_pos_y = parseInt(translate.y, 10)
            //attach events
            this.$el.on('mousedown touchstart', this.onMousedown.bind(this));
            $('body').on('mouseup touchend', this.onMouseup.bind(this));
            this.$el.on('mousemove touchmove', this.onMousemove.bind(this));


            this.$el.on('touchmove', function (e) {
                e.preventDefault();
            });
        }
    };
    const _getTranslate = function ($obj)
    {
        var transformMatrix = $obj.css("-webkit-transform") ||
          $obj.css("-moz-transform")    ||
          $obj.css("-ms-transform")     ||
          $obj.css("-o-transform")      ||
          $obj.css("transform");
        var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
        return {x: (matrix[12] || matrix[4]), y: (matrix[13] || matrix[5])};
    }
    return function (el,transEl, bgEl) {
        new _AttachDragTo(el,transEl, bgEl);
    };
})();
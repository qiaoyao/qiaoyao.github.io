(function($, window, document, undefined) {
    var Sign = function(el, options) {
        this.el = el;
        this.defaults = {
            signBtn: '.signBtn',
            weekArray: ['日', '一', '二', '三', '四', '五', '六']
        };
        this.options = $.extend({}, this.defaults, options);

        // 点击签到
        this.el.on('click', '.current', $.proxy(this.signIn, this))
        $(this.options.signBtn).on('click', $.proxy(this.signIn, this))
    }
    Sign.prototype = {
        init: function() {
            var h = k = '',
                c = new Date(),
                y = this.options.dateMonth ? this.options.dateMonth[0] : c.getFullYear(),
                m = this.options.dateMonth ? this.options.dateMonth[1] - 1 : c.getMonth(),
                d = m == c.getMonth() ? c.getDate() : null,
                w = new Date(y, m).getDay(),
                f = new Date(y, m, 1).getDay(), // 当前月份第一天的星期
                p = new Date(y, m, 0).getDate(), // 前一月份天数(最后一天)
                t = new Date(y, [m + 1], 0).getDate(), // 当前月份天数(最后一天)
                l = new Date(y, m, t).getDay(); // 当前月份最后一天的星期

            // 显示当前日期
            if (this.options.current) {
                var ct = c.getFullYear() + '-' + [(c.getMonth() < 9) ? ('0' + (c.getMonth() + 1)) : (c.getMonth() + 1)]
                $(this.options.current).text(ct)
            }

            //ol => 星期 ul => 日期
            this.el.append('<ol></ol><ul></ul>')

            for (var i = 0; i < 7; i++) k += '<li>' + this.options.weekArray[i] + '</li>'
            this.el.find('ol').append(k)
                // 42 补全日期前后空白后ul>li的length
            for (var i = 1; i <= 42; i++) {
                // 补全日期前空白
                if (i <= f) {
                    h += '<li class="seat">' + [p - f + i] + '</li>'
                    continue;
                }
                // 补全日期后空白
                if ([i - t - f] > 0) {
                    h += '<li class="seat">' + [i - t - f] + '</li>'
                    continue;
                }
                // 当前日期
                if ([i - f] == d) {
                    h += '<li class="current">' + [i - f] + '</li>'
                    continue;
                }

                h += '<li>' + [i - f] + '</li>'
            }
            this.el.find('ul').append(h)
                // 已签到记录
            if (this.options.dateChecked) {
                var checked = this.options.dateChecked
                for (var i = 0; i < checked.length; i++) {
                    this.el.find('ul li').eq(f - 1 + checked[i]).addClass('checked')
                }
            }

        },
        signIn: function(e) {
            $(this.options.signBtn).addClass('disabled')
            this.el.find('.current').addClass('checked')
        }
    }
    $.fn.Sign = function(options) {
        //在这里面,this指的是用jQuery选中的元素
        var sign = new Sign(this, options);

        return sign.init()
    };
})(jQuery, window, document);

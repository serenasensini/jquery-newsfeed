var apikey = "276afd811eef446b94420f2377b1e7fe";

;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "news",
        defaults = {
            topic: "github",
            maxResults: "5",
            listClassName: "item"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options );

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            this.fetchNews(this.element, this.options);

        },

        fetchNews: function(el, options) {
            $.ajax({
                url      : "https://newsapi.org/v2/top-headlines?apiKey=276afd811eef446b94420f2377b1e7fe&q="+options.topic,
                dataType : 'json',
                success  : function (data) {
                    if (data.status === "ok" && data.totalResults > 0) {
                        console.log(data);
                        $.each(data.articles, function (i, e) {
                            var counter = 0;

                            // format date
                            var d = new Date(e.publishedAt),
                                month = '' + (d.getMonth() + 1),
                                day = '' + d.getDate(),
                                year = d.getFullYear();

                            if (month.length < 2)
                                month = '0' + month;
                            if (day.length < 2)
                                day = '0' + day;

                            let date = [year, month, day].join('-');

                            if(counter < options.maxResults){
                                let element = ' <div class="card">\n' +
                                    '  <img src="'+ e.urlToImage +'" alt="News\'image" style="width:100%">\n' +
                                    '  <div class="container">\n' +
                                    '  <h4 class="title">'+e.title+'</h4>\n' +
                                    '  <small>'+ date + ' - ' + e.author +'</small>' +
                                    '    <p>'+ e.content +'</p>\n' +
                                    '</div> ';
                                $(el).append(element);
                                counter++;
                            }
                        });
                    }
                }
            });
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );

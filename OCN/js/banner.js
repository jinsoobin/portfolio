$(function(){

    var data;

    $.ajax({
        url:"./json/banner.json?v=1", 
        cache: false,
        type: "GET",   
        dataType: "JSON",
        success: function(data){
            $.fn.abc(data);
        },
        error: function () {
            console.log("통신오류");
        }
    });

    
    $.fn.abc=function(data){
        
        var html="";

        $.each(data.banners,function(a,b){
            // console.log(b[0]);
            // console.log(b[1]);
            
            html =
            `<li data='`+ b[1]+`'><img src='`+ b[0] +`'></li>`
            $("#banners").append(html);
        });
        
        $(document).on("click","#banners > li",function(){
            var node = $(this).index();
            var url = $("#banners > li").eq(node).attr("data");
            // console.log(url);
            location.href = url;
        });

        
        var ea = $("#banners > li").length
        var banner_width = $("#banners>li").width();
        var total_size = banner_width * ea;
        // console.log(total_size);

        var w = 0;
        while (w < ea) {
            $("#disc").append("<li></li>");
            w++;
        }

        $("#banners").css({
            "width": total_size + "px"
        });    

        
   

        var timer = "";
        var m = 0;

        $.fn.banner = function () {
            clearTimeout(timer);

            $("#banners").animate({
                "left": -banner_width + "px"

            }, 1000, function () {
                var copy = $("#banners>li").eq(0).clone();
                $("#banners>li").eq(0).remove();
                $("#banners").append(copy);
                $("#banners").css({
                    "left": 0
                });
            });
            timer = setTimeout($.fn.banner, 4000);
        }
        timer = setTimeout($.fn.banner, 3000);
    };


///////////////////////////////////////////////////////////////////




});






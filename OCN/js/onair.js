$(function(){

    var data;

    $.ajax({
        url:"./json/new_program.json?v=1", 
        cache: false,
        type: "GET",   
        dataType: "JSON",
        success: function(data){
            $.fn.onair(data);
        },
        error: function () {
            console.log("통신오류");
        }
    });


    $.fn.onair = function(data){

        // console.log(data);

        var html1="";
        var html2="";

        $.each(data,function(a,b){
            // console.log(data[a].new_thumb);
            // console.log(data[a].new_pg);
            
            if(a<=7){
                html1 =
                `<li title = '`+ data[a].new_pg +`'><img src='`+ data[a].new_thumb +`'></li>`;
                $(".main_box1").append(html1);
            }
            else if(a>=7){
                html2 =
                `<li title = '`+ data[a].new_pg +`'><img src='`+ data[a].new_thumb +`'></li>`;
                $(".main_box2").append(html2);
            }
        });
        $(".adtop2").click(function(){
            $(".main_box2").fadeToggle(800);
        });

        $(".main2_box2").click(function(){
            window.open("https://biz.skbroadband.com","width=500 height=50");
        });
        
    }

    


    




});
function bibi(){
    location.href="https://ocn.cjenm.com/ko/";
}

ajax();

function ajax(){
    var data;
    function win(){
        if(window.XMLHttpRequest){
            return new XMLHttpRequest();
        }
    }
    function fileopen(){

        if(data.readyState == XMLHttpRequest.DONE && data.status == 200){
            m_menus(JSON.parse(this.response))
        }
    }
    data = win();
    data.onreadystatechange = fileopen;
    data.open("GET", "./json/menu.json?v=1", true);
    data.send();
}

function m_menus(data){
    // console.log(data);

    data.forEach(function (a, b, c) {
        // console.log(a);
        // console.log(b);
        var lii = document.createElement("li");

        lii.setAttribute("onmouseleave","mouse1('"+b+"')");
        lii.setAttribute("onmouseenter","mouse2('"+b+"')");
        lii.id="lii_id"+b;

        var ull = document.createElement("ul");
        ull.id="ull_id"+b;

        var ea = (data[b].menu_list.length); 
        var x = 0;

        while (x < ea){
            var liii = document.createElement("li");

            // console.log(data[b].menu_list[x]);

            var xx = x+1;
            liii.id = "sli" + xx +b;
            liii.setAttribute("link", data[b].menu_link[x])
            liii.setAttribute("onclick", "clicklink(" + xx + b +")")

            liii.append(data[b].menu_list[x]);
            lii.append(ull);
            ull.append(liii);

            x++;
        }
        // console.log(data[b].main_menu);

        lii.prepend(data[b].main_menu);
        document.getElementById("smenu").append(lii);

    });
}
function mouse1(b){
    var ull_id = document.getElementById("ull_id"+b);
    ull_id.style.display="none";
    // ull_id.style.transition = "all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)";

}
function mouse2(b){
    var ull_id = document.getElementById("ull_id"+b);
    ull_id.style.display="block";
    // ull_id.style.transition = "all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)";
}

function clicklink(b) {
    var zz = document.getElementById("sli" + b).getAttribute("link");
    location.href = zz;
}
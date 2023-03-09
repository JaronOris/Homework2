function changeRoute () {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");    

    if(pageID != ""){
        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            console.log("data" + data);
            $("#app").html(data);
        });
    }else {
        $.get(`pages/home/home.html`, function(data){
            console.log("data" + data);
            $("#app").html(data);
        });
    }
}

function initListeners() {
    $(".burger").click(function (e) {
        $(".burger").toggleClass("active")
        $(".links").toggleClass("active")
        console.log("clicked");
    });

    $(".links a").click(function (e) {
        $(".burger").toggleClass("active")
        $(".links").toggleClass("active")
        console.log("clicked");
    });
}
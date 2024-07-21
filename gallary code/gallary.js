$(".list-group a").click(function(){
    alert("hi");
    const value = $(this).attr("data-name");
    if(value == "home"){
        $(".img").show("1000");
    }else{
        $(".img").not("."+value).hide("1000");
        $(".img").filter("."+value).show("1000");
    }
})



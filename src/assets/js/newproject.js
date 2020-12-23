$(function(){
    $(".subdropdown").on("click", function(e){
        $(e.target).next().show();
    });

    $(".subdropdownBtn").on("click", function(e){
        $(e.target).parents(".dropdown-menu").show();
        $(e.target).next().show();
    }); 

    $(".show").on("click", function(e){
        console.log($(e.target))
    });
});
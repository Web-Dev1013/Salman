$(function () {
    $(".dropdown-menu").on("click", function (e) {
        $(e.target).parent().siblings("button").html($(e.target).html());
    });

    $(".filterBtn").on("click", function () {
        $(".filter").show();
    });

    $(".filterElement").on("click", function (e) {
        if ($(e.target).hasClass("dropdown-item")) {
            $(e.target).find("input").prop("checked") == true ? $(e.target).find("input").prop("checked", false) : $(e.target).find("input").prop("checked", true);
        }
        if ($(e.target)[0].tagName == "SPAN") {
            $(e.target).parent().find("input").prop("checked") == true ? $(e.target).parent().find("input").prop("checked", false) : $(e.target).parent().find("input").prop("checked", true);
        }
    });

    $(".cancelBtn").on("click", function(){
        $(".filter").hide();
    });

    // Accordion Function in Furniture
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
    
});
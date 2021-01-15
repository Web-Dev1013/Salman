$(function () {
  // $("#contentList").find(".navbar-nav").on("mouseover", function (e) {
  //   if ($(e.target).next().hasClass("parent")) {
  //     $(".parent").hide();
  //     $(e.target).next().show();
  //   }
  // });
  // $("#contentList").find(".nav-item").on("mouseleave", function (e) {
  //   if ($(e.target).hasClass("nav-link")) {
  //     $(e.target).next().hide();
  //   }
  // });
  // $(".dropdown_has_child").find("a.nav-link").on("mouseover", function(){    
  //   $(".dropdown_for_child").hide();
  // });
// Prevent closing from click inside dropdown
$(document).on('click', '.dropdown-menu', function (e) {
  e.stopPropagation();
});

// clickable on mobile view
if ($(window).width() < 992) {
    $('.has-submenu a').click(function(e){
      e.preventDefault();
        $(this).next('.megasubmenu').toggle();

        $('.dropdown').on('hide.bs.dropdown', function () {
           $(this).find('.megasubmenu').hide();
        })
    });
}
  $(".dropdown_has_child").find(".dropdown").on("mouseover", function (e) {
    $(e.target).parents(".dropdown_has_child").find(".dropdown_for_child").show();
    if ($(e.target).hasClass("nav-link")) {
      var addData = "";
      var dropdownItems = $(e.target).next().find(".dropdown-item");
      dropdownItems.each(function () {
        addData += $(this).html();
      });
      if(dropdownItems.length <= 8){
        $(".dropdown_for_child").css("column-count", "1");
      }
      if(dropdownItems.length > 8){
        $(".dropdown_for_child").css("column-count", "2");
      }
      if(dropdownItems.length > 16){
        $(".dropdown_for_child").css("column-count", "3");
      }
      $(e.target).parents(".dropdown_has_child").find(".dropdown_for_child").html(addData);
    }
  });
  // $(".dropdown_has_child").on("mouseleave", function(e){
  //   $(e.target).parents(".dropdown_has_child").find("div").hide();
  // })

  // $(".dropdown_no_child").find(".parent").on("mouseleave", function(){
  //   $(this).hide()
  // })

  // $(".dropdown-item").on("click", function(){
  //   $(".dropdown-menu").hide();
  // });

  // validation function
  $("#user").on("keyup", function () {
    if ($("#user").val() == "") {
      $("#user").addClass("is-invalid");
      return false;
    } else {
      $("#user").removeClass("is-invalid");
    }
  });

  $("#pwd").on("keyup", function () {
    if ($("#pwd").val() == "") {
      $("#pwd").addClass("is-invalid");
      return false;
    } else {
      $("#pwd").removeClass("is-invalid");
    }
  });

  $(".signupBtn").on("click", function () {
    if ($("#user").val() == "") {
      $("#user").addClass("is-invalid");
      return false;
    } else {
      $("#user").removeClass("is-invalid");
    }
    if ($("#pwd").val() == "") {
      $("#pwd").addClass("is-invalid");
      return false;
    } else {
      $("#pwd").removeClass("is-invalid");
    }
  });
  //////

  // Validation on With Email
  $("#withEmailpwd").on("keyup", function () {
    if ($("#withEmailpwd").val() == "") {
      $("#withEmailpwd").addClass("is-invalid");
      return false;
    } else {
      $("#withEmailpwd").removeClass("is-invalid");
    }
  });

  $(".loginBtn").on("click", function (e) {
    e.preventDefault();
    if ($("#withEmailpwd").val() == "") {
      $("#withEmailpwd").addClass("is-invalid");
      return false;
    } else {
      $("#withEmailpwd").removeClass("is-invalid");
    }
  });
  // Show/hide password
  $(".changetype").on("click", function (e) {
    if ($(e.target).parents(".form-group").children("input").attr("type") == "password") {
      $(e.target).parents(".form-group").children("input").attr("type", "text");
      $(e.target).html("Hide");
    } else {
      $(e.target).parents(".form-group").children("input").attr("type", "password");
      $(e.target).html("Show");
    }
  });
});

// Preloader Start

$(window).ready(function () {
  $("#preloader").fadeOut(3000);
});

// Preloader End



//Back To Top Button Start

$("#backToTopBtn").click(function () {
  $("html").animate({
      scrollTop: 0,
    },
    0
  );
});

//Back To Top Button End



//Sticky Start

$(window).scroll(function () {
  if ($(this).scrollTop() > 70) {
    $("#backToTopBtn").addClass("show");
    $("header").addClass("fixed w-100");

  } else {
    $("#backToTopBtn").removeClass("show");
    $("header").removeClass("fixed w-100");
  }
});

//Sticky End



// Modal Start

// $("#login").click(function () {
//   $(".modalbox").show();
// });
// $(".close").click(function () {
//   $(".modalbox").hide();
// });

// Modal End



// tabs Start
$(".tab_container:first").show();
$(".tab_navigation li:first").addClass("active");

$(".tab_navigation li").click(function (e) {
  index = $(this).index();
  $(".tab_navigation li").removeClass("active");
  $(this).addClass("active");
  $(".tab_container").hide();
  $(".tab_container").eq(index).show();
});
// tabs End



// Floating label input Start

function stateCheck($formControl) {
  if ($formControl.val().length > 0) {
    $formControl.addClass("valid");
  } else {
    $formControl.removeClass("valid");
  }
}
$(function () {
  $(".form_control").on("focusout", function () {
    stateCheck($(this));
  });
});

// Floating label input End



// eye 

$('.toggle_password ').click(function () {
  // $(this).toggleClass('fas fa-eye');
  const input = $('#password ').attr('type');
  if (input == "password") {
    $('#password ').attr('type', 'text');
  } else {
    $('#password ').attr('type', 'password')
  }
});


$(' .toggle_password_confirm').click(function () {
  // $(this).toggleClass('.fas.fa-eye .fas.fa-eye-slash');
  const inputConfirmPassword = $('#confirmPassword').attr('type');
  if (inputConfirmPassword == "password") {
    $('#confirmPassword').attr('type', 'text');
  } else {
    $('#confirmPassword').attr('type', 'password')
  }
});

// eye 



// validation password with confirm password
$('#password , #confirmPassword ').on('keyup', function (params) {
  if ($('#password').val() == $('#confirmPassword').val()) {
    $('#message').html('???????? ???? ????????').css('color', 'green');
  } else {
    $('#message').html('???????? ?????? ????????').css('color', 'red');
  }
})
// validation password with confirm password



// Hamburger Menu Satrt
$(document).ready(function () {
  $(".toggle-menu").click(function (e) {
    $("nav").toggleClass("active-menu");
  });
});
// Hamburger Menu End



// CahtBot Start

let questionFirst = $("[data-question]:first").attr("data-question");

$("#chatList ul").append(
  '<li class="admin-message">' + questionFirst + "</li>"
);

$("[data-question]:first").appendTo(".message-box");

$("#send").click(function () {
  questionVal = $(".message-box [data-question]").val();

  $("#chatList ul").append(
    '<li class="client-message">' + questionVal + "</li>"
  );

  dataName = $(".admin-client-message-wrap [data-name]").attr("data-question");

  if ($(".message-box [name]").attr("name") == "name") {
    nameVal = $(".message-box [name]").val();

    $(".admin-client-message-wrap [data-name]").attr(
      "data-question",
      " ????????  " + nameVal + " ????????  " + " , </br>" + dataName
    );
  }

  $(".message-box [data-question]").appendTo(".submit_info");

  if ($(".admin-client-message-wrap").children().length != 0) {
    let questionFirst = $("[data-question]:first").attr("data-question");

    $("#chatList ul").append(
      '<li class="admin-message">' + questionFirst + "</li>"
    );

    $("[data-question]:first").appendTo(".message-box");

    $("#send").css({
      "pointer-events": "none",
    });

    $(".message-box [data-question]").bind(
      "click change keyup",
      function (params) {
        if ($(this).val() == "") {
          $("#send").css({
            "pointer-events": "none",
          });
        } else {
          $("#send").css({
            "pointer-events": "auto",
          });
        }
      }
    );
  }

  $("#chatList").animate({
    scrollTop: 5000,
  });
});

$(".message-box [data-question]").bind("click change keyup", function (params) {
  if ($(this).val() == "") {
    $("#send").css({
      "pointer-events": "none",
    });
  } else {
    $("#send").css({
      "pointer-events": "auto",
    });
  }
});
$("#confirm").click(function () {
  $("#submit").trigger("click");
});
$("#notconfirm").click(function () {
  location.reload();
});
$(".chat_icon").click(function (params) {
  $(".chatbot-box").toggleClass("active");
});

// CahtBot  End




// Collapse
$(document).ready(function () {
  $(".accordion").on("click", function () {
    $(this).toggleClass("active-accordion");
    $(this).next().slideToggle(600);
  });
});
// Collapse


// slider
$(document).ready(function () {
  var x = 0;
  $('.btn-next').click(function () {
    x = (x <= 300) ? (x + 100) : 0;
    $('figure').css('left', x + "%");
  });
  $('.btn-prev').click(function () {
    x = (x >= 100) ? (x - 100) : 400;
    $('figure').css('left', x + "%");
  });
})
// slider

// filterable
$(document).ready(function () {
  $('.btn').click(function () {
    var attr = $(this).attr('data-li');
    $('.btn').removeClass('active')
    $(this).addClass("active");
    $('.item').hide()
    if (attr == "1") {
      $("." + attr).show();
    } else if (attr == "2") {
      $("." + attr).show();
    } else if (attr == "3") {
      $("." + attr).show();
    } else if (attr == "4") {
      $("." + attr).show();
    } else if (attr == "5") {
      $("." + attr).show();
    } else if (attr == "6") {
      $("." + attr).show();
    } else if (attr == "7") {
      $("." + attr).show();
    } else {
      $('.item').show()

    }
  })
});
// filterable



let page = 1;
const container = document.querySelector('#posts');
const loader = document.querySelector('.loader');

function getData() {
  fetch(`../js/post-blog.json`)
    .then((response) => response.json())
    .then((results) => drawResults(results));
}

function drawResults(results) {
  const html = results
    .map(
      (result) =>
      `
     <div class="row my-5" >
        <div class="col-md-6">
          <div class="card rounded" id="post-blog">
            <img src="${result.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title mt-4">${result.title}</h5>
                <p class="card-text text-secondary">${result.body} [...]</p>
                <a href="#" class="btn btn-info text-light px-2" >??????????</a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card rounded">
            <img src="${result.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title mt-4">${result.title}</h5>
                <p class="card-text text-secondary">${result.body} [...]</p>
                <a href="#" class="btn btn-info text-light px-2" >??????????</a>
            </div>
          </div>
        </div>
      </div>
        `
    )
    .join('');
  page++;
  container.innerHTML += html;
}

document.addEventListener('DOMContentLoaded', getData);
window.addEventListener('scroll', () => {
  if (
    document.documentElement.scrollTop +
    document.documentElement.clientHeight >=
    document.documentElement.scrollHeight - 3
  ) {
    loader.classList.remove('hidden');
    setTimeout(() => {
      loader.classList.add('hidden');
      getData();
    }, 2000);
  }
});
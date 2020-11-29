$(document).ready(function() {
  var toggler = document.getElementsByClassName("caret");
  var i;

  for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function() {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
    });
  }

  // if($(".img_lit").attr("src").length==0){
  //   $(".img_block").css("background-color", "#55585e");
  //   $(".img_block").text="Default";
  //   $(".img_lit").css("display", "none");
  // }
  //   else{

  //   }

  $('.download-book-btn').on('click', function(event){
    var captchaContainer = null;
    var book_id =$(this).attr("book_id");;

    console.log("event", book_id);

    var captchaID =  "captcha_book";

    $("#"+captchaID).remove()
    var $captchaEl = $("<div>", {id: "captcha_book", "class": "g-recaptcha", "data-size": "invisible"});
    $("#captchaBox").append($captchaEl);  
    
    var loadCaptcha = function() {
      captchaContainer = grecaptcha.render(captchaID, {
        'sitekey' : '6Lf-kqUZAAAAALrX9xZAxEoN7dIr4rYfTq6FjEZG',
        'callback' : function() {
          return new Promise(function(resolve, reject) {
            if (grecaptcha === undefined) {
              console.log('Recaptcha non definito'); 
              reject();
            }
        
            var response = grecaptcha.getResponse();

            if (!response) {
              console.log('Coud not get recaptcha response'); 
              reject();
            }

            $.ajax({
              'url' : '/api/recaptcha',
              'type' : 'POST',
              'data' : JSON.stringify({
                'token' : response,
                'book_id': Number(book_id),
              }),
              'dataType': 'json',
              'success' : function(data) {    
                console.log('Data: ', data);
                var $link = $("<a>", {id: "dwnldl", "href": data.url, "target": "_blank"});
                $("body").append($link);  
                $link.get(0).click();
                $("#dwnldl").remove();
                resolve();
              },
              'error' : function(request, error)
                {
                  console.log("Request: "+JSON.stringify(request));
                  reject();
                }
            });
          })
        }

      });
    }

    loadCaptcha();
    grecaptcha.execute();
  });
})

$(document).ready(function () {
    $('#service_index_subject_table').DataTable();
});


$(document).ready(function() {
  $("#qr_code_progress_bar").hide();


  $("#qr_code_dwnld_btn") .on("click", function(event) {
    console.log("download click");
    var src = $("#qr_code_img").attr("src");
    downloadFile(src, "qr.png");
  });

  $("#generate_qr_code_btn") .on("click", function(event) { 
    $("#qr_code_img").remove();
    $("#qr_code_progress_bar").show();

    $("#qr_code_box").append(
      $("<img>", {
        id: "qr_code_img",
        "class": "",
        "src": generateQRCodeUrl(
          $("#qr_code_width").val(),
          $("#qr_code_height").val(),
          $("#qr_code_data").val(),
        ),
      }));
    $("#qr_code_progress_bar").hide();
    
  });
  
})

function generateQRCodeUrl(w, h, data) {
  console.log(w, h, data);
  return encodeURI(`https://chart.googleapis.com/chart?cht=qr&chl=${data}&chs=${w}x${h}&choe=UTF-8&chld=L|2`);
}

function downloadFile(url, filename) {
  fetch( url ).then( function( t ) {
      return t.blob( ).then( ( b ) => {
              var a = document.createElement("a");
              a.href = URL.createObjectURL(b);
              a.setAttribute("download", filename);
              a.click();
            }
          );
      });
}

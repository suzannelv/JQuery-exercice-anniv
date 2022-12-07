$(document).ready(function () {
    $("h1").click(function(){
        $(".en").show().addClass('bg-en');
    });
    $(".en").click(function() {
        $(".fr").show().addClass('bg-fr');
    });
    $(".fr").click(function() {
        $(".cn").show().addClass('bg-cn');
    })
    $('.cn').click(function() {
        $('img').fadeIn(1000)
    })
   

})
//  $(document).ready(function () {
//     $("h1").click(function(){
//         $(".en").show().siblings().show().siblings().show()
//     });
//  })
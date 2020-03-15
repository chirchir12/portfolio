const app =(() =>{

    return
    

    window.addEventListener('load', ()=> {
        console.log('load event complete loading');
    });


})();


$(document).ready(function() {
    $('.active').removeClass('active');
    var currurl = window.location.pathname;
    console.log(currurl)
    var val=$('li:has(a[href="'+currurl+'"])').addClass('active');
});
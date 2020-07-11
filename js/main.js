//Jquery
$(document).ready(function(){
    /*
    //Post
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: '¿Quién soy yo?',
                content: ,
                image: ''
            },
            {
                title: 'Historia Académica',
                content: '',
                image: '<img src="img/unam.png">'
            },
            {
                title: 'Objetivo profesional',
                content: '',
                image: ''
            }
        ]
        posts.forEach((item, index)=> {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <p>
                    ${item.content}
                </p>
                <p>
                    ${item.image}
                </p>
                <hr>
            </article>
            `;
            $("#post").append(post);
        })
    }
    */

    //Link
    $("#linkedin").click(function(){
        window.open("https://www.linkedin.com/in/ra%C3%BAl-eduardo-res%C3%A9ndiz-l%C3%A1zaro-540002192/");
    });

    //Acordeón
    if(window.location.href.indexOf('conocimiento') > -1){
        $("#acordeon").accordion({
            collapsible: true
        });
    }

    //Scroll arriba
    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 500);
        return false;
    });
});
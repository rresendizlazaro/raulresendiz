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

    //Slider
    if(window.location.href.indexOf('experiencia') > -1){
        $('.galeria').bxSlider({
            mode: 'horizontal',
            auto: true,
            captions: false,
            adaptiveHeight: true,
            responsive: true,
            slideWidth: 500
        });
    }

    if(window.location.href.indexOf('intereses') > -1){
        $('.galeria').bxSlider({
            mode: 'horizontal',
            auto: true,
            captions: false,
            adaptiveHeight: true,
            responsive: true,
            slideWidth: 1024
        });
    }

    //Link
    $("#linkedin").click(function(){
        window.open("https://www.linkedin.com/in/ra%C3%BAl-eduardo-res%C3%A9ndiz-l%C3%A1zaro-540002192/");
    });

    //Acordeón
    if(window.location.href.indexOf('conocimiento') > -1 || window.location.href.indexOf('experiencia') > -1){
        $("#acordeon").accordion({
            collapsible: true,
            heightStyle: "content"
        });
    }

    //Div página
    if(window.location.href.indexOf('experiencia') > -1){
        $("#content").load("http://www.enmarcha.unam.mx/temas_2019/tema_01_101219.php");
    }

    //Progress bar
    if(window.location.href.indexOf('conocimiento') > -1){
        //Solidworks
        $("#sw")
            .progressbar({ value: 80 })
            .children('.ui-progressbar-value')
            .html('80%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Inventor
        $("#ai")
            .progressbar({ value: 75 })
            .children('.ui-progressbar-value')
            .html('75%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //NX
        $("#nx")
            .progressbar({ value: 20 })
            .children('.ui-progressbar-value')
            .html('20%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //SolidEdge
        $("#se")
        .progressbar({ value: 80 })
        .children('.ui-progressbar-value')
        .html('80%')
        .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Autocad
        $("#a")
            .progressbar({ value: 15 })
            .children('.ui-progressbar-value')
            .html('15%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Catia
        $("#cat")
            .progressbar({ value: 20 })
            .children('.ui-progressbar-value')
            .html('20%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //3d max
        $("#max")
            .progressbar({ value: 70 })
            .children('.ui-progressbar-value')
            .html('70%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Python
        $("#py")
            .progressbar({ value: 70 })
            .children('.ui-progressbar-value')
            .html('70%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Java
        $("#j")
            .progressbar({ value: 60 })
            .children('.ui-progressbar-value')
            .html('60%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //C
        $("#c")
            .progressbar({ value: 50 })
            .children('.ui-progressbar-value')
            .html('50%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //C#
        $("#cccc")
            .progressbar({ value: 70 })
            .children('.ui-progressbar-value')
            .html('70%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Kotlin
        $("#k")
            .progressbar({ value: 25 })
            .children('.ui-progressbar-value')
            .html('25%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Javascript
        $("#js")
            .progressbar({ value: 80 })
            .children('.ui-progressbar-value')
            .html('80%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Processing
        $("#pss")
            .progressbar({ value: 70 })
            .children('.ui-progressbar-value')
            .html('70%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //LabView
        $("#lv")
            .progressbar({ value: 75 })
            .children('.ui-progressbar-value')
            .html('75%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //HTML
        $("#h")
            .progressbar({ value: 80 })
            .children('.ui-progressbar-value')
            .html('80%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //CSS
        $("#css")
            .progressbar({ value: 70 })
            .children('.ui-progressbar-value')
            .html('70%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //JQuery
        $("#jq")
        .progressbar({ value: 60 })
        .children('.ui-progressbar-value')
        .html('60%')
        .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Typescript
        $("#ts")
            .progressbar({ value: 50 })
            .children('.ui-progressbar-value')
            .html('50%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Angular
        $("#an")
            .progressbar({ value: 25 })
            .children('.ui-progressbar-value')
            .html('25%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Inglés
        $("#in")
            .progressbar({ value: 75 })
            .children('.ui-progressbar-value')
            .html('75%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Office
        $("#off")
        .progressbar({ value: 85 })
        .children('.ui-progressbar-value')
        .html('85%')
        .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Linux
        $("#lin")
            .progressbar({ value: 80 })
            .children('.ui-progressbar-value')
            .html('80%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Cura
        $("#cu")
            .progressbar({ value: 100 })
            .children('.ui-progressbar-value')
            .html('100%')
            .css({ 'background': '#33ff00', 'padding': '3.5%' });
        //Photoshop
        $("#ps")
        .progressbar({ value: 15 })
        .children('.ui-progressbar-value')
        .html('15%')
        .css({ 'background': '#33ff00', 'padding': '3.5%' });
    }

    //Scroll
    var windowWidth = $(window).width();
    if(windowWidth > 800){
        $("#top").click(function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop:0
            }, 500);
            return false;
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 400 ){
                $('#top').slideDown(500);
            } else {
                $('#top').slideUp(100);
            }
        });
    }

    //API correo
    if(window.location.href.indexOf('contacto') > -1){
        document.querySelector(".contact-form").addEventListener("submit", submitForm);

        function submitForm(e){
            e.preventDefault();

            let name = document.querySelector("#nombre").value;
            let email = document.querySelector("#email").value;
            let message = document.querySelector("#opinion").value;

            sendEmail(name, email, message);
        }

        function sendEmail(name, email, message){
            Email.send({
                Host: "smtp.gmail.com",
                Username: 'rresendizlazaro@gmail.com',
                Password: "ivzdodflllotwbms",
                To: 'rresendizlazaro@gmail.com',
                From: 'rresendizlazaro@gmail.com',
                Subject: `${name} sent you a message`,
                Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
            }).then((message) => alert("Éxito al enviar correo"));
        }
    }

});
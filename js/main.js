//Jquery
$(document).ready(function(){
    //Post
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: '¿Quién soy yo?',
                content: 'Soy una persona honesta y responsable, me gusta desarrollar proyectos en los que invoucre la mayor capacidad de mis conocimientos, dentro de estos hago todo lo posible por hacer efectivo el tiempo de desarrollo y cumplir con fechas de entrega, prefiero tomar la mayor parte de las responsabilidades incluyendo ser el lider, ya que se me facilita la organización y distribución de los roles de cada integrante.'
            },
            {
                title: 'Historia Académica',
                content: 'Estudié Ingeniería mecatrónica en la <b>Facultad de Ingeniería</b> de la <b>UNAM</b>.<br>Promedio: <b>8.92</b><br>En este momento me encuentro en proceso de titulación por medio de tesis. Con el tema <b>"Circuito carciovascular para pruebas de válvulas cardiacas"</b>, a grandes resgos es la implementación de una interfaz gráfica para el control de un dispositivo probador de válvulas cardiacas.',
                image: '<img src="img/unam.png">'
            },
            {
                title: 'Objetivo profesional',
                content: 'Formar parte de una empresa o institución enfocada a la ingeniería, para brindar soluciones eficaces en mecánica, eléctrica, electrónica y computación, que permitan desarrollarme en el ámbito profesional.'
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

    //Link
    $("#linkedin").click(function(){
        window.open("https://www.linkedin.com/in/ra%C3%BAl-eduardo-res%C3%A9ndiz-l%C3%A1zaro-540002192/?originalSubdomain=mx");
    });

    //Scroll arriba
    $(".subir").click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:0
        }, 500);
        return false;
    });
});

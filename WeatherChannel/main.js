let boton = document.querySelector('button');
let input = document.querySelector('input');

function cargarCiudad(){
    let ciudad = input.value;
    if (ciudad != '') {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric",function(data){
            document.getElementById('ciudad').textContent = data.name;
            document.getElementById('temperatura').innerHTML = data.main.temp + '<sup>°C</sup>';
            document.getElementById('wicon').src = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png';
            document.getElementById('descripcion').textContent = data.weather[0].description;
            document.querySelector(".container").style.visibility = "visible";
            input.value = '';
            $('#success-alert').slideDown(250).animate({opacity:1},{queue:false,duration:250});
            setTimeout(function(){
                $('#success-alert').slideUp(250).animate({opacity:0},{queue:false,duration:250});
            }, 2000);
        }).fail(function(){
            $('#fail-alert').slideDown(250).animate({opacity:1},{queue:false,duration:250});
            setTimeout(e => {
                $('#fail-alert').slideUp(250).animate({opacity:0},{queue:false,duration:250});
            }, 2000);
        })
    }else{
        $('#empty-alert').slideDown(250).animate({opacity:1},{queue:false,duration:250});
        setTimeout(e => {
            $('#empty-alert').slideUp(250).animate({opacity:0},{queue:false,duration:250});
        }, 2000);
    }
}

boton.addEventListener('click', cargarCiudad);
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        cargarCiudad();        
    }
})
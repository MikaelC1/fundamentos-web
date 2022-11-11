$('body').ready(function(){
    //Estructura de Ajax
    $.ajax({
        // Url de la API web Service
        url:'https://jsonplaceholder.typicode.com/users',
        // metodo de la peticion - GET, POST, PUT, DELETE, ETC
        method:'GET',
        // Formato en la que se reciben los datos
        dataType:'JSON',
        // Datos a Enviar al Backend ó al servicio web
        data:'',
        
        beforeSend: function(){
            // realizar una accion mientras se obtienen los datos

        },

        success: function(data){
            // cuando se obtienen los datos de manera correcta
            // console.log(data)
            // console.log(data[4].name)
            // console.log(data[4].company.name)

            // for (let i = 0; i < 10; i++){
            //     console.log(data[i].name);
            //  }
             
            data.forEach(element => {
                // console.log(element.name);
                let registro = '<tr>' + 
                '<td>' + element.id + '</td>' +
                '<td>' + element.name + '</td>' +
                '<td>' + element.username + '</td>' +
                '<td>' + element.email + '</td>' +
                '<td>' + element.address.street + '</td>' +
                '<td>' + element.phone + '</td>' +
                '<td>' + element.website + '</td>' +
                '<td>' + element.company.name + '</td>' +
                + '</tr>';

            $('#contentUsuarios').append(registro);

            });


            


        },

        error: function(){
            alert('Error al obtener la información')
            // hay error
        }

    })
})
$('#btnGuardar').click(function(){
    let nombre = ($('#nombre')).val();
    let app = ($('#app')).val();
    let apm = ($('#apm')).val();
    let email = ($('#email')).val();
    let telefono = ($('#tel')).val();
    let edad = ($('#edad')).val(); 
    let departamento = ($('#dep')).val();          
    
    if($.trim(nombre) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert"> Favor de agregar un Nombre</div>')
        return
    }
    if($.trim(app) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert"> Favor de agregar un Apellido Paterno</div>')
        return
    }
    if($.trim(apm) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert"> Favor de agregar un Apellido Materno</div>')
        return
    }
    if($.trim(email) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert"> Favor de agregar un Email</div>')
        return
    }
    if($.trim(telefono) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert"> Favor de agregar un Telefono</div>')
        return
    }
    if($.trim(edad) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert"> Favor de agregar una Edad</div>')
        return
    }
    if($.trim(departamento) == ''){
        $('#result').html('<div class="alert alert-danger" role="alert"> Favor de agregar un Departamento</div>')
        return
    }

    let sumaEdad= parseInt(edad) + parseInt(edad)
    ($('#edad')).val(sumaEdad); 
})
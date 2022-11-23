$('#btnCompararEdades').click(function(){
    let edadJuan = parseInt($('#edadJuan').val())
    let edadPedro = parseInt($('#edadPedro').val())
    
    //alert(edadJuan)
    //alert(edadPedro)
    //Que edad es mayor, Juan o Pedro

    if(edadJuan > edadPedro){
        console.log('Juan es Mayor',edadJuan)
    }  else if(edadJuan < edadPedro){
        console.log('Pedro es Mayor',edadPedro )
    }
    })

//     if (edadJuan == edadPedro){
//         alert('Tienen la misma edad!')}

//         else {
//             if(edadJuan > edadPedro){
//                 alert('Juan es Mayor!')
//             }
//             else {
//                 if(edadJuan < edadPedro)
//                 alert('Pedro es Mayor!')
//             }
//         }

    
//})
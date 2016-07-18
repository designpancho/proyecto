$(document).ready(function(){
    validaLogin();
    var cont=0
        function cambia() {
        cont++;
        switch(cont%5+1)
         {
         case 1:
         document.getElementById("fotocambia").src="images/banner_1.png";
         break;
         case 2:
         document.getElementById("fotocambia").src="images/banner_2.png";
         break;
         case 3:
         document.getElementById("fotocambia").src="images/banner_3.png";
         break;
         case 4:
         document.getElementById("fotocambia").src="images/banner_4.png";
         break;
         case 5:
         document.getElementById("fotocambia").src="images/banner_5.png";
         break;
         }

        }
        function inicio() {
        setInterval(cambia, 3000);
        }
        window.onload=inicio;
    
//    $('#example').DataTable( {
//        "pagingType": "full_numbers"
//    } );
});

function validaLogin(){
    $.post(
            base_url+"Controlador/validaLogin",{},
            function(pagina, datos){
                $("#content").html(pagina,datos);
                Cliente(); 
                disenoBotones();
                diseno3();
                $("#loginBoton").button(
                        
                        
                        ).click(function(){
                            loginBoton();
                            
                        });
                        
                  $( "#tabs" ).tabs();
                   $( "#tabs2" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
                   $( "#tabs2 li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
                 $("#btnCerrar").button().click(
                   function(){
                       salir();
                 
                   });
                   
                   $("#Asociar_disco").button({
                       icons:{secondary:"ui-icon-plus"},
                       text:true    
                   }).tooltip({
                       position:{
                           my:"left top",
                           at:"right+5 top-5" }
                   }).click(
                       function(){
                        Asociar_disco_modal();   
                           
                       });
//                   $("#verDisco").button().click(
//                   function(){
//                            
//                            actualizaTabla();
//                            cerrarTabla2();
//                           cerrarTabla3();
//                 
//                   });
//                   $("#verAsociado").button().click(
//                       function(){
//                           mostrarAsociado();
//                           cerrarTabla();
//                           cerrarTabla3();
//                       }
//                       
//                   );
//                   $("#verCliente").button().click(
//                       function(){
//                           
//                             verClientes();
//                            cerrarTabla();
//                            cerrarTabla2();
//                       
//                          
//                       }
           
//                        );
                 
                   $("#addCliente").button({
                       icons:{secondary:"ui-icon-plus"},
                       text:true    
                   }).tooltip({
                       position:{
                           my:"left top",
                           at:"right+5 top-5" }
                   });
                   
                   
                 $("#addDisco").button({
                       icons:{secondary:"ui-icon-plus"},
                       text:true       
                   }).tooltip({
                       position:{
                           my:"left top",
                           at:"right+5 top-5"           
                       }

                   });
                    
                   
                   $("#addDiscoModal").dialog({
                       modal:true, autoOpen:false, width:410,
                       buttons:{
                           "GuardarDisco":function(){
                               var id=$("#addid_Disco").val();
                               var nom=$("#addnombre").val();
                               var des=$("#addDescripcion").val();
                               var int=$("#addIntegrante").val();
                               var fec=$("#addFecha").val();
                               var valo=$("#addValor").val();
                               var error=false;
                              if (!error && id.trim().length <=0 || parseInt(id)<=1) {
                             
                                       $("#addDiscoMensaje").html("<h6>"+"El ID ES REQUERIDO Y SOLO NUMERO"+"</h6>");
                                       $("#addDiscoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addid_Disco").val("");
//                                     $(this).dialog("close");
//                                     $("#addDiscoModal").dialog("open");
//                                     $(this).dialog("open");
                                  //   $("#addid_Disco").focus();
                              }
                              if (!error && nom.trim().length <=0) {
                                       $("#addDiscoMensaje").html("<h6>"+"El NOMBRE ES REQUERIDO"+"</h6>");
                                       $("#addDiscoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addnombre").focus();
                              }
                              if (!error && des.trim().length <=0) {
                                       $("#addDiscoMensaje").html("<h6>"+"LA DESCRIPCION ES REQUERIDO"+"</h6>");
                                       $("#addDiscoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addDescripcion").focus();
                              }
                              if (!error && int.trim().length <=0) {
                                       $("#addDiscoMensaje").html("<h6>"+"EL INTERPRETE ES REQUERIDO"+"</h6>");
                                       $("#addDiscoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addIntegrante").focus();
                              }
                              if (!error && fec.trim().length <=0) {
                                       $("#addDiscoMensaje").html("<h6>"+"LA FECHA ES REQUERIDA"+"</h6>");
                                       $("#addDiscoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addFecha").focus();
                              }
                              if (!error && valo.trim().length <=0 || parseInt(valo)<=1) {
                                       $("#addDiscoMensaje").html("<h6>"+"EL VALOR ES REQUERIDO Y SOLO NUMEROS"+"</h6>");
                                       $("#addDiscoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addValor").val("");
                                       $("#addValor").focus();
                              }
                             
                                  if(!error){ 
                                      $(this).dialog("close");
                                      addDisco();
                                   window.location="http://localhost/DUPLIDI.CL/#tabs-2";
                                   location.reload();  
                                   //location.reload();
                                      
                                  }


//                               if($("#addnombre").val().trim().length <=0 
//                                    || $("#addDescripcion").val().trim().length <=0 
//                                    || $("#addIntegrante").val().trim().length <=0
//                                    || $("#addFecha").val().trim().length <=0
//                                    || $("#addValor").val().trim().length <=0){
//                                       $("#addDiscoMensaje").html("<h6>"+"TODOS LOS CAMPOS SON REQUERIDOS"+"</h6>");
//                                       $("#addDiscoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                 
                                   // mensajes("Complete Campo Nombre","error");
//                                   if  ($("#addDescripcion").val().trim().length <=0) {
//                                        $("#addDescripcionMensaje").html("<h6>"+"Complete Campo Descripcion"+"</h6>");
//                                        $("#addDescripcionMensaje").fadeIn(100).delay(600).fadeOut(800);
//                                    
//                                             if($("#addIntegrante").val().trim().length <=0) {
//                                                $("#addInterpreteMensaje").html("<h6>"+"Complete Campo Interprete"+"</h6>");
//                                                $("#addInterpreteMensaje").fadeIn(100).delay(600).fadeOut(800);
//                                                
//                                                    if ($("#addFecha").val().trim().length <=0) {
//                                                        $("#addFechaMensaje").html("<h6>"+"Seleccione Campo Fecha"+"</h6>");
//                                                        $("#addFechaMensaje").fadeIn(100).delay(600).fadeOut(800);
//                                                                    
//                                                                if ($("#addValor").val().trim().length <=0) {
//                                                                    $("#addValorMensaje").html("<h6>"+"Seleccione Campo Valor"+"</h6>");
//                                                                    $("#addValorMensaje").fadeIn(100).delay(600).fadeOut(800);
//
//                                               
//                                               
//                                                    }
//                                               
//                                               
//                                            }
//                                                
//                                        }
//                                    }

//                               }else{
//                                   $(this).dialog("close");
//                                   addDisco();
//                                   
//                                   location.reload();
//                                   //actualizaTabla();
//                               } 
//                           }else{
//                           }
//                         }

//                       }


//                   }
                           }}});
                    $("#editarModal").dialog({
                           modal:true, autoOpen:false, width:400, 
                            buttons:{
                           "GuardarE":function(){
                               $(this).dialog("close");
                               if(parseInt($("#addValor").val())<=0 ){
                                    mensajes("Complete Campo Valor","error");

                               }else{
                                   addDisco();
                                   window.location="http://localhost/DUPLIDI.CL/#tabs-2";
                                   location.reload();
                                   //location.reload();
                               }
                           }

                       } 
                    });
                    $("#editarClienteModal").dialog({
                           modal:true, autoOpen:false, width:500, 
                            buttons:{
                           "GuardarEdit":function(){
                               $(this).dialog("close");
                               if(parseInt($("#addTelefonoCliente").val())<=0 ){
                                    mensajes("Complete Campo Telefono","error");
                                    
                               }else{
                                   addClienteEdit();
                                   window.location="http://localhost/DUPLIDI.CL/#tabs-3";
                                   location.reload();
                               }
                           }

                       } 
                    });
                    $("#addAsociacionModal").dialog({
                           modal:true, autoOpen:false, width:750,height:250, 
                            buttons:{
                           "Guardar":function(){
                              
                               if(parseInt($("#SeleccionClienteCombobox").val())<=0 || parseInt($("#SeleccionDiscoCombox").val())<=0 ){
                                   $("#msjAsociar").html("<h6>"+"SELECCIONE DISCO O CLIENTE"+"</h6>");
                                   $("#msjAsociar").fadeIn(100).delay(600).fadeOut(800);

                               }else{
                                  $(this).dialog("close");
                                  AsociarDisco();
                                  window.location="http://localhost/DUPLIDI.CL/#tabs-4";
                                  location.reload();
                                  
                               }
                           }

                       } 
                    }); 
                     $("#addClienteModal").dialog({
                           modal:true, autoOpen:false, width:400, 
                            buttons:{
                           "GuardarCliente":function(){
                              
                               var rut=$("#addrutCliente").val();
                               var nom=$("#addNombreCliente").val();
                               var ape=$("#addApellidoCliente").val();
                               var dir=$("#addDireccionCliente").val();
                               var pas=$("#addPasswordCliente").val();
                               var tel=$("#addTelefonoCliente").val();
                               var cor=$("#addCorreoCliente").val();
                               var error=false;
                              if (!error && rut.trim().length <=0 || parseInt(rut)<=1) {
                             
                                       $("#mensajesAdd2").html("<h6>"+"EL RUT ES REQUERIDO"+"</h6>");
                                       $("#mensajesAdd2").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addrutCliente").val("");
//                                     $(this).dialog("close");
//                                     $("#addDiscoModal").dialog("open");
//                                     $(this).dialog("open");
                                  //   $("#addid_Disco").focus();
                              }
                              if (!error && nom.trim().length <=0) {
                                       $("#mensajesAdd2").html("<h6>"+"El NOMBRE ES REQUERIDO"+"</h6>");
                                       $("#mensajesAdd2").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addNombreCliente").focus();
                              }
                              if (!error && ape.trim().length <=0) {
                                       $("#mensajesAdd2").html("<h6>"+"EL APELLIDO ES REQUERIDO"+"</h6>");
                                       $("#mensajesAdd2").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addApellidoCliente").focus();
                              }
                              if (!error && dir.trim().length <=0) {
                                       $("#mensajesAdd2").html("<h6>"+"LA DIRECCION ES REQUERIDA"+"</h6>");
                                       $("#mensajesAdd2").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addDireccionCliente").focus();
                              }
                              if (!error && pas.trim().length <=0) {
                                       $("#mensajesAdd2").html("<h6>"+"LA PASSWORD ES REQUERIDA"+"</h6>");
                                       $("#mensajesAdd2").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addPasswordCliente").focus();
                              }
                              if (!error && tel.trim().length <=0 ) {
                                       $("#mensajesAdd2").html("<h6>"+"EL TELEFONO ES REQUERIDA"+"</h6>");
                                       $("#mensajesAdd2").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                      
                                       $("#addTelefonoCliente").focus();
                              }
                              if (!error && cor.trim().length <=0 ) {
                                       $("#mensajesAdd2").html("<h6>"+"EL CORREO ES REQUERIDA"+"</h6>");
                                       $("#mensajesAdd2").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                      
                                       $("#addCorreoCliente").focus();
                              }
                             
                                  if(!error){ 
                                      $(this).dialog("close"); 
                                      addCliente();
                                      
                                      window.location="http://localhost/DUPLIDI.CL/#tabs-3";
                                      location.reload();
                                      
                                  }
                           }

                       } 
                    }); 
                        diseno2();
                        
//                   actualizaTabla();
                     });


                                        }
function AsociarDisco(){
    //var iid= $("SeleccionDiscoCombox").val;
    //alert(iid);
    $.post(
           base_url+"Controlador/addAsociarDisco",
            {
             id_disco:$("#SeleccionDiscoCombox").val(),
             rut:$("#SeleccionClienteCombobox").val()

           },function(datos){
               
             
            $("#msjAsociar").html("<h2 id='msjAsociar2'>"+datos.mensaje+"</h2>");
            $("#msjAsociar").fadeIn(100).delay(600).fadeOut(1000);
        },'json'

                    


            );


}
function salir(){
    $.post(base_url+"Controlador/salir",{},
    function(){
                validaLogin();
    });
    
}

function Asociar_disco_modal(){
    $.post(
            base_url+"Controlador/Asociar",{},
            function(pagina,datos){
                $("#addAsociacionModal").html(pagina,datos);                
               $("#addAsociacionModal").dialog({title:"Asociar Disco"});
               $("#addAsociacionModal").dialog("open");
               $("#SeleccionClienteCombobox").selectmenu();
               $("#SeleccionDiscoCombox").selectmenu();
            }    
            );
    
    
    
}

function loginBoton(){
    $.post(
            base_url+"Controlador/login",
    {usuario:$("#loginUsuario").val(),
    clave:$("#loginClave").val()},
    function(datos){
        if(datos.mensaje!=""){
            
            $("#msjLogin").html("<h5 id='menLog'>"+datos.mensaje+"</h5>");
            $("#msjLogin").fadeIn(100).delay(600).fadeOut(1000);
        }else{
            validaLogin();
           
            
        }
        
    },'json'
            
            
            
            );
    
    
}
function actualizaTabla(){
                        $.post(
                                base_url+"Controlador/actualizaTabla",{},
                        function(pagina,datos){
                         $("#divCRUD").html(pagina,datos);  
                          disenoBotones();
                          
                          
                          mensajes("Datos Actualizados Discos","Ok");
                          
                        });


                    }
function mostrarAsociado(){
    $.post(
            base_url+"Controlador/mostrarTabla",{},
            function(pagina,datos){
                $("#divMostrarAsociado").html(pagina,datos);
                 mensajes("Datos Actualizados Asociados","Ok");
            });
    
    
}
function verClientes(){
    $.post(
            base_url+"Controlador/mostrarClientes",{},
            function(pagina,datos){
                $("#divMostrarCliente").html(pagina,datos);
                diseno3();
                 mensajes("Datos Actualizados Clientes","Ok");
            });
    
    
}

function sacarLetra(input){
    var elim=/[^0-9]/gi;
    input.value=input.value.replace(elim,"");
    
}
function sacarSigno(input){
    var elim=/[^a-z  ñ 0-9]/gi;
    input.value=input.value.replace(elim,"");
    
}



function disenoBotones(){
    for(i=0; i<parseInt($("#oculto").val());i++){
        $("#editar"+i).button({
           icons:{secondary:"ui-icon-pencil"},
           text:false
        }).tooltip({
       position:{
           my:"left top",
           at:"right+5 top-5"           
       }
      });
      
      $("#eliminar2"+i).button({
           icons:{secondary:"ui-icon-trash"},
           text:false
        }).tooltip({
       position:{
           my:"left top",
           at:"right+5 top-5"           
       }
      });
      

    }  
    
}
function diseno2(){
   for(i=0; i<parseInt($("#oculto2").val());i++){
        $("#cancelarPedido"+i).button({
           icons:{secondary:"ui-icon-cancel"},
           text:false
        }).tooltip({
       position:{
           my:"left top",
           at:"right+5 top-5"           
       }
      });
        
    } 
    
    
}
function diseno3(){
    for(i=0; i<parseInt($("#oculto3").val());i++){
       $("#editarCliente"+i).button({
           icons:{secondary:"ui-icon-pencil"},
           text:false
        }).tooltip({
       position:{
           my:"left top",
           at:"right+5 top-5"           
       }
      });
      
      $("#eliminarCliente"+i).button({
           icons:{secondary:"ui-icon-trash"},
           text:false
        }).tooltip({
       position:{
           my:"left top",
           at:"right+5 top-5"           
       }
      });
      
        
    } 
    
    
}
function eliminar2(id_disco2){
    $.post(
            base_url+"Controlador/eliminarDisco",
            {id_disco:id_disco2},
            function(){
              //location.reload();
              //window.location.reload(true);
             window.location="http://localhost/DUPLIDI.CL/#tabs-2";
             location.reload();
               

 
           } );
}
function eliminarCliente(rut){
    $.post(
            base_url+"Controlador/eliminarCliente",
            {rut:rut},
            function(){
               window.location="http://localhost/DUPLIDI.CL/#tabs-3";
               location.reload();
               
            }
            );
}
function cancelarPedido(id_duplicaciones){
     $.post(
            base_url+"Controlador/cancelarPedido",
            {id_duplicaciones:id_duplicaciones},
            function(){
               window.location="http://localhost/DUPLIDI.CL/#tabs-1";
             location.reload();
                
           });
}           
function editar(id_disco){
    
   $.post(

            base_url+"Controlador/editarDisco",{},
            function(pagina,datos){
                $("#editarModal").html(pagina,datos);
                validaDiscoID(id_disco);
               $("#editarModal").dialog({title:"EDITAR DISCO"});
               $("#editarModal").dialog("open");
                $( "#addFecha" ).datepicker({
                    dateFormat: "yy-mm-dd"
               });
            }    

    );




}
function editarCliente(rut){
    
   $.post(

            base_url+"Controlador/editarCliente",{},
            function(pagina,datos){
               $("#editarClienteModal").html(pagina,datos); 
                validaRutClienteEdit(rut);
               $("#editarClienteModal").dialog({title:"EDITAR CLIENTE"});
               $("#editarClienteModal").dialog("open");
            }    

    );




}
function mensajes(msj,tipo){
    $("#mensajes").hide();
    $("#mensajes").html("<h3 id='actulizado' class='msj"+tipo+"'>"+msj+"</h3>");
    $("#mensajes").fadeIn(100).delay(600).fadeOut(1000);

}
function agregarCliente(){
    $.post(
            base_url+"Controlador/agregarCliente",{},
            function(pagina,datos){
               $("#addClienteModal").html(pagina,datos);
               $("#addClienteModal").dialog({title:"Agregar Nuevo Cliente"});
               $("#addClienteModal").dialog("open");
                
            });
    
}
function agregarDisco(){
    $.post(

            base_url+"Controlador/agregarDisco",
            {},
            function(pagina,datos){
               $("#addDiscoModal").html(pagina,datos);
               $("#addDiscoModal").dialog({title:"Agregar Nuevo Disco"});
               $("#addDiscoModal").dialog("open");
               $( "#addFecha" ).datepicker({
                    dateFormat: "yy-mm-dd"
               });
            }    

    );


}
function verDisco2(){
   
   actualizaTabla();
            
    
}

function addClienteEdit(){
     $.post(
            base_url+"Controlador/addClienteEdit",{
             rut:$("#addrutClienteEdit").val(),   
             nombre:$("#addNombreClienteEdit").val(),
             apellido:$("#addApellidoClienteEdit").val(),
             direccion:$("#addDireccionClienteEdit").val(),
             cantidadReproducciones:$("#addcantidadReproduccionesEdit").val(),
             password:$("#addPasswordClienteEdit").val(),
             telefono:$("#addTelefonoClienteEdit").val(),
             correo:$("#addCorreoClienteEdit").val()   
            },function(){}
            );
    
    
    
}



function addCliente(){
    $.post(
            base_url+"Controlador/addCliente",{
             rut:$("#addrutCliente").val(),   
             nombre:$("#addNombreCliente").val(),
             apellido:$("#addApellidoCliente").val(),
             direccion:$("#addDireccionCliente").val(),
             password:$("#addPasswordCliente").val(),
             telefono:$("#addTelefonoCliente").val(),
             correo:$("#addCorreoCliente").val()   
            },function(){}
            );
    
    
    
}
function addDisco(){
  
    //alert(num);
  
    $.post(
           base_url+"Controlador/addDisco",
            {
             id_disco:$("#addid_Disco").val(),
             nombre:$("#addnombre").val(),
             descripcion:$("#addDescripcion").val(),
             interprete:$("#addIntegrante").val(),
             fecha:$("#addFecha").val(),
             valor:$("#addValor").val() 

           },function(){
             window.location="http://localhost/DUPLIDI.CL/#tabs-2";
             location.reload();
           }         


            );
}


function validaRutClienteEdit(rut){
    $.post(
            base_url+"Controlador/validaRutClienteEdit",
            {rut:rut},
            function(datos){
             $("#addrutClienteEdit").val(rut);     
             $("#addNombreClienteEdit").val(datos.nombre);     
             $("#addApellidoClienteEdit").val(datos.apellido);     
             $("#addDireccionClienteEdit").val(datos.direccion);     
             $("#addPasswordClienteEdit").val(datos.password); 
             $("#addcantidadReproduccionesEdit").val(datos.cantidadReproducciones);  
             $("#addTelefonoClienteEdit").val(datos.telefono);     
             $("#addCorreoClienteEdit").val(datos.correo);    
                            },'json');
    
}
function validaRutCliente(rut){
    $.post(
            base_url+"Controlador/validaRutCliente",
            {rut:rut},
            function(datos){
             $("#addrutCliente").val(rut);     
             $("#addNombreCliente").val(datos.nombre);     
             $("#addApellidoCliente").val(datos.apellido);     
             $("#addDireccionCliente").val(datos.direccion);     
             $("#addPasswordCliente").val(datos.password);     
             $("#addTelefonoCliente").val(datos.telefono);     
             $("#addCorreoCliente").val(datos.correo);    
                            },'json');
    
}
function validaDiscoID(id_disco2){
    $.post(
           base_url+"Controlador/validaIdDisco",
           {id_disco:id_disco2},
           function(datos){
             $("#addid_Disco").val(datos.id_disco);     
             $("#addnombre").val(datos.nombre_disco);
             $("#addDescripcion").val(datos.descripcion_disco);
             $("#addIntegrante").val(datos.interprete_disco);
             $("#addFecha").val(datos.fecha_disco);
             $("#addValor").val(datos.valor_disco);
           },'json'


            );


}
//function cerrarTabla(){
//  
//document.getElementById('CrudDisco').style.display = 'none';
//    
//}
//function cerrarTabla2(){
//  
//document.getElementById('Asocia').style.display = 'none';
//    
//}
//function cerrarTabla3(){
//document.getElementById('divMostraClientes').style.display = 'none';
//    
//}

//CLIENTE

function Cliente(){


$("#Seleccio").selectmenu();

$("#addPedido2").button({
       icons:{secondary:"ui-icon-plus"},
       text:true       
   }).tooltip({
       position:{
           my:"left top",
           at:"right+5 top-5"           
       }
       
   });




$("#addPedido").button({
       icons:{secondary:"ui-icon-plus"},
       text:true       
   }).tooltip({
       position:{
           my:"left top",
           at:"right+5 top-5"           
       }
       
   });
   $("#cambioClave").button();
   $("#addPedidoModal").dialog({
       modal:true, autoOpen:false, width:500,
       buttons:{
           "Guardar Pedido":function(){
               $(this).dialog("close");
                addPedido();
                location.reload();
           }
           
       }
       
       
   });
   $("#cambioClaveModal").dialog({
           modal:true, autoOpen:false, width:440, 
            buttons:{
           "Guardar Clave Nueva2":function(){
               
                               var cla1=$("#claveActual").val();
                               var cla2=$("#addclaveNueva").val();
                               var cla3=$("#addclaveConfirmar").val();
                               var error=false;
                              if (!error && cla1.trim().length <=0 ) {
                                       $("#addmensajeConClave").html("<h6>"+"INGRESE CLAVE ACTUAL"+"</h6>");
                                       $("#addmensajeConClave").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#claveActual").val("");
//                                     $(this).dialog("close");
//                                     $("#addDiscoModal").dialog("open");
//                                     $(this).dialog("open");
                                  //   $("#addid_Disco").focus();
                              }
                              if (!error && cla2.trim().length <=0) {
                                       $("#addmensajeConClave").html("<h6>"+"INGRESE CLAVE NUEVA"+"</h6>");
                                       $("#addmensajeConClave").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addclaveNueva").focus();
                              }
                              if (!error && cla3.trim().length <=0) {
                                       $("#addmensajeConClave").html("<h6>"+"INGRESE CONFIRMACION DE CLAVE"+"</h6>");
                                       $("#addmensajeConClave").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addclaveConfirmar").focus();
                              }
               
                                     if(!error){ 
                                   
                                     $(this).dialog("close");  
                                     addUpdateClave();
                                      
                                  }
               
              
           }
           
       } 
    }); 
     $("#addCambiarClaveModal").dialog({
           modal:true, autoOpen:false, width:440, 
            buttons:{
           "Guardar Clave Nueva":function(){
               var cla1=$("#claveActual").val();
                               var cla2=$("#addclaveNueva").val();
                               var cla3=$("#addclaveConfirmar").val();
                               var error=false;
                              if (!error && cla1.trim().length <=0 ) {
                                       $("#addmensajeConClave").html("<h6>"+"INGRESE CLAVE ACTUAL"+"</h6>");
                                       $("#addmensajeConClave").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#claveActual").val("");
//                                     $(this).dialog("close");
//                                     $("#addDiscoModal").dialog("open");
//                                     $(this).dialog("open");
                                  //   $("#addid_Disco").focus();
                              }
                              if (!error && cla2.trim().length <=0) {
                                       $("#addmensajeConClave").html("<h6>"+"INGRESE CLAVE NUEVA"+"</h6>");
                                       $("#addmensajeConClave").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addclaveNueva").focus();
                              }
                              if (!error && cla3.trim().length <=0) {
                                       $("#addmensajeConClave").html("<h6>"+"INGRESE CONFIRMACION DE CLAVE"+"</h6>");
                                       $("#addmensajeConClave").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addclaveConfirmar").focus();
                              }
               
                                     if(!error){ 
                                   
                                     $(this).dialog("close");  
                                     addUpdateClave();
                                      
                                  }
               
               
               
              
           }
           
       } 
    }); 
  
   
}


function agregarPedido2(){
     var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth(); 
    var yyyy = hoy.getFullYear();
    $( "#addFecha" ).datepicker({
              minDate: new Date(yyyy, mm , dd+ 7),
               dateFormat: "yy-mm-dd",
             
              monthNamesShort: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
              
          });
    
}
function agregarPedido(){
    var hoy = new Date();
    var dd = hoy.getDate();
    var mm = hoy.getMonth(); 
    var yyyy = hoy.getFullYear();
    $.post(base_url+"Controlador/agregarPedido",{},
    function(pagina, datos){
          $("#addPedidoModal").html(pagina,datos);
          
          $( "#addFecha" ).datepicker({
              minDate: new Date(yyyy, mm , dd+ 7),
               dateFormat: "yy-mm-dd",
             
              monthNamesShort: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
              
          });
          $("#addPedidoModal").dialog({title:"AGREGAR PEDIDO NUEVO"});
          $("#addPedidoModal").dialog("open");
        
        
    }   
    );
    
    
}



function addPedido(){
                               
                               var id=$("#Seleccio").val();
                               var can=$("#addCantidad").val();
                               var fec=$("#addFecha").val();
                               var valo=$("#addValor").val();
                               var error=false;
                              if (!error && id.trim().length <=0 || parseInt(id)<=1) {
                             
                                       $("#addPedidoMensaje").html("<h6>"+"SELECCIONE DISCO"+"</h6>");
                                       $("#addPedidoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#Seleccio").val(0);
//                                     $(this).dialog("close");
//                                     $("#addDiscoModal").dialog("open");
//                                     $(this).dialog("open");
                                  //   $("#addid_Disco").focus();
                              }
                              if (!error && can.trim().length <=0) {
                                       $("#addPedidoMensaje").html("<h6>"+"INGRESE CANTIDAD"+"</h6>");
                                       $("#addPedidoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addCantidad").focus();
                              }
                              if (!error && fec.trim().length <=0) {
                                       $("#addPedidoMensaje").html("<h6>"+"LA FECHA ES REQUERIDO"+"</h6>");
                                       $("#addPedidoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addFecha").focus();
                              }
                             
                             
                              if (!error && valo.trim().length <=0 || parseInt(valo)<=1) {
                                       $("#addPedidoMensaje").html("<h6>"+"EL VALOR ES REQUERIDO Y SOLO NUMEROS"+"</h6>");
                                       $("#addPedidoMensaje").fadeIn(100).delay(600).fadeOut(800);
                                       error=true;
                                       $("#addValor").val("");
                                       $("#addValor").focus();
                              }
                             
                                  if(!error){ 
                                     // $(this).dialog("close");
                                     addPedidoFull();
                                      location.reload();
                                      
                                  }
    
    
    
    
    
    
    
    
    
    
     
}
function addPedidoFull(){
     var can=document.getElementById("addCantidad").value;
     $.post(
            base_url+"Controlador/addPedido",{
             id_disco:$("#Seleccio").val(),   
             cantidad:can,
             fechaEntrega:$("#addFecha").val(),
             valorTotal:$("#addValor").val()             
            },function(){
                location.reload();
                
                
                
            });
}

function calculoValor(){
    var id =document.getElementById("Seleccio").value;
    var can=document.getElementById("addCantidad").value;
    $.post(base_url+"Controlador/calculoValor2",{
        id_disco2:id,
        cantidad2:can
    },
            function(datos){
              $("#addValor").val(datos.respuesta);   
                
            },'json'
    );
    
}

function cambioClave(){
    $.post(base_url+"Controlador/cambioClave",{},function(pagina){
        $("#cambioClaveModal").html(pagina);
        $("#cambioClaveModal").dialog({title:"CAMBIO CLAVE"});
        $("#cambioClaveModal").dialog("open");
    });
    
    
}


function verificaClave(){
    var clave=document.getElementById("claveActual").value;
    $.post(base_url+"Controlador/verificaClave",{
        clave:clave
    },
    function(datos){
        
        if (datos.respuesta2!="Clave Correcta") {
            $("#claveActual").val("");
            $("#addmensajeClave").html("<h6>"+datos.respuesta2+"</h6>");
            $("#addmensajeClave").fadeIn(100).delay(600).fadeOut(800);
            $("#claveActual").focus();
            //alert(datos.respuesta2);
        }
        
        
    },'json'
            );
}

function verificaClaveNueva(){
    var clave=document.getElementById("claveActual").value;
    var claveNueva=document.getElementById("addclaveNueva").value; 
    men="Clave Igual A La Actual";
    if (clave==claveNueva) {
        $("#addmensajeNuevaClave").html("<h6>"+men+"</h6>");
        $("#addmensajeNuevaClave").fadeIn(100).delay(600).fadeOut(800);
        $("#addclaveNueva").val("");
        $("#addclaveNueva").focus();
    }
    
    
}
function verificaConfimaClave(){
    var claveNueva=document.getElementById("addclaveNueva").value;
    var claveCon=document.getElementById("addclaveConfirmar").value;
    $.post(base_url+"Controlador/verificaConClave",{
        claveNueva:claveNueva,
        claveCon:claveCon
    },
    function(datos){
        
        if (datos.respuesta2!="Clave Correcta") {
            $("#addclaveNueva").val("");
            $("#addclaveConfirmar").val("");
            $("#addmensajeConClave").html("<h6>"+datos.respuesta2+"</h6>");
            $("#addmensajeConClave").fadeIn(100).delay(600).fadeOut(800);
            $("#addclaveNueva").focus();
            $("#checkCambio").prop('checked', false);
            //alert(datos.respuesta2);
        }
        
        
            },'json'
            );
    
}

function addUpdateClave(){
     var claveNueva=document.getElementById("addclaveNueva").value;    
     var check=document.getElementById("checkCambio").checked;
     alert(check);
     $.post(
            base_url+"Controlador/addUpdateClave",{             
             claveNueva:claveNueva,
             check:check             
            },function(datos){
                $("#mensajesA").html("<h2>"+datos.respuesta2+"</h2>");
                $("#mensajesA").fadeIn(100).delay(5000).fadeOut(1000);
                if (datos.respuesta2=="CLAVE ACTUALIZADA CORRECTAMENTE... INICIE SESION...") {
                     setTimeout("location.reload()",5000); 
                }
            },'json'
            );
}
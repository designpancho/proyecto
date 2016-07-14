<div id="nombre"><h3 id="nombreUsuario">hola adm <?php echo $nombre?></h3>
    <button id="btnCerrar" class="btnCerr">Cerrar Session</button></div>
<div id="espacio2"></div>
<div id="AdmPrin">
    
<!--        <div id="menuAdm">
            <button id="verDisco" >Ver Disco</button>
            <button id="verCliente" >Ver Clientes</button> 
            <button id="verAsociado" >Ver Asociados</button>
            <button id="cambioClave" onclick="cambioClave()" >Cambiar Clave</button> </br>
            <button id="addDisco" onclick="agregarDisco()">Agregar Disco</button>            
            <button id="addCliente" onclick="agregarCliente()">Agregar Cli.</button>

           
        </div>     -->
            
            <div id="addDiscoModal" ></div>            
            <div id="cambioClaveModal" ></div>
            <div id="addClienteModal" ></div>
            <div id="addAsociacionModal" ></div>
            <div id="divCRUD"></div>
            <div id="divMostrarAsociado"></div>
            <div id="divMostrarCliente"></div>
            <div id="mensajes"></div>
            <!--<div id="msjAsociar"></div>-->
            <div id="editarModal"></div>
            <div id="editarClienteModal"></div>
<!--            <div id="mensajesA"></div>-->
</div>
 <style>
  .ui-tabs-vertical { width: 55em; }
  .ui-tabs-vertical .ui-tabs-nav { padding: .2em .1em .2em .2em; height: 500px; float: left; width: 12em; }
  .ui-tabs-vertical .ui-tabs-nav li { clear: left; width: 100%; border-bottom-width: 1px !important; border-right-width: 0 !important; margin: 0 -1px .2em 0; }
  .ui-tabs-vertical .ui-tabs-nav li a { display:block; }
  .ui-tabs-vertical .ui-tabs-nav li.ui-tabs-active { padding-bottom: 0; padding-right: .1em; border-right-width: 1px; }
  .ui-tabs-vertical .ui-tabs-panel { padding: 1em; float: right; width: 40em;}
  </style>

<div id="tabs2">
  <ul>
    <li><a href="#tabs-1">VER PEDIDOS</a></li>
    <li><a href="#tabs-2">VER DISCO</a></li>
    <li><a href="#tabs-3">VER CLIENTE</a></li>
    <li><a href="#tabs-4">VER ASOCIACION</a></li>
    <li><a href="#tabs-5" onclick="cambioClave()">CAMBIAR CLAVE</a></li>
    
  </ul>
  <div id="tabs-1">
            <div id="divComprasRealizadas">
                        <?php if($cantidad==0):?>
                                <p>NO HAY PEDIDOS</p>
                        <?php else:?>
                                <table id="tabla">
                                    <caption> <img style="width: 4%; margin-bottom: -5px;" src="<?php echo base_url()?>images/carrito.png" />   PEDIDOS</caption>
                                    <th>ID DISCO</th>
                                    <th>NOMBRE DISCO</th>
                                    <th>NOMBRE CLIENTE</th>
                                    <th>CANTIDAD</th>
                                    <th>FECHA PEDIDO</th>
                                    <th>FECHA ENTREGA</th>
                                    <th>VALOR TOTAL</th>
                                    <th>CANCELAR</th>


                                    <?php $i=0; foreach ($pedidos as $fila):?>
                                    <tr>
                                        <td><?php echo $fila->id_duplicaciones?></td>
                                        <td><?php echo $fila->nombre_disco?></td>
                                        <td><?php echo $fila->nombre?></td>
                                        <td><?php echo $fila->cantidad?></td>
                                        <td><?php echo $fila->fecha_pedido?></td>
                                        <td><?php echo $fila->fecha_entrega?></td>
                                        <td><?php echo $fila->valor_total?></td>
                                        <td>
                                            <button id="cancelarPedido<?php echo $i?>" onclick="cancelarPedido(<?php echo $fila->id_duplicaciones?>);">CANCELAR</button>
                                        </td>

                                    </tr>
                                    <?php $i++; endforeach;?>
                                    <th colspan="8"><?php echo $fecha?><?php echo "-----"?><?php echo $fechaNueva?></th>
                                </table>       
                        <!--        <ul>
                                    <?php echo $links ?>
                                </ul>-->
                        <?php endif;?>

                                <input type="hidden" id='oculto2' value='<?php echo $i?>'/> 
        </div>
  </div>
    <div id="tabs-2" class="dis">
<!--     <H2>DISCO</H2>-->
       <button id="addDisco" onclick="agregarDisco()">Nuevo Disco</button>  
      <div id="CrudDisco">
                    <?php if($cantidadDisco==0):?>
                            <p>NO HAY DISCO REALIZADOS</p>
                    <?php else:?>
                            <table id="tabla">
                                <caption><img style="width: 4%; margin-bottom: -5px;" src="<?php echo base_url()?>images/disco.png" /> Disco Registrados</caption>
                                <th>id_disco</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Interprete</th>
                                <th>Fecha Creacion</th>
                                <th>Valor</th>
                                <th>editar</th>
                                <th>eliminar</th>
                                <?php $i=0; foreach ($resultadoDisco as $fila):?>
                                <tr>
                                    <td><?php echo $fila->id_disco?></td>
                                    <td><?php echo $fila->nombre_disco?></td>
                                    <td><?php echo $fila->descripcion_disco?></td>
                                    <td><?php echo $fila->interprete_disco?></td>
                                    <td><?php echo $fila->fecha_disco?></td>
                                    <td><?php echo $fila->valor_disco?></td>
                                    <td>
                                        <button id="editar<?php echo $i?>" onclick="editar(<?php echo $fila->id_disco?>);">EDITAR</button>
                                    </td>
                                    <td>
                                        <button id="eliminar2<?php echo $i?>"  onclick="eliminar2(<?php echo $fila->id_disco?>);">ELIMINAR</button>
                                    </td>
                                </tr>
                                <?php $i++; endforeach;?>
                                <th colspan="8" align="center"><a>             ---                </a></th>
                            </table>       

                    <?php endif;?>

                            <input type="hidden" id='oculto' value='<?php echo $i?>'/>        
            </div>
  </div>
  <div id="tabs-3">
<!--   <H2>CLIENTE</H2>-->
   <button id="addCliente" onclick="agregarCliente()">Nuevo Cliente</button>
                   <div id="divMostraClientes">
                            <?php if($cantidadCliente==0):?>
                                    <p>NO HAY CLIENTES REGISTRADOS</p>
                            <?php else:?>
                                    <table id="tabla">
                                        <caption><img style="width: 4%; margin-bottom: -8px;" src="<?php echo base_url()?>images/cliente.png" />CLIENTE</caption>

                                        <th>RUT</th>
                                        <th>NOMBRE</th>
                                        <th>APELLIDO</th>
                                        <th>DIRECCION</th>
                                        <th>PASSWORD</th>
                                        <th>CANT. REP.</th>
                                        <th>TELEFONO</th>
                                        <th>CORREO</th>
                                        <th>EDITAR</th>
                                        <th>ELIMINAR</th>


                                        <?php $i=0; foreach ($Clientes as $fila):?>
                                        <tr>

                                            <td><?php echo $fila->rut?></td>
                                            <td><?php echo $fila->nombre?></td>
                                            <td><?php echo $fila->apellido?></td>
                                            <td><?php echo $fila->direccion?></td>
                                            <td><?php echo $fila->password?></td>
                                            <td><?php echo $fila->cantidadReproducciones?></td>
                                            <td><?php echo $fila->telefono?></td>
                                            <td><?php echo $fila->correo?></td>
                                            <td>
                                                <button id="editarCliente<?php echo $i?>" onclick="editarCliente(<?php echo $fila->rut?>);">EDITAR</button>
                                            </td>
                                            <td>
                                                <button id="eliminarCliente<?php echo $i?>" onclick="eliminarCliente(<?php echo $fila->rut?>);">ELIMINAR</button>
                                            </td>

                                        </tr>
                                        <?php $i++; endforeach;?>
                                         <th colspan="10" align="center"><a>---</a></th>
                                    </table>       

                            <?php endif;?>

                                    <input type="hidden" id='oculto3' value='<?php echo $i?>'/>

                </div>
  </div>
    <div id="tabs-4">
<!--    <H2>ASOCIAR</H2><button id="Asociar_disco" >Nueva Asociacion</button>-->
                <button id="Asociar_disco" >Asociar Disco</button>
                
            <div id="Asocia">
                <?php if($cantidad==0):?>
                        <p>NO HAY DISCO ASOCIADOS</p>
                <?php else:?>
                        <table id="tabla">
                            <caption> <img style="width: 5%; margin-bottom: -9px;" src="<?php echo base_url()?>images/asocia.png" />    Asociaciones</caption>
                            <th>Codigo</th>
                            <th>Nombre Cliente</th>
                            <th>Nombre Disco</th>

                            <?php $i=0; foreach ($Asociado as $fila):?>
                            <tr>
                                <td><?php echo $fila->id_disco_cliente?></td>
                                <td><?php echo $fila->nombre?></td>
                                <td><?php echo $fila->nombre_disco?></td>

                            </tr>
                            <?php $i++; endforeach;?>
                            <th colspan="8" align="center"><a>---</a></th>
                        </table>       

                <?php endif;?>

                        <input type="hidden" id='oculto' value='<?php echo $i?>'/>        
        </div>
               
  </div>
    <div id="tabs-5">
          <div id="mensajesA"></div>
              
  </div>
</div>





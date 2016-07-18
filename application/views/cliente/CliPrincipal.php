<div id="nombre"><h6 id="nombreUsuario">HOLA  <?php echo $nombre?></h6>
<h6 id="nombreUsuario">Reproducciones <?php echo $cantidadReproducciones?></h6>
<button id="btnCerrar">Cerrar Sesion</button></div>
<div id="espacio"></div>

<div id="tabs">
  <ul>
    <li><a href="#tabs-6">VER PEDIDO</a></li>
    <li><a href="#tabs-7" onclick="agregarPedido2()">AGREGAR PEDIDO</a></li>
    <li><a href="#tabs-8" onclick="cambioClave()">CAMBIAR CLAVE</a></li>
  </ul>
  <div id="tabs-6">
            <div id="divComprasRealizadas">
        <?php if($cantidad==0):?>
                <p>No Hay Compras Realizadas</p>
        <?php else:?>
                <table id="tabla">
                    <caption> <img style="width: 4%; margin-bottom: -5px;" src="<?php echo base_url()?>images/carrito.png" />    COMPRAS REALIZADAS</caption>

                    <th>NOMBRE DISCO</th>
                    <th>CANTIDAD</th>
                    <th>FECHA ENTREGA</th>
                    <th>VALOR TOTAL</th>


                    <?php $i=0; foreach ($Compras as $fila):?>
                    <tr>

                        <td><?php echo $fila->nombre_disco?></td>
                        <td><?php echo $fila->cantidad?></td>
                        <td><?php echo $fila->fecha_entrega?></td>
                        <td><?php echo $fila->valor_total?></td>


                    </tr>
                    <?php $i++; endforeach;?>
                </table>       

        <?php endif;?>

                <input type="hidden" id='oculto' value='<?php echo $i?>'/> 
        </div>
  </div>
  <div id="tabs-7">
                  <table>
                <tr>
                     <td rowspan="5"><img style="width: 100%; margin-bottom: -5px;" src="<?php echo base_url()?>images/disco.png" /> </td>
                    <td>DISCO</td>
                    <td>: 
            <!--            <select id="selecValor">

                        foreach ($arrDisco2 as $id_disco => $nombre_disco)
                        echo '<option values="',$id_disco,'">',$nombre_disco,'</option>';
                        ?>  
                            </select>-->
                        <select id="Seleccio">	
                             <option selected value="0">Seleccione Disco</option>
                                 <?php foreach($arrDisco2 as $valor2):?>
                                <option value="<?php echo $valor2->id_disco;?>"><?php echo $valor2->nombre_disco?></option>

                                <?php endforeach?>
                         </select>
                   </td>
                   <td rowspan="5"><img style="width: 100%; margin-bottom: -5px;" src="<?php echo base_url()?>images/carrito.png" /> </td>
                </tr>
                <tr>
                    <td>CANTIDAD</td>
                    <td>: <input id="addCantidad" onblur="calculoValor(this.value)" onkeyup="sacarLetra(this)" maxlength="11"  placeholder="Cantidad..."/></td>
                </tr>
               <tr>
                    <td>FECHA ENTREGA</td>
                    <td>: <input type="text" id="addFecha"  minDate="<?php echo $fecha?>" readonly="readonly"></td>
                </tr>
                 <tr>
                    <td>Valor</td>
                    <td>: <input id="addValor" placeholder="Valor" readonly="readonly"/></td>
                </tr>
                <tr>          
                     <td colspan="2" align="center"><div id="addPedidoMensaje"></div></td>
                 </tr>
                 <tr>
                     <td colspan="4" align="center"><button id="addPedido2" onclick="addPedido()">REALIZAR PEDIDO</button></td>
                    
                </tr>
            </table>
  </div>
  <div id="tabs-8">
    <div id="mensajesA"></div>
  </div>
</div>
 

<div id="cliPrin">
<!--            <button id="addPedido" onclick="agregarPedido()">REALIZAR PEDIDO</button>
            <button id="cambioClave" onclick="cambioClave()">CAMBIAR CLAVE</button>-->
            
            <div id="addPedidoModal" ></div>
             <div id="cambioClaveModal"></div>        
</div>

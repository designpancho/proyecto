<table>
    <tr>
        <td>DISCO</td>
        <td>: 
<!--            <select id="selecValor">
              
            foreach ($arrDisco2 as $id_disco => $nombre_disco)
            echo '<option values="',$id_disco,'">',$nombre_disco,'</option>';
            ?>  
                </select>-->
            <select id="Seleccio">	
                 <option selected value="0">Seleccione Cliente</option>
                     <?php foreach($arrDisco2 as $valor2):?>
                    <option value="<?php echo $valor2->id_disco;?>"><?php echo $valor2->nombre_disco?></option>

                    <?php endforeach?>
             </select>
       </td>
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
</table>
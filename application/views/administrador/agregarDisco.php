<table>
    <tr>
        <td>id_Disco</td>
        <td>: <input id="addid_Disco"  onblur="validaDiscoID(this.value)" onkeyup="sacarLetra(this)" maxlength="45" placeholder="id Disco"/></td>
    </tr>
    <tr>
        <td>Nombre</td>
        <td>: <input id="addnombre" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Nombre" /></td>
    </tr>
<!--     <tr>          
         <td colspan="2" align="center"><div id="addNombreMensaje"></div></td>
     </tr>-->
    <tr>
        <td>Descripcion</td>
        <td>: <input id="addDescripcion" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Descripcion"/></td>
    </tr>
<!--    <tr>          
         <td colspan="2" align="centerjj"><div id="addDescripcionMensaje"></div></td>
     </tr>-->
    <tr>
        <td>Interprete</td>
        <td>: <input id="addIntegrante" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Interprete"/></td>
    </tr>
<!--    <tr>          
         <td colspan="2" align="center"><div id="addInterpreteMensaje"></div></td>
     </tr>-->
    <tr>
        <td>Fecha</td>        
        <td>: <input type="text" id="addFecha" readonly="readonly"></td>
        
    </tr>
<!--    <tr>          
         <td colspan="2" align="center"><div id="addFechaMensaje"></div></td>
     </tr>-->
     <tr>
        <td>Valor</td>
        <td>: <input id="addValor"  maxlength="11" onkeyup="sacarLetra(this)"  placeholder="Valor"/></td>
    </tr>
    <tr>          
         <td colspan="2" align="center"><div id="addDiscoMensaje"></div></td>
     </tr>
<!--     <tr>
        <td>imagenes</td>
        <td>: <input id="file" type="file" placeholder=""/></td>
    </tr>-->
</table>
 <div id="mensajesAdd"></div>
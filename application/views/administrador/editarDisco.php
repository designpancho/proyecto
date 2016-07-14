<table>
    <tr>
        <td>id_DiscoEdi</td>
        <td>: <input id="addid_Disco" onblur="validaDiscoID(this.value)" readonly="readonly" placeholder="id Disco"/></td>
    </tr>
    <tr>
        <td>Nombre</td>
        <td>: <input id="addnombre" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Nombre"/></td>
    </tr>
    <tr>
        <td>Descripcion</td>
        <td>: <input id="addDescripcion" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Descripcion"/></td>
    </tr>
    <tr>
        <td>Interprete</td>
        <td>: <input id="addIntegrante" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Interprete"/></td>
    </tr>
    <tr>
        <td>Fecha</td>
        <td>: <input type="text" readonly="readonly" id="addFecha" ></td>
    </tr>
     <tr>
        <td>Valor</td>
        <td>: <input id="addValor" maxlength="11" onkeyup="sacarLetra(this)"  placeholder="Valor"/></td>
    </tr>
</table>
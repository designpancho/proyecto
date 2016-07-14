<table>
    <tr>
        <td>RUT</td>
        <td>: <input id="addrutCliente" onblur="validaRutCliente(this.value)" maxlength="8" onkeyup="sacarLetra(this)" placeholder="18655599"/></td>
    </tr>
    <tr>
        <td>Nombre</td>
        <td>: <input id="addNombreCliente" onkeyup="sacarSigno(this)" maxlength="45"  placeholder="Juan"/></td>
    </tr>
    <tr>
        <td>Apellido</td>
        <td>: <input id="addApellidoCliente" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Pérez"/></td>
    </tr>
    <tr>
        <td>Direccion</td>
        <td>: <input id="addDireccionCliente" maxlength="45"  placeholder="1 norte 2 sur"/></td>
    </tr>
    <tr>
        <td>Password</td>
        <td>: <input type="password" id="addPasswordCliente" maxlength="45" placeholder="**********" ></td>
    </tr>
     <tr>
        <td>Telefono</td>
        <td>: <input id="addTelefonoCliente" maxlength="9" onkeyup="sacarLetra(this)" placeholder="987654321"/></td>
    </tr>
    <tr>
        <td>Correo</td>
        <td>: <input id="addCorreoCliente" maxlength="45" placeholder="hola@gmail.com"/></td>
    </tr>
</table>
 <div id="mensajesAdd2"></div>
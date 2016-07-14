<table>
    <tr>
        <td>RUT</td>
        <td>: <input id="addrutClienteEdit" onblur="validaRutClienteEdit(this.value)" maxlength="8" onkeyup="sacarLetra(this)" readonly="readonly" /></td>
    </tr>
    <tr>
        <td>Nombre</td>
        <td>: <input id="addNombreClienteEdit" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Nombre..."/></td>
    </tr>
    <tr>
        <td>Apellido</td>
        <td>: <input id="addApellidoClienteEdit" maxlength="45" onkeyup="sacarSigno(this)" placeholder="Apellido..."/></td>
    </tr>
    <tr>
        <td>Direccion</td>
        <td>: <input id="addDireccionClienteEdit" maxlength="45" placeholder="Direccion..."/></td>
    </tr>
    <tr>
        <td>Password</td>
        <td>: <input type="password" id="addPasswordClienteEdit" maxlength="45" placeholder="**********" ></td>
    </tr>
    <tr>
        <td>Cant. Reproduc.</td>
        <td>: <input id="addcantidadReproduccionesEdit" onkeyup="sacarLetra(this)" maxlength="11" placeholder="cant.reprod....." ></td>
    </tr>
     <tr>
        <td>Telefono</td>
        <td>: <input id="addTelefonoClienteEdit" maxlength="9" onkeyup="sacarLetra(this)" placeholder="Telefono..."/></td>
    </tr>
    <tr>
        <td>Correo</td>
        <td>: <input id="addCorreoClienteEdit" maxlength="45" placeholder="Correo..."/></td>
    </tr>
</table>
export default{
    puntajes: [{alumno:'Pablo Rojas',puntaje:9,resultado:'BUENO'}],
    data:`
        <h1>Autor: Sebastian Chamorro</h1>
        alumno<br/>
        <input id="nombre" type="text"><br/>
        puntaje<br/>
        <select id="puntaje">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select><br/>
        <br/><br/><br/><br/>
        <button onclick="registrar()">registrar</button><br/>
        <div id="salida"></div>

    `,
    cargar:function(){
        var salida = document.getElementById("salida");
        var tabla =`
        <table border='1' width='400'>
            <tr>
                <th>alumno</th>
                <th>puntaje</th>
                <th>resultado</th>
            </tr>
        
        `;
        this.puntajes.forEach((item)=>{
            tabla +=`
                <tr>
                    <th>${item.alumno}</th>
                    <th>${item.puntaje}</th>
                    <th>${item.resultado}</th>
                </tr>
        `
        });
        tabla += "</table>";
        salida.innerHTML = tabla;
        
    },
    registrar:function(){
        var alumno = document.getElementById("alumno").value;
        var puntaje = document.getElementById("puntaje").value;
        var resultado = document.getElementById("resultado");

        if(alumno.value==""||puntaje.value==""){
            alert("campos vacios")
        }

        if(puntaje.value>=0&&puntaje.valuea<=3){
            resultado.value = 'MALO';
        }

        if(puntaje.value>=4&&puntaje.valuea<=7){
            resultado.value = 'REGULAR';
        }

        if(puntaje.value>=8&&puntaje.valuea<=9){
            resultado.value = 'BUENO';
        }

        if(puntaje.value==10){
            resultado.value = 'MASTER';
        }

        var obj ={
            alumno:alumno.value,
            puntaje:puntaje.value,
            resultado:resultado.value
        };
        this.puntajes.push(obj);
        this.cargar();
    }

}
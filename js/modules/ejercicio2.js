export default{
    data:`
        <h1>marcador</h1>
        <div class="a">
            equipo a<br/>
            <input id="eqa" type="text"><br/>
            puntos<br/>
            <div id="ra"></div>
            <button onclick="">+1</button>
        </div>
        <div class="b">
            equipo b<br/>
            <input id="eqb" type="text"><br/>
            puntos<br/>
            <div id="rb"></div>
            <button onclick="">+1</button>
        </div>
        <button>ganador</button>
        <div id="salida"></div>
    `,
    equipos:function(){
        var eqa = document.getElementById("eqa").value;
        var ra = document.getElementById("ra").value;

        if(eqa.value==""||ra.value==""){
            alert("campos vacios")
        }
    },

    ganador:function(){

    }
}
document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "un auto experimenta una aceleracion uniforme";
    da.innerHTML = "velocidadinicial = 60 km/h<br>velocidadfinal = 20 km/h<br>tiempo = 8 s";
    f.textContent = "a=(vf-vi)/t";
    p.textContent = "calcular a=(20-60)/8";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado:-5km/h^2";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});
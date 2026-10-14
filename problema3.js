document.addEventListener("DOMContentLoaded", () => {
    const d = document.getElementById("descripcion");
    const da = document.getElementById("datos");
    const f = document.getElementById("formula");
    const p = document.getElementById("procedimiento");
    const r = document.getElementById("resultado");
    const b = document.getElementById("boton");

    d.textContent = "encuentre las tenciones que se generan en las cuerdas A y B si se sabe que sostiene un cuerpo de 200 N";
    da.innerHTML = "200 N / sen(90°)<br>A / sen(150°)<br>B / sen(120°)";
    f.textContent = "N/sen(C) = A/sen(A) = B/sen(B)";
    p.textContent = "calcular A=(200 N/sen(90°)) * sen(150°)<br>calcular B=(200 N/sen(90°)) * sen(120°)";
    r.textContent = "";

    console.log("descripcion:", d.textContent);
    console.log("datos:", da.textContent);
    console.log("formula:", f.textContent);
    console.log("calculo:", p.textContent);

    function mostrar() {
        r.textContent = "resultado: A = 100 N, B = 173.2 N";
        console.log("resultado final:", r.textContent);
    }

    b.addEventListener("click", mostrar);
});
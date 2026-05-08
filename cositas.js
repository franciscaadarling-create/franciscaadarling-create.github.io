boton.addEventListener("click", () => { 

let migajas = cars.value;
let resultad = "x";

if (migajas === "a") {
    resultad = "Esa es la mejor opción, no te mereces a alguien que te es infiel";
}
else if (migajas === "b") {
    resultad = "Sos una sacada pero te banco un montón";  
}
else if (migajas === "c") {
    resultad = "Sos una verdadera migajera, lamento decirlo. Escuchemos Mon Laferte y José José";
    setTimeout(() => {
  window.location.href="https://www.youtube.com/watch?v=WT-VE9OyAJk&list=RDWT-VE9OyAJk&start_radio=1";;
}, 5000);
    
}
else if (migajas === "d") {
    resultad = "Confident Queen";}

else if (migajas === "e") {
    resultad = "Ehm, te gustan las migajas, no?"
}
resultado.innerText = resultad;
})
export function transitionSliceEl(indice){
    let nuevoIndice=indice*100;
    const landingEl=document.getElementById("landing");
    console.log(landingEl);
    landingEl.animate([
        // keyframes
        { marginLeft: '0%' },
        { marginLeft: `-${nuevoIndice}` }
      ], {
        // timing options
        duration: 4,
      })
}
 export function rotateCard(idEl) {
   const cardElemnt = document.getElementById(idEl);
   cardElemnt.style.transform = 'rotate3D(z,90deg)';  
 }
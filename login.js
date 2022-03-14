if(window.innerWidth <= 443){
    let inps=document.getElementsByClassName('inp')
    let inpsArray=Array.from(inps)
    for(let i=0;i<inpsArray.length;i++){
        inpsArray[i].style.width=`${window.innerWidth*0.86}px`
    }
}
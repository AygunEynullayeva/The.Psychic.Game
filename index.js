var win=document.querySelector('.win')
var itki=document.querySelector('.loss')
var sans=document.querySelector('.chance')
var far=document.querySelector('.far')
var qxal=0
var mxal=0
var texmin=9
var herf=[]
var aygun=window.onkeypress=function(e){
    var arr=['a','s','d','f','g','h','j','k','l','q','w','e','r','t','y','u','o','p','z','c','v','b','n']
    var reqem=Math.floor(Math.random()*arr.length)
    var comp=arr[reqem]
    herf.push(e.key)
    far.innerText=herf
    sans.innerText=texmin
    texmin--
    win.innerText=qxal
    itki.innerText=mxal

    if(e.key==comp){
        qxal++
        herf=[]
        texmin=9
    }
    else if(texmin==0){
        mxal++
        herf=[]
        texmin=9
    }
}
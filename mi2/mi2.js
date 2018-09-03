window.onload=function(){

    let banner=document.querySelectorAll(".banner img");
    let dot=document.querySelectorAll(".banner li");
    let but=document.querySelector(".banner .leftmini");
    let but2=document.querySelector(".banner .rightmini");
    let father=document.querySelector(".banners");
    console.log(father);
    banner[0].style.opacity=1;
    dot[0].classList.add("hots");
    next=0;
    now=0;
    let t=setInterval(move,2000);
    let flag=true;
    function move(){
        next++;
        if(next==banner.length){
            next=0;
        }
       banner[now].style.opacity=0;
        animate(banner[next],{opacity:1},function(){
            flag=true;
        });
        dot[now].classList.remove("hots");
        dot[next].classList.add("hots");
        now=next;
    }
    function moveL(){
        next--;
        if(next==-1){
            next=banner.length-1;
        }
        banner[now].style.opacity=0;
        animate(banner[next],{opacity:1},function(){
            flag=true;
        });
        dot[now].classList.remove("hots");
        dot[next].classList.add("hots");
        now=next;
    }
for(let i=0;i<dot.length;i++){
        dot[i].onmouseenter=function(){
            for(let j=0;j<dot.length;j++){
                dot[j].classList.remove("hots");
                banner[j].style.opacity=0;
            }
            clearInterval(t);
            dot[i].classList.add("hots");
            banner[i].style.opacity=1;
            next=i;
            now=i;
        }
     dot[i].onmouseleave=function(){
         t=setInterval(move,2000);
     }
}
but.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        moveL();
}
    but2.onclick=function(){
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
father.onmouseenter=function () {
    clearInterval(t);
}
father.onmouseleave=function () {
    t=setInterval(move,2000);
    }


    let looks=document.querySelectorAll(".looks");
    let dots=document.querySelectorAll(".dot31");
    let dots1=document.querySelectorAll(".cbox .buttom");
    let smallbanner=function(looks,dots,dots1){
        looks[0].style.left=0;
        dots[0].classList.add("hot");
        let next1=0;
        let now1=0;
        function move1(){
            next1++;
            if(next1==looks.length){
                next1=0;
            }
            looks[next1].style.left="288px";
            animate(looks[now1],{left:-288});
            animate(looks[next1],{left:0});
            dots[now].classList.remove("hot");
            dots[next].classList.add("hot");
            now1=next1;
        }
        function moveL1(){
            next1--;
            if(next1<0){
                next1=looks.length-1;
            }
            looks[next1].style.left="-288px";
            animate(looks[now1],{left:288});
            animate(looks[next1],{left:0});
            dots[now].classList.remove("hot");
            dots[next].classList.add("hot");
            now=next1;
        }
        for(let i=0;i<dots.length;i++){
            dots[i].onclick=function(){
                if(i==now1){
                    return;
                }
                else if(i>now1){
                    looks[i].style.left="288px";
                    animate(looks[now1],{left:-288});
                    animate(looks[i],{left:0});
                    dots[now1].classList.remove("hot");
                    dots[i].classList.add("hot");
                }
                else if(i<now1){
                    looks[i].style.left="-288px";
                    animate(looks[now1],{left:288});
                    animate(looks[i],{left:0});
                    dots[now1].classList.remove("hot");
                    dots[i].classList.add("hot");
                }
                now1=i;
                next1=now1;
            }
        }
    }
    smallbanner(looks,dots,dots1);

    let pict=document.querySelectorAll(".lookq");
    let dots2=document.querySelectorAll(".dot32");
    smallbanner(pict,dots2);
    let pict1=document.querySelectorAll(".lookw");
    let dots3=document.querySelectorAll(".dot33");
    smallbanner(pict1,dots3);
    let pict2=document.querySelectorAll(".looke");
    let dots4=document.querySelectorAll(".dot34");
    console.log(pict2)
    smallbanner(pict2,dots4);
}




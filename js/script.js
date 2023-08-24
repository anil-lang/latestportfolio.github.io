var tl = gsap.timeline()
tl.from("#anil p, #mynavbar, #search" ,{
    y : -100,
    opacity : 0,
    duration: 1,
    stagger:0.3
})


tl.from("#loco ,#text h1, #text p",{
   scale : -2,
   opacity : 0,
   duration :0.6,
   delay : 0.7,
   stagger : 0.4,
   scrollTrigger : {
    trigger : "#loco ,#text h1,#text p",
    scroller : "body",
    markers : true,
    start : "top 25%"
   }
})


tl.from("#service h1",{
   x : 200,
   rotate : -360,
   opacity : 0,
   duration :0.4,
   delay : 0.5,
   stagger : 0.9,
   scrollTrigger : {
    trigger : "#loco ,#text h1,#text p",
    scroller : "body",
    markers : true,
    start : "top 10%"
   }
})
tl.from("#colo h1 ,#colo p",{
   x : 500,
   scale : -5,
   opcity : 0,
//    rotate : -360,
   opacity : 0,
   duration :0.4,
   delay : 0.5,
   stagger : 0.9,
   scrollTrigger : {
    trigger : "#loco ,#text h1,#text p",
    scroller : "body",
    markers : true,
    start : "top 5%"
   }
})
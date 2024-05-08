const flips = gsap.utils.toArray(".imgcontainer")
let scrollTween = gsap.to( flips , {
  xPercent: -20 * (flips.length - 1),
  ease:"none",
  scrollTrigger:{
    trigger:".img-sliding-con",
    pin:true,
    scrub:3,
    end:"+-3000"
  }
})
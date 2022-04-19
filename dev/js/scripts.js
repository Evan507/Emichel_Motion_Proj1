import { gsap } from "gsap";

const heromove = gsap.timeline();
    
heromove
.from(".abyss-hero", {duration: 3, y: 450}, "abyss-rise")
.from(".abyss-hero", {duration: 6, opacity: 0}, "abyss-rise")
.from(".history-hero", {delay: 2.2, duration: 2, opacity: 0}, "abyss-rise")

;
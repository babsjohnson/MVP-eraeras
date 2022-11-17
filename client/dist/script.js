const canvas = document.getElementById("bg");
canvas.width = 1024;
canvas.height = 1024;

var hydra = new Hydra({
  canvas,
  detectAudio: false,
  enableStreamCapture: false,
})
// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

// by Rangga Purnama Aji
// https://ranggapurnamaaji1.wixsite.com/portfolio

shape(1,1)
  .mult(voronoi(1000,2)
  .blend(o0).luma())
  .add(shape(3,0.125)
       .rotate(1,1).mult(voronoi(1000,1).luma())
       .rotate(1.5)).scrollX([0.1,-0.0625,0.005,0.00001],0)
  .scrollY([0.1,-0.0625,0.005,0.00001],0)
  .out()

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Rangga Purnama Aji
// https://ranggapurnamaaji1.wixsite.com/portfolio
// shape(1.465, 1)
// 	.mult(voronoi(1000, 1.012)
// 		.blend(o0)
// 		.luma())
// 	.add(shape(1.164, 0.13)
// 		.rotate(1, 1)
// 		.mult(voronoi(1186.349, 0.623)
// 			.luma())
// 		.rotate(2.17))
// 	.scrollX([0.064, -0.089, 0.009, 0], 0.063)
// 	.scrollY([0.084, -0.069, 0.005, 0.00001], 0.582)
// 	.out();


	//GREY VERTICAL
  osc(5, .1)
	.modulate(noise(6), .22)
	.diff(o0)
	.modulateScrollY(osc(2)
		.modulate(osc()
			.rotate(), .11))
	.scale(0.429)
	.color(1, 1, 1)
	.scale(1, () => window.innerHeight/window.innerWidth)
	.out();

	// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//corrupted screensaver
//by Ritchse
//instagram.com/ritchse
//SPIRAL GALAXY
// voronoi(350,0.15)
// .modulateScale(osc(8).rotate(Math.sin(time)),.5)
// .thresh(.8)
// .modulateRotate(osc(7),.4)
// .thresh(.7)
// .diff(src(o0).scale(1.8))
// .modulateScale(osc(2).modulateRotate(o0,.74))
// .diff(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.3)))
// .brightness([-.02,-.17].smooth().fast(.3))
// .out()


// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// ee_3 //LINES
// e_e // @eerie_ear
//
//based on
//@naoto_hieda
//https://naotohieda.com/blog/hydra-book/
//
// n = 8
// a = () => shape(4,0.25,0.009).rotate(()=>time/-40).repeat(n,n)
// a().add(a().scrollX(0.5/n).scrollY(0.5/n),1).modulate(o1,0.1).modulate(src(o1).color(10,10).add(solid(-14,-14)).rotate(()=>time/40),() => mouse.x * 0.0003).add(src(o1).scrollY(0.012,0.02),0.5).out(o1)
// src(o1).colorama(1.2).posterize(4).saturate(0.7).contrast(6).mult(solid(),0.15).out(o0)

// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Olivia Jack
// @_ojack_

// osc(20, 0.01, 1.1)
// 	.kaleid(5)
// 	.color(2.83,0.91,0.39)
// 	.rotate(0, 0.1)
// 	.modulate(o0, () => mouse.x * 0.0003)
// 	.scale(1.01)
//   	.out(o0)



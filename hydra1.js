s0.initImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png")

src(s0)
	.modulateScrollY(osc(3), 1,0)
	.color([1,1,1,1,1],[0,1,0,1,0],[0,0,1,1,0])
	.colorama([0.05,0.03,0.66,5.0].fast(0.125))
.out(o0)
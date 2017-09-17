(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1000,
	height: 500,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("EAtogIbIKeAAIAAQ3IqeAAgEAxqgBQICgAAIAACeIigAAgEAxqgFdICgAAIAACgIigAAgEAxqADVICgAAIAACgIigAAgEg4FgIbIKeAAIAAQ3IqeAAgEg0VgBAICgAAIAACeIigAAgEg0VgFOICgAAIAACgIigAAgEg0VADlICgAAIAACgIigAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Eg0PAFxIAAigICgAAIAACggEAxwAFiIAAigICgAAIAACggEg0PABKIAAidICgAAIAACdgEAxwAA7IAAieICgAAIAACegEg0PgDBIAAigICgAAIAACggEAxwgDQIAAihICgAAIAAChg");
	this.shape_1.setTransform(-0.6,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-55,720.2,110);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("EAodgBiIBSAAIAAB9IhSAAgEAqbABGIBSAAIAAB+IhSAAgEAogABGIBRAAIAAB+IhRAAgEAqZgBiIBRAAIAAB9IhRAAgEAmcgBiIBRAAIAAB9IhRAAgEAiVgBiIBSAAIAAB9IhSAAgEAkjABGIBRAAIAAB+IhRAAgEAiYABGIBRAAIAAB+IhRAAgEAmeABGIBSAAIAAB+IhSAAgEAkggBiIBSAAIAAB9IhSAAgEgtngD+MBbPAAAIAAH9MhbPAAAgEAgagBiIBRAAIAAB9IhRAAgAcdhiIBRAAIAAB9IhRAAgAaaBGIBRAAIAAB+IhRAAgAebBGIBRAAIAAB+IhRAAgAcfBGIBSAAIAAB+IhSAAgEAgcABGIBSAAIAAB+IhSAAgAaXhiIBSAAIAAB9IhSAAgAeYhiIBSAAIAAB9IhSAAgAYchiIBRAAIAAB9IhRAAgAWahiIBSAAIAAB9IhSAAgAUhBGIBSAAIAAB+IhSAAgAWdBGIBRAAIAAB+IhRAAgAYeBGIBSAAIAAB+IhSAAgAUfhiIBRAAIAAB9IhRAAgAllhiIBRAAIAAB9IhRAAgApihiIBRAAIAAB9IhRAAgAneBGIBRAAIAAB+IhRAAgArbBGIBRAAIAAB+IhRAAgApgBGIBSAAIAAB+IhSAAgAljBGIBSAAIAAB+IhSAAgArehiIBSAAIAAB9IhSAAgAnhhiIBSAAIAAB9IhSAAgAvlhiIBRAAIAAB9IhRAAgAtnBGIBRAAIAAB+IhRAAgAvjBGIBSAAIAAB+IhSAAgAxkBGIBRAAIAAB+IhRAAgAtqhiIBSAAIAAB9IhSAAgAxnhiIBSAAIAAB9IhSAAgAzihiIBRAAIAAB9IhRAAgA1ohiIBSAAIAAB9IhSAAgA3hBGIBSAAIAAB+IhSAAgA1lBGIBRAAIAAB+IhRAAgAzgBGIBSAAIAAB+IhSAAgA3jhiIBRAAIAAB9IhRAAgA5lhiIBSAAIAAB9IhSAAgA7ghiIBRAAIAAB9IhRAAgA7eBGIBSAAIAAB+IhSAAgA9wBGIBRAAIAAB+IhRAAgA5iBGIBRAAIAAB+IhRAAgA9zhiIBSAAIAAB9IhSAAgASghiIBRAAIAAB9IhRAAgAQkhiIBSAAIAAB9IhSAAgAOlBGIBSAAIAAB+IhSAAgAQnBGIBRAAIAAB+IhRAAgASiBGIBSAAIAAB+IhSAAgAOjhiIBRAAIAAB9IhRAAgAMnhiIBSAAIAAB9IhSAAgAImhiIBSAAIAAB9IhSAAgAKkBGIBSAAIAAB+IhSAAgAIpBGIBRAAIAAB+IhRAAgAMqBGIBRAAIAAB+IhRAAgAKihiIBRAAIAAB9IhRAAgAGlhiIBRAAIAAB9IhRAAgACXhiIBRAAIAAB9IhRAAgAEsBGIBRAAIAAB+IhRAAgACZBGIBSAAIAAB+IhSAAgAGnBGIBSAAIAAB+IhSAAgAEphiIBSAAIAAB9IhSAAgAAbhiIBSAAIAAB9IhSAAgAjghiIBSAAIAAB9IhSAAgAhiBGIBSAAIAAB+IhSAAgAjdBGIBRAAIAAB+IhRAAgAAeBGIBRAAIAAB+IhRAAgAhkhiIBRAAIAAB9IhRAAgA/uhiIBRAAIAAB9IhRAAgEgjrgBiIBRAAIAAB9IhRAAgEghtABGIBRAAIAAB+IhRAAgEgjpABGIBSAAIAAB+IhSAAgA/sBGIBSAAIAAB+IhSAAgEghwgBiIBSAAIAAB9IhSAAgEglxgBiIBSAAIAAB9IhSAAgEgpugBiIBSAAIAAB9IhSAAgEgnqABGIBSAAIAAB+IhSAAgEgprABGIBRAAIAAB+IhRAAgEgluABGIBRAAIAAB+IhRAAgEgnsgBiIBRAAIAAB9IhRAAgEgrnABGIBSAAIAAB+IhSAAgEgrpgBiIBRAAIAAB9IhRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAqaACUIAAh/IBRAAIAAB/gEAofACUIAAh/IBRAAIAAB/gEAmdACUIAAh/IBRAAIAAB/gEAkhACUIAAh/IBSAAIAAB/gEAiWACUIAAh/IBSAAIAAB/gEAgbACUIAAh/IBRAAIAAB/gAeaCUIAAh/IBRAAIAAB/gAceCUIAAh/IBRAAIAAB/gAaYCUIAAh/IBSAAIAAB/gAYdCUIAAh/IBSAAIAAB/gAWbCUIAAh/IBSAAIAAB/gAUgCUIAAh/IBSAAIAAB/gAShCUIAAh/IBRAAIAAB/gAQmCUIAAh/IBRAAIAAB/gAOkCUIAAh/IBRAAIAAB/gAMpCUIAAh/IBRAAIAAB/gAKjCUIAAh/IBSAAIAAB/gAIoCUIAAh/IBRAAIAAB/gAGmCUIAAh/IBSAAIAAB/gAErCUIAAh/IBRAAIAAB/gACYCUIAAh/IBSAAIAAB/gAAdCUIAAh/IBRAAIAAB/gAhjCUIAAh/IBSAAIAAB/gAjeCUIAAh/IBRAAIAAB/gAlkCUIAAh/IBRAAIAAB/gAngCUIAAh/IBSAAIAAB/gAphCUIAAh/IBSAAIAAB/gArdCUIAAh/IBSAAIAAB/gAtoCUIAAh/IBRAAIAAB/gAvkCUIAAh/IBSAAIAAB/gAxmCUIAAh/IBSAAIAAB/gAzhCUIAAh/IBSAAIAAB/gA1mCUIAAh/IBRAAIAAB/gA3iCUIAAh/IBRAAIAAB/gA5jCUIAAh/IBRAAIAAB/gA7fCUIAAh/IBRAAIAAB/gA9xCUIAAh/IBRAAIAAB/gA/tCUIAAh/IBRAAIAAB/gEghuACUIAAh/IBRAAIAAB/gEgjqACUIAAh/IBRAAIAAB/gEglwACUIAAh/IBSAAIAAB/gEgnrACUIAAh/IBRAAIAAB/gEgptACUIAAh/IBSAAIAAB/gEgroACUIAAh/IBRAAIAAB/gEAqYgAUIAAh/IBRAAIAAB/gEAocgAUIAAh/IBRAAIAAB/gEAmbgAUIAAh/IBRAAIAAB/gEAkfgAUIAAh/IBRAAIAAB/gEAiUgAUIAAh/IBSAAIAAB/gEAgYgAUIAAh/IBSAAIAAB/gAeXgUIAAh/IBSAAIAAB/gAccgUIAAh/IBRAAIAAB/gAaWgUIAAh/IBRAAIAAB/gAYagUIAAh/IBSAAIAAB/gAWZgUIAAh/IBSAAIAAB/gAUdgUIAAh/IBSAAIAAB/gASegUIAAh/IBSAAIAAB/gAQjgUIAAh/IBRAAIAAB/gAOigUIAAh/IBRAAIAAB/gAMmgUIAAh/IBRAAIAAB/gAKggUIAAh/IBSAAIAAB/gAIlgUIAAh/IBSAAIAAB/gAGjgUIAAh/IBSAAIAAB/gAEogUIAAh/IBSAAIAAB/gACVgUIAAh/IBSAAIAAB/gAAagUIAAh/IBSAAIAAB/gAhmgUIAAh/IBSAAIAAB/gAjhgUIAAh/IBSAAIAAB/gAlmgUIAAh/IBRAAIAAB/gAnigUIAAh/IBRAAIAAB/gApjgUIAAh/IBRAAIAAB/gArfgUIAAh/IBSAAIAAB/gAtrgUIAAh/IBRAAIAAB/gAvmgUIAAh/IBRAAIAAB/gAxogUIAAh/IBRAAIAAB/gAzkgUIAAh/IBSAAIAAB/gA1pgUIAAh/IBSAAIAAB/gA3kgUIAAh/IBRAAIAAB/gA5mgUIAAh/IBSAAIAAB/gA7hgUIAAh/IBRAAIAAB/gA90gUIAAh/IBSAAIAAB/gA/vgUIAAh/IBRAAIAAB/gEghxgAUIAAh/IBRAAIAAB/gEgjsgAUIAAh/IBRAAIAAB/gEglygAUIAAh/IBSAAIAAB/gEgnugAUIAAh/IBSAAIAAB/gEgpvgAUIAAh/IBSAAIAAB/gEgrrgAUIAAh/IBSAAIAAB/g");
	this.shape_1.setTransform(0.2,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293,-26.5,586.2,53);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("AKnjAIBRAAIAAB+IhRAAgAKklqIBSAAIAAB/IhSAAgAQnlqIBRAAIAAB/IhRAAgAMqlqIBRAAIAAB/IhRAAgAMsjAIBSAAIAAB+IhSAAgAOojAIBRAAIAAB+IhRAAgASljAIBRAAIAAB+IhRAAgAQpjAIBSAAIAAB+IhSAAgAOllqIBSAAIAAB/IhSAAgASilqIBSAAIAAB/IhSAAgAWdlqIBRAAIAAB/IhRAAgAUhlqIBSAAIAAB/IhSAAgAUkjAIBRAAIAAB+IhRAAgAYhjAIBRAAIAAB+IhRAAgAWfjAIBSAAIAAB+IhSAAgAYelqIBSAAIAAB/IhSAAgAcflqIBSAAIAAB/IhSAAgAaalqIBRAAIAAB/IhRAAgAacjAIBSAAIAAB+IhSAAgAcijAIBRAAIAAB+IhRAAgAedjAIBSAAIAAB+IhSAAgAeblqIBRAAIAAB/IhRAAgEAkjgFqIBRAAIAAB/IhRAAgEAgcgFqIBSAAIAAB/IhSAAgEAiagDAIBSAAIAAB+IhSAAgEAgfgDAIBRAAIAAB+IhRAAgEAklgDAIBSAAIAAB+IhSAAgEAiYgFqIBRAAIAAB/IhRAAgEAqbgFqIBSAAIAAB/IhSAAgEAmegFqIBSAAIAAB/IhSAAgEAmhgDAIBRAAIAAB+IhRAAgEAoigDAIBSAAIAAB+IhSAAgEAqegDAIBRAAIAAB+IhRAAgEAoggFqIBRAAIAAB/IhRAAgEAtoAG9IAAt5MhbPAAAIAAN5gEgnqgFqIBSAAIAAB/IhSAAgEgrngFqIBSAAIAAB/IhSAAgEgppgDAIBSAAIAAB+IhSAAgEgrkgDAIBRAAIAAB+IhRAAgEgnngDAIBRAAIAAB+IhRAAgEgprgFqIBRAAIAAB/IhRAAgEghtgFqIBRAAIAAB/IhRAAgEglugFqIBRAAIAAB/IhRAAgEglsgDAIBSAAIAAB+IhSAAgEgjmgDAIBRAAIAAB+IhRAAgEghrgDAIBSAAIAAB+IhSAAgA/pjAIBRAAIAAB+IhRAAgEgjpgFqIBSAAIAAB/IhSAAgA/slqIBSAAIAAB/IhSAAgA7elqIBSAAIAAB/IhSAAgA9wlqIBRAAIAAB/IhRAAgA9ujAIBSAAIAAB+IhSAAgA7bjAIBRAAIAAB+IhRAAgA5gjAIBSAAIAAB+IhSAAgA5ilqIBRAAIAAB/IhRAAgA1llqIBRAAIAAB/IhRAAgA3hlqIBSAAIAAB/IhSAAgA3ejAIBRAAIAAB+IhRAAgAzdjAIBRAAIAAB+IhRAAgA1jjAIBSAAIAAB+IhSAAgAzglqIBSAAIAAB/IhSAAgAvjlqIBSAAIAAB/IhSAAgAxklqIBRAAIAAB/IhRAAgAxijAIBSAAIAAB+IhSAAgAvgjAIBRAAIAAB+IhRAAgAtljAIBSAAIAAB+IhSAAgAtnlqIBRAAIAAB/IhRAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("EAqaACUIAAh/IBRAAIAAB/gEAoeACUIAAh/IBSAAIAAB/gEAmdACUIAAh/IBRAAIAAB/gEAkhACUIAAh/IBSAAIAAB/gEAiXACUIAAh/IBRAAIAAB/gEAgbACUIAAh/IBRAAIAAB/gAeaCUIAAh/IBRAAIAAB/gAceCUIAAh/IBSAAIAAB/gAaYCUIAAh/IBSAAIAAB/gAYdCUIAAh/IBRAAIAAB/gAWcCUIAAh/IBRAAIAAB/gAUgCUIAAh/IBRAAIAAB/gAShCUIAAh/IBRAAIAAB/gAQlCUIAAh/IBSAAIAAB/gAOkCUIAAh/IBRAAIAAB/gAMoCUIAAh/IBSAAIAAB/gAKjCUIAAh/IBSAAIAAB/gAtpCUIAAh/IBSAAIAAB/gAvkCUIAAh/IBSAAIAAB/gAxmCUIAAh/IBSAAIAAB/gAzhCUIAAh/IBSAAIAAB/gA1mCUIAAh/IBRAAIAAB/gA3iCUIAAh/IBRAAIAAB/gA5jCUIAAh/IBRAAIAAB/gA7fCUIAAh/IBSAAIAAB/gA9xCUIAAh/IBRAAIAAB/gA/tCUIAAh/IBSAAIAAB/gEghvACUIAAh/IBSAAIAAB/gEgjqACUIAAh/IBSAAIAAB/gEglvACUIAAh/IBRAAIAAB/gEgnrACUIAAh/IBRAAIAAB/gEgpsACUIAAh/IBRAAIAAB/gEgroACUIAAh/IBRAAIAAB/gEAqYgAUIAAh+IBRAAIAAB+gEAocgAUIAAh+IBRAAIAAB+gEAmbgAUIAAh+IBRAAIAAB+gEAkfgAUIAAh+IBRAAIAAB+gEAiUgAUIAAh+IBSAAIAAB+gEAgZgAUIAAh+IBRAAIAAB+gAeXgUIAAh+IBRAAIAAB+gAccgUIAAh+IBRAAIAAB+gAaWgUIAAh+IBSAAIAAB+gAYagUIAAh+IBSAAIAAB+gAWZgUIAAh+IBSAAIAAB+gAUdgUIAAh+IBSAAIAAB+gASfgUIAAh+IBRAAIAAB+gAQjgUIAAh+IBRAAIAAB+gAOigUIAAh+IBRAAIAAB+gAMmgUIAAh+IBRAAIAAB+gAKggUIAAh+IBSAAIAAB+gAtrgUIAAh+IBRAAIAAB+gAvngUIAAh+IBSAAIAAB+gAxogUIAAh+IBRAAIAAB+gAzkgUIAAh+IBSAAIAAB+gA1pgUIAAh+IBRAAIAAB+gA3kgUIAAh+IBRAAIAAB+gA5mgUIAAh+IBRAAIAAB+gA7hgUIAAh+IBRAAIAAB+gA90gUIAAh+IBRAAIAAB+gA/vgUIAAh+IBRAAIAAB+gEghxgAUIAAh+IBRAAIAAB+gEgjtgAUIAAh+IBSAAIAAB+gEglygAUIAAh+IBSAAIAAB+gEgntgAUIAAh+IBRAAIAAB+gEgpvgAUIAAh+IBSAAIAAB+gEgrqgAUIAAh+IBRAAIAAB+g");
	this.shape_1.setTransform(0.4,-21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293,-45.5,586.2,91.1);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("AlqEjIAAmjIAXAAIAAGjIgXAAIg1AAIgZAAIAAmeIAZAAIAAGeAoFEjIgtAAIAApFIRlAAIAAJFIg0AAIhZAAIgdAAIhLAAAm4EjIhNAAIAAoEIQEAAIAAIEAkiEjIgxAAAkiEjIAAmlIHeAAIAAGlgAGJEjIAAmtIAdAAIAAGtAEUEjIAAmoIAqAAIAAGoIgqAAIgZAAADsEjIgwAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AH/EjIAAoEIwEAAIAAIEIgtAAIAApFIRlAAIAAJFgAGJEjIAAmtIAdAAIAAGtgAEUEjIAAmnIArAAIAAGngAlqEjIAAmjIAYAAIAAGjgAm4EjIAAmdIAZAAIAAGdg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-30.1,114.8,60.3);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("Ac+GbIhQAAIh4AAIAAlzIB4AAIAAFzAe2GbIh4AAIAAluIB4AAgEAgXAGbIhhAAEAgXAGbIAAlzIB4AAIAAFzgAUfAoIA5AAIAAFzIh4AAIAAlzgAWoGbIhQAAAZ2GbIhWAAIh4AAIAAluIB4AAIAAFuEAp1AGbIhQAAIh4AAIAAlzIB4AAIAAFzEgr0AGbIhzAAIAAm8MAjQAAAIAAj+ICQAAIAAh7IOmAAIAAB7ICdAAIAAD+MAksAAAIAAG8Ih7AAIh4AAIAAluIB4AAIAAFuEAlXAGbIh4AAIAAluIB4AAgEAjfAGbIhQAAEAmtAGbIhWAAAy0GbIAAlzIB4AAIAAFzIh4AAIhLAAA13GbIAAluIB4AAIAAFuIh4AAIhQAAIh4AAIhWAAA4/GbIAAlzIB4AAIAAFzA8NGbIAAluIB4AAIAAFuIh4AAIhQAAIh4AAIAAlzIB4AAIAAFzAt0GbIh4AAIAAluIB4AAgAvsGbIhQAAAUfAjIAAAFAPfGRIAAlzIB4AAIAAFzAMRGRIAAluIB4AAIAAFuATgGbMghUAAAEgr0AGbIAAlzIB4AAIAAFzgEgiWAGbIhQAAIh4AAIAAlzIB4AAIAAFzA/VGbIhJAAIh4AAIAAluIB4AAIAAFuEgosAGbIAAluIB4AAIAAFuEgosAGbIhQAAEgleAGbIhWAAIh4AA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-293,-42.1,586.2,84.3);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(2,1,1).p("AnXDtQD3nODggLQABAAACAAQDcAMD5HNIhPAAQj3lxiYAPQjNARjCFRg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1F1F1F").s().p("AGJDtQj3lxiYAPQjNARjCFRIhCAAQD3nODggLIADAAQDcAMD5HNg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.2,-24.7,96.6,49.5);


// stage content:
(lib.Untitled2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(509.6,345.1,1,0.125,0,0,0,0,23.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({regY:23.8,scaleY:1,y:345.2},11).wait(35));

	// Layer 8
	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(509.6,345.1,1,0.133,0,0,0,1.6,29.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).to({scaleY:1.08,y:345.2},20).wait(89));

	// Layer 6
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(512.1,345.1,1,0.073,0,0,0,0,44.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).to({regY:44.6,scaleY:0.99,y:345.2},17).wait(83));

	// Layer 5
	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.setTransform(504.6,345.1,1,0.131,0,0,0,-7.5,41);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(37).to({_off:false},0).to({regY:40.9,scaleY:0.99},11).wait(73));

	// Layer 1
	this.instance_4 = new lib.Tween8("synched",0);
	this.instance_4.setTransform(512.1,281.6,1,0.142,0,0,0,0,112.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(48).to({_off:false},0).to({regY:112,scaleY:1,y:337.6},13).wait(60));

	// Layer 4
	this.instance_5 = new lib.Tween10("synched",0);
	this.instance_5.setTransform(512.1,345.1,1,0.111,0,0,0,0,54);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(61).to({_off:false},0).to({scaleY:1},15).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
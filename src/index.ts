import { Application, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 380
});

const clampy: Sprite = Sprite.from("./clampy.png");

clampy.anchor.set(0.0);

clampy.x = app.screen.width / 300;
clampy.y = app.screen.height /300;

app.stage.addChild(clampy);
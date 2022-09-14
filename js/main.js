
const app = new PIXI.Application();

document.body.appendChild(app.view);

const style = new PIXI.TextStyle({
    fontFamily: 'sans-serif',
    fontSize: 32,
    fill: 0xffffff,
    fontWeight: 'bold',
    stroke: 0xff0000,
    strokeThickness: 4,
});

const p = new PIXI.Text('Hello World!!', style);
p.anchor.set(0.5, 0.5);
p.position.set(300, 300);
app.stage.addChild(p);
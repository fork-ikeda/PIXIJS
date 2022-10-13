const app = new PIXI.Application({
    backgroundColor: 0x1099bb,
});

let el = document.getElementById('app');

el.appendChild(app.view);

// // コンテナを作成
// let sampleContainer = new PIXI.Container();

// sampleContainer.x = 300;
// sampleContainer.y = 300;
// app.stage.addChild(sampleContainer);

// sampleContainer.rotation = Math.PI / 6;


// let background = new PIXI.Graphics()
// .beginFill(0xffff00)
// .drawRect(0,0,400, 300)
// .endFill();

// sampleContainer.addChild(background);

// // イヌ読み込み
// let dogTexture = new PIXI.Texture.from('./img/dog.png');

// // イヌ１
// let dogSprite = new PIXI.Sprite(dogTexture);

// dogSprite.anchor.x = 0.5;
// dogSprite.anchor.y = 0.5;

// dogSprite.x = sampleContainer.width / 2;
// dogSprite.y = sampleContainer.height / 2;

// dogSprite.scale.x = 0.4;
// dogSprite.scale.y = 0.4;


// sampleContainer.addChild(dogSprite);

// // イヌ２
// let dogSprite2 = new PIXI.Sprite(dogTexture);

// dogSprite2.anchor.set(0.5)

// dogSprite2.scale.x = 0.2;
// dogSprite2.scale.y = 0.2;

// dogSprite2.x = sampleContainer.width / 2 + 120;
// dogSprite2.y = sampleContainer.height / 2;

// dogSprite2.alpha = 0.8;

// dogSprite2.rotation = Math.PI / 6;

// dogSprite2.tint = 0xfffff0

// sampleContainer.addChild(dogSprite2)

// let circle = new PIXI.Graphics()
// .beginTextureFill(dogTexture, 0x00ffff, 1, new PIXI.Matrix(1,0,0,1,-35,-35))
// .lineStyle(2, 0x000000)
// .drawCircle(0,0,30)
// .endFill();
// circle.x = 200;
// circle.y = 100;
// app.stage.addChild(circle)

// // 楕円を作る
// let ellipse = new PIXI.Graphics()       // メソッドチェーンで描画するので、;(セミコロン)を付けない   
// .beginFill(0xff0000)                    // endFill()までの描画に対する塗りつぶし色指定
// .drawEllipse(0,0,30,20)                 // (中心のx座標, 中心のy座標, 幅, 高さ)
// .endFill();                             // ここまでに描いた図形を塗りつぶす

// // 基準点を設定(px) 図形(PIXI.Graphicsにはpivotはないので注意)
// ellipse.pivot.x = 15
// ellipse.pivot.y = 10
// ellipse.x = 100;
// ellipse.y = 100;     
// ellipse.rotation = Math.PI / 6;
// app.stage.addChild(ellipse);


// カエルのアニメーション

const spriteWidth = 180;
const spriteHeight = 180;

const frames = [
    PIXI.Texture.from('../img/frog_1.png'),
    PIXI.Texture.from('../img/frog_2.png'),
    PIXI.Texture.from('../img/frog_3.png'),
];

const animSprite = new PIXI.AnimatedSprite(frames);

animSprite.x = spriteWidth / 2
animSprite.y = spriteWidth / 2
animSprite.pivot.set(spriteWidth / 2, spriteHeight / 2);
animSprite.animationSpeed = 0.08;

animSprite.play();
app.stage.addChild(animSprite);

// カエルのインタラクションを設定
animSprite.interactive = true;
animSprite.buttonMode = true;

animSprite.on('pointerdown', onFrogPointerDown)
        .on('pointerup', onFrogPointerUp);

function onFrogPointerDown() {
    animSprite.on('pointermove', moveFrog);
}

function moveFrog(e) {
    let position = e.data.getLocalPosition(app.stage);

    animSprite.x = position.x;
    animSprite.y = position.y;
}

function onFrogPointerUp() {
    animSprite.off('pointermove', moveFrog);    // ドラッグイベントリスナーを解除
}


// // アニメーション処理
// app.ticker.add(animate);
// let amountTime = 0;

// function animate(delta) {
//   animSprite.rotation += 0.02

//   amountTime += delta

//   animSprite.x = Math.sin(amountTime * 0.01) * app.renderer.width / 4 + app.renderer.width / 2;
//   animSprite.y = Math.sin(amountTime * 0.005) * app.renderer.height / 4 + app.renderer.height / 2;
// }


// // テキスト表示
// let text = new PIXI.Text('ゲロゲーロ',
//                 {
//                   fontSize: 50,
//                   fill: 0xffffff,
//                 });

// text.x = 10;
// text.y = 10;

// app.stage.addChild(text);




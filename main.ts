controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . 6 5 6 . . . . . . . 
        . . . . . . 6 6 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeScoreBy(1)
    if (info.score() == 55) {
        game.over(true, effects.slash)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    effects.clearParticles(mySprite)
    otherSprite.destroy()
    info.changeLifeBy(-1)
    if (info.life() == 2) {
        game.splash("Te han quitado una vida ten mas cuidado")
    }
    if (info.life() == 1) {
        game.splash("o no te han quitado una vida solo te queda una")
    }
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
game.setDialogCursor(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 5 
    5 5 6 6 6 6 6 5 5 5 6 6 6 6 6 5 
    5 5 6 6 8 8 8 5 5 5 6 6 8 8 8 5 
    5 5 6 6 8 8 8 5 5 5 6 6 8 8 8 5 
    5 5 6 6 8 8 8 5 5 5 6 6 8 8 8 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 6 6 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `)
game.splash("Bichos", "Autor :Mario Banegas I Nacimiento:2010")
game.showLongText("En este videojuego tienes que esquibar a tu enemigo y para disparar apretar el boton A cuando mates 55 bichos has ganado", DialogLayout.Bottom)
game.splash(game.askForString("Como te llamas"))
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 6 6 6 6 6 5 5 5 5 6 6 6 6 6 5 
    5 6 6 6 6 6 5 5 5 5 6 6 6 6 6 5 
    5 6 6 8 8 8 5 5 5 5 6 6 8 8 8 5 
    5 6 6 8 8 8 5 5 5 5 6 6 8 8 8 5 
    5 6 6 8 8 8 5 5 5 5 6 6 8 8 8 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 5 5 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 5 5 5 5 5 5 5 
    5 5 5 5 5 5 6 6 6 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
info.setLife(3)
controller.moveSprite(mySprite)
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        a a a a a a a a a a a a a a a a 
        a a c c c c c a a a c c c c c a 
        a a c c c c c a a a c c c c c a 
        a a f f f c c a a a f f f c c a 
        a a f f f c c a a a f f f c c a 
        a a f f f c c a a a f f f c c a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a b b b a a a a a a a 
        a a a a a a b b b a a a a a a a 
        a a a a a a b b b a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        a a a a a a a a a a a a a a a a 
        `, SpriteKind.Enemy)
    mySprite2.setVelocity(-52, 0)
    mySprite2.setPosition(150, randint(0, 120))
})

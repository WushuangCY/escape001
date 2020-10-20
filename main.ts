namespace SpriteKind {
    export const goal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    game.over(true)
})
tiles.setTilemap(tiles.createTilemap(hex`1000100003030303030303030303030303030303030101010101010101010102010101030301010101010101010101020101010303010101010101010101010201010103030101010202020101010102010101030301010102010201010101020101010303020202020102010101010201010103030101010101020101010102010101030301010101010201010101020101010303010101010102020201010201010103030101010101010101010102020101030301010101010101010101010101020303010101010101010101010101010203030102020202020201010202020202030301020101010101010101010101010303030303030303030303030303030303`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . . . . . . . . 2 . . . 2 
    2 . . . 2 2 2 . . . . 2 . . . 2 
    2 . . . 2 . 2 . . . . 2 . . . 2 
    2 2 2 2 2 . 2 . . . . 2 . . . 2 
    2 . . . . . 2 . . . . 2 . . . 2 
    2 . . . . . 2 . . . . 2 . . . 2 
    2 . . . . . 2 2 2 . . 2 . . . 2 
    2 . . . . . . . . . . 2 2 . . 2 
    2 . . . . . . . . . . . . . 2 2 
    2 . . . . . . . . . . . . . 2 2 
    2 . 2 2 2 2 2 2 . . 2 2 2 2 2 2 
    2 . 2 . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileGrass2], TileScale.Sixteen))
let mySprite2 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 3 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.goal)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(3, 14))
let mySprite = sprites.create(img`
    . . . . . . c c c c c c c . . . 
    . . . . . c f f 6 6 f f 7 c . . 
    . . . . c 7 6 6 6 6 6 6 7 6 c . 
    . . . c 7 7 7 7 7 7 7 7 7 7 c . 
    . . . c 7 8 1 f f 1 6 7 7 7 c . 
    . . . f 6 f 1 f f 1 f 7 7 7 f . 
    . . . f 6 f 2 2 2 2 f 7 7 7 f . 
    . . c c 6 f 2 2 2 2 f 7 7 6 f . 
    . c 7 7 7 7 2 2 2 2 7 7 f c . . 
    c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
    f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
    f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
    f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
    f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . f 6 1 1 1 1 6 6 6 6 6 c . . . 
    . . f f c c c c c c c c . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 5))
scene.cameraFollowSprite(mySprite)

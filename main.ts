input.onButtonPressed(Button.A, function () {
    LoveNum = randint(0, 100)
    basic.showNumber(LoveNum)
    if (LoveNum >= 70) {
        basic.showString("Much love")
    } else {
        basic.showString("The hate is strong")
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C D C E C F C G ", 107)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
let LoveNum = 0
basic.showString("Love meter ")
basic.forever(function () {
	
})

let Vidas = 0
input.onButtonPressed(Button.A, function () {
    Vidas = 3
    basic.showNumber(Vidas)
})
basic.forever(function () {
    if (Vidas >= 0) {
        if (input.pinIsPressed(TouchPin.P1)) {
            basic.showIcon(IconNames.Sad)
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
            Vidas += -1
            basic.showNumber(Vidas)
        }
        basic.showNumber(Vidas)
    }
    basic.showIcon(IconNames.Happy)
})

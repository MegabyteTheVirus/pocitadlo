basic.forever(function () {
    for (let index = 0; index < 1; index++) {
        for (let pořadí = 0; pořadí <= 10; pořadí++) {
            music._playDefaultBackground(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.InBackground)
            basic.showNumber(pořadí)
        }
    }
})

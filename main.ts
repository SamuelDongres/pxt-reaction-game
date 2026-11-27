function endGame ():void{
    startGame = false
    let duration=control.millis()-start
    basic.showNumber(duration)
    }
    function light ()
let startGame = false
let start: number = 0;
let lightA: number = 0;
let lightR: number = 0;
const Tlight: number = 50;

input.onButtonPressed(Button.A, function() {
    startGame = true
 basic.showLeds(`
# # # # #
# # # # #
# # # # #
# # # # #
# # # # #
`)

basic.pause(1000)
for (let i = 1; i < 6; i += 1) {
    lightR += input.lightLevel()

}
lightR /= 5;


basic.pause(
randint(50, 5000)
)
basic.clearScreen()
start=control.millis()


basic.forever(function() {
    lightA = input.lightLevel()

    if (lightA + Tlight > lightR) {
        console.logValue("light level", 1)
    }
    else {
        console.logValue("light level", 0)
        endGame()
        } 
})
})


class Cookie {
    constructor (color){
        this.color = color
    }

    getColor () {
        return this.color
    }

    setColor (color) {
        this.color = color
    }
}

const cookie_one = new Cookie("Red")
console.log(cookie_one)

cookie_one.setColor('purple')
console.log(cookie_one.getColor())
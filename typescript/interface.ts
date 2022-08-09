// интерфейсы не компилируются

interface Rect {
    readonly id: string
    color?: string // знак вопроса, как необязательный параметр
    size: {
        width: number
        heigth: number
    }
}

const rect1: Rect = {
    id: '12',
    size: {
        width: 20,
        heigth: 30
    }, 
    color: '#ccc'
}

const rect2: Rect = {
    id: '33',
    size: {
        width: 10,
        heigth: 34
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ============================

interface RectWithArea extends Rect { // интерфейс наследуется от интерфейса Rect
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '124',
    size: {
        width: 30,
        heigth: 30
    },
    getArea(): number {
        return this.size.width * this.size.heigth
    }
}

// =========================== интерфейсы могут взаимодействовать с классами

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// =================================== для объекта у которого будет много динамических ключей

interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
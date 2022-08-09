const isFetching: boolean = true
const isLoading: boolean = false

let int: number = 33
//int = '' // не можем

const float: number = 4.2
const num: number = 3e10

const message: string = 'hello type'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13]

const words: string[] = ['hello', 'type']

// tuple

const contact: [string, number] = ['test', 1214]

// any позволяет использовать несколько типов

let variable: any = 43
// ...
variable = 'New String'
variable = []

// =====
function sayMyName(name: string): void { // так как функция ничего не возвращает, то мы можем установить ей тип void
    console.log(name)
}

sayMyName('trololo')

// never когда функция возвращает ошибку, либо постоянно что-то делает

function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {

    }
}

// type затрагивает конструкцию которая позволяет создавать собственные типы
type Login = string

const login: Login = 'admin'
//const login2: Login = 2

type ID = string | number
const id1: ID = 124
const id2: ID = '234'
// const id3: ID = true

type SomeType = string | null | undefined
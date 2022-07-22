package main

import "fmt"

func zero(xPtr *int) {
	*xPtr = 0
}

func main() {
	x := 4
	zero(&x)
	fmt.Println(x)

	//x += 2
	fmt.Println(x)

}

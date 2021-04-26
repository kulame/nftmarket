package core

func Run(){
	router := Rounters()
	router.Run(":8080")

}
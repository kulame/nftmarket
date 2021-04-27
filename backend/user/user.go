package user

import (
	"fmt"

	"github.com/gin-gonic/gin"
)


func Register(c *gin.Context){
	fmt.Printf("user register")
	c.JSON(200, gin.H{
		"message": "pong",
	})
}
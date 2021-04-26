package core

import "github.com/gin-gonic/gin"

func Rounters() *gin.Engine{
	var Router = gin.Default()
	Router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	return Router	
}
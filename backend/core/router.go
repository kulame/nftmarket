package core

import (
	"nftmarket/user"

	"github.com/gin-gonic/gin"
)

func Rounters() *gin.Engine{
	var Router = gin.Default()
	Router.GET("/user/register", user.Register)
	return Router	
}

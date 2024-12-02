package routes

import (
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"frontend/controllers"
)

func SetupRoutes(router *gin.Engine, db *mongo.Database) {
	router.GET("/home", func(c *gin.Context) {
		products := controllers.GetProducts(c, db)
		c.HTML(200, "index.html", gin.H{"products" : products})
	})
	router.GET("/products", func(c *gin.Context) {
		controllers.GetProducts(c, db)
	})
	router.POST("/order", func(c *gin.Context) {
		controllers.AddOrder(c, db)
	})
}

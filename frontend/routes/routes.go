package routes

import (
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"frontend/controllers"
)

func SetupRoutes(router *gin.Engine, db *mongo.Database) {
	router.GET("/home", func(c *gin.Context) {
		c.HTML(200, "index.html", gin.H{
			"title":   "Gamer Shop - Bienvenido",
			"message": "Explora nuestros videojuegos",
		})
	})
	router.GET("/products", func(c *gin.Context) {
		controllers.GetProducts(c, db)
	})
	router.POST("/order", func(c *gin.Context) {
		controllers.AddOrder(c, db)
	})
}

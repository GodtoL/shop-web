package main

import (
	"log"
	"frontend/config"
	"frontend/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	if err := config.ConnectToMongoDB(); err != nil {
		log.Fatal("No se puede conectar a MongoDB:", err)
	}

	r := gin.Default()

	r.LoadHTMLGlob("templates/*.html")
	r.Static("/static", "./static")
	// Configurar rutas
	routes.SetupRoutes(r, config.MongoClient.Database("gamer-shop"))

	r.Run()
}
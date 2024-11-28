package main

import (
	"context"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/bson"
)

var mongoClient *mongo.Client

func init() {
	if err := connect_to_mongodb(); err != nil {
		log.Fatal("No se puede conectar a MongoDB")
	}
	println("Conexión establecida con MongoDB")
}

func main() {
	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hello world",
		})
	})
	r.GET("/home", getProducts)
	r.Run()
}

func connect_to_mongodb() error {
	// Crear un contexto para la conexión
	ctx := context.Background()

	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")
	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		return err
	}

	// Verificar la conexión
	if err := client.Ping(ctx, nil); err != nil {
		return err
	}

	mongoClient = client
	return nil
}

func getProducts(c *gin.Context) {
	cursor, err := mongoClient.Database("gamer-shop").Collection("products").Find(context.TODO(), bson.D{{}})
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error" : err.Error()})
		return
	}

	var products []bson.M
	if err = cursor.All(context.TODO(), &products); err != nil{
		c.JSON(http.StatusInternalServerError, gin.H{"Error" : err.Error()})
		return
	}

	c.JSON(http.StatusOK, products)
}
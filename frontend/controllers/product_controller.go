package controllers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)
func GetProducts(c *gin.Context, db *mongo.Database) []bson.M {
    cursor, err := db.Collection("products").Find(context.TODO(), bson.D{{}})
    if err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"Error": err.Error()})
        return nil
    }

    var products []bson.M // Declaramos el tipo como slice de bson.M
    if err = cursor.All(context.TODO(), &products); err != nil {
        c.JSON(http.StatusInternalServerError, gin.H{"Error": err.Error()})
        return nil
    }

    return products // Devuelve la lista de productos
}

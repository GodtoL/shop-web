package controllers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"frontend/models"
)

func AddOrder(c *gin.Context, db *mongo.Database) {
	var newOrder models.Order

	if err := c.ShouldBindJSON(&newOrder); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": "Entrada inválida", "Detalles": err.Error()})
		return
	}

	collection := db.Collection("orders")
	_, err := collection.InsertOne(context.TODO(), newOrder)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": "Error creando el pedido", "Detalles": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"Message": "Pedido creado exitosamente", "Pedido": newOrder})
}

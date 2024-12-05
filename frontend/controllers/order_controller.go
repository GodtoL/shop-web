package controllers

import (
	"context"
	"net/http"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo"
	"frontend/models"
)

func AddOrder(c *gin.Context, db *mongo.Database) {
	// Crear una instancia del modelo Order
	var newOrder models.Order

	// Usar ShouldBind para obtener los datos del formulario
	if err := c.ShouldBind(&newOrder); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"Error": "Entrada inválida", "Detalles": err.Error()})
		return
	}

	// Verificar que los campos requeridos no estén vacíos
	if newOrder.Address == "" || newOrder.Quantity <= 0 {
		c.JSON(http.StatusBadRequest, gin.H{"Error": "Dirección y cantidad son obligatorios"})
		return
	}

	// Insertar el pedido en la base de datos
	collection := db.Collection("orders")
	_, err := collection.InsertOne(context.TODO(), newOrder)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"Error": "Error creando el pedido", "Detalles": err.Error()})
		return
	}

	// Respuesta exitosa
	c.JSON(http.StatusCreated, gin.H{"Message": "Pedido creado exitosamente", "Pedido": newOrder})
}


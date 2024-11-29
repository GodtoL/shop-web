package models

type Order struct {
	Quantity int    `json:"quantity" bson:"quantity" binding:"required"`
	Address  string `json:"address" bson:"address" binding:"required"`
}

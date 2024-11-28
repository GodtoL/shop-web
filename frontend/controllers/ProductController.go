// package controllers

// import (
//   "net/http"
//   "github.com/gin-gonic/gin"
// )

// func RegisterRoutes(r *gin.Engine) {
//   r.GET("/home", handlePing)
//   r.POST("/order", handlePost)
// }

// func handlePing(c *gin.Context) {
//   c.JSON(http.StatusOK, gin.H{"message": "pong"})
// }

// func handlePost(c *gin.Context) {
//   var requestData map[string]interface{}
//   if err := c.BindJSON(&requestData); err != nil {
//     c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request"})
//     return
//   }
//   c.JSON(http.StatusOK, gin.H{"message": "Data received", "data": requestData})
// }

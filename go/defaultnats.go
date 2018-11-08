package main

// Import packages
import (
	"log"

	"github.com/nats-io/go-nats"
)

func main() {

	// Connect to server; defer close
var connstring="nats://localhost:2223";
	nc, err := nats.Connect(connstring)
	c, _ := nats.NewEncodedConn(nc, nats.JSON_ENCODER)
	log.Println(err)
	defer c.Close()
	log.Println("Connected to " + connstring)

	// Publish message on subject
	subject := "foo"
	c.Publish(subject, []byte("Hello NATS"))
	log.Println("Published message on subject " + subject)
	//sub, err := c.SubscribeSync(subject)
	//m, err := sub.NextMsg(5000)
	//print(m)
	c.Subscribe(subject, func(s string) {
		// Handle the message
		log.Printf("Received message %s\n", s)
	})
}

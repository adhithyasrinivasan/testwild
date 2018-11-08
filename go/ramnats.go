package main

// Import packages
import (
        "log"

        "github.com/nats-io/go-nats"
	"github.com/nats-io/go-nats-streaming/pb"
)

func main() {
sc, err := nats.Connect("test-cluster")
	if err != nil {
		log.Fatal(err)
	}
	defer sc.Close()
	sc.Publish("bar", []byte("testing"))
}

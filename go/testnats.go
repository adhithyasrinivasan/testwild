package main

import (
	"flag"
	"log"

	"github.com/nats-io/go-nats"
)

// NOTE: Use tls scheme for TLS, e.g. nats-pub -s tls://demo.nats.io:4443 foo hello
func usage() {
	log.Fatalf("Usage: nats-pub [-s server (%s)] <subject> <msg> \n", nats.DefaultURL)
}

func main() {
	//var urls = flag.String("127.0.0.1:2223","","")

	log.SetFlags(0)
	flag.Usage = usage
	flag.Parse()

	args := flag.Args()
	if len(args) < 2 {
		usage()
	}

	nc, err := nats.Connect("nats://localhost:2223")
	if err != nil {
		log.Fatal("error",err)
	}
	defer nc.Close()

	subj, msg := args[0], []byte(args[1])

	nc.Publish(subj, msg)
	nc.Flush()

	if err := nc.LastError(); err != nil {
		log.Fatal(err)
	} else {
		log.Printf("Published [%s] : '%s'\n", subj, msg)
	}
}

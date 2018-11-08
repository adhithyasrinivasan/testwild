package main

import (
    "encoding/json"
    "flag"
    "io/ioutil"
    "log"
    "net/http"
    "net/url"
    "os"
    "runtime"
    "strings"

    "github.com/file/above"
    "github.com/streadway/amqp"
)

var (
    uri          = flag.String("uri", "amqp://something", "The rabbitmq endpoint")
    formURL      = flag.String("form_url", "http://localhost", "The URL that requests are sent to")
    logFile      = flag.String("log_file", "golang_worker.log", "The file where errors are logged")
    threads      = flag.Int("threads", 1, "The max amount of go routines that you would like the process to use")
    maxprocs     = flag.Int("max_procs", 1, "The max amount of processors that your application should use")
    paymentsKey  = flag.String("payments_key", "secret", "Access key")
    exchange     = flag.String("exchange", "something", "The exchange we will be binding to")
    exchangeType = flag.String("exchange_type", "topic", "Type of exchange we are binding to | topic | direct| etc..")
    queue        = flag.String("queue", "some.queue", "Name of the queue that you would like to connect to")
    routingKey   = flag.String("routing_key", "some.queue", "queue to route messages to")
    workerName   = flag.String("worker_name", "worker.name", "name to identify worker by")
    verbosity    = flag.Bool("verbos", false, "Set true if you would like to log EVERYTHING")

    // Hold consumer so our go routine can listen to
    // it's done error chan and trigger reconnects
    // if it's ever returned
    conn *consumers.Consumer
)

func init() {
    flag.Parse()
    runtime.GOMAXPROCS(*maxprocs)
}

func main() {
    // Open a system file to start logging to
    f, err := os.OpenFile(*logFile, os.O_RDWR|os.O_CREATE|os.O_APPEND, 0666)
    defer f.Close()
    if err != nil {
        log.Printf("error opening file: %v", err.Error())
    }
    log.SetOutput(f)

    conn := consumers.NewConsumer(*workerName, *uri, *exchange, *exchangeType, *queue)

    if err := conn.Connect(); err != nil {
        log.Printf("Error: %v", err)
    }

    deliveries, err := conn.AnnounceQueue(*queue, *routingKey)
    if err != nil {
        log.Printf("Error when calling AnnounceQueue(): %v", err.Error())
    }

    conn.Handle(deliveries, handler, *threads, *queue, *routingKey)
}

func handler(deliveries <-chan amqp.Delivery) {

    for d := range deliveries {
        formData := &Data{}

        err := json.Unmarshal(d.Body, formData)
        if err != nil {
            log.Printf("Error unmarshaling data: %s", err.Error())
        }

        resp, err := makeRequest(formData)
        if err != nil {
            log.Printf("Error posting form data: %s", err.Error())
        }

        body, err := ioutil.ReadAll(resp.Body)
        if err != nil {
            log.Printf("Error reading response body %s", err.Error())
        }

        // Turn on verbose if you are having issues and would like to
        // see everything that is being consumed and everything that
        // is being reported back to you by the server.
        if *verbosity {
            log.Println("-------DEBUG--------")
            log.Println("JSON from QUEUE: ", string(d.Body))
            log.Println("Response: ", resp.StatusCode)
            log.Println("Response Body: ", string(body))
            log.Println("------END DEBUG-----")
        }

        // Only ack on 200 or 400
        if resp.StatusCode == 200 || resp.StatusCode == 400 {
            d.Ack(false)
        } else {
            d.Nack(false, true)
        }
    }

    return
}

// Data struct
type Data struct {
    // Secret Stuff
}

func makeRequest(data *Data) (*http.Response, error) {
    // Secret Stuff
}

package main

import (
	"errors"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gorilla/mux"
)

func startUpdaterDaemon(ticker *time.Ticker, updaterChan chan struct{}) {
	for {
		select {
		case <-ticker.C:
			_, err := http.Get("http://scrapper:3000/projects")
			if err != nil {
				log.Fatalln(err)
			}

		case <-updaterChan:
			// stop the daemon
			return
		}
	}
}
func GetDetail(w http.ResponseWriter, r *http.Request) {
	_, err := os.Open("/root/projects/projects.json")
	if errors.Is(err, os.ErrNotExist) {
		_, err := http.Get("http://scrapper:3000/projects")
		if err != nil {
			log.Fatalln(err)
		}
	} else {

		file, err := ioutil.ReadFile("/root/projects/projects.json")
		if err != nil {
			fmt.Print(err)
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(file)
	}

}

func main() {
	ticker := time.NewTicker(3600 * time.Second)
	defer ticker.Stop() // stop the ticker

	updaterChan := make(chan struct{})
	defer close(updaterChan) // close the channel
	go startUpdaterDaemon(ticker, updaterChan)
	router := mux.NewRouter()
	router.HandleFunc("/", GetDetail).Methods("GET")

	log.Fatal(http.ListenAndServe(":8000", router))
}

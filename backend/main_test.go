package main

import (
	"net/http"
	"net/http/httptest"
	"nftmarket/core"
	"testing"

	"gotest.tools/assert"
)


func TestPingRoute(t *testing.T) {
	router := core.Rounters()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/user/register", nil)
	router.ServeHTTP(w, req)
	assert.Equal(t, 200, w.Code)
}
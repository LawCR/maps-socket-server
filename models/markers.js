class Markers {
    constructor() {
        this.markersList = {};
    }
    
    addMarker(marker) {
        this.markersList[marker.id] = marker;
        return marker
    }

    removeMarker(id) {
        delete this.markersList[id];
    }

    updateMarker(marker) {
        this.markersList[marker.id] = marker;
    }
}

module.exports = Markers;
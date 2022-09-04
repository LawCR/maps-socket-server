const Markers = require("./markers");

class Sockets {

    constructor( io ) {
        this.io = io

        this.markers = new Markers()

        this.socketEvents()
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => { 
            // Emit => Emitir eventos y se recibiran por el socket del lado del cliente - Argumentos: (evento, payload)
            // On => Escuchar un evento que viene del cliente, (evento, callback)
            
            // Socket: Para el cliente que realiza el evento
            // Io: Para todos los clientes conectados
            // Broadcast: Para todos los clientes conectados menos el que realiza el evento
            
            //* active_markers: muestra los marcadores activos
            socket.emit('active_markers', this.markers.markersList)

            //* new_marker: crea y muestra un nuevo marcador a los demas usuarios
            socket.on('new_marker', (marker) => {
                this.markers.addMarker(marker)
                socket.broadcast.emit('new_marker', marker)
            })

            //* marker-updated: actualiza un marcador(posicion) y muestra a los demas usuarios
            socket.on('marker_updated', (marker) => {
                this.markers.updateMarker(marker)
                socket.broadcast.emit('marker_updated', marker)
            })
        });
    }

}

module.exports = Sockets
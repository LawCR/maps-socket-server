class Sockets {

    constructor( io ) {
        this.io = io

        this.socketEvents()
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => { 
            // Emit => Emitir eventos y se recibiran por el socket del lado del cliente - Argumentos: (evento, payload)
            // On => Escuchar un evento que viene del cliente, (evento, callback)
            // Socket: Para el cliente que realiza el evento
            // Io: Para todos los clientes conectados
            socket.on('mensaje-to-server', (data) => {
                console.log(data)
                this.io.emit('mensaje-from-server', data)
            })

        });
    }

}

module.exports = Sockets
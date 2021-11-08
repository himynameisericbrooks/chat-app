const socket = io()

socket.on('countUpdated', (count) => {
    console.log('the count has been update', count)
})

document.querySelector('#increment').addEventListener('click', () => {
    console.log('Clicked')
    socket.emit('increment')
})
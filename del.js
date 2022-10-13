const fs = require('fs')

const del = function(id, oldNote){
    const note = JSON.parse(oldNote)
    
    let newNote = note.filter(function(n,idx){
        return n.id !== id
    })
    fs.writeFileSync('./note.txt',JSON.stringify(newNote));

}
module.exports = del
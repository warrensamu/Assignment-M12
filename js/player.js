class Jukebox {
    constructor(albums) {
        this.albums = []
        console.log(this.albums)
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

let jbox = new Jukebox()
const album1 = new Album('Junkie XL', 'Brothers in Arms')
const album2 = new Album('BTS', 'Cypher 4')
const album3 = new Album('BTS', 'Mic Drop')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

let played = document.getElementById('play')

played.addEventListener('click', (e) => {
    let select = document.getElementById('select').value

    switch (select) {
        case 'album1':
            return album1.play()
            break
        case 'album2':
            return album2.play()
            break
        case 'album3':
            return album3.play()
            break
    }
})

let favorite = document.getElementById('favorite')

favorite.addEventListener('click', (e) => {
    document.getElementById("favoriteAlbum").innerHTML = `Your favorite album is: ${jbox.favoriteAlbum()}`
})

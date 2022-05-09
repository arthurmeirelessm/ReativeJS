
const { XMLHttpRequest } = require('xmlhttprequest')

const { ajax } = require('rxjs/ajax')


const { map, concatAll } = require('rxjs/operators')


ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/cod3rcursos/repos'
})
    .pipe(map(resp => JSON.parse(resp.xhr.responseText)))
    .pipe(concatAll())
    .pipe(map(repo => repo.full_name))
    .subscribe(console.log)
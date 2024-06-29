"use strict";
//Making function:
function make_album(artist_name, album_title, track) {
    //Making object for function By assinging type & value :
    let album = {
        artist: artist_name,
        title: album_title
    };
    // making IF condition for OPTIONAL parameter? :    
    if (track !== undefined) {
        album.track_number = track;
    }
    //Returning object of function:
    return album;
}
//making variable for console:
let album1 = make_album("Imran", "Album title 1");
console.log(album1);
//direct console the functions:
console.log(make_album("Nouman", "Album title 2"));
console.log(make_album("Hamza", "Album title 3", 29));

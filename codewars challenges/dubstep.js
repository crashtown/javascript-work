function songDecoder(song){
    let words = song.split("WUB");
    const result = words.join(" ").replace(/ /g,'');
    const answer = result.split('').join(' ');
    console.log(answer.trim());
}

songDecoder("AWUBWUBWUBBWUBWUBWUBC")

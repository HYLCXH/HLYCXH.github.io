new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("LHY && CXH")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("在一起啦...")
    .pause(3000)
    .go();

new TypeIt('#talkToYou', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();
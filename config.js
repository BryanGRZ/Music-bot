module.exports = {
    app: {
        px: '!!',
        token: 'OTQ3NDQ5NjY4NTA4NDY3MjUx.YhtbQw.-YkqwAkjnm8EY5H06tvp8hYBCCY',
        playing: 'music! type !!play'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

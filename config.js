module.exports = {
    app: {
        px: '!!',
        token: 'OTQ2MDk0OTgzOTE0NTk4NDQx.YhZtnQ.r_e0TQLENql6JFut4Hv_xEUVPhw',
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

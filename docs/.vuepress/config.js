module.exports = {
    base: '/',
    theme: 'antdocs',
    host: 'localhost',
    port: 8070,
    title: 'GKK-TODO',
    lang: 'zh-CN',
    description: 'GKK Project TODO list',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    dest: '/docs/dist',
    extraWatchFiles: [
        '/docs/README.md',
        '/docs/.vuepress/config.js'
    ],
    themeConfig: {
        logo: '/icon.png',
    }
}
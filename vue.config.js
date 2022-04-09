const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            
            alias: {
                '@': path.join(__dirname, 'src/'),
                '@/components': path.join(__dirname, 'src/components/'),
                '@/assets':path.join(__dirname,'src/assets/locales'),
            },
            extensions: ['.js', '.vue'],
        }
    }
}
var taskConfig = {

    component: {
        name: 'react-jstree',
        scripts: {
            entry: './src/index.js',
            output: {
                library: 'ReactJstree'
            },
            externals: {
                react: {
                    root: 'React',
                    commonjs2: 'react',
                    commonjs: 'react',
                    amd: 'react'
                }
            }
        },
        less: {
            entry: ''
        }
    },

    example: {
        src: './examples/src',
        dist: './examples/dist',
        index: 'index.html',
        files: [
        ],
        scripts: [
            'index.js'
        ]
    }

};

module.exports = taskConfig;
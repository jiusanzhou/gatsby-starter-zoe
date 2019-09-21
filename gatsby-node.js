/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {  
                    test: /\.svg$/,
                    use: {
                        loader: 'svg-react-loader',
                    }
                }
            ]
        },
    })
}

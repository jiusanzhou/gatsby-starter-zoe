import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            title
            description
            author
            lang
            logo {
              name
              img
            }
            menu {
              title
              href
              items {
                title
                href
              }
            }
        }
      }
    }
  `)

  return site.siteMetadata
}

const useAssets = () => {
  
}

export { useSiteMetadata }
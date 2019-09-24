import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
            title
            description
            url
            lang
            author {
              name
              minibio
              avatar
              email
            }
            logo {
              name
              img
            }
            socials {          
              email
              facebook
              github
              telegram
              twitter
              linkedin
            }
            menu {
              title
              href
              items {
                title
                href
              }
            }
            links {
              title
              items {
                title
                href
              }
            }
            copyright {
              content
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
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
        }
      }
    }
  `)

  return site.siteMetadata
}

const useAssets = () => {
  
}

export { useSiteMetadata }
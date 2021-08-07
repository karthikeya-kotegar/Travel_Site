import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './image.css'


const Image = () => {

const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, name: {nin: ["Travel-Background"]}}
        ) {
          edges {
            node {
              relativePath
              childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        
                        )
              }
            }
          }
        }
      }
    `)

  return (
      
    <div className="image-container">
      <h1>View our Destinations</h1>
      <div className="image-grid">
        {data.allFile.edges.map((item, index) => {
          return <div key={index}>
            <GatsbyImage 
              className="image-item"
              image={item.node.childImageSharp.gatsbyImageData} 
              alt={item.node.relativePath} 
            />
          </div>

        })}

      </div>
    </div>
  )
}

export default Image
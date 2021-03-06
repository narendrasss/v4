import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Github } from "styled-icons/boxicons-logos"
import { LinkExternal } from "styled-icons/boxicons-regular"

import theme from "@styles/theme"
import useFadeIn from "@utils/useFadeIn"
import { prop } from "@utils"
import { Dot } from "../Dots"

const ProjectCard = ({ frontmatter, html }) => {
  const [ref, fadeInProps] = useFadeIn()
  return (
    <Project ref={ref} {...fadeInProps}>
      <ProjectThumbnail color={frontmatter.color}>
        <ProjectImg
          alt={frontmatter.title}
          id={frontmatter.title}
          src={`./thumbnails/${frontmatter.cover}`}
        />
      </ProjectThumbnail>
      <ProjectMeta>
        <ProjectDescription>
          <ProjectTitle>{frontmatter.title}</ProjectTitle>
          <ProjectTech>
            {frontmatter.tech.map((tech, index) => (
              <React.Fragment key={tech}>
                <code key={tech}>{tech}</code>
                {index < frontmatter.tech.length - 1 && (
                  <Separator key={index} />
                )}
              </React.Fragment>
            ))}
          </ProjectTech>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </ProjectDescription>
        <ProjectFooter>
          <Icon href={frontmatter.github}>
            <Github />
          </Icon>
          {frontmatter.link && (
            <Icon href={frontmatter.link}>
              <LinkExternal />
            </Icon>
          )}
        </ProjectFooter>
      </ProjectMeta>
    </Project>
  )
}

export default ProjectCard

const ProjectFooter = styled(motion.footer)`
  display: flex;
`

const Icon = styled(motion.a)`
  color: inherit;
  height: ${theme.fontSizes[2]}px;
  margin-right: ${theme.space[2]}px;

  svg {
    height: 100%;
  }
`

const Project = styled(motion.section)`
  margin-bottom: ${theme.space[6]}px;

  ${theme.breakpoints.xs} {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${theme.space[3]}px;
    margin-bottom: ${theme.space[4]}px;
  }
`

const ProjectMeta = styled.div`
  ${theme.breakpoints.xs} {
    grid-column: span 3 / -1;
  }
`

const ProjectThumbnail = styled(motion.figure)`
  background-color: #${prop("color")};
  border-radius: 8px;
  height: 368px;
  overflow: hidden;
  margin-bottom: ${theme.space[4]}px;
  width: 100%;

  ${theme.breakpoints.xs} {
    grid-column: 1 / span 3;
    height: 288px;
    margin-bottom: 0;
  }
`

const ProjectImg = styled(motion.img)`
  margin-top: ${theme.space[5]}px;
  margin-left: ${theme.space[5]}px;
  width: 100%;

  &#Dictionary {
    object-fit: cover;
    margin-left: 0;
    margin-top: 1em;
  }

  &#Music {
    height: 400px;
    width: auto;
    max-width: none;
  }
`

const ProjectDescription = styled(motion.article)`
  font-size: inherit;
  margin-bottom: ${theme.space[3]}px;
`

const ProjectTitle = styled(motion.h1)`
  font-size: ${theme.fontSizes[2]}px;
  margin-bottom: ${theme.space[1]}px;
`

const ProjectTech = styled(motion.div)`
  display: flex;
  align-items: center;
  font-size: inherit;
  margin-bottom: ${theme.space[3]}px;

  ${theme.breakpoints.xs} {
    flex-wrap: wrap;
  }
`

const Separator = styled(Dot)`
  background-color: ${theme.colors.text.primary};
  margin: 0 ${theme.space[2]}px;
`

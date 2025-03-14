import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllProjects } from '../../utils/markdown';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 80px 0px;
  background-color: ${({ theme }) => theme.bg};
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const ProjectsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0;
  gap: 28px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  padding: 0 20px;
  width: 100%;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Link)`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.card};
  background: linear-gradient(141.27deg, ${({ theme }) => theme.card} 50%, rgba(195, 55, 100, 0.1) 100%);
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.1);
  padding: 20px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px 4px rgba(0,0,0,0.2);
    background: linear-gradient(141.27deg, ${({ theme }) => theme.card} 50%, rgba(195, 55, 100, 0.15) 100%);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.black};
  margin-bottom: 16px;
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const ProjectTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const ProjectDate = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  font-style: italic;
`;

const ProjectExcerpt = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  flex: 1;
`;

const TopicTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const TopicTag = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + '20'};
  padding: 4px 8px;
  border-radius: 4px;
`;

const Links = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-size: 14px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
`;

const formatDate = (dateString) => {
  try {
    const [year, month, day] = dateString.split('-').map(num => parseInt(num, 10));
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const allProjects = await getAllProjects();
      console.log('Loaded projects:', allProjects); // Debug log
      setProjects(allProjects);
      setError(null);
    } catch (error) {
      console.error('Error loading projects:', error);
      setError('Failed to load projects. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <ProjectsContainer>
        <ProjectsWrapper>
          <Title>Loading projects...</Title>
        </ProjectsWrapper>
      </ProjectsContainer>
    );
  }

  if (error) {
    return (
      <ProjectsContainer>
        <ProjectsWrapper>
          <Title>My Projects</Title>
          <ErrorMessage>{error}</ErrorMessage>
        </ProjectsWrapper>
      </ProjectsContainer>
    );
  }

  if (!projects.length) {
    return (
      <ProjectsContainer>
        <ProjectsWrapper>
          <Title>My Projects</Title>
          <ErrorMessage>No projects found.</ErrorMessage>
        </ProjectsWrapper>
      </ProjectsContainer>
    );
  }

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <Title>My Projects</Title>
        <ProjectList>
          {projects.map((project) => (
            <ProjectCard key={project.slug} to={`/projects/${project.slug}`}>
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDate>{formatDate(project.date)}</ProjectDate>
                <ProjectExcerpt>{project.excerpt}</ProjectExcerpt>
                <TopicTags>
                  {project.topics.map((topic, index) => (
                    <TopicTag key={index}>{topic}</TopicTag>
                  ))}
                </TopicTags>
                <Links>
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </ProjectLink>
                  )}
                  {project.demo && (
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo →
                    </ProjectLink>
                  )}
                </Links>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectList>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects; 
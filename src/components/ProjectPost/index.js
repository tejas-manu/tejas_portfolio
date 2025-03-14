import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getProjectBySlug } from '../../utils/markdown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 60px 0px;
  background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Date = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  font-style: italic;
`;

const TopicTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 32px;
`;

const Content = styled.div`
  color: ${({ theme }) => theme.text_primary};
  
  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.text_primary};
    margin: 24px 0 16px 0;
  }

  p {
    color: ${({ theme }) => theme.text_secondary};
    margin: 16px 0;
    line-height: 1.7;
  }

  code {
    background-color: ${({ theme }) => theme.card};
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }

  pre {
    background-color: ${({ theme }) => theme.card};
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    
    code {
      background-color: transparent;
      padding: 0;
    }
  }

  ul, ol {
    color: ${({ theme }) => theme.text_secondary};
    margin: 16px 0;
    padding-left: 24px;
    line-height: 1.7;
  }
`;

const BackButton = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.primary + '20'};
  color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 32px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary + '40'};
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

const ProjectPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadProject();
  }, [slug]);

  const loadProject = async () => {
    try {
      const projectData = await getProjectBySlug(slug);
      console.log('Loaded project:', projectData); // Debug log
      if (!projectData) {
        setError('Project not found');
        return;
      }
      setProject(projectData);
      setError(null);
    } catch (error) {
      console.error('Error loading project:', error);
      setError('Failed to load project. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/projects');
  };

  if (loading) {
    return (
      <Container>
        <Wrapper>
          <Title>Loading project...</Title>
        </Wrapper>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Wrapper>
          <BackButton onClick={handleBack}>← Back to Projects</BackButton>
          <ErrorMessage>{error}</ErrorMessage>
        </Wrapper>
      </Container>
    );
  }

  if (!project) {
    return (
      <Container>
        <Wrapper>
          <BackButton onClick={handleBack}>← Back to Projects</BackButton>
          <ErrorMessage>Project not found.</ErrorMessage>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      <Wrapper>
        <BackButton onClick={handleBack}>← Back to Projects</BackButton>
        <Title>{project.title}</Title>
        <Date>{formatDate(project.date)}</Date>
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
        <Image src={project.image} alt={project.title} />
        <Content dangerouslySetInnerHTML={{ __html: project.content }} />
      </Wrapper>
    </Container>
  );
};

export default ProjectPost; 
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAllBlogPosts } from '../../utils/markdown';

const BlogContainer = styled.div`
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

const BlogWrapper = styled.div`
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

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 20px;
  width: 100%;
`;

const BlogCard = styled(Link)`
  width: 100%;
  display: flex;
  gap: 24px;
  background: ${({ theme }) => theme.card};
  background: linear-gradient(141.27deg, ${({ theme }) => theme.card} 50%, rgba(195, 55, 100, 0.1) 100%);
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0,0,0,0.1);
  padding: 26px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px 4px rgba(0,0,0,0.2);
    background: linear-gradient(141.27deg, ${({ theme }) => theme.card} 50%, rgba(195, 55, 100, 0.15) 100%);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const BlogImage = styled.img`
  width: 400px;
  height: 250px;
  border-radius: 8px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.black};

  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const BlogTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 0;
`;

const BlogDate = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 0;
  font-style: italic;
`;

const BlogExcerpt = styled.p`
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

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
`;

const formatDate = (dateString) => {
  try {
    // Split the date string into parts
    const [year, month, day] = dateString.split('-').map(num => parseInt(num, 10));
    // Create date using individual components
    const date = new Date(year, month - 1, day); // month is 0-based
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString; // fallback to original string
  }
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const allPosts = await getAllBlogPosts();
      console.log('Loaded posts:', allPosts); // Debug log
      setPosts(allPosts);
      setError(null);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      setError('Failed to load blog posts. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <BlogContainer>
        <BlogWrapper>
          <Title>Loading blog posts...</Title>
        </BlogWrapper>
      </BlogContainer>
    );
  }

  if (error) {
    return (
      <BlogContainer>
        <BlogWrapper>
          <Title>Tech Talk with Tej</Title>
          <ErrorMessage>{error}</ErrorMessage>
        </BlogWrapper>
      </BlogContainer>
    );
  }

  if (!posts.length) {
    return (
      <BlogContainer>
        <BlogWrapper>
          <Title>Tech Talk with Tej</Title>
          <ErrorMessage>No blog posts found.</ErrorMessage>
        </BlogWrapper>
      </BlogContainer>
    );
  }

  return (
    <BlogContainer>
      <BlogWrapper>
        <Title>Tech Talk with Tej</Title>
        <BlogList>
          {posts.map((blog) => (
            <BlogCard key={blog.slug} to={`/blog/${blog.slug}`}>
              <BlogImage src={blog.image} alt={blog.title} />
              <BlogContent>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogDate>{formatDate(blog.date)}</BlogDate>
                <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                <TopicTags>
                  {blog.topics.map((topic, index) => (
                    <TopicTag key={index}>{topic}</TopicTag>
                  ))}
                </TopicTags>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogList>
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blog; 
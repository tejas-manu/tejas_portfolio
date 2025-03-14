import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { marked } from 'marked';
import styled from 'styled-components';
import { getBlogPostBySlug } from '../../utils/markdown';

const BlogPostContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const PostHeader = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 42px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text_primary};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
`;

const Date = styled.span`
  font-style: italic;
`;

const Topics = styled.div`
  display: flex;
  gap: 10px;
`;

const Topic = styled.span`
  background: ${({ theme }) => theme.card};
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 14px;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const Content = styled.div`
  line-height: 1.8;
  color: ${({ theme }) => theme.text_primary};

  h1, h2, h3, h4, h5, h6 {
    margin: 25px 0 15px;
    color: ${({ theme }) => theme.text_primary};
  }

  p {
    margin-bottom: 20px;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    margin-bottom: 20px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  code {
    background: ${({ theme }) => theme.card};
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
  }

  pre {
    background: ${({ theme }) => theme.card};
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 20px;
  }

  img {
    max-width: 100%;
    border-radius: 8px;
    margin: 20px 0;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding-left: 20px;
    margin: 20px 0;
    font-style: italic;
  }
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  font-size: 18px;
  margin: 20px 0;
`;

const BackButton = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
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

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const postData = await getBlogPostBySlug(slug);
        if (postData) {
          setPost({
            ...postData,
            content: marked(postData.content)
          });
          setError(null);
        } else {
          setError('Blog post not found.');
        }
      } catch (error) {
        console.error('Error loading blog post:', error);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) {
    return <BlogPostContainer>Loading...</BlogPostContainer>;
  }

  if (error) {
    return (
      <BlogPostContainer>
        <BackButton onClick={() => navigate('/blog')}>← Back to Blog</BackButton>
        <ErrorMessage>{error}</ErrorMessage>
      </BlogPostContainer>
    );
  }

  if (!post) {
    return (
      <BlogPostContainer>
        <BackButton onClick={() => navigate('/blog')}>← Back to Blog</BackButton>
        <ErrorMessage>Blog post not found.</ErrorMessage>
      </BlogPostContainer>
    );
  }

  return (
    <BlogPostContainer>
      <BackButton onClick={() => navigate('/blog')}>← Back to Blog</BackButton>
      <PostHeader>
        <Title>{post.title}</Title>
        <Meta>
          <Date>{formatDate(post.date)}</Date>
          <Topics>
            {post.topics.map((topic, index) => (
              <Topic key={index}>{topic}</Topic>
            ))}
          </Topics>
        </Meta>
        {post.image && <Image src={post.image} alt={post.title} />}
      </PostHeader>
      <Content dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogPostContainer>
  );
};

export default BlogPost; 
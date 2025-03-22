import styled from 'styled-components'

export const Anchor = styled.a`
  text-decoration: none;
`

export const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

export const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

export const Span = styled.span`
  max-width: 100%;
  display: block;
`

export const Card = styled.div`
  width: 900px;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme.card_light};
  box-shadow: 0px 5px 20px rgba(0, 120, 255, 0.1);
  border-left: 4px solid #0078ff;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 30px rgba(0, 120, 255, 0.2);
  }
  
  @media only screen and (max-width: 768px) {
    padding: 16px;
    width: 300px;
  }
  
  &.expanded ${Document} {
    display: flex;
  }
`

export const Top = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const Image = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 4px;
  border: 2px solid rgba(0, 120, 255, 0.5);
  
  @media only screen and (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


export const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

export const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

export const Expiry = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

export const ExpandButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0 auto;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 120, 255, 0.1);
  }
`;

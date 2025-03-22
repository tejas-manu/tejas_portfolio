import React from 'react'
import styled from 'styled-components'

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
    text-align:left;
    text-align-last:left;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

export const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  transition: all 0.3s ease;
  
  &.expanded {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`
export const ItemWrapperResp = styled.div`
  display: -webkit-box;
  overflow: hidden;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  flex-wrap: block;
  gap: 4px;
  transition: all 0.3s ease;
  
  &.expanded {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
`

export const Resp = styled.div`
    font-size: 15px;
    font-weight: 400;
    text-align: justify;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-left: 20px;
    position: relative;
    line-height: 1.5;
    margin-bottom: 4px;
    
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
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


export const Role = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const Company = styled.div`
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


export const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

export const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

export const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

export const SectionTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #0078ff;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  &:before {
    content: "";
    display: inline-block;
    width: 12px;
    height: 12px;
    background-color: #0078ff;
    margin-right: 8px;
    border-radius: 50%;
  }
`

export const RespHeading = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 12px;
  margin-bottom: 8px;
  margin-left: 10px;
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




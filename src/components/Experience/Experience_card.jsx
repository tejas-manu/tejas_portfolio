import React, { useState } from 'react'
import { FaBriefcase, FaCalendarAlt, FaTools, FaChevronDown, FaChevronUp } from 'react-icons/fa'
import { 
  Document, 
  Description, 
  Span, 
  Card, 
  Top, 
  Image, 
  Body, 
  Role, 
  Company, 
  Date, 
  ItemWrapper, 
  ItemWrapperResp, 
  Skill, 
  Resp, 
  SectionTitle, 
  RespHeading,
  ExpandButton
} from "./Experience_card_style"

// Helper components for better organization
const ResponsibilitySection = ({ resp, isExpanded }) => {
  if (!resp) return null;
  
  return (
    <div>
      <SectionTitle>
        <FaBriefcase style={{ marginRight: '8px' }} /> Responsibilities
      </SectionTitle>
      <ItemWrapperResp className={isExpanded ? "expanded" : ""}>
        {typeof resp === 'object' && !Array.isArray(resp) ? 
          // Structured format with headings
          Object.entries(resp).map(([heading, items]) => (
            <React.Fragment key={heading}>
              <RespHeading>{heading}</RespHeading>
              {items.map((item, idx) => (
                <Resp key={idx}>• {item}</Resp>
              ))}
            </React.Fragment>
          )) : 
          // Simple list format
          resp.map((res, index) => (
            <Resp key={index}>• {res}</Resp>
          ))
        }
      </ItemWrapperResp>
    </div>
  );
};

const SkillsSection = ({ skills }) => {
  if (!skills) return null;
  
  return (
    <div>
      <SectionTitle>
        <FaTools style={{ marginRight: '8px' }} /> Skills
      </SectionTitle>
      <ItemWrapper>
        {skills.map((skill, index) => (
          <Skill key={index}>• {skill}</Skill>
        ))}
      </ItemWrapper>
    </div>
  );
};

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };
  
  return (
    <Card className={isExpanded ? "expanded" : ""}>
      <Top>
        <Image src={experience.img} alt={experience.company} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>
            <FaCalendarAlt style={{ marginRight: '8px', fontSize: '14px' }} />
            {experience.date}
          </Date>
        </Body>
      </Top>
      
      {experience?.desc && (
        <Description>
          <Span className={isExpanded ? "expanded" : ""}>{experience.desc}</Span>
        </Description>
      )}
      
      <ResponsibilitySection resp={experience?.resp} isExpanded={isExpanded} />
      <SkillsSection skills={experience?.skills} />
      
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          <Document src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fWhBw1ar9Lpj-xwtvyM8wnzaFXRWZT5RTQ&usqp=CAU" alt="Document" />
        </a>
      )}
      
      <ExpandButton onClick={toggleExpand}>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </ExpandButton>
    </Card>
  );
};

export default ExperienceCard

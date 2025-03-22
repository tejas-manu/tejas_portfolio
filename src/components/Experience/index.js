import { Container, Wrapper, Title, Desc, TimelineSection } from "./Experience_style";
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './Experience_card';
import { experiences } from '../../data/constants';

const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Professional Journey</Title>
                <Desc>
                    My professional path has led me through various roles where I've developed skills and delivered impactful solutions.
                </Desc>
                <TimelineSection>
                    <Timeline position="right">
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot 
                                        variant="outlined" 
                                        color="primary" 
                                        style={{ borderWidth: '2px' }}
                                    />
                                    {index !== experiences.length - 1 && 
                                        <TimelineConnector style={{ background: '#0078ff', width: '2px' }} />
                                    }
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Experience

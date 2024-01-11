import {Container, Wrapper, Title, Desc, TimelineSection} from "./Experience_style";
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './Experience_card';
import { experiences } from '../../data/constants';


const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#0078ff' }} />}
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
    )
}

export default index
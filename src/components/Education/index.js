import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from './Education_card';
import {Container, Wrapper, Title, Desc, TimelineSection} from "./Education_style"

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a voyage of learning about myself and expanding my horizons. Below are the details of my educational journey.
                </Desc>
                <TimelineSection>
                    <Timeline position="right">
                        {education.map((education, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot 
                                        variant="outlined" 
                                        color="primary" 
                                        style={{ borderWidth: '2px' }}
                                    />
                                    {index !== education.length - 1 && 
                                        <TimelineConnector style={{ background: '#0078ff', width: '2px' }} />
                                    }
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Education;

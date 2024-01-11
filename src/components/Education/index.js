import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences } from '../../data/constants';
import EducationCard from './Education_card';
import {Container, Wrapper, Title, Desc, TimelineSection} from "./Education_style"



const index = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {education.map((education,index) => (
                            <TimelineItem>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {index !== education.length - 1 && <TimelineConnector style={{ background: '#0078ff' }} />}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education, experiences, certificate } from '../../data/constants';
import CertificateCard from './Certificate_card';
import {Container, Wrapper, Title, Desc, TimelineSection} from "./Certificates_style";



const index = () => {
    return (
        <Container id="certificate">
            <Wrapper>
                <Title>Certificate</Title>
                <Desc>
                    These are the following certificates that I have recieved till date.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {certificate.map((certificate ,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="primary" />
                                    {index !== certificate.length - 1 && <TimelineConnector style={{ background: '#0078ff' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <CertificateCard certificate={certificate}/>
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
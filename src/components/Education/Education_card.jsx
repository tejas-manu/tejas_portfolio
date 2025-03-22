import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import {
  Card,
  Top,
  Image,
  Body,
  Name,
  Degree,
  Date,
  Grade,
  Description,
  Span
} from "./Education_card_style"

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} alt={education.school} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>
                        <FaCalendarAlt style={{ marginRight: '8px', fontSize: '14px' }} />
                        {education.date}
                    </Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            {education?.desc && (
                <Description>
                    <Span>{education.desc}</Span>
                </Description>
            )}
        </Card>
    )
}

export default EducationCard

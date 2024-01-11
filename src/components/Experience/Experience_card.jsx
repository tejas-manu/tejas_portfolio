import {Document, Description, Span, Card, Top, Image, Body, Role, Company, Date, Skills, ItemWrapper,ItemWrapperResp, Skill, Resp} from "./Experience_card_style"
import React from 'react'


const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>
                }
                {experience?.resp &&
                    <>
                        <br />
                        <Skills>
                            <b>Responsibility:</b>
                            <ItemWrapperResp>
                                {experience?.resp?.map((res, index) => (
                                    <Resp>• {res}</Resp>
                                ))}
                            </ItemWrapperResp>
                        </Skills>
                    </>
                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }

            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4fWhBw1ar9Lpj-xwtvyM8wnzaFXRWZT5RTQ&usqp=CAU" />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard
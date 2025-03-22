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
  Expiry,
  Description,
  Span,
  Anchor
} from "./Certificate_card_style"

const CertificateCard = ({ certificate }) => {
    return (
        <Card>
            <Top>
                <Image src={certificate.img} alt={certificate.name} />
                <Body>
                    <Anchor href={certificate.doc} target="new">
                       <Name>{certificate.name}</Name>
                    </Anchor>
                    <Degree>{certificate.organization}</Degree>
                    <Degree>{certificate.platform}</Degree>
                    {certificate.date && (
                        <Date>
                            <FaCalendarAlt style={{ marginRight: '8px', fontSize: '14px' }} />
                            {certificate.date}
                        </Date>
                    )}
                    {certificate.exp && <Expiry>{certificate.exp}</Expiry>}
                </Body>
            </Top>
            {certificate?.desc && (
                <Description>
                    <Span>{certificate.desc}</Span>
                </Description>
            )}
        </Card>
    )
}

export default CertificateCard

import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>Find answers to common questions about Google Developer Student Clubs (GDSC). Whether you're curious about joining, getting involved in projects, or understanding the benefits of being a part of GDSC, we've compiled essential information to help you navigate and make the most of your GDSC experience.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What is Google Developer Student Clubs (GDSC) ?</Accordion.Header>
                    <Accordion.Body>
                    Google Developer Student Clubs (GDSC) are university-based community groups for students interested in Google developer technologies. They focus on learning, networking, and working on projects that make a positive impact.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>What types of events do GDSCs organize ?</Accordion.Header>
                    <Accordion.Body>
                    GDSCs organize various events, including workshops, hackathons, tech talks, and coding challenges. They also offer mentorship and networking opportunities.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>How can I join a GDSC ?</Accordion.Header>
                    <Accordion.Body>
                    To join a GDSC, you can visit the official GDSC website or your university's GDSC chapter page. You may need to register or sign up for events and meetings.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>What are the benefits of joining GDSC ?</Accordion.Header>
                    <Accordion.Body>
                    Members benefit from learning new skills, networking with industry professionals, participating in workshops and events, and gaining hands-on experience through projects.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;
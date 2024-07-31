import React from 'react';
import './Pastevents.css';
import { Card } from 'react-bootstrap';
import ArtCourseImg from '../../utils/images/cybersecrity.webp';
import BusinessCourseImg from '../../utils/images/event2.webp';
import ComputerScienceCourseImg from '../../utils/images/event3.webp';
import EducationCourseImg from '../../utils/images/event4.webp';
import HealthcareCourseImg from '../../utils/images/event5.webp';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import event6 from '../../utils/images/event6.webp'

const pastevents = [
    {
        id: 1,
        img: ArtCourseImg,
    },
    {
        id: 2,
        img: BusinessCourseImg,
    },
    {
        id: 3,
        img: ComputerScienceCourseImg,
    },
    {
        id: 4,
        img: EducationCourseImg,
    },
    {
        id: 5,
        img: HealthcareCourseImg,
    },
    {
        id: 5,
        img: event6,
    },
];

function Pastevents() {
  return (
    <div className='pastevents-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Past Events</h1>
                <p className='text-center w-75 mb-5'>Explore the dynamic and engaging events organized by our Google Developer Student Club (GDSC) that have empowered and connected students across various tech fields. nds-on workshops and coding competitions to inspiring guest lectures and networking sessions. 
</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {pastevents.map((event) => (
                    <div key={event.id} className='col-7 col-sm-5 col-md-4 col-lg-3'>
                        <Card className='card-size'>
                            <Card.Img src={event.img} className='card-img' />
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default Pastevents;




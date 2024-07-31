import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/vrinda_vritti.webp';
import Blog2Img from '../../utils/images/abhinav_tyagi.webp';
import Blog3Img from '../../utils/images/harashish_chaine_jZxRT3I.webp';
import Blog4Img from '../../utils/images/tanvi_sharma_ZILWWyf.webp';


const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Vrinda Vritti',
        description: 'GDSC Lead'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'ABHINAV TYAGI',
        description: 'Core Team '
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Harashish Chaine',
        description: 'Core Team '
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'Tanvi Sharma',
        description: 'Core Team '
    },
   
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Organizers</h1>
                <p className='text-center w-75 mb-5'>Organizing a team for a Google Developer Student Club (GDSC) involves defining clear roles and responsibilities, fostering collaboration through regular meetings, and setting specific goals aligned with the club's mission. Effective communication and structured planning ensure that projects are managed efficiently, and team members are motivated and engaged.</p>
            </div>
        </header>
        <div className='bg-body-tertiary py-4'>
    <div className="container">
        <div className="row g-4">
            {blogs.map((blog) => (
                <div key={blog.id} className='col-md-3'>
                    <Link to="/blog" className='text-decoration-none'>
                    <Card className='d-flex flex-column align-items-center border-0'>
    <Card.Img variant="top" src={blog.img} className='card-img' />
    <Card.Body className='d-flex flex-column align-items-center text-center'>
        <Card.Title className='fs-4 mb-2'>{blog.title}</Card.Title>
        <Card.Text className='text-muted'>{blog.description}</Card.Text>
    </Card.Body>
</Card>

                    </Link>
                </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;
import React from "react";
import "./testimonials.css";
import photo1 from '../../assets/photo1.jpg';
import photo2 from '../../assets/photo2.jpg';
import photo3 from '../../assets/photo3.jpeg';
import photo4 from '../../assets/photo4.webp';



const Testimonials=()=>{

    const testimonialsData = [
        {
            id: 1,
            name: "Mitali Joshi",
            position: "Student",
            message:
                "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
            image:photo1,
        },
        {
            id: 2,
            name: "Rohan Verma",
            position: "Student",
            message:
                "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
            image:photo2
        },
        {
            id: 3,
            name: "Ishita Malhotra",
            position: "Student",
            message:
                "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
            image:photo3,

        },
        {
            id: 4,
            name: "Dev Sharma",
            position: "Student",
            message:
                "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
            image:photo4

        },
    ];
    return(
        <section className="testimonials">
            <h2>What our students say</h2>
            <div className="testimonials-cards">
                {testimonialsData.map((e)=>(
                        <div className="testimonials-card" key={e.id}>
                            <div className="student-image">
                                <img src={e.image} alt="" />
                            </div>
                            <p className="meassage">{e.message}</p>
                            <div className="info">
                                <p className="name">{e.name}</p>
                                <p className="position">{e.position}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Testimonials;
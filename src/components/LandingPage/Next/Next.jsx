import React from "react";
import './Next.scss';
import { useNavigate } from "react-router-dom";
const Next = () => {
    const navigate = useNavigate()
    return(
        <section className="next-section">
            <div className="next-step">
                <div className="next-heading">
                    <h2>What's Your Next Step?</h2>
                </div>

                <div className="next-content">
                    <button onClick={()=>navigate('/contact')}>Request Information</button>
                    <button>Virtual Visit</button>
                    <button onClick={()=>navigate('/enquire')}>Apply Now</button>
                </div>
            </div>
        </section>
    )
}

export default Next;
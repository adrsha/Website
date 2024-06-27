"use client"

import "./Reviews.css";
import { useState, useEffect, useRef } from "react";

export default function Reviews() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const batchCount = 3;
    const [fade, setFade] = useState("");
    const timerRef = useRef(null);

    const reviews = [
        {
            id: "batch1",
            reviews: [
                {
                    id: "reviewer1",
                    name: "Ayush Lamsal",
                    text: "Best place to compare plans I have ever seen ever (test increase in length)."
                },
                {
                    id: "reviewer2",
                    name: "Adarsha Acharya",
                    text: "I got to know there was a plan 30% cheaper plan that fitted all my needs."
                }
            ]
        },
        {
            id: "batch2",
            reviews: [
                {
                    id: "reviewer3",
                    name: "Adrin Paudel",
                    text: "The best insurance comparison website in Nepal (test increase in length)."
                },
                {
                    id: "reviewer4",
                    name: "Abhinav Sharma",
                    text: "Best place to compare plans I have ever seen ever (test increase in length)."
                }
            ]
        },
        {
            id: "batch3",
            reviews: [
                {
                    id: "reviewer5",
                    name: "Krijan Shrestha",
                    text: "I got to know there was a plan 30% cheaper plan that fitted all my needs."
                },
                {
                    id: "reviewer6",
                    name: "Deepak Bajracharya",
                    text: "The best insurance comparison website in Nepal (test increase in length)."
                }
            ]
        },
        {
            id: "batch4",
            reviews: [
                {
                    id: "reviewer7",
                    name: "Buddha Shrestha",
                    text: "I got to know there was a plan 30% cheaper plan that fitted all my needs."
                },
                {
                    id: "reviewer8",
                    name: "Pragati Regmi",
                    text: "The best insurance comparison website in Nepal (test increase in length)."
                }
            ]
        },
        {
            id: "batch5",
            reviews: [
                {
                    id: "reviewer9",
                    name: "Aayush Regmi",
                    text: "I got to know there was a plan 30% cheaper plan that fitted all my needs."
                },
                {
                    id: "reviewer10",
                    name: "Dipson Adhikari",
                    text: "The best insurance comparison website in Nepal (test increase in length)."
                }
            ]
        },
        {
            id: "batch6",
            reviews: [
                {
                    id: "reviewer11",
                    name: "Sushant Pokhrel",
                    text: "I got to know there was a plan 30% cheaper plan that fitted all my needs."
                },
                {
                    id: "reviewer12",
                    name: "Karan Dahal",
                    text: "The best insurance comparison website in Nepal (test increase in length)."
                }
            ]
        },
        {
            id: "batch7",
            reviews: [
                {
                    id: "reviewer13",
                    name: "Avram Lincon",
                    text: "I got to know there was a plan 30% cheaper plan that fitted all my needs."
                },
                {
                    id: "reviewer14",
                    name: "Safal Yadav",
                    text: "The best insurance comparison website in Nepal (test increase in length)."
                }
            ]
        }
    ];

    const getNextIndex = (index, step) => {
        return (index + step) % reviews.length;
    };

    const getPreviousIndex = (index, step) => {
        return (index - step + reviews.length) % reviews.length;
    };


    // const handleLeftArrowClick = () => {
    //     setFade("fade-out-right");
    //     setTimeout(() => {
    //         setCurrentIndex((prevIndex) => getPreviousIndex(prevIndex, batchCount));
    //         setFade("fade-in-left");
    //     }, 50); // Minimal delay for fade-out to start before fade-in
    //     resetTimer();
    // };
    
    // const handleRightArrowClick = () => {
    //     setFade("fade-out-left");
    //     setTimeout(() => {
    //         setCurrentIndex((prevIndex) => getNextIndex(prevIndex, batchCount));
    //         setFade("fade-in-right");
    //     }, 50); // Minimal delay for fade-out to start before fade-in
    //     resetTimer();
    // };
    
    
    const handleLeftArrowClick = () => {
        setFade("fade-out-right");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = getPreviousIndex(prevIndex, batchCount);
                return newIndex;
            });
            setFade("fade-in-left");
        }, 200); // Duration of the fade-out animation
        setTimeout(() => setFade(""), 1000); // Reset fade state after animations
        resetTimer();
    };

    const handleRightArrowClick = () => {
        setFade("fade-out-left");
        setTimeout(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = getNextIndex(prevIndex, batchCount);
                return newIndex;
            });
            setFade("fade-in-right");
        }, 200); // Duration of the fade-out animation      
        setTimeout(() => setFade(""), 1000); // Reset fade state after animations
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            handleRightArrowClick();
        }, 10000);
    };

    useEffect(() => {
        resetTimer();
        return () => clearTimeout(timerRef.current);
    }, [currentIndex]);

    return (
        <div className="reviews">
            <div className="heading">
                <div className="headingTitle">Reviews</div>
                <div className="arrow">
                    <div className="arrowLeft" onClick={handleLeftArrowClick}>
                        ←
                    </div>
                    <div className="arrowRight" onClick={handleRightArrowClick}>
                        →
                    </div>
                </div>
            </div>
            <div className={`allReviewsContainer ${fade}`}>
                {reviews
                    .slice(currentIndex, currentIndex + batchCount)
                    .concat(reviews.slice(0, Math.max(0, (currentIndex + batchCount) - reviews.length)))
                    .map((batch, idx) => (
                        <div className="reviewBatch" id={batch.id} key={idx}>
                            {batch.reviews.map((review) => (
                                <div className="review" key={review.id}>
                                    <div className="reviewContent">
                                        <div className="reviewHeader">
                                            <div className="reviewerPhoto" id={review.id}></div>
                                            <div className="reviewerName">{review.name}</div>
                                            <div className="reviewQuote">”</div>
                                        </div>
                                        <div className="reviewText">
                                            <p>{review.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
            </div>
        </div>
    );
}










{/*
import "./Reviews.css";
export default function Reviews() {
    return (
        <div className="reviews">

            <div className="heading">
                <div className="headingTitle">
                    Reviews
                </div>
                <div className="arrow">
                    <div className="arrowLeft">
                        ←
                    </div>
                    <div className="arrowRight">
                        →
                    </div>
                </div>
            </div>

            <div className="allReviewsContainer">

                <div className="reviewBatch" id="batch1">
                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer1"></div>
                                <div className="reviewerName"> Ayush Lamsal </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    Best place to compare plans i have ever seen ever (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer2"></div>
                                <div className="reviewerName"> Adarsha Acharya </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    I got to know there was a plan 30% cheaper plan that fitted all my needs.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="reviewBatch" id="batch2">

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer3"></div>
                                <div className="reviewerName"> Adrin Paudel</div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    The best insurance comaprison website in nepal (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer4"></div>
                                <div className="reviewerName"> Abhinav Sharma </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    Best place to compare plans i have ever seen ever (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="reviewBatch" id="batch3">

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer5"></div>
                                <div className="reviewerName"> Krijan Shrestha </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    I got to know there was a plan 30% cheaper plan that fitted all my needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer6"></div>
                                <div className="reviewerName"> Deepak Bajracharya </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    The best insurance comaprison website in nepal (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="reviewBatch" id="batch4">

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer7"></div>
                                <div className="reviewerName"> Buddha Shrestha </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    I got to know there was a plan 30% cheaper plan that fitted all my needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer8"></div>
                                <div className="reviewerName"> Pragati Regmi </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    The best insurance comaprison website in nepal (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="reviewBatch" id="batch5">

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer9"></div>
                                <div className="reviewerName"> Aayush Regmi </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    I got to know there was a plan 30% cheaper plan that fitted all my needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer10"></div>
                                <div className="reviewerName"> Dipson Adhikari </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    The best insurance comaprison website in nepal (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="reviewBatch" id="batch6">

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer11"></div>
                                <div className="reviewerName"> Sushant Pokhrel</div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    I got to know there was a plan 30% cheaper plan that fitted all my needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer12"></div>
                                <div className="reviewerName"> Karan Dahal </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    The best insurance comaprison website in nepal (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="reviewBatch" id="batch7">

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer13"></div>
                                <div className="reviewerName"> Avram Lincon</div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    I got to know there was a plan 30% cheaper plan that fitted all my needs.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="reviewContent">
                            <div className="reviewHeader">
                                <div className="reviewerPhoto" id="reviewer14"></div>
                                <div className="reviewerName"> Safal Yadav </div>
                                <div className="reviewQuote"> ”</div>
                            </div>
                            <div className="reviewText">
                                <p>
                                    The best insurance comaprison website in nepal (test increase in length).
                                </p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
}

*/}
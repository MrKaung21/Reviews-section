import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0)
  const { image, name, job, text } = people[index]

  const checkNum = num => {
      if (num > people.length - 1){
          return 0
      }
      if (num < 0) {
        return people.length - 1
      }
      return num
  }

  const prevReview = () => {
      setIndex(index => {
        let prevIndex = index - 1
        return checkNum(prevIndex)
      })
  }

   const nextReview = () => {
      setIndex(index => {
        let nextIndex = index + 1
        return checkNum(nextIndex)
      })
  }

  const randomReview = () => {
      let randomNum = Math.floor(Math.random() * people.length)
      setIndex(checkNum(randomNum))  
  } 

  return (
      <article className='review'>
          <div className='img-container'>
            <img src={image} alt={name} className='person-img' /> 
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <h5 className='job'>{job}</h5> 
          <p className='info'>{text}</p>
          <div className='button-container'>
            <button className='prev-btn'>
                <FaChevronLeft className='prev-btn' onClick={prevReview}/>
            </button>
            <button className='next-btn'>
                <FaChevronRight className='next-btn' onClick={nextReview}/>
            </button>
          </div>
          <button className='random-btn' onClick={randomReview}>Surprise Me</button>
      </article>
  )
};

export default Review;

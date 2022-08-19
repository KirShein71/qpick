import React from 'react'

export const Contact = () => {
  return (
    <>
        <div className='contact'>
            <div className='contact__title'>Наш офис</div>
            <div className='contact__image'>
                <img height={424} width={720} src='./img/karta.svg' alt='karta'/>
            </div>
            <div className='contact__address'>Аксай-3а, 62ф, Алматы, Казахстан</div>
        </div>
        <div className='contact__tell'>
            <img src='./img/tell.svg' alt='phone'/>
            <a href='tel:7777777'>+7 777 777 777</a>
        </div>
    </>
  )
};

export default Contact;

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out Our Current Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/beach.jpg'            
              text='Whether you’re looking for a treehouse for the weekend or an entire home for the whole family, 
              a warm welcome awaits. Behind every stay is a real person who can give you the details 
              you need to check in and feel at home.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/beach2.jpg'
              text='Sandiejoy Experiences are not your typical tour. Whether you’re on a trip, 
              exploring your own city, or staying at home, learn something new from an expert host.
               Choose from dance lessons, pasta-making—even yoga with goats.

              '
              label='Luxury'
              path='/services'
            />
          </ul>

        </div>
        <div className='cards'>

        <h1>Simple steps to get started!</h1>

        </div>

          <ul className='cards__items'>
            <CardItem
              src='images/nature.jpg'
              text='Personalize your search with filters—like price range or a pool—to get exactly 
              what you want.
              '
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/sunset.jpg'
              text='Check out the photos. Then, read guest reviews from past reservations to 
              learn what it’s like in person.
              '
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/vaction.jpg'
              text='We keep your info safe and follow global security standards to process your payments.
              '
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-home.jpg'
              text='Your host is only a message away if you have any questions. They can also offer local tips and advice.
              '
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
    </div>
  );
}

export default Cards;

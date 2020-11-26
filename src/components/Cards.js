import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>“If You Educate a Man, You Educate an Individual. But If You Educate a Woman, You Educate a Nation.”</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/full-stack.jpg'            
              text='In the next five (5) years i want be good at both the Front and Back end of a website or application. Be familiar with HTML, CSS, JavaScript, and one or more Back-end languages. Hence “Full Stack” and be a team Lead at one of the top companies in all the web development skills to build sites and apps from start to finish. Knowing how to communicate with both Front end and Back end developers in solving out the real world problems.'
            />
            <CardItem
              src='images/pop.jpg'
              text='In the next Ten (10) years i would like to Mentor/ Inspire women and girls because it is through women Empowerment that has made me who i am today. I believe alot of women out there are suffering in silence because they dont know how and where to start life from and some of them end-up loosing their lives due to depression from a toxic relationship they are in. A woman needs to work and have their own money than forever being stay home mother and be mistreted so badly by a man.'
              
            />
          </ul>

        </div>
        <div className='cards'>

        <h1>My Journey of Software Development!</h1>

        </div>

          <ul className='cards__items'>
            <CardItem
            // src='images/nature.jpg'
      
              text=' Trustful Trade: 
              Working with a team to develop a USSD application, Website (Testing the website to ensure it is working
              well on desktop, mobile and tablet), Web and Mobile application. Fixing the bug on both web and mobile
              app for Mobile Application Secure Tenure (MAST), Configuration of MAST Data Management
              Infrastructure and Deployment to the AWS instances, Basic code on Android app, Configuring AWS
              Server using ( PostgreSQL and pgAdmin, putty, SSH, deploying using WinSCP to AWS server),
              Researching current design trends, Editing content, Debugging code and re-designing web pages,
              Designing the website’s visual imagery and ensuring it’s in line with company branding policy or the 
              requirements of the client, Designing using Figma and Whimsical, animations and manipulating digital
              photographs and Working with an agile environment and scrum works. 
              '
              // label='Mystery'
              // path='/services'
            />
            <CardItem
            //  src='images/sunset.jpg'
              text=' College of Computing and Information Sciences: 
              Assist all users in Computer Labs by answering questions, looking up for information in manuals or using
              on line help, and directing users to students’ consultants for special requests or difficult problems.
              Improve software and hardware knowledge by taking advantage of all resources made available. 
              '
              // label='Adventure'
              // path='/products'
            />
            <CardItem
              // src='images/vaction.jpg'
              text='Clarke International University Refactory (2019)
              Catalyst 3-month program that covers everything from Javascript and Git, to project management, system
              security and leadership. 
              '
              // label='Adrenaline'
              // path='/sign-up'
            />
            <CardItem
              // src='images/img-home.jpg'
              text='ETC Youth Skilling Programme, Programming language (2019)
              Software development at Innovation Village (Ntinda) in HTML, CSS, JAVASCRIPT and My Team
              Awesome (Winners) took on the challenge Prudential Uganda set and designed a chatbot prototype that
              can improve communications between Prudential and their valued customers.
              '
              // label='Adrenaline'
              // path='/sign-up'
            />
          </ul>
        </div>
    </div>
  );
}

export default Cards;

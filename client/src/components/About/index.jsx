import React from 'react';

function About() {
  return (
    <section className='m-3'>
      <div className=' bg-brown p-2 square rounded m-3'>
        <h2 className='text-center text-light'>About Us</h2>
      </div>
      <div className='bg-light square rounded m-3'>
        <p className='m-3 p-3 text-justify fs-5'>
          A restaurant app that allows you to create a profile, submit an order, and get your grub on! You can also get rewards points for each order that
          you put in.
        </p>
      </div>
    </section>
  );
}
export default About;
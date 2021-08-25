import React from 'react'

function SoundOnSound () {
  return (
    <>
      <div>
        <img className=' w-96 h-auto pt-20'src='/images/sos.png'></img>
        <h1 className='font-hero-font font-serif text-3xl pt-10 pb-6'>A review from Gordon Reid</h1>
        <h4>Published April 2016</h4>
        <p className='pt-12'>
        As George Harrison once told my friend Martin Smith at Streetly Electronics,
        “History is bollocks. If you weren’t there, you don’t know.” I suspect that
        we can all symphathise with that view to some extent although, if taken at face
        value, it would render valueless almost all history books and retrospectives,
        not least because the people about whose activities they were written were generally
        long dead by the time that quill was eventually scratched across papyrus. So, when
        David Abernethy decided to write a definitive history of Sequential Circuits,
        he hit upon a plan so cunning that he could have pinned a tail on it and called
        it a fox. He decided to involve all manner of people who were there at the time
        including, most importantly, Dave Smith and John Bowen, as well as luminaries such
        as John Chowning, Tom Oberheim and Roger Linn, all of whom are still very much alive
        and active in our industry.
        </p>
        <button className='flex justify-center mt-10'>see more</button>
      </div>
    </>
  )
}

export default SoundOnSound

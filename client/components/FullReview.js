import React, { useState } from 'react'

function readMore ({ children, maxCharacterCount = 500 }) {
  const text = children
  const [isTruncated, setIsTruncated] = useState(true)
  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text

  function toggleIsTruncated () {
    setIsTruncated(!isTruncated)
  }

  return (
    <>
      <p>
        {resultString}
        <span onClick={toggleIsTruncated}>
          {isTruncated ? 'Read More' : 'Read Less' }
        </span>
      </p>
    </>
  )
}

function readMoreText (text) {
  return (
    <>
      <div>
        <readMore maxCharacterCount={500}>
          As George Harrison once told my friend Martin Smith at Streetly Electronics,
          “History is bollocks. If you weren’t there, you don’t know.” I suspect that
          we can all symphathise with that view to some extent although, if taken at
           face value, it would render valueless almost all history books and retrospectives,
           not least because the people about whose activities they were written were
           generally long dead by the time that quill was eventually scratched across
           papyrus. So, when David Abernethy decided to write a definitive history of
           Sequential Circuits, he hit upon a plan so cunning that he could have pinned
           a tail on it and called it a fox. He decided to involve all manner of people
           who were there at the time including, most importantly, Dave Smith and John
           Bowen, as well as luminaries such as John Chowning, Tom Oberheim and Roger Linn,
           all of whom are still very much alive and active in our industry.
        </readMore>
      </div>
    </>
  )
}

export default {
  readMore,
  readMoreText
}

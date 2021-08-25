import React, { useState } from 'react'

function ReadMore ({ children, maxCharacterCount = 912 }) {
  const text = children
  const [isTruncated, setIsTruncated] = useState(true)
  const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text

  function toggleIsTruncated () {
    setIsTruncated(!isTruncated)
  }

  return (
    <>
      <p className='mt-10'>
        {resultString}
        <button className='bg-red-600 text-white rounded ml-4 pl-2 pr-2'onClick={toggleIsTruncated}>
          {isTruncated ? 'read more' : 'read less' }
        </button>
      </p>
    </>
  )
}

function FullReview (text) {
  return (
    <>
      <div>
        <ReadMore maxCharacterCount={912}>
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
           I first heard of the project when Abernethy contacted me in October 2012,
           by which time he had already invested two years of his life in it. He was
           planning to fly from his native New Zealand to the UK to interview a number
           of musicians and writers with the intention of adding their memories and
           observations to the corpus, and asked me whether I would be willing to
           contribute. Five months later, I met him at BVE (the Broadcast Video Expo)
           in London, and we spent a happy hour or two discussing all things Prophet-y.
          Everything then went quiet for another couple of years during which,
          unbeknown to the rest of us, Abernethy was visiting, meeting, interviewing,
          Skype-ing, emailing, and generally sucking vast quantities of memories
          from the great and the good of the industry, then trawling through the huge
          body of information he was acquiring and whipping it into shape for publication.
          When it appeared, the book was subtitled, The Complete Story Of Sequential
          Circuits, which at first seemed a bold claim, but even a brief skim suggested
          that it wasn’t inappropriate. In addition to the principal players, Abernethy
          had managed to interview many of the original instruments’ hardware and software
          designers, industry gurus from contemporaneous companies, plus writers and
          reviewers old enough to have been there the first time around. But I suspect
          that it’s the wealth of comments from high-profile musicians such as Tony Banks,
          Geoff Downes, Suzanne Ciani and Larry Fast that will fascinate most, as well as
          the ‘Horror Stories’ and ‘Mad Moments’ dropped into many of the chapters.
          Spanning the entire history of Sequential Circuits from their first product
          in 1974 to their demise at the end of 1987, the book doesn’t focus exclusively
          on the one company, and therefore provides a huge amount of valuable context
          within which the story unfolds. And, although it’s a large–format paperback
          rather than a ‘coffee table’ hardback, the production quality is good, the
          layout and choice of fonts make the information very accessible, and the high
          number of images and photographs (mostly in full colour) all combine to make
          it a cracking good read. Indeed, I found it to be almost like reading a novel.
          Sure, I knew that the main character died on the last page, but I frequently
          found myself reading for longer than I had intended, just to find out what
          happened next.
          At this point, I have to declare an interest — much of my conversation with
          Abernethy made it into the book, so maybe I could be accused of bias. So let
          me conclude with somebody else’s view. A few weeks ago, I had the opportunity
          to ask Dave Smith of Sequential Circuits what he thinks of The Prophet From
          Silicon Valley and he told me, “It’s very complete and accurate, at least from
          what I remember from that long ago! There were a couple of things that apparently
          other people remembered differently than I do, but after that much time I don’t
          necessarily trust my version enough to challenge them. There were even a few
          stories that I hadn’t heard before. I’ve heard from a number of people saying
          how much they like the book and how much they’ve learned. With the entire story
          in one place, it’s a great historical reference for that period of synth history.
          ”Were George Harrison alive today, he might have had to eat his words. To misquote
          him, all things must pass, but not necessarily before someone with the commitment
          shown by Abernethy has had the chance to record them for posterity.
          Highly recommended.
          Gordon Reid
        </ReadMore>
      </div>
    </>
  )
}

export default FullReview

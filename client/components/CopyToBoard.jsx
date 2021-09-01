import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

function CopyToBoard () {
  const [copied, setCopied] = useState(false)
  return (
    <>
      <div>
        <CopyToClipboard
          text={'erinabernethydev@gmail.com'}
          onCopy={() => setCopied(true)}>
          <figure>
            <a to=''>
              <img className='cursor-pointer transform hover:scale-105 duration-500 h-40 w-auto'src='/images/mail.png'></img>
              <figcaption className='mt-8 text-xs flex justify-center'>Click to copy email to clipboard</figcaption>
            </a>
          </figure>
        </CopyToClipboard>
        {copied ? alert('email copied to clipboard') : null}
      </div>
    </>
  )
}

export default CopyToBoard

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
          <img
            className='cursor-pointer transform hover:scale-105 duration-500 h-40 w-auto'
            src='/images/mail.png'
          />
        </CopyToClipboard>
        {copied ? <span style={{ color: 'red' }}>Copied</span> : null}
      </div>
    </>
  )
}

export default CopyToBoard

import React from 'react'

import './title.css'

const Title = ({title, subtitle}) => (
    <div>
        <p className="title">
            {title}
        </p>

        <p className="subtitle">
            {subtitle}
        </p>

    </div>
  )

  export default Title

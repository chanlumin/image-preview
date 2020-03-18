import React, { useState, useEffect } from 'react'
import './index.css'

ImagePreview.defaultProps = {
  imageList: [],
  width: '800px'
}



export default function ImagePreview(props) {
  const { imageList, width } = props
  const [current, setCurrent] = useState(0)
  const [prevDisabled, setPrevDisabled] = useState(true)
  const [nextDisabled, setNextDisabled] = useState(false)

  const handleNext = () => {
    const len = imageList.length
    if (current === len - 1) {
      setNextDisabled(true)
      return
    }
    if (current > 0) {
      setPrevDisabled(false)
    }
    setCurrent(current + 1)
  }

  const handlePrev = () => {
    const len = imageList.length
    if (current === 0) {
      setPrevDisabled(true)
      return
    }
    if (current < len - 1) {
      setNextDisabled(false)
    }
    setCurrent(current - 1)
  }

  useEffect(() => {
    console.log(imageList.filter((_, i) => i === current))
  }, [current])

  return (<div className="image__preview--container">
    <div style={{
      justifyContent: 'center',
      display: 'flex',
      padding: '30px',
      cursor: 'pointer',
      fontSize: '20px'

    }}>
      <div style={{ marginRight: '20px' }}>第 {current + 1} 页    共{imageList.length} 页</div>
      <button className="image__preview--btn" disabled={prevDisabled}
        onClick={handlePrev}
        style={{
          marginRight: '30px'
        }}>上一页</button>
      <button className="image__preview--btn" disabled={nextDisabled} onClick={handleNext}>下一页</button>

    </div>
    <div style={{ maxWidth: width, overflow: 'hidden', display: 'flex' }}>

      <img style={{ width: '100%' }} src={
        imageList.filter((_, i) => i === current
        )} />
    </div>
  </div>)
}
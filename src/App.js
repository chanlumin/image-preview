import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImagePreview from './components/image-preview'
import img1 from './assets/images/0001.jpg'
import img2 from './assets/images/0002.jpg'
import img3 from './assets/images/0003.jpg'
import img4 from './assets/images/0004.jpg'
import img5 from './assets/images/0005.jpg'

const imageList = [
  img1,
  img2,
  img3,
  img4,
  img5
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImagePreview
          imageList={imageList}
        />
      </header>
    </div>
  );
}

export default App;

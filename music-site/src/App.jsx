import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';
import ContentSection from './components/ContentSection';
import Navbar from './components/Navbar';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="Abbey"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.4}>
          <div class="animation_layer parallax" id="River"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.6}>
          <div class="animation_layer parallax" id="Farm"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="City"></div>
        </ParallaxLayer>

      </Parallax>
      <ContentSection />

    </div>
  );
}

export default App;
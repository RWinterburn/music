import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';

function App() {
  return (
    <div className="App">
      <Parallax pages={2} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="Abbey"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="River"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={-0.4}>
          <div class="animation_layer parallax" id="Farm"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.3}>
          <div class="animation_layer parallax" id="City"></div>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
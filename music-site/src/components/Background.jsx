import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './Background.css'; // Use a separate CSS file for styles




function Background() {
  return (
    <Parallax pages={3} style={{ top: '0', left: '0' }} className="animation">

<ParallaxLayer offset={0} speed={0} className="top-gradient-layer">
    <div className="gradient-top"></div>
  </ParallaxLayer>

      {/* Abbey and Fields at the Top */}
      <ParallaxLayer offset={0} speed={0}>
        <div className="animation_layer parallax" id="Abbey"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.1}>
        <div className="animation_layer parallax" id="River"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.2} speed={0.2}>
        <div className="animation_layer parallax" id="Farm"></div>
      </ParallaxLayer>

      {/* Gradient Transition (Blue to Red) */}
      <ParallaxLayer offset={1} speed={0}>
        <div className="gradient-layer-middle"></div>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0}>
        <div className="gradient-layer-bottom"></div>
      </ParallaxLayer>

      


      {/* City Appears at the Bottom */}
      <ParallaxLayer offset={2} speed={-0.3}>
        <div className="animation_layer parallax" id="City"></div>
      </ParallaxLayer>
      
      
      
    </Parallax>
  );
}

export default Background;




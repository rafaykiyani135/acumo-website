import React from 'react';
import NeuralNetworkAnimation from './NeuralNetworkAnimation';

function App() {
  return (
    <div className="App">
      <h1>Neural Network Animation Demo</h1>
      
      {/* Basic usage with default props */}
      <section>
        <h2>Default Animation</h2>
        <NeuralNetworkAnimation />
      </section>

      {/* Custom input and output text */}
      <section>
        <h2>Custom Text</h2>
        <NeuralNetworkAnimation 
          inputText={['What', 'is', 'AI', 'magic?']}
          outputText="Pure innovation!"
        />
      </section>

      {/* Custom colors */}
      <section>
        <h2>Custom Colors (Purple Theme)</h2>
        <NeuralNetworkAnimation 
          activationColor="#9B59B6"
          connectionColor="#2C3E50"
          neuronColor="#ECF0F1"
          backgroundColor="#F8F9FA"
        />
      </section>

      {/* Faster animation */}
      <section>
        <h2>2x Speed</h2>
        <NeuralNetworkAnimation 
          animationSpeed={2}
        />
      </section>

      {/* Slower animation */}
      <section>
        <h2>Slower (0.5x Speed)</h2>
        <NeuralNetworkAnimation 
          animationSpeed={0.5}
        />
      </section>

      {/* Dark theme example */}
      <section style={{ backgroundColor: '#1a1a1a', padding: '20px' }}>
        <h2 style={{ color: 'white' }}>Dark Theme</h2>
        <NeuralNetworkAnimation 
          activationColor="#00D9FF"
          connectionColor="#FFFFFF"
          neuronColor="#2A2A2A"
          backgroundColor="#1a1a1a"
        />
      </section>
    </div>
  );
}

export default App;

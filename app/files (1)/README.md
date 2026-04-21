# Neural Network Animation Component

A fully customizable React component that visualizes a three-layer neural network with animated forward propagation.

## Features

- ✅ Three-layer architecture (4 input neurons → 3 hidden neurons → 1 output neuron)
- ✅ Smooth animations showing signal propagation
- ✅ Fully customizable colors, text, and animation speed
- ✅ TypeScript support
- ✅ Responsive SVG design
- ✅ Easy to integrate into any React project

## Installation

Simply copy the `NeuralNetworkAnimation.tsx` file into your React project.

## Basic Usage

```tsx
import NeuralNetworkAnimation from './NeuralNetworkAnimation';

function MyComponent() {
  return <NeuralNetworkAnimation />;
}
```

## Props

All props are optional. The component works perfectly with default values.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inputText` | `string[]` | `['How', 'good', 'is', 'acumo?']` | Array of 4 strings to display on input neurons |
| `outputText` | `string` | `"It's goated!"` | Text to display at the output |
| `activationColor` | `string` | `'#4169E1'` (Royal Blue) | Color of activated neurons and connections |
| `neuronColor` | `string` | `'white'` | Color of inactive neurons |
| `connectionColor` | `string` | `'black'` | Color of neuron outlines and inactive connections |
| `backgroundColor` | `string` | `'white'` | Background color of the entire component |
| `animationSpeed` | `number` | `1` | Speed multiplier (2 = 2x faster, 0.5 = half speed) |

## Examples

### Custom Text

```tsx
<NeuralNetworkAnimation 
  inputText={['What', 'is', 'AI', 'magic?']}
  outputText="Pure innovation!"
/>
```

### Custom Colors (Purple Theme)

```tsx
<NeuralNetworkAnimation 
  activationColor="#9B59B6"
  connectionColor="#2C3E50"
  neuronColor="#ECF0F1"
  backgroundColor="#F8F9FA"
/>
```

### Dark Theme

```tsx
<NeuralNetworkAnimation 
  activationColor="#00D9FF"
  connectionColor="#FFFFFF"
  neuronColor="#2A2A2A"
  backgroundColor="#1a1a1a"
/>
```

### Faster Animation

```tsx
<NeuralNetworkAnimation 
  animationSpeed={2}
/>
```

### Slower Animation

```tsx
<NeuralNetworkAnimation 
  animationSpeed={0.5}
/>
```

## How It Works

The component creates an SVG visualization with three layers:

1. **Input Layer**: 4 neurons that receive the input text
2. **Hidden Layer**: 3 neurons that process the information
3. **Output Layer**: 1 neuron that produces the final output

### Animation Sequence

1. Input text appears word by word on each input neuron
2. Input neurons activate (change color to `activationColor`)
3. All connections from input to hidden layer light up
4. Hidden layer neurons activate sequentially
5. Connections from hidden to output layer activate
6. Output neuron activates
7. Output text appears
8. Animation resets and loops

## Customization Guide

### Changing the Network Architecture

To modify the number of neurons in each layer, update the `layers` configuration in the component:

```typescript
const layers = {
  input: { neurons: 4, x: 90 },    // Change neurons: 4 to your desired number
  hidden: { neurons: 3, x: 340 },  // Change neurons: 3 to your desired number
  output: { neurons: 1, x: 540 }   // Change neurons: 1 to your desired number
};
```

**Note**: If you change the input layer neurons, you'll also need to update the `inputText` prop to match the number of neurons.

### Adjusting Animation Timing

Modify the `delays` object in the `animate` function:

```typescript
const delays = {
  inputWord: 300 / animationSpeed,        // Time between each input word appearing
  inputNeuron: 300 / animationSpeed,      // Time for input neuron activation
  layer1ToLayer2: 400 / animationSpeed,   // Time for layer 1 to 2 connections
  hiddenNeuron: 250 / animationSpeed,     // Time between hidden neuron activations
  layer2ToLayer3: 400 / animationSpeed,   // Time for layer 2 to 3 connections
  outputNeuron: 300 / animationSpeed,     // Time for output neuron activation
  outputText: 300 / animationSpeed,       // Time before output text appears
  pause: 1500 / animationSpeed,           // Pause before reset
  reset: 500 / animationSpeed             // Reset duration
};
```

### Changing Colors

You can use any valid CSS color format:

```tsx
// Hex colors
<NeuralNetworkAnimation activationColor="#FF5733" />

// RGB colors
<NeuralNetworkAnimation activationColor="rgb(255, 87, 51)" />

// Named colors
<NeuralNetworkAnimation activationColor="crimson" />
```

### Styling the Container

The component is wrapped in a `<div>` for easy styling:

```tsx
<div style={{ padding: '20px', borderRadius: '10px' }}>
  <NeuralNetworkAnimation />
</div>
```

## Integration with TypeScript Backend

Since your backend is in TypeScript, you can easily share types between frontend and backend:

```typescript
// shared/types.ts
export interface NeuralNetworkInput {
  text: string[];
}

export interface NeuralNetworkOutput {
  result: string;
  confidence: number;
}

// In your component
import type { NeuralNetworkInput, NeuralNetworkOutput } from '../shared/types';
```

## Browser Compatibility

This component uses modern web standards and is compatible with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

The component is highly optimized:
- Uses CSS transitions for smooth animations
- Efficient SVG rendering
- Minimal re-renders with React refs
- Clean timeout management with cleanup

## License

Free to use and modify for your project!

## Questions or Issues?

Feel free to modify the component to suit your needs. The code is well-commented and easy to understand.

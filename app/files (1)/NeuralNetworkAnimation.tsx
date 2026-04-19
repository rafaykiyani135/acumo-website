import React, { useEffect, useRef } from 'react';

interface NeuralNetworkAnimationProps {
  inputText?: string[];
  outputText?: string;
  activationColor?: string;
  neuronColor?: string;
  connectionColor?: string;
  backgroundColor?: string;
  animationSpeed?: number;
}

const NeuralNetworkAnimation: React.FC<NeuralNetworkAnimationProps> = ({
  inputText = ['How', 'good', 'is', 'acumo?'],
  outputText = "It's goated!",
  activationColor = '#4169E1', // Royal blue
  neuronColor = 'white',
  connectionColor = 'black',
  backgroundColor = 'white',
  animationSpeed = 1 // 1 = normal speed, 2 = 2x faster, 0.5 = half speed
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!svgRef.current) return;

      const delays = {
        inputWord: 300 / animationSpeed,
        inputNeuron: 300 / animationSpeed,
        layer1ToLayer2: 400 / animationSpeed,
        hiddenNeuron: 250 / animationSpeed,
        layer2ToLayer3: 400 / animationSpeed,
        outputNeuron: 300 / animationSpeed,
        outputText: 300 / animationSpeed,
        pause: 1500 / animationSpeed,
        reset: 500 / animationSpeed
      };

      let currentTime = 0;

      // Show input words and activate input neurons sequentially
      for (let i = 0; i < 4; i++) {
        setTimeout(() => {
          const inputEl = svgRef.current?.querySelector(`#input-${i}`);
          const neuronEl = svgRef.current?.querySelector(`#n-${i}`);
          if (inputEl) (inputEl as SVGElement).style.opacity = '1';
          if (neuronEl) (neuronEl as SVGElement).setAttribute('fill', activationColor);
        }, currentTime);
        currentTime += delays.inputWord;
      }

      // Activate all connections from layer 1 to layer 2
      setTimeout(() => {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 3; j++) {
            const connEl = svgRef.current?.querySelector(`#c-${i}-${j}`);
            if (connEl) {
              (connEl as SVGElement).setAttribute('stroke', activationColor);
              (connEl as SVGElement).style.opacity = '1';
            }
          }
        }
      }, currentTime);
      currentTime += delays.layer1ToLayer2;

      // Activate hidden layer neurons sequentially
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const hiddenEl = svgRef.current?.querySelector(`#h-${i}`);
          if (hiddenEl) (hiddenEl as SVGElement).setAttribute('fill', activationColor);
        }, currentTime);
        currentTime += delays.hiddenNeuron;
      }

      // Activate connections from layer 2 to layer 3
      setTimeout(() => {
        for (let i = 0; i < 3; i++) {
          const connEl = svgRef.current?.querySelector(`#c2-${i}-0`);
          if (connEl) {
            (connEl as SVGElement).setAttribute('stroke', activationColor);
            (connEl as SVGElement).style.opacity = '1';
          }
        }
      }, currentTime);
      currentTime += delays.layer2ToLayer3;

      // Activate output neuron
      setTimeout(() => {
        const outputNeuron = svgRef.current?.querySelector('#o-0');
        if (outputNeuron) (outputNeuron as SVGElement).setAttribute('fill', activationColor);
      }, currentTime);
      currentTime += delays.outputNeuron;

      // Show output text
      setTimeout(() => {
        const outputEl = svgRef.current?.querySelector('#output');
        if (outputEl) (outputEl as SVGElement).style.opacity = '1';
      }, currentTime);
      currentTime += delays.outputText + delays.pause;

      // Reset everything for next loop
      setTimeout(() => {
        // Reset neurons
        for (let i = 0; i < 4; i++) {
          const neuronEl = svgRef.current?.querySelector(`#n-${i}`);
          if (neuronEl) (neuronEl as SVGElement).setAttribute('fill', neuronColor);
        }
        for (let i = 0; i < 3; i++) {
          const hiddenEl = svgRef.current?.querySelector(`#h-${i}`);
          if (hiddenEl) (hiddenEl as SVGElement).setAttribute('fill', neuronColor);
        }
        const outputNeuron = svgRef.current?.querySelector('#o-0');
        if (outputNeuron) (outputNeuron as SVGElement).setAttribute('fill', neuronColor);

        // Reset connections
        svgRef.current?.querySelectorAll('.connection').forEach(conn => {
          (conn as SVGElement).setAttribute('stroke', connectionColor);
          (conn as SVGElement).style.opacity = '0.3';
        });

        // Reset text
        svgRef.current?.querySelectorAll('.input-text, .output-text').forEach(text => {
          (text as SVGElement).style.opacity = '0';
        });
      }, currentTime);
      currentTime += delays.reset;

      // Schedule next animation loop
      animationRef.current = window.setTimeout(animate, currentTime);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [activationColor, neuronColor, connectionColor, animationSpeed]);

  // Network structure configuration
  const layers = {
    input: { neurons: 4, x: 90 },
    hidden: { neurons: 3, x: 340 },
    output: { neurons: 1, x: 540 }
  };

  const neuronRadius = 25;
  const svgHeight = 520;
  const svgWidth = 680;

  // Calculate neuron positions
  const getYPosition = (layerSize: number, index: number): number => {
    const spacing = (svgHeight - 120) / (layerSize + 1);
    return 120 + spacing * (index + 1);
  };

  const inputPositions = Array.from({ length: layers.input.neurons }, (_, i) => ({
    x: layers.input.x,
    y: getYPosition(layers.input.neurons, i)
  }));

  const hiddenPositions = Array.from({ length: layers.hidden.neurons }, (_, i) => ({
    x: layers.hidden.x,
    y: getYPosition(layers.hidden.neurons, i)
  }));

  const outputPositions = Array.from({ length: layers.output.neurons }, (_, i) => ({
    x: layers.output.x,
    y: getYPosition(layers.output.neurons, i)
  }));

  return (
    <div style={{ width: '100%', backgroundColor }}>
      <svg
        ref={svgRef}
        width="100%"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Neural Network Animation</title>
        <desc>Three-layer neural network processing input to output</desc>

        <style>
          {`
            .neuron {
              stroke: ${connectionColor};
              stroke-width: 2;
              transition: fill 0.3s ease;
            }
            .connection {
              fill: none;
              opacity: 0.3;
              transition: stroke 0.3s ease, opacity 0.3s ease;
            }
            .input-text {
              font-family: system-ui, -apple-system, sans-serif;
              font-size: 13px;
              fill: ${connectionColor};
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .output-text {
              font-family: system-ui, -apple-system, sans-serif;
              font-size: 18px;
              font-weight: 500;
              fill: ${connectionColor};
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            .layer-label {
              font-family: system-ui, -apple-system, sans-serif;
              font-size: 12px;
              fill: #666;
              text-anchor: middle;
            }
          `}
        </style>

        {/* Layer 1 to Layer 2 connections */}
        <g id="connections-1-2">
          {inputPositions.map((inputPos, i) =>
            hiddenPositions.map((hiddenPos, j) => (
              <line
                key={`c-${i}-${j}`}
                id={`c-${i}-${j}`}
                x1={inputPos.x + neuronRadius}
                y1={inputPos.y}
                x2={hiddenPos.x - neuronRadius}
                y2={hiddenPos.y}
                className="connection"
                stroke={connectionColor}
              />
            ))
          )}
        </g>

        {/* Layer 2 to Layer 3 connections */}
        <g id="connections-2-3">
          {hiddenPositions.map((hiddenPos, i) =>
            outputPositions.map((outputPos, j) => (
              <line
                key={`c2-${i}-${j}`}
                id={`c2-${i}-${j}`}
                x1={hiddenPos.x + neuronRadius}
                y1={hiddenPos.y}
                x2={outputPos.x - neuronRadius}
                y2={outputPos.y}
                className="connection"
                stroke={connectionColor}
              />
            ))
          )}
        </g>

        {/* Layer 1: Input Layer neurons */}
        <g id="layer-1">
          {inputPositions.map((pos, i) => (
            <circle
              key={`n-${i}`}
              id={`n-${i}`}
              cx={pos.x}
              cy={pos.y}
              r={neuronRadius}
              className="neuron"
              fill={neuronColor}
            />
          ))}
        </g>

        {/* Layer 2: Hidden Layer neurons */}
        <g id="layer-2">
          {hiddenPositions.map((pos, i) => (
            <circle
              key={`h-${i}`}
              id={`h-${i}`}
              cx={pos.x}
              cy={pos.y}
              r={neuronRadius}
              className="neuron"
              fill={neuronColor}
            />
          ))}
        </g>

        {/* Layer 3: Output Layer neuron */}
        <g id="layer-3">
          {outputPositions.map((pos, i) => (
            <circle
              key={`o-${i}`}
              id={`o-${i}`}
              cx={pos.x}
              cy={pos.y}
              r={neuronRadius}
              className="neuron"
              fill={neuronColor}
            />
          ))}
        </g>

        {/* Input text labels */}
        {inputPositions.map((pos, i) => (
          <text
            key={`input-${i}`}
            id={`input-${i}`}
            x={pos.x - neuronRadius - 15}
            y={pos.y + 5}
            className="input-text"
            textAnchor="end"
          >
            {inputText[i]}
          </text>
        ))}

        {/* Output text */}
        <text
          id="output"
          x={outputPositions[0].x + neuronRadius + 15}
          y={outputPositions[0].y + 5}
          className="output-text"
          textAnchor="start"
        >
          {outputText}
        </text>

        {/* Layer labels */}
        <text x={layers.input.x} y={svgHeight - 40} className="layer-label">
          Input Layer
        </text>
        <text x={layers.hidden.x} y={svgHeight - 40} className="layer-label">
          Hidden Layer
        </text>
        <text x={layers.output.x} y={svgHeight - 40} className="layer-label">
          Output Layer
        </text>
      </svg>
    </div>
  );
};

export default NeuralNetworkAnimation;
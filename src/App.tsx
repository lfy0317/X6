import React, { useEffect, useRef } from "react";
import { Graph } from "@antv/x6";
import { ReactShape, register } from "@antv/x6-react-shape";
// import "./styles.css";
import { Progress } from "antd";

const NodeComponent = () => {
  return (
    <div className="react-node">
      <Progress type="circle" percent={30} width={80} />
    </div>
  );
};

register({
  shape: "custom-react-node",
  width: 100,
  height: 100,
  component: NodeComponent
});

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current!,
      width: 800,
      height: 800,
      background: {
        color: "#F2F7FA"
      },
      grid: true
    });
    const data = {
      nodes: [
        {
          id: "node1",
          shape: "custom-react-node",
          x: 40,
          y: 40,
          label: "hello"
        },
        {
          id: "node2",
          shape: "custom-react-node",
          x: 160,
          y: 180,
          label: "world"
        }
      ],
      edges: [
        {
          shape: "edge",
          source: "node1",
          target: "node2",
          label: "x6",
          attrs: {
            line: {
              stroke: "#8f8f8f",
              strokeWidth: 1
            }
          }
        }
      ]
    };
    graph.fromJSON(data);
  }, []);

  return (
    <div className="app">
      <div className="toolbar">基于这个模板复现自己的问题</div>
      <div className="graph" ref={containerRef}></div>
    </div>
  );
};

export default App;

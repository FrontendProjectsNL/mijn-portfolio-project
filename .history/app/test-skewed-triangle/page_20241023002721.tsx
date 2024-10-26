import '../test-skewed-triangle/skewed-triangle.css';

interface SkewedTriangleProps {}

const SkewedTriangle: React.FC<SkewedTriangleProps> = () => {
  return (
    <div>
      <div className="edge--triangle bg-berry">
        <h1>Inverted Triangle Background</h1>
      </div>

      <div className="block bg-blue">
        <h1>Other Section</h1>
      </div>

      <div className="block bg-orange">
        <h1>Another Section</h1>
      </div>
    </div>
  );
};

export default SkewedTriangle;

import '../test-skewed-triangle/skewed-triangle.css';

interface SkewedTriangleProps {}

const SkewedTriangle: React.FC<SkewedTriangleProps> = () => {
  return (
    <div>
      <div className="block bg-berry edge--triangle">
        <h1>Triangle Section</h1>
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

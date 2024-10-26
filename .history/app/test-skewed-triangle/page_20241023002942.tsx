import '../test-skewed-triangle/skewed-triangle.css';

interface SkewedTriangleProps {}

const SkewedTriangle: React.FC<SkewedTriangleProps> = () => {
  return (
    <div>
      <div className="block bg-berry edge--triangle">
        <h1>Triangle Skewed Edge</h1>
      </div>

      <div className="block bg-blue edge edge--bottom-reverse">
        <h1>Bottom Angled Edge</h1>
        <p>Reversed</p>
      </div>

      <div className="block bg-berry edge edge--top">
        <h1>Top Angled Edge</h1>
      </div>

      <div className="block bg-blue edge edge--top-reverse">
        <h1>Top Angled Edge</h1>
        <p>Reversed</p>
      </div>

      <div className="block bg-orange edge edge--both">
        <h1>Top & Bottom Angled Edges</h1>
      </div>

      <div className="block bg-green edge edge--both-reverse">
        <h1>Top & Bottom Angled Edges</h1>
        <p>Reversed</p>
      </div>
    </div>
  );
};

export default SkewedTriangle;

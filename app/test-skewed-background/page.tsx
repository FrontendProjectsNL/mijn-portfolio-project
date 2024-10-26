import '../test-skewed-background/skewed-background.css';

interface SkewedBackgroundProps {}

const SkewedBackground: React.FC<SkewedBackgroundProps> = () => {
  return (
    <div>
      <div className="test-block bg-berry edge edge--bottom">
        <h1>edge--bottom</h1>
      </div>

      <div className="test-block bg-white  edge edge--bottom-reverse">
        <h1 className="text-gray-500">edge--bottom-reverse</h1>
        <p className="text-gray-500">Reversed</p>
      </div>

      <div className="test-block bg-berry edge edge--top">
        <h1>edge--top</h1>
      </div>

      <div className="test-block bg-blue edge edge--top-reverse">
        <h1>edge--top-reverse</h1>
        <p>Reversed</p>
      </div>

      <div className="test-block bg-orange edge edge--both">
        <h1>edge--both</h1>
      </div>

      <div className="test-block bg-green edge edge--both-reverse">
        <h1>edge--both-reverse</h1>
        <p>Reversed</p>
      </div>
    </div>
  );
};

export default SkewedBackground;

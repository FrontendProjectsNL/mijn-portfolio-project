import '../test-skewed-background/skewed-background.css';

interface SkewedBackgroundProps {}

const SkewedBackground: React.FC<SkewedBackgroundProps> = () => {
  return (
    <div>
      <div className="block bg-berry edge edge--bottom">
        <h1>edge--bottom</h1>
      </div>

      <div className="block bg-blue edge edge--bottom-reverse">
        <h1>edge--bottom-reverse</h1>
        <p>Reversed</p>
      </div>

      <div className="block bg-berry edge edge--top">
        <h1>edge--top</h1>
      </div>

      <div className="block bg-blue edge edge--top-reverse">
        <h1>edge--top-reverse</h1>
        <p>Reversed</p>
      </div>

      <div className="block bg-orange edge edge--both">
        <h1>edge--both</h1>
      </div>

      <div className="block bg-green edge edge--both-reverse">
        <h1>edge--both-reverse</h1>
        <p>Reversed</p>
      </div>
    </div>
  );
};

export default SkewedBackground;

// pages/skewed-sections.js
import './skewed-sections.module.css';
export default function SkewedSections() {
  return (
    <div className="space-y-20">
      <Section
        bgColor="bg-blue-500"
        title="Section 1"
        content="This is the content for section 1."
      />
      <Section
        bgColor="bg-red-500"
        title="Section 2"
        content="This is the content for section 2."
      />
      <Section
        bgColor="bg-green-500"
        title="Section 3"
        content="This is the content for section 3."
      />
      <Section
        bgColor="bg-yellow-500"
        title="Section 4"
        content="This is the content for section 4."
      />
      <Section
        bgColor="bg-purple-500"
        title="Section 5"
        content="This is the content for section 5."
      />
    </div>
  );
}

function Section({ bgColor, title, content }) {
  return (
    <div className={`relative ${bgColor} text-white py-20`}>
      {/* Skewed background */}
      <div
        className="absolute inset-0 transform -skew-y-6"
        style={{
          backgroundColor: 'inherit',
          zIndex: -1,
        }}
      />
      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="mt-4 text-lg">{content}</p>
      </div>
    </div>
  );
}

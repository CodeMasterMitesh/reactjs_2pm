// A React fragment is a built-in component that lets you group a list of multiple child elements in a component's render method without adding an extra, unnecessary wrapper div (or other) node to the Document Object Model (DOM). This helps keep the DOM structure cleaner and more semantic. 
// Purpose and Benefits
// Cleaner DOM structure: Fragments help avoid "DOM clutter" caused by unnecessary wrapper elements, resulting in a more streamlined and semantic HTML output.
// Improved performance: A reduced number of nodes in the DOM tree can lead to faster rendering and less memory usage.
// Valid HTML: In some cases (e.g., working with <table>, <ul>, or <ol> elements), an extra div wrapper would result in invalid HTML. Fragments allow you to maintain the correct parent-child relationships.
// Avoids CSS interference: Unwanted wrapper elements can sometimes interfere with CSS layouts, especially with technologies like Flexbox or CSS Grid.
// Enhanced readability: They allow for logical grouping of elements, making the code cleaner and easier to understand

const FragmentExample = () => {
  return (
        <h1>This is a Fragment example</h1>
  )
};

export default FragmentExample;
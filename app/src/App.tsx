import React from 'react';
// Import normalize.css and concrete.css
import 'normalize.css';
import 'concrete.css';

function App() {
  return (
    <main>
      <header>
        <h1>Welcome to My React App</h1>
      </header>
      
      <section>
        <p>This is a simple example to demonstrate using <strong>concrete.css</strong> with React and TypeScript.</p>
        <p>Concrete.css makes it easy to style HTML elements without needing to write custom CSS classes. Here are a few examples:</p>

        <h2>Typography</h2>
        <p>I can simply be a paragraph.</p>
        <p>I can be <a href="#">a link</a>.</p>
        <p>I can be <strong>bold</strong>.</p>
        <p>I can be <em>emphasised</em>.</p>
        
        <h2>Lists</h2>
        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
        </ul>
        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
        </ol>
        
        <h2>Buttons</h2>
        <button>Just a button</button>
        <button disabled>A disabled button</button>
        
        <h2>Forms</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"/>
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"/>
          
          <input type="submit" value="Submit"/>
        </form>
      </section>
      
      <footer>
        <p>Thank you for visiting!</p>
      </footer>
    </main>
  );
}

export default App;

import { useState } from 'react';
import { ArrowLeft, HelpCircle, X, CheckCircle2 } from 'lucide-react';

interface LessonDetailProps {
  lessonId: string;
  title: string;
  description: string;
  onBack: () => void;
}

interface Lesson {
  id: string;
  title: string;
  description: string;
  explanation: string;
  example: string;
  practiceTask: string;
}

const lessonContent: Record<string, Lesson> = {
  '1': {
    id: '1',
    title: 'Learn HTML structure and tags',
    description: 'Understand the fundamental building blocks of web pages.',
    explanation: 'HTML (HyperText Markup Language) is the foundation of web pages. It uses tags like <div>, <p>, and <h1> to structure content. Tags are written in angle brackets and usually come in pairs: an opening tag and a closing tag.',
    example: 'Example: <p>Hello World</p> creates a paragraph. The <p> is the opening tag, and </p> is the closing tag.',
    practiceTask: 'Create a simple page with a heading <h1>My First Page</h1> and a paragraph <p>Welcome to web development</p>',
  },
  '2': {
    id: '2',
    title: 'Style with CSS fundamentals',
    description: 'Learn how to add colors, fonts, and layouts to your HTML.',
    explanation: 'CSS (Cascading Style Sheets) lets you style HTML elements. You can change colors, sizes, fonts, and spacing. CSS uses selectors to target elements and properties to change how they look.',
    example: 'Example: p { color: blue; } makes all paragraphs blue. The selector is "p", and the property is "color".',
    practiceTask: 'Style your heading with a different color and increase the font size using: h1 { color: green; font-size: 32px; }',
  },
  '3': {
    id: '3',
    title: 'Build your first webpage',
    description: 'Combine HTML and CSS to create a complete webpage.',
    explanation: 'A webpage combines HTML for structure and CSS for styling. You write HTML in an HTML file and CSS in a CSS file (or inside a <style> tag), then link them together.',
    example: 'Example: Link CSS to HTML with <link rel="stylesheet" href="style.css"> in the <head> section.',
    practiceTask: 'Create an index.html with a heading and paragraph, then create a style.css file to style them with your favorite colors.',
  },
  '4': {
    id: '4',
    title: 'Variables and data types',
    description: 'Learn how to store and use information in JavaScript.',
    explanation: 'Variables are containers that store data. JavaScript has different data types: numbers (123), strings ("hello"), and booleans (true/false). Use "let" or "const" to create variables.',
    example: 'Example: let name = "Alice"; creates a variable called name with the value "Alice".',
    practiceTask: 'Create a variable for your name, age, and favorite color. Log them to the console using console.log().',
  },
  '5': {
    id: '5',
    title: 'Functions and control flow',
    description: 'Write reusable code and make decisions with if statements.',
    explanation: 'Functions are reusable blocks of code. Control flow uses if statements to make decisions. If a condition is true, one block runs; if false, another runs.',
    example: 'Example: function greet(name) { if (name) { console.log("Hello " + name); } } checks if name exists before greeting.',
    practiceTask: 'Write a function that takes a number and checks if it\'s positive, negative, or zero.',
  },
  '6': {
    id: '6',
    title: 'DOM manipulation basics',
    description: 'Learn how to change HTML and CSS with JavaScript.',
    explanation: 'The DOM (Document Object Model) represents your HTML page. JavaScript can change it by selecting elements and modifying their content, style, or structure.',
    example: 'Example: document.getElementById("myId").innerHTML = "New content"; changes the content of an element.',
    practiceTask: 'Create a button in HTML. Use JavaScript to change the button\'s text when clicked using onclick.',
  },
  '7': {
    id: '7',
    title: 'Plan your interactive app',
    description: 'Design the structure and features of your project.',
    explanation: 'Before coding, plan your app. Decide what it will do, what buttons and pages it needs, and how they connect. Sketching on paper helps!',
    example: 'Example: A todo app needs a button to add tasks, a list to show them, and buttons to delete tasks.',
    practiceTask: 'Draw a simple sketch of your app. List 3-5 main features it should have.',
  },
  '8': {
    id: '8',
    title: 'Implement core features',
    description: 'Build the main functionality of your project.',
    explanation: 'Start with the most important features. Build them step by step: first create the HTML, then style it with CSS, then add interactivity with JavaScript.',
    example: 'Example: For a calculator, first build buttons 0-9, then add the display, then write the math logic.',
    practiceTask: 'Build one core feature of your app (like the ability to add an item to a list).',
  },
  '9': {
    id: '9',
    title: 'Deploy and share',
    description: 'Put your project on the internet so others can use it.',
    explanation: 'Deployment means uploading your code to a server. Services like GitHub Pages or Netlify let you share your project for free. Push your code, and your site goes live.',
    example: 'Example: Push to GitHub, enable GitHub Pages, and your site is accessible at username.github.io/project-name',
    practiceTask: 'Deploy your project on a free platform and share the link with a friend.',
  },
};

export function LessonDetail({ lessonId, title, onBack }: LessonDetailProps) {
  const [showHelp, setShowHelp] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const lesson = lessonContent[lessonId] || lessonContent['1'];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-3 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>
          <h1 className="text-2xl font-bold text-slate-900">{lesson.title}</h1>
          <p className="text-slate-600 mt-1">{lesson.description}</p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm mb-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Learn</h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            {lesson.explanation}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-slate-700">
              <span className="font-semibold text-blue-900">Example:</span> {lesson.example}
            </p>
          </div>

          <button
            onClick={() => setShowHelp(!showHelp)}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 border-2 border-orange-300 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors font-medium"
          >
            <HelpCircle className="w-5 h-5" />
            I don't understand
          </button>
        </div>

        {showHelp && (
          <div className="fixed inset-0 bg-black/50 flex items-end z-50 sm:items-center">
            <div className="bg-white w-full sm:max-w-md rounded-t-2xl sm:rounded-xl p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-slate-900">Let's clarify</h3>
                <button
                  onClick={() => setShowHelp(false)}
                  className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Simple Explanation</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {lesson.explanation}
                  </p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Real-Life Example</h4>
                  <p className="text-slate-700 text-sm">
                    {lesson.example}
                  </p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Try This</h4>
                  <p className="text-slate-700 text-sm mb-4">
                    {lesson.practiceTask}
                  </p>
                  {!taskCompleted ? (
                    <button
                      onClick={() => setTaskCompleted(true)}
                      className="w-full py-2 px-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-sm font-medium"
                    >
                      Mark task complete
                    </button>
                  ) : (
                    <div className="flex items-center gap-2 text-purple-700 font-medium text-sm">
                      <CheckCircle2 className="w-5 h-5" />
                      Great job!
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setShowHelp(false)}
                  className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium"
                >
                  Got it, thanks!
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Practice Task</h2>
          <div className="bg-slate-50 rounded-lg p-4 mb-4">
            <p className="text-slate-700">{lesson.practiceTask}</p>
          </div>
          <button
            onClick={() => setTaskCompleted(!taskCompleted)}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              taskCompleted
                ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                : 'bg-emerald-500 text-white hover:bg-emerald-600'
            }`}
          >
            {taskCompleted ? (
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Task completed
              </div>
            ) : (
              'Mark complete'
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

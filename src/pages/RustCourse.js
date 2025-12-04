import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, ChevronRight } from 'lucide-react';
import SidebarItem from '../components/SidebarItem';
import { Link } from 'react-router-dom';

const RustCourse = () => {
    const [activeSection, setActiveSection] = useState(0);

     // Scroll to top when section changes
    useEffect(() => {
        const contentContainer = document.getElementById('rust-content');
        if (contentContainer) contentContainer.scrollTop = 0;
    }, [activeSection]);

    const sections = [
        {
            id: 'setup',
            title: '1. Setup & Tools',
            content: (
                <div className="space-y-8">
                    <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">1. Setup & Tools</h1>
                        <p className="text-xl text-gray-600">Getting started with Rust toolchain and Cargo.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Rustup</h3>
                        <p className="text-gray-700 mb-4">Rustup installs and manages Rust toolchains.</p>
                        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto shadow-lg text-gray-100 font-mono text-sm">
                            <p><span className="text-purple-400">rustup update</span> : Update all toolchains</p>
                            <p><span className="text-purple-400">rustup component add [name]</span> : Add a component</p>
                            <p><span className="text-purple-400">rustup target list</span> : List compilation targets</p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cargo</h3>
                        <p className="text-gray-700 mb-4">Cargo is the build system and package manager.</p>
                        <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto shadow-lg text-gray-100 font-mono text-sm">
                             <p><span className="text-purple-400">cargo init</span> : Create new binary project</p>
                             <p><span className="text-purple-400">cargo build</span> : Build in debug mode</p>
                             <p><span className="text-purple-400">cargo build --release</span> : Build in release mode</p>
                             <p><span className="text-purple-400">cargo run</span> : Run the project</p>
                             <p><span className="text-purple-400">cargo check</span> : Check for errors</p>
                             <p><span className="text-purple-400">cargo test</span> : Run tests</p>
                             <p><span className="text-purple-400">cargo doc</span> : Generate documentation</p>
                             <p><span className="text-purple-400">cargo clippy</span> : Run linter</p>
                        </div>
                    </section>
                </div>
            )
        },
        {
            id: 'basics',
            title: '2. Basics & Types',
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">2. Basics & Types</h1>
                        <p className="text-xl text-gray-600">Variables, Constants, and Primitive Data Types.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Variables</h3>
                        <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg">
<pre>{`// Immutable by default
let foo = 1;

// Mutable variable
let mut bar = 1;
bar = 2;

// Type annotation
let foo: i32 = 50;

// Constants (Must have type)
const MAX_POINTS: u32 = 100_000;`}</pre>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Primitive Data Types</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                            <li><strong>Signed Integers:</strong> i8, i16, i32 (default), i64, i128, isize (pointer size)</li>
                            <li><strong>Unsigned Integers:</strong> u8, u16, u32, u64, u128, usize</li>
                            <li><strong>Floats:</strong> f32, f64 (default)</li>
                            <li><strong>Boolean:</strong> bool (true/false)</li>
                            <li><strong>Characters:</strong> char (Unicode scalar value, single quotes 'a')</li>
                            <li><strong>String:</strong> UTF-8 encoded string.</li>
                            <li><strong>Arrays:</strong> Fixed size [T; N]. e.g., [1, 2, 3]</li>
                            <li><strong>Tuples:</strong> Fixed size ordered list of elements of different types. (1, "hello")</li>
                            <li><strong>Slices:</strong> Dynamically-sized view into a contiguous sequence. &[T]</li>
                        </ul>
                    </section>
                </div>
            )
        },
        {
            id: 'functions',
            title: '3. Functions & Closures',
            content: (
                 <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">3. Functions & Closures</h1>
                        <p className="text-xl text-gray-600">Defining logic blocks and anonymous functions.</p>
                    </header>
                     <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Functions</h3>
                        <p className="text-gray-700 mb-4">Requires type annotations for inputs and outputs. Last expression is return value.</p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg">
<pre>{`fn sum(a: i32, b: i32) -> i32 {
    a + b // No semicolon = return
}

pub fn public_fn() {} // Public function`}</pre>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Closures</h3>
                        <p className="text-gray-700 mb-4">Anonymous functions that can capture their environment.</p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg">
<pre>{`let hello = || println!("hi");
let sum = |a, b| a + b;

// Move semantics
let x = 1;
let closure = move || println!("{}", x);`}</pre>
                        </div>
                     </section>
                 </div>
            )
        },
        {
            id: 'controlflow',
            title: '4. Control Flow',
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">4. Control Flow</h1>
                        <p className="text-xl text-gray-600">Conditionals, Loops, and Matching.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">If / Else</h3>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-8">
<pre>{`if number < 5 {
    // true block
} else if number > 10 {
    // else if block
} else {
    // else block
}

// If as an expression
let x = if condition { 5 } else { 6 };`}</pre>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Loops</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                            <li><strong>loop:</strong> Infinite loop.</li>
                            <li><strong>while:</strong> Loop while condition is true.</li>
                            <li><strong>while let:</strong> Loop while pattern matches.</li>
                            <li><strong>for:</strong> Iterate over collection. <code>for x in iter</code></li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Match</h3>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg">
<pre>{`match number {
    0 => println!("Zero"),
    1 | 2 => println!("One or Two"),
    3..=9 => println!("Range"),
    n if n > 10 => println!("Guard"),
    _ => println!("Default"),
}`}</pre>
                        </div>
                    </section>
                </div>
            )
        },
        {
            id: 'structs_enums',
            title: '5. Structs & Enums',
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">5. Structs & Enums</h1>
                        <p className="text-xl text-gray-600">Data structures and Types.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Structs</h3>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-8">
<pre>{`struct User {
    username: String,
    active: bool,
}

// Tuple Struct
struct Color(i32, i32, i32);

// Unit Struct
struct AlwaysEqual;

// Impl blocks for methods
impl User {
    fn new(name: String) -> Self { ... }
    fn is_active(&self) -> bool { ... }
}`}</pre>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Enums</h3>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg">
<pre>{`enum IpAddr {
    V4(String),
    V6(String),
}

enum Message {
    Quit,
    Move { x: i32, y: i32 },
    Write(String),
}`}</pre>
                        </div>
                    </section>
                </div>
            )
        },
         {
            id: 'ownership',
            title: '6. Ownership & Lifetimes',
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">6. Ownership & Lifetimes</h1>
                        <p className="text-xl text-gray-600">Core memory safety concepts.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ownership</h3>
                         <p className="text-gray-700 mb-4">Enables memory safety without garbage collection.</p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-8">
<pre>{`let s1 = String::from("hello");
let s2 = s1; // s1 is moved to s2, s1 invalid

fn take_ownership(s: String) { ... } // s moved into fn`}</pre>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Borrowing</h3>
                        <p className="text-gray-700 mb-4">References allow access without taking ownership.</p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-8">
<pre>{`let s1 = String::from("hello");
let len = calculate_length(&s1); // Immutable borrow

fn change(s: &mut String) { ... } // Mutable borrow`}</pre>
                        </div>
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">Lifetimes</h3>
                        <p className="text-gray-700 mb-4">Ensures references are valid.</p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg">
<pre>{`// Explicit lifetime annotation 'a
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}`}</pre>
                        </div>
                    </section>
                </div>
            )
        },
        {
            id: 'advanced',
            title: '7. Advanced Topics',
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">7. Advanced Topics</h1>
                        <p className="text-xl text-gray-600">Traits, Generics, Error Handling, Iterators, and Concurrency.</p>
                    </header>
                     <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Traits & Generics</h3>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-8">
<pre>{`// Generic Struct
struct Point<T> { x: T, y: T }

// Trait Definition
trait Summary {
    fn summarize(&self) -> String;
}

// Implementing Trait
impl Summary for NewsArticle { ... }

// Trait Bounds
fn notify<T: Summary>(item: &T) { ... }`}</pre>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Error Handling</h3>
                        <p className="text-gray-700 mb-4">Using <code>Result</code> and <code>Option</code>.</p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-8">
<pre>{`enum Option<T> { Some(T), None }
enum Result<T, E> { Ok(T), Err(E) }

// ? Operator for propagation
let f = File::open("hello.txt")?;`}</pre>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Concurrency</h3>
                        <p className="text-gray-700 mb-4">Threads, Channels, and Mutex.</p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg">
<pre>{`use std::thread;
use std::sync::{Arc, Mutex};

let counter = Arc::new(Mutex::new(0));
thread::spawn(move || {
    let mut num = counter.lock().unwrap();
    *num += 1;
});`}</pre>
                        </div>
                     </section>
                </div>
            )
        }
    ];

    const currentSection = sections[activeSection];

    return (
        <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-white">
             {/* Sidebar */}
            <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col flex-shrink-0 h-full hidden lg:flex">
                <div className="p-6 border-b border-gray-200 bg-white">
                    <Link to="/courses" className="text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center mb-4 uppercase tracking-wider">
                        <ArrowRight className="w-3 h-3 mr-1 rotate-180" /> Back to Courses
                    </Link>
                    <h3 className="font-extrabold text-gray-900 text-xl">Rust Mastery</h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {sections.map((section, idx) => (
                        <SidebarItem
                            key={section.id}
                            title={section.title}
                            active={activeSection === idx}
                            onClick={() => setActiveSection(idx)}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div id="rust-content" className="flex-1 overflow-y-auto bg-white relative scroll-smooth">
                <div className="max-w-4xl mx-auto px-8 py-16">
                    <div className="animate-fade-in">
                        {currentSection.content}
                    </div>

                    {/* Navigation Footer */}
                    <div className="mt-20 pt-8 border-t border-gray-100 flex justify-between items-center sticky bottom-0 bg-white/90 backdrop-blur-sm pb-8">
                        <button
                            disabled={activeSection === 0}
                            onClick={() => setActiveSection(prev => prev - 1)}
                            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                                activeSection === 0
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'text-purple-600 bg-purple-50 hover:bg-purple-100'
                            }`}
                        >
                            Previous
                        </button>
                        <span className="text-gray-400 text-sm font-medium">
                            {activeSection + 1} / {sections.length}
                        </span>
                        <button
                            disabled={activeSection === sections.length - 1}
                            onClick={() => setActiveSection(prev => prev + 1)}
                             className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center ${
                                activeSection === sections.length - 1
                                    ? 'text-gray-300 cursor-not-allowed'
                                    : 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200'
                            }`}
                        >
                            Next Section <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RustCourse;
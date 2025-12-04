//Rustcourse.js
import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, ChevronRight, Box, Code, Layers, Zap, Database, Lock, Cpu, Share2, BookOpen, Repeat, AlertTriangle } from 'lucide-react';
import SidebarItem from '../components/SidebarItem';
import { Link } from 'react-router-dom';

const RustCourse = () => {
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const contentContainer = document.getElementById('rust-content');
        if (contentContainer) contentContainer.scrollTop = 0;
    }, [activeSection]);

    const sections = [
        {
            id: 'setup',
            title: '1. Setup & Tools',
            icon: <Terminal className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                    <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">1. Setup & Tools</h1>
                        <p className="text-xl text-gray-600">The essential toolchain for Rust development.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Rustup</h3>
                        <p className="text-gray-700 mb-4">
                            Think of <strong>rustup</strong> as your version manager. Unlike other languages where you might download a single installer, Rust evolves quickly. Rustup allows you to switch between stable, beta, and nightly compiler channels instantly. It also handles targets, which let you compile code for different platforms right from your current machine.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-4 text-gray-100 font-mono text-sm border-l-4 border-purple-500 mb-2">
                            <p>rustup update</p>
                            <p>rustup target list</p>
                            <p>rustup component add clippy</p>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            Running update keeps your toolchain fresh. We also install clippy here, which is an advanced linter that acts like a strict teacher—it doesn't just find errors, it suggests idiomatic improvements to make your Rust code better.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cargo</h3>
                        <p className="text-gray-700 mb-4">
                            <strong>Cargo</strong> is the heart of the Rust ecosystem. It replaces build scripts, package managers, and test runners found in other languages. It manages dependencies (called crates), compiles your project, runs unit tests, and even generates documentation.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-4 text-gray-100 font-mono text-sm border-l-4 border-purple-500 mb-2">
                             <p>cargo init</p>
                             <p>cargo check</p>
                             <p>cargo build --release</p>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            Pro-tip: Use cargo check constantly while you code. It verifies your syntax without doing the heavy lifting of generating machine code, so it is much faster than running a full build. When you are ready to deploy, --release turns on heavy optimizations that make your program run lightning fast.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Documentation Comments</h3>
                        <p className="text-gray-700 mb-4">
                            Rust treats documentation as a first-class citizen. By using triple slashes, you can write Markdown directly above your functions. Cargo can then automatically scrape these comments to build a professional HTML website for your project.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-4 text-gray-100 font-mono text-sm border-l-4 border-purple-500 mb-2">
<pre>{`/// This function adds two numbers.
/// # Examples
/// \`\`\`
/// let result = add(2, 3);
/// \`\`\`
fn add(a: i32, b: i32) -> i32 { ... }`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            The best part? The code snippets you write inside the examples section are actually compiled and tested when you run cargo test. This guarantees that your documentation never becomes outdated or incorrect.
                        </p>
                    </section>
                </div>
            )
        },
        {
            id: 'operators',
            title: '2. Operators',
            icon: <Code className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">2. Operators</h1>
                        <p className="text-xl text-gray-600">Standard symbols for logic and math.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <p className="text-gray-700 mb-6">
                            Rust provides the standard set of operators you would expect from languages like C or Java. However, Rust is strict about types—you generally cannot add an integer to a float without explicitly converting one of them first. This prevents hidden precision errors.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-xl border shadow-sm">
                                <h4 className="font-bold text-purple-700 mb-2">Mathematical</h4>
                                <code className="text-sm bg-gray-100 p-1 rounded">+ - * / %</code>
                                <p className="text-gray-600 text-sm mt-2">
                                    Standard arithmetic. Note that % is the remainder operator. Integer division (e.g., 5 / 2) will truncate toward zero, resulting in 2, not 2.5.
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border shadow-sm">
                                <h4 className="font-bold text-purple-700 mb-2">Comparison</h4>
                                <code className="text-sm bg-gray-100 p-1 rounded">== != &lt; &gt; &lt;= &gt;=</code>
                                <p className="text-gray-600 text-sm mt-2">
                                    These operators return a bool (true/false). Rust prevents you from comparing mismatched types (like comparing a string to an integer) to avoid logical bugs.
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border shadow-sm">
                                <h4 className="font-bold text-purple-700 mb-2">Logical</h4>
                                <code className="text-sm bg-gray-100 p-1 rounded">&& || !</code>
                                <p className="text-gray-600 text-sm mt-2">
                                    Used for boolean logic. Rust uses "short-circuit" evaluation: if the left side of an AND is false, the right side is never executed.
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-xl border shadow-sm">
                                <h4 className="font-bold text-purple-700 mb-2">Bitwise</h4>
                                <code className="text-sm bg-gray-100 p-1 rounded">& | ^ &lt;&lt; &gt;&gt;</code>
                                <p className="text-gray-600 text-sm mt-2">
                                    These operate at the binary level. They are often used in systems programming, embedded devices, or working with network protocols.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            )
        },
        {
            id: 'primitives',
            title: '3. Primitive Data Types',
            icon: <Database className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">3. Primitive Data Types</h1>
                        <p className="text-xl text-gray-600">Basic building blocks of data.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Integers</h3>
                        <p className="text-gray-700 mb-2">
                            Rust forces you to be explicit about the size of your numbers to ensure memory safety and performance.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 bg-gray-50 p-4 rounded-lg">
                            <li><strong>Signed (i):</strong> i8, i16, i32 (default), i64, i128, isize.</li>
                            <li><strong>Unsigned (u):</strong> u8, u16, u32, u64, u128, usize.</li>
                        </ul>
                        <p className="text-gray-600 text-sm mt-2 italic">
                            The number (e.g., 8, 32) refers to the number of bits. i32 is generally the fastest on modern CPUs. The isize and usize types depend on your computer's architecture (64-bit vs 32-bit) and are used primarily for indexing into collections.
                        </p>
                        
                        
                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Floating Point</h3>
                        <p className="text-gray-700 mb-2">
                            When you need decimals, you use floats. They adhere to the IEEE-754 standard.
                        </p>
                        <div className="bg-white border border-gray-200 p-4 rounded-lg">
                            <p><code>f32</code> (Single precision) - Useful for graphics/games where speed matters more than perfect precision.</p>
                            <p><code>f64</code> (Double precision) - The default. Safer for math as it holds more decimal places.</p>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Strings & Characters</h3>
                        <p className="text-gray-700 mb-2">
                            Rust is very strict about text to handle international languages (Unicode) correctly from the start.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 bg-gray-50 p-4 rounded-lg space-y-2">
                            <li><strong>char:</strong> Not just 1 byte! It is 4 bytes and represents a "Unicode Scalar Value", meaning it can hold emojis, kanji, or accented letters.</li>
                            <li><strong>String:</strong> This is a "smart" string. It lives on the heap, is growable (you can push more text into it), and you own it.</li>
                            <li><strong>&str:</strong> This is a "String Slice". It is a view into a string (borrowed). It's fast and cheap because it doesn't copy data, it just points to existing text.</li>
                        </ul>
                    </section>
                </div>
            )
        },
        {
            id: 'declarations',
            title: '4. Declarations',
            icon: <Code className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">4. Declarations</h1>
                        <p className="text-xl text-gray-600">Variables, Constants, and Types.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Variables & Mutability</h3>
                        <p className="text-gray-700 mb-4">
                            By default, variables in Rust are immutable. This is a deliberate design choice to enable concurrency safety—if data can't change, threads can't fight over it.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`let x = 1;
// x = 2; // Error! The compiler prevents accidental changes.

let mut y = 2;
y = 3; // The 'mut' keyword opts-in to change.`}</pre>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Type Annotations & Shadowing</h3>
                        <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mt-6 mb-2">
<pre>{`let z: i32 = 5;
let z = "Five"; // Shadowing`}</pre>
                        </div>
                         <p className="text-gray-600 text-sm italic">
                             Rust has "Type Inference", so it often guesses the type for you. However, you can annotate it explicitly. The example above also shows Shadowing: you can redeclare z. This lets you reuse variable names (like parsing a string into a number) without inventing names like z_str and z_int.
                         </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Constants & Aliases</h3>
                        <p className="text-gray-700 mb-4">
                            Declarations help you shape your domain logic.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Constants:</strong> <code>const MAX: u32 = 100;</code>. Unlike variables, these must have a type annotation and their value must be known before the program ever runs. They are hardcoded into the binary memory.</li>
                            <li><strong>Type Alias:</strong> <code>type Miles = u64;</code>. This doesn't create a new type, but it makes your function signatures much easier to read by giving context to generic numbers.</li>
                            <li><strong>New Types:</strong> <code>struct Miles(u64);</code>. This is the "Newtype Pattern". Unlike an alias, this creates a strictly different type. It prevents you from accidentally adding Miles to Kilometers, catching logic bugs at compile time.</li>
                        </ul>
                    </section>
                </div>
            )
        },
        {
            id: 'functions',
            title: '5. Functions & Closures',
            icon: <Layers className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">5. Functions & Closures</h1>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Functions</h3>
                        <p className="text-gray-700 mb-4">
                            Functions are the primary way code is organized. Rust requires you to be explicit about what data comes in (parameters) and what goes out (return type). This "contract" helps the compiler check your logic across the whole program.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`fn add(a: i32, b: i32) -> i32 {
    a + b
}`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            Notice the missing semicolon on the last line? In Rust, this is an Expression. It evaluates to a value and returns it. If you added a semicolon, it would become a Statement, which returns nothing, and your code would fail to compile.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Closures</h3>
                        <p className="text-gray-700 mb-4">
                            Closures are concise, anonymous functions often used for short operations like filtering lists. Unlike normal functions, they can "capture" variables from the scope they were defined in.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`let x = 1;
let capture = move || println!("{}", x);`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            The pipes syntax replaces the parentheses of a normal function. The move keyword is crucial here—it tells Rust to force the closure to take ownership of the variable x. This is essential when sending closures to other threads, so the data doesn't disappear from under them.
                        </p>
                    </section>
                </div>
            )
        },
        {
            id: 'control',
            title: '6. Control Flow',
            icon: <Share2 className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">6. Control Flow</h1>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">If / Else Expressions</h3>
                        <p className="text-gray-700 mb-4">
                            In many languages, if is just a statement. In Rust, it is an expression, meaning it returns a value. This allows you to assign the result of an if block directly to a variable, provided both branches return the same type.
                        </p>
                        <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">let x = if true &#123; 1 &#125; else &#123; 0 &#125;;</code>
                        <p className="text-gray-600 text-sm italic">This is cleaner than declaring a mutable variable and updating it inside the brackets.</p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Match</h3>
                        <p className="text-gray-700 mb-4">
                            Match is Rust's superpower. It looks like a switch statement, but it enforces exhaustiveness. You must handle every possible value, which eliminates an entire class of bugs where you forget an edge case.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`match num {
    0 => println!("Zero"),
    1 | 2 => println!("One or Two"),
    3..=9 => println!("Range"),
    val if val > 10 => println!("Guard clause"),
    _ => println!("Everything else"),
}`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            You can match specific values, ranges, or multiple options with a pipe. You can even add a "match guard" (the if condition) to add logic to your patterns.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Loops</h3>
                        <p className="text-gray-700 mb-4">
                            Rust distinguishes between finite and infinite loops explicitly.
                        </p>
                        <ul className="grid grid-cols-2 gap-4 text-sm">
                            <li className="bg-purple-50 p-3 rounded"><strong>while:</strong> Standard loop that runs as long as a condition is true.</li>
                            <li className="bg-purple-50 p-3 rounded"><strong>for:</strong> The most common loop. It is safe and fast because it iterates over collections without manual indexing, preventing out-of-bounds errors.</li>
                            <li className="bg-purple-50 p-3 rounded"><strong>loop:</strong> An unconditional infinite loop. It is useful for servers or retry logic. Uniquely, you can break with a value to return data from it!</li>
                            <li className="bg-purple-50 p-3 rounded"><strong>while let:</strong> A specialized loop that runs as long as a pattern matches (e.g., popping items from a stack until it is empty).</li>
                        </ul>
                    </section>
                </div>
            )
        },
        {
            id: 'structures',
            title: '7. Data Structures',
            icon: <Box className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">7. Data Structures</h1>
                        <p className="text-xl text-gray-600">Grouping data.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Structures</h3>
                        <p className="text-gray-700 mb-4">
                            Structs are how you create custom data types. You group related fields together to form a meaningful object.
                        </p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`struct User { name: String, active: bool }
struct Color(i32, i32, i32); // Tuple Struct

impl User {
    fn new() -> Self { ... }
}`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            Rust separates data (struct) from behavior (impl). The impl block is where you define methods (functions attached to the struct) and constructors. Tuple structs are useful when the fields don't need names, like X/Y/Z coordinates.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Enums</h3>
                        <p className="text-gray-700 mb-4">
                            Rust Enums are much more powerful than in other languages. They are "Algebraic Data Types," meaning each variant can hold different kinds of data.
                        </p>
                        <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">enum Message &#123; Quit, Write(String) &#125;</code>
                        <p className="text-gray-600 text-sm italic">
                            Here, the Quit variant has no data, but Write holds a String. This lets you model complex states (like "Loading", "Success(Data)", "Error(Message)") in a single type safe way.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Collections</h3>
                        <p className="text-gray-700 mb-4">
                            These are the standard ways to store lists of data.
                        </p>
                        <ul className="list-disc list-inside text-gray-700">
                            <li><strong>Tuples:</strong> Fixed-size groups of mixed types. Great for returning multiple values from a function.</li>
                            <li><strong>Arrays:</strong> A fixed-size list where every element is the same type. These live on the stack and are very fast.</li>
                            <li><strong>Slices:</strong> A dynamically sized view into a sequence. Slices don't own data; they just borrow a section of an array or string to read it safely.</li>
                        </ul>
                    </section>
                </div>
            )
        },
        {
            id: 'option_result',
            title: '8. Option & Result',
            icon: <AlertTriangle className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">8. Option & Result</h1>
                        <p className="text-xl text-gray-600">Handling existence and errors safely.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Option</h3>
                        <p className="text-gray-700 mb-4">
                            Tony Hoare called null references his "billion-dollar mistake." Rust solves this by not having null at all. Instead, it uses the Option enum, which can be Some(value) or None.
                        </p>
                        <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`let val = Some(5);
if let Some(x) = val {
    println!("{}", x);
}`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            This forces you to consciously handle the case where data is missing. You cannot use the value inside Some without unwrapping it first, preventing null pointer crashes.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Result</h3>
                        <p className="text-gray-700 mb-4">
                            Exceptions (try/catch) can be messy and invisible. Rust uses the Result enum for recoverable errors. It forces the caller to acknowledge that a function might fail.
                        </p>
                        <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">let file = File::open("test.txt")?;</code>
                        <p className="text-gray-600 text-sm italic">
                            The question mark operator is a powerful shorthand. It effectively says: "If this operation fails, return the error immediately. If it succeeds, give me the value and continue." It makes error handling concise without hiding it.
                        </p>
                    </section>
                </div>
            )
        },
        {
            id: 'iterators',
            title: '9. Iterators',
            icon: <Repeat className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">9. Iterators</h1>
                        <p className="text-xl text-gray-600">Processing sequences lazily.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <p className="text-gray-700 mb-4">
                            Iterators allow you to process a sequence of items with functional logic (map, filter, reduce). In Rust, iterators are "Zero Cost Abstractions". This means they compile down to the same machine code as a manually written for loop—you get high-level readability with low-level performance.
                        </p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`let v = vec![1, 2, 3];
let doubled: Vec<i32> = v.iter()
    .map(|x| x * 2)
    .collect();`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            A key concept is Laziness. Creating an iterator (like the map above) does nothing on its own. It only executes when you "consume" it using a method like collect or for_each.
                        </p>
                        
                    </section>
                </div>
            )
        },
        {
            id: 'ownership',
            title: '10. Ownership & Lifetimes',
            icon: <Lock className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">10. Ownership</h1>
                        <p className="text-xl text-gray-600">Memory safety without garbage collection.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ownership</h3>
                        <p className="text-gray-700 mb-4">
                            This is Rust's defining feature. Instead of manually freeing memory (C++) or using a heavy Garbage Collector (Java), Rust uses a strict set of rules checked at compile time.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li><strong>Single Owner:</strong> Every piece of data has exactly one variable that owns it.</li>
                            <li><strong>Drop:</strong> When that variable goes out of scope (end of block), the memory is instantly freed.</li>
                            <li><strong>Move Semantics:</strong> If you assign a variable to another, ownership transfers. The old variable becomes invalid, preventing "double free" errors.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lifetimes</h3>
                        <p className="text-gray-700 mb-4">
                            When you use references (borrowing data), the compiler needs to ensure the data won't be deleted while you are looking at it. Lifetimes are the notation used to prove this to the compiler.
                        </p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            Here, the 'a syntax tells Rust: "The returned reference will live at least as long as the inputs." This prevents Dangling Pointers, where you point to memory that has already been cleaned up.
                        </p>
                    </section>
                </div>
            )
        },
        {
            id: 'traits',
            title: '11. Traits & Generics',
            icon: <BookOpen className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">11. Traits & Generics</h1>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Traits</h3>
                        <p className="text-gray-700 mb-4">
                            Traits are like interfaces in other languages—they define shared behavior. However, they are more powerful because you can implement traits for types you didn't create (like implementing a custom Display format for an Integer).
                        </p>
                        <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">trait Notify &#123; fn alert(&self); &#125;</code>
                        <p className="text-gray-600 text-sm italic">
                            This guarantees that any type implementing Notify has an alert method, allowing for polymorphism.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Generics</h3>
                        <p className="text-gray-700 mb-4">
                            Generics allow you to write a function once and use it for many different types. Rust uses "Monomorphization", meaning the compiler generates a specific copy of the function for each concrete type used.
                        </p>
                        <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">fn process&lt;T: Summary&gt;(item: T) &#123; ... &#125;</code>
                        <p className="text-gray-600 text-sm italic">
                            This means you get the flexibility of generics with absolutely zero runtime performance cost.
                        </p>
                    </section>
                </div>
            )
        },
        {
            id: 'concurrency',
            title: '12. Concurrency',
            icon: <Zap className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">12. Concurrency</h1>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <p className="text-gray-700 mb-4">
                            Rust is famous for "Fearless Concurrency." The ownership rules you learned earlier prevent data races at compile time. If your code compiles, it is likely free of concurrency bugs.
                        </p>
                        
                        <ul className="space-y-4">
                            <li className="bg-white p-4 rounded-lg border">
                                <strong className="text-purple-700">Threads:</strong> You use thread::spawn to start a new independent OS thread. Rust ensures you don't accidentally share memory between them unsafely.
                            </li>
                            <li className="bg-white p-4 rounded-lg border">
                                <strong className="text-purple-700">Channels:</strong> Inspired by Go, these allow threads to communicate by sending messages. One thread owns the data, sends it, and loses ownership—ensuring only one thread accesses it at a time.
                            </li>
                            <li className="bg-white p-4 rounded-lg border">
                                <strong className="text-purple-700">Mutex:</strong> "Mutually Exclusive." This is a lock that ensures only one thread can access data. In Rust, the Mutex owns the data inside it, so you physically cannot touch the data without locking it first.
                            </li>
                            <li className="bg-white p-4 rounded-lg border">
                                <strong className="text-purple-700">Async:</strong> For tasks that wait around a lot (like network requests), OS threads are too heavy. Async/Await lets you run thousands of tasks on a few threads using an "Executor" (like Tokio).
                            </li>
                        </ul>
                    </section>
                </div>
            )
        },
        {
            id: 'modules',
            title: '13. Modules & Testing',
            icon: <Share2 className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">13. Modules & Testing</h1>
                    </header>
                    <section className="prose prose-purple max-w-none">
                         <h3 className="text-2xl font-bold text-gray-900 mb-4">Modules</h3>
                        <p className="text-gray-700 mb-4">
                            As your project grows, you split code into modules. By default, everything in a module is private. You must explicitly use pub to expose functions, which creates a strict public API.
                        </p>
                        <code className="block bg-gray-100 p-3 rounded-lg text-sm mb-2">mod network &#123; pub fn connect() &#123;&#125; &#125;</code>
                        <p className="text-gray-600 text-sm italic">
                            This encapsulation helps maintain large codebases by hiding internal implementation details.
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Testing</h3>
                        <p className="text-gray-700 mb-4">
                            In many languages, test files are separate. In Rust, unit tests usually live in the same file as the code they test, inside a tests module. This lets you test private functions easily.
                        </p>
                         <div className="bg-gray-900 rounded-xl p-6 text-gray-100 font-mono text-sm shadow-lg mb-2">
<pre>{`#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert!(true);
    }
}`}</pre>
                        </div>
                        <p className="text-gray-600 text-sm italic">
                            The #[cfg(test)] annotation tells the compiler to completely ignore this code when building for production, so your tests don't bloat your final app.
                        </p>
                    </section>
                </div>
            )
        },
        {
            id: 'macros',
            title: '14. Macros',
            icon: <Cpu className="w-5 h-5" />,
            content: (
                <div className="space-y-8">
                     <header className="border-b border-purple-100 pb-6">
                        <h1 className="text-4xl font-extrabold text-purple-900 mb-4">14. Macros</h1>
                        <p className="text-xl text-gray-600">Metaprogramming.</p>
                    </header>
                    <section className="prose prose-purple max-w-none">
                        <p className="text-gray-700 mb-4">
                            Macros allow you to write code that writes other code (metaprogramming). They are more powerful than C macros because they operate on the syntax tree, not just text replacement.
                        </p>
                        <ul className="list-disc list-inside text-gray-700 space-y-2">
                            <li><strong>Standard Macros:</strong> You use them daily! println! and vec! are macros because they can take a variable number of arguments, which normal Rust functions cannot do.</li>
                            <li><strong>Derive Macros:</strong> Adding #[derive(Debug)] above a struct automatically generates the code needed to print your struct. It saves you from writing boilerplate code manually.</li>
                            <li><strong>Declarative Macros:</strong> You can define your own using macro_rules!. They look like match statements but match against Rust syntax patterns to generate code blocks.</li>
                        </ul>
                    </section>
                </div>
            )
        }
    ];

    const currentSection = sections[activeSection];

    return (
        <div className="flex h-[calc(100vh-80px)] overflow-hidden bg-white">
            <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col flex-shrink-0 h-full hidden lg:flex">
                <div className="p-6 border-b border-gray-200 bg-white">
                    <Link to="/courses" className="text-xs font-bold text-purple-600 hover:text-purple-800 flex items-center mb-4 uppercase tracking-wider">
                        <ArrowRight className="w-3 h-3 mr-1 rotate-180" /> Back to Courses
                    </Link>
                    <h3 className="font-extrabold text-gray-900 text-xl flex items-center">
                        <Layers className="w-6 h-6 mr-2 text-purple-600" /> Rust Mastery
                    </h3>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    {sections.map((section, idx) => (
                        <SidebarItem
                            key={section.id}
                            title={section.title}
                            icon={section.icon}
                            active={activeSection === idx}
                            onClick={() => setActiveSection(idx)}
                        />
                    ))}
                </div>
            </div>

            <div id="rust-content" className="flex-1 overflow-y-auto bg-white relative scroll-smooth">
                <div className="max-w-4xl mx-auto px-8 py-16">
                    <div className="animate-fade-in">
                        {currentSection.content}
                    </div>

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

import React from "react";
import useTitle from "../../hooks/useTitle";


export default function Accordion() {

    useTitle('Blog');

    return (
        <div className="bg-secondary p-10 my-10 rounded-lg">
            <div className="w-full px-8 mx-auto mt-32 space-y-2 shadow my-32">
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">What are the different ways to manage a state in a React application?</summary>
                    <div className="mt-5">
                        <p className="text-sm leading-6">
                            Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.
                            <br />
                            The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage state​s in React, including the use of: <br />

                            1. Hooks <br />
                            2. React Context API <br />
                            3. Apollo Link State

                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        How does prototypical inheritance work?
                    </summary>
                    <div className="mt-5">
                        <p className="text-sm leading-6">
                            Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        What is a unit test? Why should we write unit tests?
                    </summary>
                    <div className="mt-5">
                        <p className="text-sm leading-6">
                            Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. <br />

                            Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        </p>
                    </div>
                </details>
                <details className="p-4 rounded-lg">
                    <summary className="font-semibold">
                        React vs. Angular vs. Vue?
                    </summary>
                    <div className="mt-5">
                        <p className="text-sm leading-6">
                            <strong>React:</strong> React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices.
                            <br />
                            <br />
                            <strong>Angular:</strong> Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.
                            <br />
                            <br />
                            <strong>Vue:</strong> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                            <br />
                            <br />
                            Although Angular, React and Vue have a significant learning curve, their uses upon mastery are limitless. For instance, you can integrate Angular and React with WordPress and WooCommerce to create progressive web apps.
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
}
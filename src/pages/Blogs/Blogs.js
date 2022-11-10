import React from "react";

const Blog = () => {
    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 py-5 gap-5">
            <div className="card bg-pink-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        Difference between SQL and NoSQL?
                    </h2>
                    <p>
                        SQL databases use structured query language and have a predefined
                        schema.
                    </p>
                    <p>
                        NoSQL databases have dynamic schemas for unstructured data. SQL
                        databases are vertically scalable, while NoSQL databases are
                        horizontally scalable.
                    </p>
                    <p>
                        SQL databases are relational, NoSQL databases are non-relational.
                    </p>
                </div>
            </div>
            <div className="card bg-pink-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is JWT, and how does it work?</h2>
                    <p>
                        To authenticate a user, a client application must send a JSON Web Token (JWT)
                        in the authorization header of the HTTP request to your backend API.
                        API Gateway validates the token on behalf of your API, so you don't
                        have to add any code in your API to process the authentication.
                    </p>
                </div>
            </div>
            <div className="card bg-pink-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        What is the difference between javascript and NodeJS?
                    </h2>
                    <p>
                        JavaScript is a simple programming language that can be used with
                        any browser that has the JavaScript Engine installed. Node.js, on
                        the other hand, is an interpreter or execution environment for the
                        JavaScript programming language.
                    </p>
                </div>
            </div>
            <div className="card bg-pink-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        How does NodeJS handle multiple requests at the same time?
                    </h2>
                    <p>
                        NodeJS receives multiple client requests and places them into
                        EventQueue. NodeJS is built with the concept of event-driven
                        architecture. NodeJS has its own EventLoop which is an infinite loop
                        that receives requests and processes them.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
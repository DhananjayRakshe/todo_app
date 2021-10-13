import React from 'react'

export const About = () => {
    let divStyle = {
        minHeight: "75vh",
        margin: "40px auto"
    }
    return (
        <div className="container shadow" style={divStyle}>
            <h3 className="text-center my-3 bg-dark text-light p-3">About Todo App</h3>
            <p className="p-4">To-do lists don't need to be complicated—plenty of people use a pen and paper for the job without any problem. And yet a new to-do list app seems to come out every day. Why? Because keeping track of your tasks is an intensely personal thing, and people will reject anything that doesn't feel right pretty much instantly. That makes it hard to find the right app.</p>
            <p className="p-4 pt-1 text-primary">App in progress for advanced database featured and so much...!</p>
        </div>
    )
}

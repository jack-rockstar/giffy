import React from "react";
import { Link } from "wouter";


export default function Category({name , options=[]}){
    console.log(options)
    return(
        <div>
            <h3 className="Category-title">{name}</h3>
            <ul className="category-list">
                {
                    options.map(singleOption=>(
                        <li key={singleOption}>
                           <Link className="category-list" to={`/search/${singleOption}`}>{singleOption}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
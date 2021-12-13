import React from "react";
import { Link } from "wouter";

import "./Category.css";

export default function Category({ name, options = [] }) {
    return (
        <section>
            <div className="Category">
                <h3 className="Category-title">{name}</h3>
                <ul className="Category-List">
                    {options.map((singleOption) => (
                        <li key={singleOption}><Link className="Category-link"
                            to={`/search/${singleOption}`}>{singleOption}
                        </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

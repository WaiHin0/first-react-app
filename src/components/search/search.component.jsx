import React from 'react';

export const MainSearch = (props) => {
    return(
        <div className="search-sec">
            <div className="container">
                <div className="search-box">
                    <form>
                        <input type="search" name="search" placeholder="Search keywords" onChange={props.handleChange} />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export const CitySearch = (props) => {
    return(
        <div className="search-sec">
            <div className="container">
                <div className="search-box">
                    <form>
                        <input type="search" name="search" placeholder="Search keywords" onChange={props.handleChange1} />
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
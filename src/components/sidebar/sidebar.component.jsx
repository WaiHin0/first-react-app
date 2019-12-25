import React from 'react';

export const LeftSidebar = (props) => {
    return(
        <div className="col-lg-3">
            <div className="filter-secs">
                <div className="filter-heading">
                    <h3>Filters</h3>
                    <a href="#/" title="">Clear all filters</a>
                </div>
                <div className="paddy">
                    <div className="filter-dd">
                        <div className="filter-ttl">
                            <h3>Skills</h3>
                            <a href="#/" title="">Clear</a>
                        </div>
                        <form>
                            <input type="text" name="search-skills" placeholder="Search skills" />
                        </form>
                    </div>
                    <div className="filter-dd">
                        <div className="filter-ttl">
                            <h3>Availabilty</h3>
                            <a href="#/" title="">Clear</a>
                        </div>
                        <ul className="avail-checks">
                            <li>
                                <input type="radio" name="cc" id="c1" />
                                <label htmlFor="c1">
                                    <span></span>
                                </label>
                                <small>Hourly</small>
                            </li>
                            <li>
                                <input type="radio" name="cc" id="c2" />
                                <label htmlFor="c2">
                                    <span></span>
                                </label>
                                <small>Part Time</small>
                            </li>
                            <li>
                                <input type="radio" name="cc" id="c3" />
                                <label htmlFor="c3">
                                    <span></span>
                                </label>
                                <small>Full Time</small>
                            </li>
                        </ul>
                    </div>
                    <div className="filter-dd">
                        <div className="filter-ttl">
                            <h3>Job Type</h3>
                            <a href="#/" title="">Clear</a>
                        </div>
                        <form className="job-tp">
                            <select>
                                <option>Select a job type</option>
                                <option>Select a job type</option>
                                <option>Select a job type</option>
                                <option>Select a job type</option>
                            </select>
                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </form>
                    </div>
                    <div className="filter-dd">
                        <div className="filter-ttl">
                            <h3>Pay Rate / Hr ($)</h3>
                            <a href="#/" title="">Clear</a>
                        </div>
                        <div className="rg-slider">
                            <input className="rn-slider slider-input" type="hidden" value="5,50" />
                        </div>
                        <div className="rg-limit">
                            <h4>1</h4>
                            <h4>100+</h4>
                        </div>
                    </div>
                    <div className="filter-dd">
                        <div className="filter-ttl">
                            <h3>Experience Level</h3>
                            <a href="#/" title="">Clear</a>
                        </div>
                        <form className="job-tp">
                            <select>
                                <option>Select a experience level</option>
                                <option>3 years</option>
                                <option>4 years</option>
                                <option>5 years</option>
                            </select>
                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </form>
                    </div>
                    <div className="filter-dd">
                        <div className="filter-ttl">
                            <h3>Countries</h3>
                            <a href="#/" title="">Clear</a>
                        </div>
                        <form className="job-tp">
                            <select>
                                <option>Select a country</option>
                                <option>United Kingdom</option>
                                <option>United States</option>
                                <option>Russia</option>
                            </select>
                            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const RightSidebar = (props) => {
    return(
        <div className="col-lg-3">
            <div className="right-sidebar">
                <div className="widget widget-about">
                    <img src="images/wd-logo.png" alt="" />
                    <h3>Track Time on Workwise</h3>
                    <span>Pay only for the Hours worked</span>
                    <div className="sign_link">
                        <h3><a href="sign-in.html" title="">Sign up</a></h3>
                        <a href="#/" title="">Learn More</a>
                    </div>
                </div>
                <div className="widget widget-jobs">
                    <div className="sd-title">
                        <h3>Top Jobs</h3>
                        <i className="la la-ellipsis-v"></i>
                    </div>
                    <div className="jobs-list">
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Senior Product Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Senior UI / UX Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Junior Seo Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Senior PHP Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Senior Developer Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="widget widget-jobs">
                    <div className="sd-title">
                        <h3>Most Viewed This Week</h3>
                        <i className="la la-ellipsis-v"></i>
                    </div>
                    <div className="jobs-list">
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Senior Product Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Senior UI / UX Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                        <div className="job-info">
                            <div className="job-details">
                                <h3>Junior Seo Designer</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
                            </div>
                            <div className="hr-rate">
                                <span>$25/hr</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
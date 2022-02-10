// import React, { useEffect, useState } from 'react';
// import { getReviews } from '../utils/utils';

// function Filter() {
// const [sortedReviews, setSortedReviews] = useState([])
// const [sort_by, setSort_By] = useState('desc')


// useEffect(() => {
//     getReviews()
// }, [sort_by])
// console.log(sort_by)
//   return (
//   <form>
//   <div className="select">
//   <label >Sort By</label>
//   <br />
//   <select onChange={(e) => setSort_By(e.target.value)} className="select" name="reviews">
//     <option value='votes' key="">Votes</option>
//     <option value='comment_count' key="">Comments</option>
//     {/* <option value={getReviews(votes)} key="">Created at</option> */}
//   </select>
//   </div>
// </form>

//   )
// }

// export default Filter;

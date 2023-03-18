 import React from 'react'
 
 function About() {
   return (
     <div>
       <h1 className="text-6xl mb-4">Github Finder</h1>
       <p className="mb-4 text-2xl font-light">
         A React App to search Github users and see their profiles details.
       </p>
       <p className="text-lg text-slate-100">
         Version: <span className="text-green-300">1.0.0</span>
       </p>
       <p className="text-lg text-slate-100">   
       Layout: <span className="text-green-300">Samuel Ayodeji</span>
       </p>
     </div>
   );
 }
 
export default About;
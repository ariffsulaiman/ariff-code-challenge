export default function Experience() {
    
    const experiences = 
        [ {  
            work: "SELF-TAUGHT FRONT-END DEVELOPER",
            year: "JUNE 2022 - NOW",
            descrp: "Learning Computer Science & Programming by myself through online courses, during my spare time. The languages that I have learnt are listed on the left. Check out the projects that I have done at https://ariffsulaiman.dev" 
          },
          {  
            work: "CLERK-OF-WORK M&E · TANJUNG RATNA SDN BHD",
            year: "SEPTEMBER 2020 - NOW",
            descrp: "As a clerk-of-work, my task is to carry out inspection for the works that the contractors have done, particularly for mechanical and electrical services. Project: Admiral Residence in Melaka (4 blocks of 27-storeys apartment building)." 
          },
          {  
            work: "M&E COORDINATOR/ENGINEER · MULTIPLE COMPANIES ",
            year: "SEPTEMBER 2014 - AUGUST 2020",
            descrp: "As a Mechanical & Electrical for Main Contractors, I was tasked to manage multiple trades of contractors. I was involved in the construction of a few high-rise buildings in Kuala Lumpur & Selangor." 
          },
        ]
    
    return ( <> 
        
        <div className="font-bold text-xl text-center md:text-left">
        EXPERIENCES
        </div>
        <div className="h-2 bg-red-500" />

        { experiences.map( (exp, index) => (

            <div key={index}>

              <div className="font-bold mt-6">{exp.work} · {exp.year}</div>
              <div className="mt-4">{exp.descrp}</div>
              
            </div>
        ))}

</>
    
  )
}
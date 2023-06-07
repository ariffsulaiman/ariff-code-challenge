export default function Skills() {
  
    const skills = [ "HTML5", "CSS3", "JAVASCRIPT", "ANGULAR", "REACT", "TAILWIND CSS", "C"]

    return (
    <div className="mt-8">
        <div className="font-bold text-xl text-center md:text-left">SKILLS</div>
        <div className="h-2 bg-red-500" />
    
        <ul className="mt-3">

            {skills.map( (skill) => (
                <li key={skill} className="w-fit mx-auto md:mx-0">{skill}</li>
            ))}

        </ul>
    
    </div>
  )
}